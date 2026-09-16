import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <Container className="text-center">
        <div className="font-mono text-sm text-studio-lime">404 ERROR</div>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-6xl">PAGE NOT FOUND</h1>
        <p className="mt-4 text-muted-foreground">
          The requested studio resource or coordinate does not exist.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="accent">Return Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
