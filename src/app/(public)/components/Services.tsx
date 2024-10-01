import FadeIn from "@/components/animations/fadeIn";
import OnBuild from "@/components/onbuild";
import React from "react";

const Services = () => {
  return (
    <FadeIn>
      <section id="my-services" className="my-10 min-h-screen">
        <div className="sticky top-20 p-2 z-20">
          <h2 className="text-4xl font-bold font-bebas">Mis servicios</h2>
        </div>
        <OnBuild />
      </section>
    </FadeIn>
  );
};

export default Services;
