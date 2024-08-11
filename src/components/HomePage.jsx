import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <div className="grow lg:py-32 lg:px-44 px-24 py-14 text-center md:py-20 md:px-20">
      <TypeAnimation
        sequence={[
          "Assalomu alaykum ustoz , Vazifani Vite bilan bajardim",
          1500,
          "Birinchi berilgan task task-1 page'ida joylashgan",
          1500,
          "Ikkinchi task esa task-2 page'ida joylashgan",
          1500,
        ]}
        wrapper="p"
        speed={40}
        className="text-2xl font-bold lg:text-6xl md:text-4xl"
        repeat={Infinity}
      />
    </div>
  );
}
