import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface ProfilePageProps {
  params: {
    username: string
  }
}

interface ProfileData {
  name: string
  username: string
  bio: string
  avatar: string
  theme: string
  backgroundColor: string
  textColor: string
  links: {
    id: string
    title: string
    url: string
    isEnabled: boolean
  }[]
}

// This would normally fetch from your database
async function getProfileData(username: string): Promise<ProfileData | null> {
  // Mock data for demonstration
  return {
    name: "John Doe",
    username: "johndoe",
    bio: "Content creator and digital enthusiast",
    avatar: "/placeholder.jpg",
    theme: "default",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    links: [
      {
        id: "1",
        title: "My Website",
        url: "https://example.com",
        isEnabled: true,
      },
      {
        id: "2",
        title: "YouTube Channel",
        url: "https://youtube.com",
        isEnabled: true,
      },
      {
        id: "3",
        title: "Twitter",
        url: "https://twitter.com",
        isEnabled: true,
      },
    ],
  }
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const profile = await getProfileData(params.username)

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Profile not found</h1>
          <p className="text-muted-foreground">
            The profile you're looking for doesn't exist.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: profile.backgroundColor,
        color: profile.textColor,
      }}
      className="min-h-screen py-8 px-4"
    >
      <div className="mx-auto max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-muted-foreground">{profile.bio}</p>
          </div>
        </div>

        <div className="space-y-4">
          {profile.links
            .filter((link) => link.isEnabled)
            .map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full text-lg py-6"
                >
                  {link.title}
                </Button>
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}
