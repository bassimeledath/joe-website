import config from '../../config'

export default function Presentations() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Presentations</h2>
      {config.presentations.map((presentation, index) => (
        <div key={index} className="mb-4 border-l-2 border-gray-300 pl-4">
          <h3 className="text-xl font-semibold">{presentation.title}</h3>
          <p className="text-gray-600">{presentation.event} | {presentation.date}</p>
        </div>
      ))}
    </div>
  )
}
