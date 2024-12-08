'use client'

import React from 'react';
import config from '../../config';

const formatAuthorString = (authorData: { text: string; highlight: string }) => {
  const { text, highlight } = authorData;
  if (!highlight) return text;

  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <strong>{highlight}</strong>
      {parts[1]}
    </>
  );
};

const formatJournalInfo = (pub: {
  journal?: string;
  volume?: string;
  pages?: string;
  year?: string;
}) => {
  const parts = [];
  if (pub.journal) parts.push(pub.journal);
  if (pub.volume) parts.push(pub.volume);
  if (pub.pages) parts.push(pub.pages);
  if (pub.year) parts.push(pub.year);

  return parts.join(", ");
};

export default function Publications() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Publications</h2>
      <ul className="space-y-6">
        {config.publications.map((publication, index) => (
          <li key={index} className="border-l-2 border-gray-300 pl-4">
            <div className="text-lg mb-1">
              {publication.title}
            </div>
            <div className="mb-1">
              {formatAuthorString(publication.authors)}
            </div>
            <div className="mb-1">
              {formatJournalInfo(publication)}
            </div>
            {publication.url && (
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Publication
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
