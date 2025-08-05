"use client";
import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { resolveShortlink } from "@/backend/api/shortlinks";
import Script from "next/script";

export default function ShortlinkCatchAllPage({ params }: { params: Promise<{ shortlink: string[] }> }) {
  const resolvedParams = React.use(params);
  const [countdown, setCountdown] = useState(10);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (path: string) => resolveShortlink(path),
    onSuccess: (res) => {
      if (res?.url) {
        setRedirectUrl(res.url);
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

  // Countdown e redirect dopo 10 secondi
  useEffect(() => {
    if (!redirectUrl) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = redirectUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [redirectUrl]);

  return (
    <>
      <Script 
        src="https://fpyf8.com/88/tag.min.js" 
        data-zone="161543" 
        strategy="afterInteractive"
        data-cfasync="false"
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen">
        {isPending && <h1 className="text-2xl font-bold">Sto risolvendo il link...</h1>}
        {isError && <h2 className="text-red-500 text-lg mt-4">Link non trovato</h2>}
        
        {redirectUrl && (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Reindirizzamento in corso...</h1>
            <p className="text-lg mb-2">Sarai reindirizzato tra:</p>
            <div className="text-4xl font-bold text-blue-600">{countdown}</div>
          </div>
        )}
      </div>
    </>
  );
}