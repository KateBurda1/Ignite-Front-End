"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  ArrowLeft,
  ChevronDown,
  LogOut,
  MessageCircleMore,
  Moon,
  Search,
  Sparkles,
  Sun,
} from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

interface DashboardLayoutProps {
  children: React.ReactNode
  title?: string
  showBackButton?: boolean
}

export function DashboardLayout({
  children,
  title,
  showBackButton = false,
}: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const triggerContainerRef = React.useRef<HTMLDivElement>(null)
  const [dropdownWidth, setDropdownWidth] = React.useState<string>("auto")
  
  // Extract page title from pathname if not provided
  const pageTitle = title || pathname.split("/").pop()?.replace(/-/g, " ") || "Dashboard"
  const formattedTitle = pageTitle
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  React.useEffect(() => {
    const updateWidth = () => {
      if (triggerContainerRef.current) {
        const button = triggerContainerRef.current.querySelector("button")
        if (button) {
          setDropdownWidth(`${button.offsetWidth}px`)
        }
      }
    }
    updateWidth()
    const resizeObserver = new ResizeObserver(updateWidth)
    if (triggerContainerRef.current) {
      resizeObserver.observe(triggerContainerRef.current)
    }
    window.addEventListener("resize", updateWidth)
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateWidth)
    }
  }, [])

  return (
    <div className="flex h-screen overflow-hidden md:pl-[11rem]">
      <DashboardSidebar />
      
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="mx-4 mt-4 rounded-3xl border border-border bg-card/40 backdrop-blur-sm p-4 shadow-lg">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <div className="min-w-[150px]">
              {pathname === "/dashboard" && (
                <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground">Dashboard</p>
              )}
              <div className="flex items-center gap-3">
                {showBackButton && (
                  <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-2xl border border-border bg-secondary">
                    <Link href="/dashboard">
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                <div>
                  <p className="text-2xl font-semibold leading-tight text-foreground">{formattedTitle}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-wrap items-center gap-3">
              <div className="flex min-w-[220px] flex-1 items-center gap-3 rounded-2xl border border-border bg-secondary/50 px-4 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="How can I assist you?"
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none"
                />
                <kbd className="rounded-lg border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  ⌘K
                </kbd>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 px-3 py-2 shadow-sm">
                <Sparkles className="h-4 w-4 text-dashboard-purple" />
                <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">bot+</div>
                <div className="relative h-5 w-10 rounded-full bg-muted">
                  <div className="absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary shadow-md" />
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  Ignite <span className="text-muted-foreground">•</span> Ready
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="relative h-11 w-11 rounded-2xl border border-border bg-secondary"
              >
                <MessageCircleMore className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-semibold text-white">
                  3
                </span>
              </Button>
              <div ref={triggerContainerRef}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button 
                      type="button"
                      className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 px-3 py-2 hover:bg-accent transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring data-[state=open]:bg-accent"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-semibold text-white pointer-events-none">
                        JD
                      </div>
                      <div className="text-sm pointer-events-none">
                        <p className="font-semibold leading-tight text-foreground">John Doe</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Administrator</p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground pointer-events-none" />
                    </button>
                  </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  sideOffset={8}
                  className="z-[100]"
                  style={{ width: dropdownWidth }}
                >
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    <div className="flex items-center gap-2">
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer text-destructive focus:text-destructive"
                    style={theme === "dark" ? { color: "hsl(0deg 92.54% 60.96%)" } : undefined}
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/auth/logout', {
                          method: 'POST',
                        })
                        if (response.ok) {
                          router.push('/login')
                          router.refresh()
                        }
                      } catch (error) {
                        console.error('Logout error:', error)
                        // Still redirect to login even if API call fails
                        router.push('/login')
                        router.refresh()
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      <span>Log out</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-background p-4 md:px-4 md:pb-6 md:pt-0">
          {children}
        </main>
      </div>
    </div>
  )
}

