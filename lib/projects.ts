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
          'This campaign turned an unglamorous topic, nasal congestion, into something fun and shareable. The original UGC challenge only worked for people who already owned the device, so before launch it was reworked into a "Great Gunk Out" badge, social promo, and sweepstakes that anyone could join, shifting the goal to bring in new customers instead of just existing ones.',
        ],
        highlights: [
          {
            label: 'TV spot (:15)',
            text: "Contributed to storyboarding, sourced creators and visuals, and coordinated across teams to keep the campaign aligned. The spot reached 5.7M views and beat the brand's allergy-season benchmark on Cable, its biggest placement, by 0.42 points of ROAS.",
          },
          {
            label: 'Social video',
            text: 'Owned end to end: creator sourcing, concept and copy, wireframes, graphics, and editing. On Meta, it was a top click-driver and kept nearly 4 in 10 viewers watching well into the video.',
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
          'Owned this campaign end to end: concept, storyboarding, wireframing, and planning the asset waves in coordination with the Naväge and internal teams, through to video editing and promo graphics across both video and static formats.',
          'Results — on Meta, the Prime Day videos led the set in completion rate (about 25 to 26%) and earned a Top Performer rating. On TikTok, the same assets underperformed early on (fewer people watched past the first couple seconds, higher cost per click) and were paused. This pointed to a hook problem, not a quality problem, and directly shaped the next round of TikTok-specific edits.',
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
          "Owned the creative end to end: ideation, scripting, wireframing, graphics, video editing, and copywriting, along with sourcing influencers and creators and sizing every asset to Meta's safe zone for readability. Worked closely with strategy and project management throughout, aligning on messaging priorities (allergy vs. cold/flu season) and using performance data to guide what creative to build next and where to shift budget.",
        ],
        highlights: [
          {
            label: 'Platform performance revealed two very different jobs',
            text: 'TikTok built reach, Meta drove action. TikTok delivered the majority of total reach, while Meta converted far more efficiently on clicks, informing how budget was split across the two platforms going forward.',
          },
          {
            label: 'Creative testing surfaced a clear winner and a message-to-job map',
            text: '"VsNeti-Awkward" outperformed the rest of the set with a 5.9% click rate, becoming the top-performing asset in the Meta lineup. The test also revealed a pattern: comparison and influencer-style content drove clicks, while efficacy-focused messaging drove longer, full video views — an insight that shaped which type of creative to lean into for which goal.',
          },
          {
            label: 'Cut underperformers early',
            text: 'Worked with the project manager to pause several creatives before they spent anything, keeping budget focused on what was working.',
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
