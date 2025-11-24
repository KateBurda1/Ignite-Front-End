"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ActivitySquare,
  BarChart3,
  ChevronDown,
  DollarSign,
  ListChecks,
  Menu,
  Share2,
  ShoppingBag,
  Target,
  TrendingUp,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href?: string
  icon: React.ComponentType<{ className?: string }>
  children?: NavItem[]
  badge?: number
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: ActivitySquare },
  {
    label: "Revenue",
    icon: DollarSign,
    children: [
      { label: "Revenue Plan", href: "/revenue/revenue-dashboard", icon: DollarSign },
      { label: "Acquisition Cost", href: "/revenue/acquisition-cost", icon: DollarSign },
      { label: "Aspirational", href: "/revenue/aspirational-calculator", icon: DollarSign },
    ],
  },
  {
    label: "Sales",
    icon: TrendingUp,
    children: [{ label: "Team Development", href: "/sales-deployment/sales-deployment", icon: TrendingUp }],
  },
  {
    label: "Marketing",
    icon: ShoppingBag,
    children: [{ label: "Marketing Initiative", href: "/marketing-initiative/marketing-initiative", icon: ShoppingBag }],
  },
  {
    label: "Insight",
    icon: Share2,
    children: [{ label: "Demand Generator", href: "/market-scan/demand-generator", icon: Share2 }],
  },
  { label: "Reporting", href: "/monthly-report/cycle-reports", icon: BarChart3 },
  { label: "Market Scan", href: "/market-scan/supply", icon: ListChecks },
  {
    label: "Strategies",
    icon: Target,
    children: [{ label: "Goals & Tactics", href: "/segment-goals/goals-tactics", icon: Target }],
  },
]

function DesktopNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const isActive = item.href ? pathname === item.href : false
  const hasActiveChild = item.children?.some((child) => child.href && pathname === child.href)
  const [isOpen, setIsOpen] = React.useState(isActive || hasActiveChild)

  React.useEffect(() => {
    if (hasActiveChild || isActive) {
      setIsOpen(true)
    }
  }, [hasActiveChild, isActive])

  const baseClass =
    "flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-white/60 transition-colors"
  const activeClass = "border-white/30 bg-white/10 text-white"

  if (item.children) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(baseClass, (isActive || hasActiveChild) && activeClass)}
        >
          <item.icon className="h-4 w-4" />
          <span className="flex-1 text-left">{item.label}</span>
          <ChevronDown
            className={cn("h-4 w-4 text-white/50 transition-transform", isOpen && "rotate-180")}
          />
        </button>
        {isOpen && (
          <div className="ml-6 mt-2 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href || "#"}
                className={cn(
                  "block rounded-md px-3 py-1 text-sm text-white/50 hover:bg-white/5",
                  pathname === child.href && "bg-white/10 font-semibold text-white"
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={item.href || "#"} className={cn(baseClass, isActive && activeClass)}>
      <item.icon className="h-4 w-4" />
      <span className="flex-1 text-left">{item.label}</span>
    </Link>
  )
}

export function DashboardSidebar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 flex h-16 items-center border-b bg-background px-4">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <div className="flex h-full flex-col border-r bg-background">
              <div className="flex h-16 items-center border-b px-6">
                <span className="text-lg font-semibold">Ignite</span>
              </div>
              <nav className="flex-1 space-y-2 p-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            {item.label}
                          </div>
                        </div>
                        <div className="ml-6 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href || "#"}
                              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="border-t p-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted" />
                  <span className="text-sm">User</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop/Tablet Sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-50 md:flex md:w-[11rem] md:flex-col md:bg-transparent">
        <div className="flex h-full flex-col border border-white/10 bg-gradient-to-b from-[#0f162b]/90 to-[#080b16]/90 px-4 py-6 backdrop-blur-2xl">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white text-center text-sm font-semibold uppercase text-slate-900 leading-8">
                ig
              </div>
              <div className="text-base font-semibold tracking-[0.35em]">ignite</div>
            </div>
          </div>
          <nav className="mt-6 flex-1 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

