import type { Metadata, ResolvingMetadata } from "next";

import FilteredPosts from "@/components/filtered-posts";
import PageTitle from "@/components/page-title";
import site from "@/config/site";
import { allMaterials } from "contentlayer/generated";

export const runtime = "edge";
const title = "Material";
const description =
  "We're a team of former Gujarat Technological University (GTU) engineering students who intimately understand the pulse of GTU exams and paper patterns. Having navigated through the rigors of GTU ourselves, we know the challenges and nuances of its examinations firsthand. Our collective experience fuels our mission: to empower current GTU engineering aspirants by providing insights, past papers, and study materials that reflect the essence of GTU exams.";

type MaterialPageProps = {
  params: {
    slug: string[];
  };
  searchParams: Record<string, never>;
};

export const generateMetadata = async (
  _: MaterialPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {};

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/materials`,
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/materials`,
      title,
      description,
    },
  };
};

const BlogPage = () => {
  const posts = allMaterials;
  return (
    <>
      <PageTitle
        title="Materials"
        description={`We're a team of former Gujarat Technological University (GTU) engineering students who intimately understand the pulse of GTU exams and paper patterns. Having navigated through the rigors of GTU ourselves, we know the challenges and nuances of its examinations firsthand. Our collective experience fuels our mission: to empower current GTU engineering aspirants by providing insights, past papers, and study materials that reflect the essence of GTU exams.`}
      />
      <FilteredPosts posts={posts} />
    </>
  );
};

export default BlogPage;
