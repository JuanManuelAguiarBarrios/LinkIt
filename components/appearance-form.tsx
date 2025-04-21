"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function AppearanceForm() {
  const [theme, setTheme] = useState("light")
  const [buttonStyle, setButtonStyle] = useState("rounded")
  const [buttonRadius, setButtonRadius] = useState([8])
  const [showSocialIcons, setShowSocialIcons] = useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>Customize how your profile looks to visitors</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="theme">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
          </TabsList>
          <TabsContent value="theme" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Theme Mode</Label>
              <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
                <Label
                  htmlFor="light"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="light" id="light" className="sr-only" />
                  <div className="mb-3 h-10 w-10 rounded-full bg-white border"></div>
                  <span className="text-center text-sm font-medium">Light</span>
                </Label>
                <Label
                  htmlFor="dark"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="dark" id="dark" className="sr-only" />
                  <div className="mb-3 h-10 w-10 rounded-full bg-gray-900"></div>
                  <span className="text-center text-sm font-medium">Dark</span>
                </Label>
                <Label
                  htmlFor="system"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="system" id="system" className="sr-only" />
                  <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-r from-white to-gray-900"></div>
                  <span className="text-center text-sm font-medium">System</span>
                </Label>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Theme Color</Label>
              <RadioGroup className="grid grid-cols-5 gap-4">
                <Label
                  htmlFor="pink"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="pink" id="pink" className="sr-only" />
                  <div className="mb-3 h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500"></div>
                </Label>
                <Label
                  htmlFor="blue"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="blue" id="blue" className="sr-only" />
                  <div className="mb-3 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"></div>
                </Label>
                <Label
                  htmlFor="green"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="green" id="green" className="sr-only" />
                  <div className="mb-3 h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                </Label>
                <Label
                  htmlFor="orange"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="orange" id="orange" className="sr-only" />
                  <div className="mb-3 h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                </Label>
                <Label
                  htmlFor="custom"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="custom" id="custom" className="sr-only" />
                  <div className="mb-3 h-8 w-8 rounded-full bg-white border flex items-center justify-center text-xs">
                    +
                  </div>
                </Label>
              </RadioGroup>
            </div>
          </TabsContent>
          <TabsContent value="buttons" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Button Style</Label>
              <RadioGroup value={buttonStyle} onValueChange={setButtonStyle} className="grid grid-cols-3 gap-4">
                <Label
                  htmlFor="rounded"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="rounded" id="rounded" className="sr-only" />
                  <div className="mb-3 h-8 w-24 rounded-full bg-gray-200"></div>
                  <span className="text-center text-sm font-medium">Rounded</span>
                </Label>
                <Label
                  htmlFor="soft"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="soft" id="soft" className="sr-only" />
                  <div className="mb-3 h-8 w-24 rounded-md bg-gray-200"></div>
                  <span className="text-center text-sm font-medium">Soft</span>
                </Label>
                <Label
                  htmlFor="square"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem value="square" id="square" className="sr-only" />
                  <div className="mb-3 h-8 w-24 bg-gray-200"></div>
                  <span className="text-center text-sm font-medium">Square</span>
                </Label>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Button Radius</Label>
                <span className="text-sm text-muted-foreground">{buttonRadius[0]}px</span>
              </div>
              <Slider defaultValue={[8]} max={20} step={1} value={buttonRadius} onValueChange={setButtonRadius} />
            </div>
          </TabsContent>
          <TabsContent value="layout" className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="show-social">Show Social Icons</Label>
                <p className="text-sm text-muted-foreground">Display social media icons on your profile</p>
              </div>
              <Switch id="show-social" checked={showSocialIcons} onCheckedChange={setShowSocialIcons} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}
