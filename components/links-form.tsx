"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd"
import { GripVertical, Trash2, Plus, Link, Mail, FileText, Video, ListOrdered } from "lucide-react"

type LinkItem = {
  id: string
  title: string
  url: string
  type: string
}

export function LinksForm() {
  const [links, setLinks] = useState<LinkItem[]>([
    { id: "1", title: "Email", url: "mailto:john@example.com", type: "email" },
    { id: "2", title: "Folder", url: "https://example.com/folder", type: "folder" },
    { id: "3", title: "Link", url: "https://example.com", type: "link" },
    { id: "4", title: "Media", url: "https://youtube.com/watch?v=123", type: "media" },
    { id: "5", title: "Mailing List", url: "https://example.com/subscribe", type: "mailing-list" },
  ])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const items = Array.from(links)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setLinks(items)
  }

  const addNewLink = () => {
    const newLink = {
      id: Date.now().toString(),
      title: "New Link",
      url: "",
      type: "link",
    }
    setLinks([...links, newLink])
  }

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id))
  }

  const updateLink = (id: string, field: keyof LinkItem, value: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, [field]: value } : link)))
  }

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />
      case "folder":
        return <FileText className="h-4 w-4" />
      case "media":
        return <Video className="h-4 w-4" />
      case "mailing-list":
        return <ListOrdered className="h-4 w-4" />
      default:
        return <Link className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Links</CardTitle>
        <CardDescription>Add, remove, and reorder links that appear on your profile</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="links">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {links.map((link, index) => (
                  <Draggable key={link.id} draggableId={link.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="flex items-center gap-4 rounded-md border p-4"
                      >
                        <div {...provided.dragHandleProps} className="cursor-grab">
                          <GripVertical className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="grid flex-1 gap-4 md:grid-cols-4">
                          <div className="space-y-2">
                            <Label htmlFor={`type-${link.id}`}>Type</Label>
                            <Select value={link.type} onValueChange={(value) => updateLink(link.id, "type", value)}>
                              <SelectTrigger id={`type-${link.id}`} className="w-full">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="link">Link</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="folder">Folder</SelectItem>
                                <SelectItem value="media">Media</SelectItem>
                                <SelectItem value="mailing-list">Mailing List</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`title-${link.id}`}>Title</Label>
                            <Input
                              id={`title-${link.id}`}
                              value={link.title}
                              onChange={(e) => updateLink(link.id, "title", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`url-${link.id}`}>URL</Label>
                            <div className="flex items-center gap-2">
                              <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted">
                                {getLinkIcon(link.type)}
                              </div>
                              <Input
                                id={`url-${link.id}`}
                                value={link.url}
                                onChange={(e) => updateLink(link.id, "url", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => removeLink(link.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove link</span>
                        </Button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Button variant="outline" className="w-full" onClick={addNewLink}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Link
        </Button>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}
