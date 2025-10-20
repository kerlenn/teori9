"use client";
import styles from "../page.module.css"; // relative path to CSS module
import Link from "next/link";

export default function Navbar({ setPage }: { setPage: (p: string) => void }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("about")}>About</li>
        <li onClick={() => setPage("contact")}>Contact Us</li>
        {/* contoh link ke dynamic member */}
        <li><Link href="/member/1" className={styles.link}>Member 1</Link></li>
      </ul>
    </nav>
  );
}
