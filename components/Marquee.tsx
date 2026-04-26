const items = [
  'Graphic Design',
  'Digital Marketing',
  'Branding',
  'UI/UX Design',
  'Print Design',
  'Social Media',
  'Campaigns',
  'Illustration',
  'Art Direction',
  'Content Creation',
  'Photography',
]

export default function Marquee() {
  const repeated = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-border py-4 select-none">
      <div className="marquee-track flex gap-10 w-max">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-sans text-[11px] tracking-[0.25em] uppercase flex-shrink-0 text-muted"
          >
            {item}
            <span className="text-accent ml-10">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
