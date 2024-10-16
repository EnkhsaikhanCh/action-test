import { ActionButton } from "@/components/ActionButton";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <ActionButton href="/about" label="About page" />
    </main>
  );
}
