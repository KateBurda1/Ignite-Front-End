"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowLeft,
  ChevronDown,
  MessageCircleMore,
  Search,
  Sparkles,
} from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"

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
  
  // Extract page title from pathname if not provided
  const pageTitle = title || pathname.split("/").pop()?.replace(/-/g, " ") || "Dashboard"
  const formattedTitle = pageTitle
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="flex h-screen overflow-hidden md:pl-[11rem]">
      <DashboardSidebar />
      
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="mx-4 mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-white shadow-[0_20px_80px_rgba(3,7,18,0.45)]">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <div className="min-w-[150px]">
              {pathname === "/dashboard" && (
                <p className="text-[10px] uppercase tracking-[0.6em] text-white/70">Dashboard</p>
              )}
              <div className="flex items-center gap-3">
                {showBackButton && (
                  <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5">
                    <Link href="/dashboard">
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                <div>
                  <p className="text-2xl font-semibold leading-tight">{formattedTitle}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-wrap items-center gap-3">
              <div className="flex min-w-[220px] flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2">
                <Search className="h-4 w-4 text-white/50" />
                <input
                  type="search"
                  placeholder="How can I assist you?"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 focus-visible:outline-none"
                />
                <kbd className="rounded-lg border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70">
                  ⌘K
                </kbd>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-white shadow-[inset_0_1px_12px_rgba(255,255,255,0.08)]">
                <Sparkles className="h-4 w-4 text-dashboard-purple" />
                <div className="text-xs uppercase tracking-[0.4em] text-white/60">bot+</div>
                <div className="relative h-5 w-10 rounded-full bg-white/20">
                  <div className="absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-md" />
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  Ignite <span className="text-white/40">•</span> Ready
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="relative h-11 w-11 rounded-2xl border border-white/10 bg-white/10"
              >
                <MessageCircleMore className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-semibold text-white">
                  3
                </span>
              </Button>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-semibold">
                  JD
                </div>
                <div className="text-sm">
                  <p className="font-semibold leading-tight">John Doe</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Administrator</p>
                </div>
                <ChevronDown className="h-4 w-4 text-white/60" />
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

