import { type Author } from "@/interfaces/author";

export function Hero() {
  return (
    <section>
      <div className="md:grid md:grid-cols-5 md:gap-x-8 lg:gap-x-12 mb-20 md:mb-28">
        <div className="md:col-span-2">
          <div className="flex gap-3">
            <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
              Introduction
            </h3>
          </div>
          <p className="text-lg">
            Hey there! I'm Fikri, and this is where I break things (and
            occasionally fix them). A place where I can test ideas that sound
            cool in my head and also document those as "learning experiences".
          </p>
        </div>
      </div>
    </section>
  );
}
