"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-between bg-white p-4 md:p-0 md:pr-4 gap-4">
      <div className="hidden md:block relative w-1/2 h-screen">
        <Image
          src="/images/wt-auth.jpg"
          alt="Wedding Team Banner"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="w-full md:w-1/2  max-w-lg md:max-w-md m-auto bg-white border border-slate-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-black mb-2 text-center">
          Welcome back!
        </h1>
        <p className="text-sm text-black mb-6 text-center">
          Access your planning dashboard and vendors.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-white px-3 py-2 text-sm text-black outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-slate-700 bg-white px-3 py-2 text-sm text-black outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className=" w-full rounded-lg bg-brand border hover:bg-white hover:text-brand hover:border-slate-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-2.5 text-sm transition"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-500">
          Don&apos;t have an account yet?{" "}
          <a href="/signup" className="text-brand hover:underline">
            Create one
          </a>
        </p>
      </div>
    </main>
  );
}
