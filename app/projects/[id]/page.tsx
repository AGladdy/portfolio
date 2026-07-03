import { notFound } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import Nav from '@/components/Nav'
import ProjectSections from '@/components/ProjectSections'
import { projects } from '@/lib/projects'

const PdfViewer = dynamic(() => import('@/components/PdfViewer'), { ssr: false })

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) notFound()

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-bg pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.2em] uppercase text-muted hover:text-accent transition-colors duration-200 mb-12 py-2 group"
          >
            <FiArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            Back to Work
          </Link>

          {/* Header */}
          <div className="mb-14 border-b border-border pb-14">
            <p className="font-sans text-[10px] text-accent tracking-[0.4em] uppercase mb-4">
              {project.category}
            </p>
            <h1
              className="font-display font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              {project.title}
            </h1>
            <p className="font-sans text-[#d1d5db] text-base leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Multi-section case study */}
            {project.sections && <ProjectSections sections={project.sections} />}

            {/* Social media video grid */}
            {!project.sections && project.isSocialMedia && project.videos && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.videos.map((src, i) => (
                  <div key={i} className="aspect-[9/16] bg-surface overflow-hidden">
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                    <video
                      src={src}
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* PDF */}
            {project.pdf && (
              <div>
                <p className="font-sans text-[10px] text-muted tracking-[0.3em] uppercase mb-4">
                  Portfolio
                </p>
                <PdfViewer src={project.pdf} />
              </div>
            )}

            {/* Video */}
            {project.hasVideo && project.video && (
              <div>
                <p className="font-sans text-[10px] text-muted tracking-[0.3em] uppercase mb-4">
                  Preview
                </p>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  src={project.video}
                  controls
                  playsInline
                  className="w-full aspect-video bg-surface border border-border"
                />
              </div>
            )}

            {/* External link */}
            {project.hasWebsite && project.website && (
              <div>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 bg-accent text-bg hover:bg-accent-light transition-colors duration-200"
                >
                  <FiExternalLink size={14} />
                  View Live Project
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
