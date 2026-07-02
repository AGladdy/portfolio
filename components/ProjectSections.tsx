import type { ProjectSection } from '@/lib/projects'

const isImage = (src: string) => /\.(png|jpe?g|gif|webp)$/i.test(src)

function Media({ src }: { src: string }) {
  if (isImage(src)) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" className="w-full h-full object-cover" />
  }
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video src={src} controls playsInline className="w-full h-full object-cover" />
  )
}

export default function ProjectSections({ sections }: { sections: ProjectSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight mb-2">
            {section.title}
          </h3>
          {section.tagline && (
            <p className="font-sans text-sm text-accent italic mb-5">{section.tagline}</p>
          )}

          {section.paragraphs?.map((p, i) => (
            <p key={i} className="font-sans text-sm text-muted leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {section.highlights && (
            <ul className="space-y-4 my-6">
              {section.highlights.map((h, i) => (
                <li key={i} className="border-l border-accent/40 pl-4">
                  <p className="font-sans text-sm text-white font-semibold mb-1">{h.label}</p>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {h.text}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {section.youtube ? (
            <div className="flex flex-wrap items-start gap-3">
              {section.youtube.map((id) => (
                <div
                  key={id}
                  className="aspect-video h-[240px] sm:h-[320px] md:h-[400px] bg-surface-2 overflow-hidden"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
              {section.videos.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[9/16] h-[240px] sm:h-[320px] md:h-[400px] bg-surface-2 overflow-hidden"
                >
                  <Media src={src} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {section.videos.map((src, i) => (
                <div key={i} className="aspect-[9/16] bg-surface-2 overflow-hidden">
                  <Media src={src} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
