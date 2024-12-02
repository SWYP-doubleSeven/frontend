"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useState } from "react";

import "@/styles/base/index.scss";
import Gnb from "@/components/commons/Gnb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
          strategy="beforeInteractive"
          defer
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div
            style={{
              width: "100%",
              maxWidth: isAdminPage ? "none" : "60rem",
              height: "100vh",
              backgroundColor: isAdminPage ? "white" : "black",
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            {!isAdminPage && <Gnb />}
            {children}
          </div>
          <div id="portal-root"></div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
