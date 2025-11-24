"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#endpoints", label: "Endpoints" },
  { href: "#chatbot", label: "AI Chatbot" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ignite
          <span className="text-muted-foreground font-normal"> · Front-End</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`${pathname}${item.href}`}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="https://vercel.com/igniteyourgrowth" target="_blank">
              Vercel
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="https://github.com/KateBurda1/Ignite-Back-End" target="_blank">
              API Docs
            </Link>
          </Button>
        </div>
      </div>
      <Separator />
    </header>
  );
}

