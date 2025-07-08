"use client";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { resolveShortlink } from "@/backend/api/shortlinks";
import { useRouter } from "next/navigation";

export default function ShortlinkCatchAllPage({ params }: { params: { shortlink: string[] } }) {

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (path: string) => resolveShortlink(path),
    onSuccess: (res) => {
      if (res?.url) {
        window.location.href = res.url;
      }
    }
  });

  const ready = Array.isArray(params?.shortlink) && params?.shortlink?.length > 0;

  useEffect(() => {
    if (!ready) return;
    let path = "";
    if (params.shortlink.length === 1) {
      path = `/${params.shortlink[0]}`;
    } else if (params.shortlink.length === 2) {
      path = `/${params.shortlink[0]}/${params.shortlink[1]}`;
    }
    mutate(path);
  }, [ready, mutate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isPending && <h1 className="text-2xl font-bold">Sto risolvendo il link...</h1>}
      {isError && <h2 className="text-red-500 text-lg mt-4">Link non trovato</h2>}
    </div>
  );
}