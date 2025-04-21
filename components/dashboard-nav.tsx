import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, User, LinkIcon, Palette, BarChart, Settings, LogOut } from "lucide-react"

export function DashboardNav() {
  return (
    <nav className="grid gap-4">
      <Link href="/dashboard">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Button>
      </Link>
      <Link href="/dashboard?tab=profile">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <User className="h-4 w-4" />
          Profile
        </Button>
      </Link>
      <Link href="/dashboard?tab=links">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LinkIcon className="h-4 w-4" />
          Links
        </Button>
      </Link>
      <Link href="/dashboard?tab=appearance">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Palette className="h-4 w-4" />
          Appearance
        </Button>
      </Link>
      <Link href="/dashboard?tab=analytics">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <BarChart className="h-4 w-4" />
          Analytics
        </Button>
      </Link>
      <Link href="/settings">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </Link>
      <Link href="/logout">
        <Button variant="ghost" className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </Link>
    </nav>
  )
}
