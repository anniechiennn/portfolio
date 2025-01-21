import type { Metadata } from "next"
import BlogContent from "../components/BlogContent"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts and insights on operations and product management.",
}

export default function BlogPage() {
  return <BlogContent />
}

