"use client";

import { Logo } from "./ui";

const Hero = () => {
  return (
    <div className="my-6 space-y-6 md:my-16">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <div className="space-y-4 md:max-w-lg">
          <h1 className="text-xl font-bold text-foreground sm:text-4xl">
            GTU Smashers
          </h1>
          <h2 className="font-medium text-muted-foreground sm:text-lg">
            Engineering Matrials | GTU
          </h2>
          <p className="sm:text-lg">
            Master GTU engineering exams with our curated past papers and
            essential study resources. Elevate your prep and boost grades with
            our tailored materials.
          </p>
        </div>
        <div className="relative hidden md:block rounded-full">
          <Logo width={175} height={175} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-0 blur-2xl md:opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
