import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ExamplesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Linkit</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Example Profiles</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out these example profiles to see what you can create with Linkit
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {/* Example 1 - Content Creator */}
              <div className="flex flex-col items-center overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="p-4 w-full">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt="Profile"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Gabby Rae</h3>
                    <p className="text-sm text-center text-gray-500 mb-4">Content creator. Digital nomad.</p>
                    <div className="flex gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full rounded-full bg-violet-200 py-2 px-4 text-center text-sm font-medium">
                      Email
                    </div>
                    <div className="w-full rounded-full bg-blue-200 py-2 px-4 text-center text-sm font-medium">
                      Folder
                    </div>
                    <div className="w-full rounded-full bg-green-200 py-2 px-4 text-center text-sm font-medium">
                      Link
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 w-full mt-4">
                  <Link href="/preview">
                    <Button variant="outline" className="w-full">
                      View Example
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Example 2 - Event Organizer */}
              <div className="flex flex-col items-center overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="p-4 w-full">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Coastal Jam Festival</h3>
                    <p className="text-sm text-center text-gray-500 mb-4">Salacious Sounds Across the Coast</p>
                    <div className="flex gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full rounded-md bg-blue-100 py-2 px-4 text-center text-sm font-medium">
                      [TICKETS] Coastal Jam 2023
                    </div>
                    <div className="w-full rounded-md bg-blue-100 py-2 px-4 text-center text-sm font-medium">
                      [RSVP] Coastal Jam — Torquay
                    </div>
                    <div className="w-full rounded-md bg-blue-100 py-2 px-4 text-center text-sm font-medium">
                      Event Map & Details
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 w-full mt-4">
                  <Link href="/preview">
                    <Button variant="outline" className="w-full">
                      View Example
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Example 3 - Small Business */}
              <div className="flex flex-col items-center overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="p-4 w-full">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-red-100 flex items-center justify-center">
                      <div className="bg-white rounded-full p-2">
                        <span className="font-bold text-lg">BLAZE</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">Blaze Candles & Wax</h3>
                    <p className="text-sm text-center text-gray-500 mb-4">Handcrafted candles for your home</p>
                    <div className="flex gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full rounded-md bg-red-100 py-2 px-4 text-center text-sm font-medium">
                      25% Off Seasonal Scents
                    </div>
                    <div className="w-full rounded-md bg-white border py-2 px-4 text-center text-sm font-medium">
                      Shop All
                    </div>
                    <div className="w-full rounded-md bg-white border py-2 px-4 text-center text-sm font-medium">
                      Download Our App (iOS)
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 w-full mt-4">
                  <Link href="/preview">
                    <Button variant="outline" className="w-full">
                      View Example
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Linkit</span>
            </div>
            <p className="text-sm text-gray-500">© 2023 Linkit. All rights reserved.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <div className="space-y-2">
              <h4 className="font-medium">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className="hover:underline">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
