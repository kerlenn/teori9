"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [page, setPage] = useState("home");

  const Navbar = () => (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("about")}>About</li>
        <li onClick={() => setPage("contact")}>Contact Us</li>
      </ul>
    </nav>
  );

  const renderPage = () => {
    if (page === "home") {
      return (
        <>
          <div className={styles.hero}>
            <h1 className={styles.title}>Welcome to Our Company</h1>
            <p className={styles.subtitle}>
              Innovating solutions for a better tomorrow
            </p>
          </div>

          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <section className={styles.features}>
            <div className={styles.featureCard}>
              <h3>Innovation</h3>
              <p>Cutting-edge technology solutions</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Quality</h3>
              <p>Excellence in every project</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Support</h3>
              <p>24/7 customer service</p>
            </div>
          </section>

          <div className={styles.ctas}>
            <button
              className={styles.primary}
              onClick={() => setPage("about")}
            >
              Learn More About Us
            </button>
            <button
              onClick={() => setPage("contact")}
              className={styles.secondary}
            >
              Contact Us
            </button>
          </div>
        </>
      );
    }

    if (page === "about") {
      return (
        <section className={styles.section}>
          <h1>About Our Company</h1>
          <p>
            We are a forward-thinking company committed to innovation, quality,
            and customer satisfaction. Our mission is to deliver outstanding
            solutions that empower businesses to thrive in the digital era.
          </p>
        </section>
      );
    }

    if (page === "contact") {
      return (
        <section className={styles.section}>
          <h1>Contact Us</h1>
          <p>
            Have questions or need help? Reach out anytime.
          </p>
          <ul>
            <li>Email: support@ourcompany.com</li>
            <li>Phone: +62 812-3456-7890</li>
            <li>Address: Jakarta, Indonesia</li>
          </ul>
        </section>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <main className={styles.main}>{renderPage()}</main>
      </div>
    </>
  );
}
