import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={160} height={20} alt="" />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Employee Listing</Link>
        </nav>
    );
}
