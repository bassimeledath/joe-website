import config from '../../config'

export default function Research() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Research Interests</h2>
      <ul className="list-disc list-inside mb-8">
        {config.researchInterests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-4">Research Experience</h2>
      {config.researchExperience.map((experience, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <p className="text-gray-600">{experience.institution} | {experience.timeline}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  )
}

