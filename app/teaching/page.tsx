import config from '../../config'

export default function Teaching() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Teaching Experience</h2>
      {config.teachingExperience.map((experience, index) => (
        <div key={index} className="mb-4 border-l-2 border-gray-300 pl-4">
          <h3 className="text-xl font-semibold">{experience.role}: {experience.course}</h3>
          <p className="text-gray-600">{experience.institution} | {experience.timeline}</p>
          <ul className="list-disc list-inside">
            {experience.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
