"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Grid2X2,
  Globe,
  MessageSquare,
  HelpCircle,
  ShoppingBag,
  Bell,
  Heart,
  ChevronDown,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Grid2X2, label: "Our Category", href: "#" },
  { icon: Globe, label: "About Us", href: "#" },
  { icon: MessageSquare, label: "Contact Us", href: "#" },
  { icon: HelpCircle, label: "FAQs", href: "#" },
];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=" relative shadow-md lg:shadow-lg">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link className="block" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={66}
                height={51}
                className="h-14 w-auto transition-transform cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-[#8A8A8A] hover:text-primary group"
              >
                <item.icon className="w-4 h-4 text-warm-brown-light group-hover:text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right  */}
          <div className="flex items-center gap-1">
            <button className="hidden md:flex p-2 hover:bg-muted rounded-full relative">
              <ShoppingBag className="w-5 h-5 text-[#020202] hover:text-[#020202]/90" />
            </button>

            <button className="hidden md:flex p-2 hover:bg-muted rounded-full relative">
              <Bell className="w-5 h-5 text-[#020202] hover:text-[#020202]/90" />
            </button>

            <button className="hidden md:flex p-2 hover:bg-muted rounded-full">
              <Heart className="w-5 h-5 text-[#020202] hover:text-[#020202]/90" />
            </button>

            <div className="hidden md:flex items-center gap-1">
              <button className="flex items-center gap-1 text-sm font-medium text-[#020202] hover:text-[#020202]/90">
                EN
                <ChevronDown className="w-4 h-4" />
              </button>

              <button className="hidden md:flex items-center gap-1 p-2 hover:bg-muted rounded-full">
                <User className="w-5 h-5 text-[#020202] hover:text-[#020202]/90" />
                <ChevronDown className="w-4 h-4 text-[#020202]" />
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <button
                className=" p-3 hover:bg-muted rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {/* <div className="flex flex-1 items-center justify-end md:justify-between">
          <button className="cursor-pointer hover:bg-slate-100 block text-lg rounded-lg font-bold md:hidden">
            <span className="sr-only">Toggle menu</span>
            <Menu strokeWidth={3} className="size-8" />
          </button>
        </div> */}
        </div>
      </div>
    </header>
  );
}
