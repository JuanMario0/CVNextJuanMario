// app/components/SkillCard.js
'use client'

export default function SkillCard({ skill, index }) {
  const handleClick = () => {
    alert(`Habilidad: ${skill.name}`)
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <div className="text-4xl mb-2">{skill.icon}</div>
      <p className="text-lg font-medium">{skill.name}</p>
    </div>
  )
}