import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#020202B2]/70 text-white bg-[url(/kid-photo.jpg)] bg-blend-overlay bg-no-repeat bg-cover bg-center mt-20">
      <div className="container mx-auto py-12 lg:py-11 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-8 lg:gap-12.5">
          <div className="flex flex-col justify-center gap-6 lg:gap-4 flex-1">
            <Link className="block" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/Logo-white.svg"
                alt="Logo"
                width={66}
                height={51}
                className="h-14 w-auto transition-transform cursor-pointer"
                priority
              />
            </Link>
            <p className="font-medium">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
              in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
              quconsequatur ab cum maxime.Soluta dolor quae{" "}
            </p>
          </div>
          <div className="flex justify-between flex-1">
            <div className="">
              <h5 className="font-semibold text-[16px] lg:text-2xl mb-5 lg:mb-6">
                Let Us Help
              </h5>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h5 className="font-semibold text-[16px] lg:text-2xl mb-5 lg:mb-6">
                Policies
              </h5>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-4">Send Email</h3>
            <div className="flex bg-white rounded-full p-1 pl-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent flex-1 text-black outline-none text-sm placeholder:text-gray-400"
              />
              <button className="bg-[#bc9b8b] hover:bg-[#a88a7a] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Send
              </button>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white/80 transition">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-white/80 transition">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
