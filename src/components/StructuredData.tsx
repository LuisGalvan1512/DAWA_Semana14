import { SITE_METADATA } from "@/constants/metadata";
import { PORTFOLIO_DATA } from "@/constants/data";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PORTFOLIO_DATA.name,
    "jobTitle": PORTFOLIO_DATA.subtitle,
    "description": PORTFOLIO_DATA.bio,
    "url": SITE_METADATA.siteUrl,
    "sameAs": [
      SITE_METADATA.github,
      SITE_METADATA.linkedin,
      SITE_METADATA.twitter
    ],
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Web Performance",
      "Search Engine Optimization"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
