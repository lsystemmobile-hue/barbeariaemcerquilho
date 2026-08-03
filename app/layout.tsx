import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Resolve base URL: uses VERCEL_URL in preview/production deploys, fallback to custom domain
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://barbeariadonenzinho.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Barbearia em Cerquilho | Barbearia do Nenzinho",
  description:
    "Corte masculino, barba, luzes e progressiva em Cerquilho. Atendimento por ordem de chegada na Barbearia do Nenzinho.",
  keywords: [
    "barbearia em cerquilho",
    "barbeiro em cerquilho",
    "corte masculino cerquilho",
    "corte e barba cerquilho",
    "luzes masculinas cerquilho",
    "progressiva masculina cerquilho",
    "descoloração masculina cerquilho",
    "barbearia residencial aliança cerquilho",
    "barbearia do nenzinho",
  ],
  authors: [{ name: "Barbearia do Nenzinho" }],
  creator: "Barbearia do Nenzinho",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Barbearia do Nenzinho",
    title: "Barbearia em Cerquilho | Barbearia do Nenzinho",
    description:
      "Corte masculino, barba, luzes e progressiva em Cerquilho. Atendimento por ordem de chegada na Barbearia do Nenzinho.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barbearia do Nenzinho — Cerquilho SP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia em Cerquilho | Barbearia do Nenzinho",
    description:
      "Corte masculino, barba, luzes e progressiva em Cerquilho. Atendimento por ordem de chegada na Barbearia do Nenzinho.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "xx93pPLUry1w-NfCR9YkJw9WJQ9cRzZMouSD4YNDsa4",
  },
};

const jsonLdHairSalon = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Barbearia do Nenzinho",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  description:
    "Barbearia masculina em Cerquilho, SP. Corte, barba, luzes, descoloração, progressiva e pacotes mensais. Atendimento no Residencial Aliança.",
  telephone: "+5515996221677",
  priceRange: "R$ 20 - R$ 250",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Geraldo Pires da Silva, 293",
    addressLocality: "Cerquilho",
    addressRegion: "SP",
    postalCode: "18528-086",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.165,
    longitude: -47.748,
  },
  sameAs: ["https://www.instagram.com/barbearia_do_nenzinho/"],
  areaServed: {
    "@type": "City",
    name: "Cerquilho",
  },
  hasMap: "https://maps.app.goo.gl/CX1wwzZZXoNyKYEM7",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corte masculino" }, price: "30.00", priceCurrency: "BRL" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Barba" }, price: "35.00", priceCurrency: "BRL" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corte + barba" }, price: "60.00", priceCurrency: "BRL" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luzes masculinas" }, price: "110.00", priceCurrency: "BRL" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Progressiva masculina" }, price: "110.00", priceCurrency: "BRL" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Descoloração" }, price: "135.00", priceCurrency: "BRL" },
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Barbearia do Nenzinho",
  url: siteUrl,
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Onde fica a Barbearia do Nenzinho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A barbearia está localizada na Rua Geraldo Pires da Silva, 293, Residencial Aliança, em Cerquilho – SP, CEP 18528-086.",
      },
    },
    {
      "@type": "Question",
      name: "Quais serviços a barbearia oferece?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A barbearia oferece corte masculino, barba, pezinho, sobrancelha, coloração, luzes, descoloração, progressiva e serviços combinados.",
      },
    },
    {
      "@type": "Question",
      name: "A barbearia possui pacotes mensais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Existem opções de pacote mensal de corte e de corte com barba. As condições e quantidades de utilizações devem ser consultadas diretamente com a barbearia.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso agendar horário?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não trabalhamos com agendamento. O atendimento na Barbearia do Nenzinho é realizado exclusivamente por ordem de chegada.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é o valor do corte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O corte custa R$ 30,00. Os valores dos demais serviços podem ser consultados na seção de serviços.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="google-site-verification" content="xx93pPLUry1w-NfCR9YkJw9WJQ9cRzZMouSD4YNDsa4" />
        <link
          rel="preload"
          as="image"
          href="/clientes/corte-masculino-degrade-barbearia-do-nenzinho-cerquilho.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority is standard HTML
          fetchpriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHairSalon) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
