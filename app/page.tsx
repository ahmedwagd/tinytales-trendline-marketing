import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 ">
      {/* register page link */}
      <Button variant="default">
        <Link href="/auth/register" className="">
          Register
        </Link>
      </Button>
    </main>
  );
}
