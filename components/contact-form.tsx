"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactIntents,
  contactPage,
  type ContactIntentValue,
} from "@/content/contact";
import {
  contactFormSchema,
  type ContactFieldErrors,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const fieldClassName =
  "h-10 rounded-md border-border bg-background text-foreground md:text-sm";

type ContactFormProps = {
  initialIntent?: ContactIntentValue;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ initialIntent = "general" }: ContactFormProps) {
  const [intent, setIntent] = useState<ContactIntentValue>(initialIntent);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  const errorSummary = useMemo(() => Object.values(errors)[0], [errors]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      intent,
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(payload);
    if (!parsed.success) {
      const nextErrors: ContactFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !nextErrors[key as keyof ContactFieldErrors]) {
          nextErrors[key as keyof ContactFieldErrors] = issue.message;
        }
      }
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: ContactFieldErrors;
      };

      if (!response.ok) {
        setErrors(result.fieldErrors ?? {});
        setServerError(
          result.error ??
            `The message could not be sent. Email ${contactPage.fallbackEmail} directly.`,
        );
        setStatus("error");
        return;
      }

      form.reset();
      setIntent(initialIntent);
      setStatus("success");
    } catch {
      setServerError(
        `The message could not be sent. Email ${contactPage.fallbackEmail} directly.`,
      );
      setStatus("error");
    }
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={errors.firstName ? true : undefined}>
            <FieldLabel htmlFor="firstName">First name</FieldLabel>
            <Input
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              required
              aria-invalid={Boolean(errors.firstName)}
              className={fieldClassName}
            />
            <FieldError>{errors.firstName}</FieldError>
          </Field>
          <Field data-invalid={errors.lastName ? true : undefined}>
            <FieldLabel htmlFor="lastName">Last name</FieldLabel>
            <Input
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              required
              aria-invalid={Boolean(errors.lastName)}
              className={fieldClassName}
            />
            <FieldError>{errors.lastName}</FieldError>
          </Field>
        </div>

        <Field data-invalid={errors.email ? true : undefined}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            className={fieldClassName}
          />
          <FieldError>{errors.email}</FieldError>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={errors.phone ? true : undefined}>
            <FieldLabel htmlFor="phone">Phone (optional)</FieldLabel>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              className={fieldClassName}
            />
            <FieldError>{errors.phone}</FieldError>
          </Field>
          <Field data-invalid={errors.company ? true : undefined}>
            <FieldLabel htmlFor="company">Company (optional)</FieldLabel>
            <Input
              id="company"
              name="company"
              autoComplete="organization"
              aria-invalid={Boolean(errors.company)}
              className={fieldClassName}
            />
            <FieldError>{errors.company}</FieldError>
          </Field>
        </div>

        <Field data-invalid={errors.intent ? true : undefined}>
          <FieldLabel htmlFor="intent">Intent</FieldLabel>
          <select
            id="intent"
            name="intent"
            value={intent}
            onChange={(event) =>
              setIntent(event.target.value as ContactIntentValue)
            }
            aria-invalid={Boolean(errors.intent)}
            className={cn(
              fieldClassName,
              "w-full min-w-0 px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50",
            )}
          >
            {contactIntents.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <FieldError>{errors.intent}</FieldError>
        </Field>

        <Field data-invalid={errors.message ? true : undefined}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            aria-invalid={Boolean(errors.message)}
            className="min-h-32 rounded-md border-border bg-background text-foreground"
          />
          <FieldError>{errors.message}</FieldError>
        </Field>
      </FieldGroup>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <p className="text-caption">
          Or email{" "}
          <a
            href={`mailto:${contactPage.fallbackEmail}`}
            className="text-foreground underline-offset-4 hover:underline focus-ring rounded-sm"
          >
            {contactPage.fallbackEmail}
          </a>
        </p>
      </div>

      <div aria-live="polite" className="min-h-6">
        {status === "success" ? (
          <p className="text-sm text-ete-green">
            Message sent. The team will respond during business hours.
          </p>
        ) : null}
        {status === "error" && (serverError || errorSummary) ? (
          <p className="text-sm text-destructive">
            {serverError ?? errorSummary}
          </p>
        ) : null}
      </div>
    </form>
  );
}
