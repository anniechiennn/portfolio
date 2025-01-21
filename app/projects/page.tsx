import type { Metadata } from "next"
import ProjectsContent from "../components/ProjectsContent"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects in operations and product management.",
}

export default function ProjectsPage() {
  return <ProjectsContent />
}

