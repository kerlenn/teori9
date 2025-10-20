import styles from "../page.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://instagram.com">Instagram</Link>
      <Link href="https://tiktok.com">TikTok</Link>
      <Link href="https://x.com">X</Link>
    </footer>
  );
}
