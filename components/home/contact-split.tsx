import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { home } from "@/content/home";

export function ContactSplit() {
  const { contact } = home;

  return (
    <section id="contact" aria-labelledby="home-contact-heading" className="bg-[var(--home-sand)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-80 overflow-hidden sm:h-[28rem] lg:h-[40rem] lg:self-center">
          <Image
            src={contact.image.src}
            alt={contact.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col gap-6 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <h2 id="home-contact-heading" className="text-h1 text-balance">
            {contact.title}
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
