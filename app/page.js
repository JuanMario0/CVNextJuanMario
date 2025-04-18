import Skills from './components/Skills'

export default function Home() {
  return (
    <>
      {/* Introducción */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Bienvenido a mi portafolio</h1>
          <p className="mt-2 text-lg">Data Scientis, FullStack</p>
          <p className='mt-2 text-lg'>Juan Mario Moreno Ch</p>
        </div>
      </section>

      {/* Habilidades */}
      <Skills />
    </>
  );
}

//Este archivo es la página principal de tu portafolio. 
// Aquí puedes incluir una breve introducción sobre ti 
// y lo que haces. Puedes personalizar el contenido 
// según tus necesidades. Recuerda que este es un ejemplo 
// básico y puedes expandirlo según tus requerimientos.