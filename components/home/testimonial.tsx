import { home } from "@/content/home";

export function Testimonial() {
  const { testimonial } = home;

  return (
    <section
      aria-labelledby="testimonial-heading"
      className="bg-[var(--home-beige)]"
    >
      <div className="container-site section-y">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <h2 id="testimonial-heading" className="text-h2">
            {testimonial.title}
          </h2>
          <blockquote className="flex flex-col gap-6">
            <p className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              <span aria-hidden="true" className="mr-1 text-foreground/35">
                “
              </span>
              {testimonial.quote}
            </p>
            <footer className="text-base text-foreground/75">
              {testimonial.attribution}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
