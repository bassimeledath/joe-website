import Image from 'next/image'
import { FileText, Linkedin } from 'lucide-react'
import config from '../config'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
        <Image
          src={config.aboutMe.imageUrl}
          alt={config.header.name}
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="mt-4 flex space-x-4">
          <a
            href={config.aboutMe.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FileText className="mr-2 h-4 w-4" />
            CV
          </a>
          <a
            href={config.header.socialLinks.find(link => link.name === "LinkedIn")?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="md:w-2/3 md:pl-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">{config.aboutMe.text}</p>
      </div>
    </div>
  )
}

