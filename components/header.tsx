import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow lg:shadow-2xl">
      <Link className="block" href="/">
        <span className="sr-only">Home</span>
        <img className="size-16" src="/logo.svg" alt="logo" />
      </Link>
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <button className="cursor-pointer hover:bg-slate-100 block text-lg rounded-lg font-bold md:hidden">
          <span className="sr-only">Toggle menu</span>
          <MenuIcon className="size-10" />
        </button>
      </div>
    </header>
  );
}
