import type { Metadata } from "next"
import ResumeContent from "../components/ResumeContent"

export const metadata: Metadata = {
  title: "Resume",
  description: "View my professional experience and qualifications.",
}

export default function ResumePage() {
  return <ResumeContent />
}

