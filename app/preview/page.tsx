"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronDown, Share2 } from "lucide-react"

export default function PreviewPage() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-4">
      <header className="w-full max-w-md flex justify-between items-center mb-6">
        <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          <span className="sr-only">Back</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
          <span className="sr-only">Share</span>
        </Button>
      </header>

      <main className="w-full max-w-md flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
          <Avatar className="h-full w-full">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>

        <h1 className="text-2xl font-bold mb-1">John Doe</h1>
        <p className="text-center text-gray-600 mb-6 max-w-xs">
          Content creator. Digital nomad.
          <br />
          Let's grow together!
        </p>

        <div className="flex gap-4 mb-8">
          <Link href="#" className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
          <Link href="#" className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link href="#" className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
          <Link href="#" className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
        </div>

        <div className="w-full space-y-3">
          <Link
            href="#"
            className="block w-full rounded-full bg-violet-200 py-3 px-4 text-center font-medium hover:bg-violet-300 transition-colors"
          >
            Email
          </Link>

          <div className="relative">
            <button
              className="flex w-full items-center justify-between rounded-full bg-blue-200 py-3 px-4 text-center font-medium hover:bg-blue-300 transition-colors"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>Folder</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-white shadow-lg overflow-hidden z-10">
                <Link href="#" className="block w-full py-3 px-4 text-left hover:bg-gray-100 transition-colors">
                  Item 1
                </Link>
                <Link href="#" className="block w-full py-3 px-4 text-left hover:bg-gray-100 transition-colors">
                  Item 2
                </Link>
                <Link href="#" className="block w-full py-3 px-4 text-left hover:bg-gray-100 transition-colors">
                  Item 3
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#"
            className="block w-full rounded-full bg-green-200 py-3 px-4 text-center font-medium hover:bg-green-300 transition-colors"
          >
            Link
          </Link>

          <Link
            href="#"
            className="block w-full rounded-full bg-red-200 py-3 px-4 text-center font-medium hover:bg-red-300 transition-colors"
          >
            Media
          </Link>

          <Link
            href="#"
            className="block w-full rounded-full bg-yellow-200 py-3 px-4 text-center font-medium hover:bg-yellow-300 transition-colors"
          >
            Mailing List
          </Link>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Made with Linkit</p>
      </footer>
    </div>
  )
}
