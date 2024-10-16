import Link from "next/link";
import { Button } from "./ui/button";

interface ActionButtonProps {
  href: string;
  label: string;
}

export const ActionButton = ({ href, label }: ActionButtonProps) => {
  return (
    <Link href={href}>
      <Button>{label}</Button>
    </Link>
  );
};
