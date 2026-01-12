import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

export default function Breadcrumbs() {
  return (
    <nav className=" text-sm bg-[#ECECEC66] my-2 md:my-4 px-4 py-4 rounded-xl">
      <div className="flex items-center">
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbLink href="/category">Our Category</BreadcrumbLink>
        <span className="text-[#8A8A8A]">Product Details</span>
      </div>
    </nav>
  );
}

function BreadcrumbLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <>
      <Link href={href} className="inline-block hover:text-black">
        {children}
      </Link>
      <ChevronRight className="inline-block w-4 h-4 mx-2" />
    </>
  );
}
