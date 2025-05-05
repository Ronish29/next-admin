import "@/styles/globals.css";
import { SidebarProvider } from "@/admin-context/SidebarContext";
import { ThemeProvider } from "@/admin-context/ThemeContext";
import { Outfit } from 'next/font/google';
import Head from "next/head";

// Initialize the font
const outfit = Outfit({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js Admin Dashboard</title>
      </Head>
      <style jsx global>{`
        body {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <SidebarProvider>
          <div className={`${outfit.className} dark:bg-gray-900`}>
            <Component {...pageProps} />
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}