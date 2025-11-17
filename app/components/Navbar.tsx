"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 bg-white">
      <Link href="/" className="text-brand">
        Wedding Team Logo
      </Link>

      <div className="">
        {/* <Link>Browse Vendors</Link> */}
        <Link href="/login" className="text-brand px-4">
          Log In
        </Link>
        <Link href="/signup" className="text-brand px-4">
          Join as a Vendor
        </Link>
      </div>
    </nav>
  );
}
