// app/components/Skills.js
'use client'

import SkillTag from './SkillTag'

export default function Skills() {
  const skills = ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'AOS']

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Mis Habilidades</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </section>
  )
}