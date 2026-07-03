'use client'

import { useEffect, useState } from 'react'

export default function CoverImage({
  src,
  alt,
  className,
  delayMs = 0,
}: {
  src: string
  alt: string
  className: string
  delayMs?: number
}) {
  const [ready, setReady] = useState(delayMs === 0)

  useEffect(() => {
    if (delayMs === 0) return
    const timer = setTimeout(() => setReady(true), delayMs)
    return () => clearTimeout(timer)
  }, [delayMs])

  if (!ready) return null

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />
}
