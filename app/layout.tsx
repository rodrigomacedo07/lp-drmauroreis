import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Mauro Reis | TEA e TDAH",
  description:
    "Consulta especializada para crianças com TEA e TDAH. Atendimento humanizado com foco em qualidade de vida para seu filho. Agende presencial ou teleconsulta.",
  keywords: [
    "TEA",
    "TDAH",
    "autismo infantil",
    "neuropediatra",
    "Dr Mauro Reis",
    "consulta infantil",
    "neurodiversidade",
  ],
  authors: [{ name: "Dr. Mauro Reis" }],
 openGraph: {
    title: "Dr. Mauro Reis | TEA e TDAH",
    description:
      "Cuidado especializado e acolhedor para crianças com TEA e TDAH. Agende sua consulta.",
    url: "https://lp-drmauroreis.vercel.app",
    siteName: "Dr. Mauro Reis",
    images: [
      {
        url: "/foto_perfil_dr.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Mauro Reis | TEA e TDAH",
    description:
      "Atendimento especializado para crianças com TEA e TDAH. Agende sua consulta.",
    images: ["/foto_perfil_dr.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZWZ0WCB157"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'G-ZWZ0WCB157', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w54z649iyc");
          `}
        </Script>
      </body>
    </html>
  );
}
