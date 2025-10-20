"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Page() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") {
      return (
        <>
          <div className={styles.hero}>
            <h1 className={styles.title}>Welcome to Rawrlen's Bites</h1>
            <p className={styles.subtitle}>Unleashing the Inner Rawr in Every Bite!</p>
          </div>

          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Rawrlen logo"
            width={250}
            height={250}
            priority
          />

          <section className={styles.features}>
            <div className={styles.featureCard}>
              <h3>Craveability</h3>
              <p>The irresistible taste that keeps you coming back</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Crunch Factor</h3>
              <p>Satisfaction guaranteed with every crispy sound</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Freshness</h3>
              <p>Made with love and the best ingredients daily</p>
            </div>
          </section>

<section className={styles.team}>
  <h2>Meet Our Team</h2>
  <div className={styles.teamGrid}>
    <div className={styles.teamCard}>
      <Image src="/team1.jpg" alt="Kerlen" width={150} height={150} className={styles.teamImg} />
      <h3>Kerlen</h3>
      <p>Founder & Snack Innovator</p>
      <Link href="/member/1" className={styles.teamLink}>View Profile</Link>
    </div>
    <div className={styles.teamCard}>
      <Image src="/team2.jpg" alt="Nina" width={150} height={150} className={styles.teamImg} />
      <h3>Nina</h3>
      <p>Taste Tester</p>
      <Link href="/member/2" className={styles.teamLink}>View Profile</Link>
    </div>
    <div className={styles.teamCard}>
      <Image src="/team3.jpg" alt="Mae" width={150} height={150} className={styles.teamImg} />
      <h3>Mae</h3>
      <p>Packaging Designer</p>
      <Link href="/member/3" className={styles.teamLink}>View Profile</Link>
    </div>
  </div>
</section>

        </>
      );
    }

    if (page === "about") {
      return (
        <section className={styles.section}>
          <h1>Get to Know Rawrlen's Bites!</h1>
          <p>
            Ready to unleash your 'Inner Rawr'? We’re snack hunters on a mission to bring you
            crunchy, tasty, and craveable treats crafted with premium ingredients.
          </p>
        </section>
      );
    }

    if (page === "contact") {
      return (
        <section className={styles.section}>
          <h1>Munchies Hotline!</h1>
          <p>Got a craving? Say hi!</p>
          <ul>
            <li>Email: rawrlensbites@gmail.com</li>
            <li>Phone: +62 895323484455</li>
            <li>Our Kitchen HQ: Jakarta, Indonesia</li>
          </ul>
        </section>
      );
    }

    return null;
  };

  return (
    <div className={styles.page}>
      <Navbar setPage={setPage} />
      <main className={styles.main}>{renderPage()}</main>
    </div>
  );
}
