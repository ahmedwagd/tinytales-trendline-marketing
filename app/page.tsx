import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* register page link */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <Link href="/auth/register" className="">
            <Button variant="default" size="lg" className="me-2">
              Register
            </Button>
          </Link>
          <Link href="/auth/login" className="">
            <Button variant="default" size="lg">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
