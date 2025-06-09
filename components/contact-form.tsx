"use client"

import type React from "react"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { sendEmail } from "@/app/actions/email"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: "" })

    try {
      const formElement = e.target as HTMLFormElement
      const formDataObj = new FormData(formElement)

      const result = await sendEmail(formDataObj)

      if (result.success) {
        setStatus({
          type: "success",
          message: result.message,
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus({
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.type && (
        <div className={`p-4 border-[3px] border-black ${status.type === "success" ? "bg-green-100" : "bg-red-100"}`}>
          <p className={`font-bold ${status.type === "success" ? "text-green-800" : "text-red-800"}`}>
            {status.message}
          </p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-white font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white font-bold py-3 px-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
