import { SignIn } from "@/components/signin-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();

  if (session?.user) redirect("/");

  return <SignIn />;
};

export default page;
