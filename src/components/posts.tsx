import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

import getAllPosts from "@/lib/mdx";

import PostCards from "./post-cards";

const Posts = () => {
  const posts = getAllPosts({
    limit: 4,
  });

  return (
    <>
      <h2 className="mb-8 text-xl font-bold md:text-4xl">Posts</h2>
      <PostCards posts={posts} />
      <div className="flex justify-end">
        <Link
          href="/materials"
          className="group my-8 flex items-center gap-4 text-lg font-medium"
        >
          <span>All Posts</span>
          <IconArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
};

export default Posts;
