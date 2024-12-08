import Image from 'next/image'
import { FileText, Linkedin, Mail, Phone } from 'lucide-react'
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
        <div className="mt-4 flex flex-col space-y-3 items-center">
          <div className="flex space-x-4 justify-center">
            <a
              href={`mailto:${config.header.email}`}
              className="inline-flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              {config.header.email}
            </a>
            <span className="inline-flex items-center px-3 py-2 text-sm text-gray-600">
              <Phone className="mr-2 h-4 w-4" />
              {config.header.phone}
            </span>
          </div>
          <div className="flex space-x-4 justify-center">
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
      </div>
      <div className="md:w-2/3 px-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-8 whitespace-pre-line">
          {config.aboutMe.text}
        </p>
      </div>
    </div>
  )
}
