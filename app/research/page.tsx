import config from '../../config'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export default function Research() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Research</h2>
      {config.researchExperience.map((experience, index) => (
        <div key={index} className="mb-8">
          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            {experience.imagePath && (
              <div className="my-4 relative w-3/4 aspect-[16/7]">
                <Image
                  src={experience.imagePath}
                  alt={experience.title}
                  fill
                  className="object-left object-contain"
                />
              </div>
            )}
            <div className="prose">
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    />
                  ),
                }}
              >
                {experience.description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
