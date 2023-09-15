"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import UserCard from "@/components/UserCard";

const ClientPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    }
  });

  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} pagetype={"Client"} />
    </section>
  );
};

export default ClientPage;
