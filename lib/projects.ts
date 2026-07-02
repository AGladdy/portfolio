export interface ProjectSection {
  title: string
  tagline?: string
  paragraphs?: string[]
  highlights?: { label: string; text: string }[]
  videos: string[]
  youtube?: string[]
}

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
  sections?: ProjectSection[]
}

export const projects: Project[] = [
  {
    id: 'navage',
    title: 'Naväge',
    category: 'Naväge',
    description:
      'Great Gunk Out, Amazon Prime Day, and always-on paid social creative — TV, Meta, and TikTok campaigns owned end to end from concept through edit.',
    cover: '/assets/nav-cover.png',
    span: 1,
    sections: [
      {
        title: 'Great Gunk Out',
        tagline:
          'Integrated TV + social campaign turning nasal congestion into a trial-driving promo.',
        paragraphs: [
          'An off-season campaign that reframes an unglamorous problem — the gunk in everyone\'s nose — into a shareable, identifiable moment. Originally built as a UGC challenge, the concept was reworked before launch: the challenge required owning the device to participate, which gated the very people it needed to convert. The live version (now in market) trades the challenge for a Great Gunk Out badge and social promo anyone can engage with, plus a sweepstakes to win a Naväge bundle and prizes — shifting the mechanic from "share your results" to "try it and enter," so it actually pulls in new users instead of only existing ones.',
        ],
        highlights: [
          {
            label: 'TV spot (:15)',
            text: "Contributed to storyboarding, creator and visual sourcing, and cross-team coordination across KWG and Naväge to align the campaign and its goals. Result: beat the brand's allergy-season control on Cable, the largest placement (49 of 53 groups), at 5.42 vs. 5.00 adjusted ROAS.",
          },
          {
            label: 'Social video',
            text: 'Owned end to end: creator sourcing and content, wireframing, graphics, social copywriting, and edit. Result: a placement-dependent winner on Meta — a click-driver in traffic (2.7% CTR) and a deep-view driver in awareness (38.6% 2/3s VVR).',
          },
        ],
        videos: ['/assets/nav-tggo.mp4'],
        youtube: ['DoC0Wk0z8Io?start=8'],
      },
      {
        title: 'Amazon Prime Day',
        tagline:
          "Pre-Prime and Prime Day creative built to convert during the year's highest-intent retail window.",
        paragraphs: [
          'Owned the campaign end to end: concept and ethos, storyboarding, wireframing, and planning the pre-Prime and Prime Day asset waves in coordination with the Naväge and internal teams — through to video editing and promo graphics across both video and static.',
          'Results — the creative proved a clear platform-fit story. On Meta, the Prime Day cuts led video completion in the set (~25–26% VCR) and earned a Top Performer rating. On TikTok, the same assets underperformed the early-view bar (lowest 2-second view rates, highest cost-per-click) and were paused — a hook problem, not a quality one — which directly informed the next round of TikTok-native re-cuts.',
        ],
        videos: [
          '/assets/nav-preprime-wave11.mp4',
          '/assets/nav-primeday-wave11-2.mp4',
          '/assets/nav-primeday-wave11-alt1.mp4',
        ],
      },
      {
        title: 'Paid Social Creative',
        tagline:
          'A complete run of video and static assets across Meta and TikTok, built and optimized for performance.',
        paragraphs: [
          "Owned the creative end to end: ideation, scripting, wireframing, graphics, video editing, and copywriting — plus client and internal communication, influencer and creator sourcing, market-relevant message positioning (allergy vs. cold/flu), and sizing assets to Meta's safe zone for readability.",
        ],
        highlights: [
          {
            label: 'Managed ~$34K across Meta and TikTok, reaching 2.5M people',
            text: 'Identified that each platform did a different job: TikTok delivered 61% of reach for under a quarter of the budget, while Meta drove 96% of clicks at a $0.45 CPC (vs. $3.25 on TikTok). That read drove a clear per-dollar allocation recommendation.',
          },
          {
            label: 'Tested a full slate and found the winner',
            text: '"VsNeti-Awkward" earned half the Meta budget on its own at a 5.9% click rate. The test also mapped message-to-job: comparison and influencer creative drive clicks; efficacy messaging drives full views.',
          },
          {
            label: 'Cut underperformers fast',
            text: 'Several creatives paused at $0 spend before burning budget, concentrating spend on what was working.',
          },
        ],
        videos: [
          '/assets/nav-tiktok-page.png',
          '/assets/nav-vsnf-design-36percent.mp4',
          '/assets/nav-brookeburke-demo.mp4',
          '/assets/nav-cf-vsmedicine-rinsecongestion.mp4',
          '/assets/nav-cf-usageoccasion-manage.mp4',
          '/assets/nav-removes99-wave10.mp4',
          '/assets/nav-vsnf-beginners.mp4',
          '/assets/nav-review1-wave10.mp4',
          '/assets/nav-cf-credibility-prolevel.png',
        ],
      },
    ],
  },
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
