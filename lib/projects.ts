export interface Project {
  id: string
  title: string
  category: string
  description: string
  cover: string
  span: 1 | 2
  pdf?: string
  hasVideo?: boolean
  video?: string
  hasWebsite?: boolean
  website?: string
  isSocialMedia?: boolean
  videos?: string[]
}

export const projects: Project[] = [
  {
    id: 'song-of-summer',
    title: 'Song of Summer Campaign ft. Fiat',
    category: 'Campaign',
    description:
      'Campaign creative for (RED)\'s Fiat partnership — social assets, digital collateral, and editorial design amplifying the fight against AIDS.',
    cover: '/assets/SOS.gif',
    span: 2,
    pdf: '/assets/sos.pdf',
    hasWebsite: true,
    website: 'https://www.red.org/reditorial/partnership/the-song-of-the-summer-fiat/',
  },
  {
    id: 'events',
    title: 'Event Design & Branding',
    category: 'Event Design',
    description:
      'Graphic design for live events — from promotional materials to on-site signage and branded experiences.',
    cover: '/assets/EventCover.jpg',
    span: 1,
    pdf: '/assets/(RED)events.pdf',
  },
  {
    id: 'valentines-day',
    title: "Valentine's Day Campaign",
    category: 'Campaign',
    description:
      'Seasonal campaign for (RED) — art direction and digital assets for Valentine\'s Day fundraising across social and web.',
    cover: '/assets/Vdaycover.png',
    span: 1,
    pdf: '/assets/ValentinesDay_website.pdf',
  },
  {
    id: 'physical-prints',
    title: 'Print & Editorial',
    category: 'Print Design',
    description:
      'A collection of print work spanning editorial layouts, promotional materials, and branded collateral.',
    cover: '/assets/printcover.png',
    span: 1,
    pdf: '/assets/printportfolio.pdf',
  },
  {
    id: 'short-form-videos',
    title: 'Short Form Content',
    category: 'Social Media',
    description:
      'Short-form video content created for social media — from concept and storyboard through editing and delivery.',
    cover: '/assets/shortVideo_cover.gif',
    span: 1,
    isSocialMedia: true,
    videos: [
      '/assets/Girlhood_MSD_FINAL.mp4',
      '/assets/bracket-short.mp4',
      '/assets/cake.mp4',
      '/assets/beats.mp4',
      '/assets/hallow.mp4',
      '/assets/happy-vday.mp4',
      '/assets/red.mp4',
      '/assets/sss.mp4',
    ],
  },
  {
    id: 'social-media',
    title: '(RED) Social Media',
    category: 'Digital Marketing',
    description:
      'Social media content strategy and design for (RED) — graphics, copy direction, and digital assets across platforms.',
    cover: '/assets/time.png',
    span: 2,
    pdf: '/assets/social.pdf',
    hasWebsite: true,
    website:
      'https://www.red.org/reditorial/learn/4-reasons-iron-deficiency-can-be-dangerous-for-people-living-with-hiv/',
  },
  {
    id: 'trend-cycle',
    title: 'Trend Cycle',
    category: 'Branding',
    description:
      'Brand identity and web design for a fashion-forward digital publication tracking cultural trends.',
    cover: '/assets/tcPic.gif',
    span: 1,
    pdf: '/assets/tc.pdf',
    hasVideo: true,
    video: '/assets/tcVid.mp4',
    hasWebsite: true,
    website: 'https://annalisefaith.github.io/Trend-Cycle/about.html',
  },
  {
    id: 'drop-culture',
    title: 'Drop Culture',
    category: 'Branding',
    description:
      'Full brand identity and web design for a streetwear platform — logo, digital presence, and art direction.',
    cover: '/assets/dcPic.jpeg',
    span: 1,
    pdf: '/assets/dc.pdf',
    hasVideo: true,
    video: '/assets/DropCultureWebsiteWheeler.mp4',
    hasWebsite: true,
    website: 'https://annalisefaith.github.io/Drop-Culture/',
  },
  {
    id: 'mates',
    title: 'Mates',
    category: 'UI/UX Design',
    description:
      'UI/UX design for a social connection app — user research, wireframes, and a clickable Figma prototype.',
    cover: '/assets/matesPic.jpeg',
    span: 2,
    pdf: '/assets/mates.pdf',
    hasVideo: true,
    video: '/assets/matesVid.mp4',
    hasWebsite: true,
    website:
      'https://www.figma.com/proto/gMLNEZkVFqgYNtswSZnclB/Mates-Protoype?type=design&t=l1RHxF2c84zyCjjp-1&scaling=scale-down&page-id=0%3A1&node-id=1-2',
  },
  {
    id: 'max-conference',
    title: 'Max Conference',
    category: 'Event Design',
    description:
      'Event branding for the Max Conference — promotional graphics, digital assets, and on-site materials.',
    cover: '/assets/maxPic.jpeg',
    span: 1,
    pdf: '/assets/max.pdf',
    hasVideo: true,
    video: '/assets/maxVid.mp4',
  },
  {
    id: 'moaa',
    title: 'Military Officers Association of America',
    category: 'Branding',
    description:
      'Brand identity work for the Military Officers Association of America — design system and collateral.',
    cover: '/assets/moaa.jpeg',
    span: 2,
    pdf: '/assets/MoaaPortfolio.pdf',
  },
]
