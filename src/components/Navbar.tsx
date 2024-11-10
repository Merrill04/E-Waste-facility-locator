// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/awareness">Awareness</Link>
        <Link href="/e-facilities">E Facilities</Link>
        <Link href="/news">News</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <button>Sign Up/</button>
    </nav>
  );
}
