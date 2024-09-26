import Image from "next/image";

import { News } from "@/app/model/news";
import Link from "next/link";
import { getNews } from "../../data/data";
import Navbar from "@/app/components/en/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFKology | News - Stay informed with the latest media software and gadgets news from AFKology.",
  description: "Stay informed with the latest media software and gadgets news from AFKology.",
  keywords: ['afkology', 'news', 'travel news', 'lifestyle news', 'latest updates', 'news feed', 'gadget news'],
  metadataBase: new URL('https://www.afkology.com'),
  alternates: {
    canonical: '/news',
    languages: {
      'en-US': '/news'
    },
  },
  openGraph: {
    title: "AFKology | News - Stay informed with the latest media software and gadgets news from AFKology.",
    description: "Stay informed with the latest media software and gadgets news from AFKology.",
    url: 'https://www.afkology.com/news',
    siteName: 'AFKology',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.afkology.com/logo.png',
        width: 190,
        height: 107,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: [
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  verification: {
    google: 'ADDD CODEE', 
  },
};

export default function Page() {
  const news = getNews();
  return (
    <div>
      <Navbar roUrl="/ro" />
      <main className="flex-grow">
        <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((news: News) => (
            <div className="card bg-base-100 shadow-xl" key={news.slug}>
              <figure>
                <Link href={`/${news.slug}`}><Image src={news.featured} alt={news.title} /></Link>
              </figure>
              <div className="card-body">
                <Link href={`/${news.slug}`}><h2 className="card-title">{news.title}</h2></Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}