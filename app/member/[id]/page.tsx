import { notFound } from "next/navigation";
import styles from "@/app/page.module.css";

type Props = { params: { id: string } };

const members = [
  { id: "1", name: "Kerlen", role: "Founder & Snack Innovator", favoriteSnack: "Spicy Crunch Bites" },
  { id: "2", name: "Nina",   role: "Taste Tester", favoriteSnack: "Sweet Honey Chips" },
  { id: "3", name: "Mae",  role: "Packaging Designer", favoriteSnack: "Seaweed Crisps" },
];

export default function MemberPage({ params }: Props) {
  const member = members.find((m) => m.id === params.id);
  if (!member) return notFound();

  return (
    <section className={styles.section}>
      <h1>{member.name}</h1>
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Favorite snack:</strong> {member.favoriteSnack}</p>
    </section>
  );
}
