// app/layout.js
import './styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AOSProvider from './components/AOSProvider' // <- Aquí lo importas


export const metadata = {
  title: 'Mi Portafolio',
  description: 'Hecho con Next.js y Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <AOSProvider /> {/* <- Lo agregas aquí */}
        <Navbar />
        <main className="flex-1 container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
