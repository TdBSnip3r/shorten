"use client";
import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { resolveShortlink } from "@/backend/api/shortlinks";

export default function ShortlinkCatchAllPage({ params }: { params: Promise<{ shortlink: string[] }> }) {
  const resolvedParams = React.use(params);
  
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (path: string) => resolveShortlink(path),
    onSuccess: (res) => {
      if (res?.url) {
        // Reindirizza a Monetag invece che direttamente all'URL
        window.location.href = res.url;
      }
    }
  });

  const ready = Array.isArray(resolvedParams?.shortlink) && resolvedParams?.shortlink?.length > 0;

  useEffect(() => {
    if (!ready) return;
    let path = "";
    if (resolvedParams.shortlink.length === 1) {
      path = `/${resolvedParams.shortlink[0]}`;
    } else if (resolvedParams.shortlink.length === 2) {
      path = `/${resolvedParams.shortlink[0]}/${resolvedParams.shortlink[1]}`;
    }
    mutate(path);
  }, [ready, mutate, resolvedParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isPending && <h1 className="text-2xl font-bold">Sto risolvendo il link...</h1>}
      {isError && <h2 className="text-red-500 text-lg mt-4">Link non trovato</h2>}
    </div>
  );
}