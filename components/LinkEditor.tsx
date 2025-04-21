import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Grip, Trash2 } from "lucide-react"

interface Link {
  id: string
  title: string
  url: string
  order: number
  isEnabled: boolean
}

export function LinkEditor() {
  const [links, setLinks] = useState<Link[]>([])

  const addLink = () => {
    const newLink: Link = {
      id: Math.random().toString(36).substring(7),
      title: "",
      url: "",
      order: links.length,
      isEnabled: true,
    }
    setLinks([...links, newLink])
  }

  const updateLink = (id: string, field: keyof Link, value: string | boolean) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    ))
  }

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id))
  }

  return (
    <div className="space-y-4">
      {links.map((link, index) => (
        <div key={link.id} className="flex items-start gap-4 p-4 border rounded-lg">
          <button className="mt-8 cursor-move">
            <Grip className="h-4 w-4 text-gray-400" />
          </button>
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`title-${link.id}`}>Title</Label>
              <Input
                id={`title-${link.id}`}
                value={link.title}
                onChange={(e) => updateLink(link.id, "title", e.target.value)}
                placeholder="Link Title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`url-${link.id}`}>URL</Label>
              <Input
                id={`url-${link.id}`}
                value={link.url}
                onChange={(e) => updateLink(link.id, "url", e.target.value)}
                placeholder="https://"
              />
            </div>
          </div>
          <button
            onClick={() => removeLink(link.id)}
            className="mt-8 p-2 hover:bg-gray-100 rounded-md"
          >
            <Trash2 className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      ))}
      <Button onClick={addLink} className="w-full">
        Add Link
      </Button>
    </div>
  )
} 