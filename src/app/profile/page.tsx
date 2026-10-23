"use client";
import React from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfilePage() {
  const {user} = useUser();

  // If not logged in, redirect to login
  if (!user) {
    redirect("/auth/login");
  }


  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-lg shadow-[var(--primary)]/10 p-8 flex flex-col items-center">
        <Image
          width={96}
          height={96}
          src={user.picture || "/icon_logo.png"}
          alt={user.name || "User"}
          className="w-24 h-24 rounded-full border-4 border-primary-300 mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold mb-1">{user.name ?? "Anonymous"}</h1>
        <p className="mb-6 text-[var(--muted-foreground)]">
          {user.email}
        </p>
        <a
          href="/api/auth/logout"
          className="inline-block px-4 py-2 text-sm rounded-full bg-brand-gradient text-white shadow-brand-glow hover:brightness-110 transition"
        >
          Log Out
        </a>
      </div>
    </div>
  );
}
