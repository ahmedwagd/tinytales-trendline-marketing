import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex h-20 items-center py-3 gap-8 px-4 sm:px-6 lg:px-8 shadow-md lg:shadow-lg">
      <Link className="block" href="/">
        <span className="sr-only">Home</span>
        <img className="size-16" src="/logo.svg" alt="logo" />
      </Link>
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <button className="cursor-pointer hover:bg-slate-100 block text-lg rounded-lg font-bold md:hidden">
          <span className="sr-only">Toggle menu</span>
          <Menu strokeWidth={3} className="size-8" />
        </button>
      </div>
    </header>
  );
}
