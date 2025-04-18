'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return null // No necesita renderizar nada
}
// Este componente se encarga de inicializar AOS al montar la app
// y no necesita renderizar nada en la interfaz.
// Puedes incluirlo en tu layout principal o en cualquier otro lugar