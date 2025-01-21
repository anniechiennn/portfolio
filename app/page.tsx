import type { Metadata } from "next"
import HomeContent from "./components/HomeContent"

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Operations Analyst & Product Manager Portfolio",
}

export default function HomePage() {
  return <HomeContent />
}

