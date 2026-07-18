import { TESTIMONIAL_ROWS } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import StaggerTestimonials from "@/components/StaggerTestimonials";

const ALL_TESTIMONIALS = TESTIMONIAL_ROWS.flatMap((row) => row.items);

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dice nuestra comunidad."
          description="27 reseñas reales de Google, todas de 5 estrellas. Tocá una tarjeta para traerla al frente."
        />
      </div>

      <div className="mt-14">
        <StaggerTestimonials testimonials={ALL_TESTIMONIALS} />
      </div>
    </section>
  );
}
