import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Accredian Enterprise | Next-Gen Learning Solutions",
  description:
    "Transform your workforce with expert-led programs in AI, Data Science, Leadership & more. Trusted by 10K+ professionals across 200+ enterprise sessions.",
  keywords: [
    "corporate training",
    "enterprise learning",
    "L&D",
    "AI courses",
    "leadership programs",
    "data science",
  ],
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Learning Solutions",
    description:
      "Transform your workforce with expert-led programs in AI, Data, Leadership & more.",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise",
    description: "Next-gen enterprise learning — built for results.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
