import { type ReactNode } from "react";

import { Container } from "@/components/Container";

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
