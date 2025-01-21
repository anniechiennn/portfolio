"use client"

import { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Sending...")

    const response = await fetch("https://api.github.com/repos/anniechiennn/portfolio/issues", {
      method: "POST",
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `New contact from ${name}`,
        body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        labels: ["contact"],
      }),
    })

    if (response.ok) {
      setStatus("Message sent successfully!")
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus("Failed to send message. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white"
        />
      </div>
      <button type="submit" className="px-8 py-2 bg-white text-black font-medium hover:bg-opacity-90 transition-colors">
        Submit
      </button>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </form>
  )
}

