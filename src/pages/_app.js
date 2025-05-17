import "@/styles/globals.css";
import { SidebarProvider } from "@/admin-context/SidebarContext";
import { ThemeProvider } from "@/admin-context/ThemeContext";
import { Outfit } from "next/font/google";
import Head from "next/head";
import AdminLayout from "@/components/layout/AdminLayout";
import { usePathname } from "next/navigation";

// Initialize the font
const outfit = Outfit({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const path = usePathname();

  console.log(path, "path=======");

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
            {path === "/admin/login" ? (
              <Component {...pageProps} />
            ) : (
              <AdminLayout>
                <Component {...pageProps} />
              </AdminLayout>
            )}
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}
