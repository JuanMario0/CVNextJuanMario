// app/components/Skills.js
import SkillCard from './SkillCard'

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '⏭️' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Python', icon: '🐍' },
    { name : 'Linux', icon: '🐧' },
  ]

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}