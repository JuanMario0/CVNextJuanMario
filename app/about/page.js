// app/about/page.js
export default function AboutPage() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-6"
          data-aos="fade-down"
        >
          Sobre mí
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up">
          <p className="text-lg leading-relaxed mb-4">
            Hola, soy un desarrollador <strong>FullStack</strong> especializado en{' '}
            <span className="text-blue-600">React</span>,{' '}
            <span className="text-blue-600">Next.js</span>, 
            <span className="text-blue-600">FastAPI</span>y{' '}
            <span className="text-blue-600">Python</span>. Me apasiona crear
            aplicaciones web eficientes, escalables y con una gran experiencia de
            usuario. Desarollando modelos de ML, hasta su deploy en aplicaciones, 
            asi como desarrollo web desde el backen hasta el frontend
            .Siempre estoy aprendiendo nuevas tecnologías y buscando formas
            de mejorar mis habilidades.
          </p>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
          <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up" data-aos-delay="100">
            Intereses
          </h3>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>Desarrollo web</li>
            <li>Desarrollo de aplicaciones móviles</li>
            <li>Desarrollo de backend</li>
            <li>Inteligencia artificial</li>
            <li>Aprendizaje automático</li>
          </ul>
        </div>
      </div>
    </section>
  )
}