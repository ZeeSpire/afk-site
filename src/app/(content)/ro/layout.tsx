import Footer from "../../components/ro/footer/Footer";
import "../../globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" data-theme="pastel">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <div className="flex flex-col flex-grow container mx-auto px-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}