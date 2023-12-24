import type { Metadata } from "next";

import Hero from "@/components/hero";
import Posts from "@/components/posts";
import site from "@/config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: site.url,
  },
};

export const runtime = "edge";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Posts />
    </>
  );
};

export default HomePage;
