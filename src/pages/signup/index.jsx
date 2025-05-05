import SignInForm from "@/admin-components/auth/SignInForm";
import SignUpForm from "@/admin-components/auth/SignUpForm";
import GridShape from "@/admin-components/common/GridShape";
import ThemeTogglerTwo from "@/admin-components/common/ThemeTogglerTwo";
import { ThemeProvider } from "@/admin-context/ThemeContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <>
            <Head>
                <title>Next.js Calendar | TailAdmin - Next.js Dashboard Template</title>
                <meta
                    name="description"
                    content="This is the Next.js Calendar page for TailAdmin Tailwind CSS Admin Dashboard Template"
                />
                {/* Add more meta tags if needed */}
            </Head>
            <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
                <ThemeProvider>
                    <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col  dark:bg-gray-900 sm:p-0">
                        <SignUpForm />
                        <div className="lg:w-1/2 w-full h-full bg-brand-950 dark:bg-white/5 lg:grid items-center hidden">
                            <div className="relative items-center justify-center  flex z-1">
                                {/* <!-- ===== Common Grid Shape Start ===== --> */}
                                <GridShape />
                                <div className="flex flex-col items-center max-w-xs">
                                    <Link href="/" className="block mb-4">
                                        <Image
                                            width={231}
                                            height={48}
                                            src="./images/logo/auth-logo.svg"
                                            alt="Logo"
                                        />
                                    </Link>
                                    <p className="text-center text-gray-400 dark:text-white/60">
                                        Free and Open-Source Tailwind CSS Admin Dashboard Template
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
                            <ThemeTogglerTwo />
                        </div>
                    </div>
                </ThemeProvider>
            </div>
        </>
    )
}