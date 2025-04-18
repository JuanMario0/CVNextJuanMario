// app/contact/page.js
export default function ContactPage() {
  const contactMethods = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/juan-moreno-508606221/',
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      link: 'https://github.com/JuanMario0',
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      name: 'Correo',
      link: 'moreno.jm730@gmail.com',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1
          className="text-3xl font-bold text-center mb-6"
          data-aos="fade-down"
        >
          Contacto
        </h1>
        <div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
          data-aos="fade-up"
        >
          <p className="text-lg mb-6">
            ¡Estoy abierto a nuevas oportunidades y colaboraciones! Conéctate
            conmigo a través de mis redes sociales o por correo electrónico.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <span className="mr-2 text-gray-600 dark:text-gray-300">
                  {method.icon}
                </span>
                <span className="font-medium">{method.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}