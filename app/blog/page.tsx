import type { Metadata } from "next"
import BlogContent from "../components/BlogContent"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts and insights on product operations, AI, process automation, marketing, and more.",
}

export default function BlogPage() {
  return <BlogContent />
}

