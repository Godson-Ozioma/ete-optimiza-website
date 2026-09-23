import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { home } from "@/content/home";

export function ContactSplit() {
  const { contact } = home;

  return (
    <section id="contact" aria-labelledby="home-contact-heading" className="bg-[var(--home-sand)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-52 overflow-hidden sm:h-64 lg:h-full">
          <Image
            src={contact.image.src}
            alt={contact.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col gap-5 px-4 py-10 sm:px-8 lg:px-12 lg:py-12">
          <h2 id="home-contact-heading" className="text-h1 text-balance">
            {contact.title}
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
