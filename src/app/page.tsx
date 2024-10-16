"use client";

import { ActionButton } from "@/components/ActionButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const HelloButton = () => {
    const helloWorldMessage = "Hello, World!";
    setMessage(helloWorldMessage);
  };

  return (
    <main className="container mx-auto flex flex-col gap-3">
      <h1>Hello World</h1>
      <ActionButton href="/about" label="About page" />
      <div>
        <Button onClick={HelloButton}>Hello World</Button>
      </div>
      {message && <p>{message}</p>}
    </main>
  );
}
