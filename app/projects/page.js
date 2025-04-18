const proyectos = [
  {
    id: 1,
    titulo: 'Página de JumiCare empresa de cosméticos',
    descripcion: 'Una página web para una empresa de cosméticos con un diseño moderno.',
    link: 'https://juanmario0.github.io/',
    imagen: '/images/Captura de pantalla 2025-04-18 000740.png', // Ruta actualizada
    tecnologias: ['CSS, HTML, JavaScript'],
  },
  {
    id: 2,
    titulo: 'EcoApp IA para el medio ambiente',
    descripcion: 'Una aplicación andriod para detección de residuos, clasificando por materiales.',
    link: 'https://github.com/JuanMario0/EcoApp',
    imagen: '/images/341572129-66b784b1-61f5-4331-8bc0-ad05c495d366.jpeg', // Ruta actualizada
    tecnologias: ['Python', 'Andriod Studio', 'HTML', 'CSS', 'JavaScript', 'Computer Vision'],
  },
  {
    id: 3,
    titulo: 'Api para una app enfocada a restaurantes FastApi',
    descripcion: 'Una API RESTful para una aplicación de gestión de restaurantes.',
    link: 'https://github.com/JuanMario0/FastApiCero/tree/master/app',
    imagen: '/images/bitcoin-7693848_1280.png', // Ruta actualizada
    tecnologias: ['FastApi', 'Python', 'PostgreSQL', 'Docker', 'API REST', 'JWT'],
  },

{
    id: 4,
    titulo: 'Más Proyectos',
    descripcion: 'Visita mi GitHub para ver más proyectos y contribuciones.',
    link: 'https://github.com/JuanMario0?tab=repositories',
    imagen: '/images/dasboardagua.png', // Ruta actualizada
    tecnologias: ['GitHub', 'Proyectos'],
} 
]
export default function ProjectsPage() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1
          className="text-3xl font-bold text-center mb-8"
          data-aos="fade-down"
        >
          Mis Proyectos
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={proyecto.id * 100}
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{proyecto.titulo}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}