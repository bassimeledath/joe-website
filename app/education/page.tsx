import config from '../../config'

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {config.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
          <p className="text-gray-600">{edu.institution} | {edu.timeline}</p>
          {edu.advisor && <p><strong>Advisor:</strong> {edu.advisor}</p>}
          {edu.dissertation && <p><strong>Dissertation:</strong> {edu.dissertation}</p>}
        </div>
      ))}
    </div>
  )
}

