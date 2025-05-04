import "@/styles/globals.css";
import { SidebarProvider } from "@/admin-context/SidebarContext";
import { ThemeProvider } from "@/admin-context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ThemeProvider>
  );
}
