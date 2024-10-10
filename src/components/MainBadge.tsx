import { Badge } from "./ui/badge";

interface MainBadgeProps {
  label: string;
}

export const MainBadge = ({ label }: MainBadgeProps) => {
  return <Badge>{label}</Badge>;
};
