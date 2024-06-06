import { auth } from "@/lib/auth";

import Link from "next/link";

export default async function Home() {
  const session = await auth();
  //console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session?.user ? (
        <>
          <div>{session.user.name}</div>
          <Link href={"/api/auth/signout"}>Sign Out</Link>
        </>
      ) : (
        <Link href={"/signin"}>SignIn</Link>
      )}
    </main>
  );
}
