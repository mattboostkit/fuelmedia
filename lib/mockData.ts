import { BlogPost, Category, Author } from '@/types/sanity'

export const mockAuthor: Author = {
  _id: 'mock-author-1',
  name: 'Sarah Johnson',
  slug: { current: 'sarah-johnson' },
  bio: [
    {
      _type: 'block',
      _key: 'bio-1',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Sarah is a senior media strategist with over 15 years of experience in UK media auditing. She has helped leading British brands save millions through strategic media optimisation and agency negotiations.'
        }
      ]
    }
  ],
  image: {
    _type: 'image',
    asset: {
      _ref: 'image-mock-author-1',
      _type: 'reference'
    }
  }
}

export const mockAuthor2: Author = {
  _id: 'mock-author-2',
  name: 'James Mitchell',
  slug: { current: 'james-mitchell' },
  bio: [
    {
      _type: 'block',
      _key: 'bio-1',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'James leads our agency pitch management practice, having overseen 200+ successful pitches for UK advertisers. His expertise in contract negotiation has saved clients over £50M in agency fees.'
        }
      ]
    }
  ],
  image: {
    _type: 'image',
    asset: {
      _ref: 'image-mock-author-2',
      _type: 'reference'
    }
  }
}

export const mockCategories: Category[] = [
  {
    _id: 'mock-category-1',
    title: 'Media Auditing',
    slug: { current: 'media-auditing' }
  },
  {
    _id: 'mock-category-2',
    title: 'Agency Management',
    slug: { current: 'agency-management' }
  },
  {
    _id: 'mock-category-3',
    title: 'UK Market Insights',
    slug: { current: 'uk-market-insights' }
  },
  {
    _id: 'mock-category-4',
    title: 'Performance Optimisation',
    slug: { current: 'performance-optimisation' }
  }
]

const ukMediaAuditPost: BlogPost = {
  _id: 'mock-post-1',
  title: 'UK Media Audit Guide 2024: How to Save 20-30% on Your Advertising Spend',
  slug: { current: 'uk-media-audit-guide-2024' },
  author: mockAuthor,
  categories: [mockCategories[0], mockCategories[2]],
  publishedAt: '2024-01-15T10:00:00Z',
  excerpt: 'Complete guide to conducting a media audit in the UK market. Learn how leading British brands are saving millions through comprehensive audits and strategic optimisation.',
  mainImage: {
    _type: 'image',
    asset: {
      _ref: 'image-mock-post-1',
      _type: 'reference'
    }
  },
  body: [
    {
      _type: 'block',
      _key: 'intro',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'UK advertisers are leaving millions on the table through inefficient media buying, excessive agency fees, and poor performance tracking. Our analysis of 200+ UK media audits reveals that brands typically save 20-30% of their media spend through comprehensive auditing - that\'s an average of £2.3M per advertiser annually.'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'section-1',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Why UK Advertisers Need Regular Media Audits'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'content-1',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'The UK advertising landscape has become increasingly complex with the rise of programmatic buying, multiple agency relationships, and fragmented media channels. Without regular auditing, advertisers face hidden costs, transparency issues, and suboptimal performance. Recent regulatory changes and the emphasis on data privacy make independent auditing more critical than ever.'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'section-2',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Key Areas to Audit in Your UK Media Investment'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'list-1',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Media buying efficiency - Are you getting competitive CPMs for the UK market?'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'list-2',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Agency fees and transparency - Hidden costs in your agency agreements'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'list-3',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Digital performance metrics - Viewability, brand safety, and fraud prevention'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'list-4',
      listItem: 'bullet',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Contract terms - Ensuring competitive rates and proper governance'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'section-3',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'The UK Media Audit Process: What to Expect'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'content-2',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'A comprehensive UK media audit typically takes 4-6 weeks and involves analysing 12-24 months of media data. The process includes reviewing all media plans, invoices, contracts, and performance reports. We benchmark your spending against UK industry standards and identify specific areas for cost reduction and performance improvement. Most audits pay for themselves within the first quarter through immediate savings identified.'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'conclusion',
      style: 'blockquote',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'In today\'s competitive UK market, regular media auditing isn\'t optional - it\'s essential for maintaining competitive advantage and ensuring every pound of your media budget works harder.'
        }
      ]
    }
  ]
}

const agencyPitchPost: BlogPost = {
  _id: 'mock-post-2',
  title: 'How to Run a Successful Media Agency Pitch in the UK: Complete 2024 Guide',
  slug: { current: 'successful-media-agency-pitch-uk-guide' },
  author: mockAuthor2,
  categories: [mockCategories[1]],
  publishedAt: '2024-01-10T09:00:00Z',
  excerpt: 'Step-by-step guide to running an effective agency pitch process in the UK. From brief development to contract negotiation, ensure you select the right partner.',
  mainImage: {
    _type: 'image',
    asset: {
      _ref: 'image-mock-post-2',
      _type: 'reference'
    }
  },
  body: [
    {
      _type: 'block',
      _key: 'intro-2',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Selecting a new media agency is one of the most critical decisions a UK advertiser can make. With agency fees typically representing 10-15% of media spend, and agencies controlling billions in media investments, the stakes couldn\'t be higher. This guide draws on our experience managing 200+ UK agency pitches.'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'section-2-1',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'When to Review Your Agency Relationship'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'content-2-1',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'UK best practice suggests reviewing agency relationships every 3-5 years. However, immediate review may be warranted if you\'re experiencing declining performance, transparency concerns, or significant business changes. The average UK agency relationship lasts 4.2 years, but successful partnerships can extend much longer with proper management.'
        }
      ]
    }
  ]
}

const contractNegotiationPost: BlogPost = {
  _id: 'mock-post-3',
  title: '5 Contract Clauses Costing UK Advertisers Millions: Negotiation Guide',
  slug: { current: 'media-contract-negotiation-uk-guide' },
  author: mockAuthor,
  categories: [mockCategories[1], mockCategories[2]],
  publishedAt: '2024-01-08T11:00:00Z',
  excerpt: 'Discover the hidden contract terms that drain UK advertiser budgets. Learn negotiation strategies that typically save 20-40% on agency fees.',
  mainImage: {
    _type: 'image',
    asset: {
      _ref: 'image-mock-post-3',
      _type: 'reference'
    }
  },
  body: [
    {
      _type: 'block',
      _key: 'intro-3',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Our analysis of 500+ UK media contracts reveals that advertisers are losing millions through poorly negotiated terms. The most damaging clauses often appear reasonable at first glance but create significant financial exposure over time.'
        }
      ]
    }
  ]
}

const performanceReviewPost: BlogPost = {
  _id: 'mock-post-4',
  title: 'Quarterly Media Performance Reviews: The UK Advertiser\'s Secret Weapon',
  slug: { current: 'quarterly-media-performance-reviews-uk' },
  author: mockAuthor2,
  categories: [mockCategories[3]],
  publishedAt: '2024-01-05T10:30:00Z',
  excerpt: 'Why UK\'s top advertisers conduct quarterly performance reviews and how this practice drives continuous improvement in media ROI.',
  mainImage: {
    _type: 'image',
    asset: {
      _ref: 'image-mock-post-4',
      _type: 'reference'
    }
  },
  body: [
    {
      _type: 'block',
      _key: 'intro-4',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Leading UK advertisers don\'t wait for annual reviews to optimise performance. They implement quarterly performance assessments that drive continuous improvement and typically deliver 15-20% better ROI than brands relying on annual reviews alone.'
        }
      ]
    }
  ]
}

const digitalTransparencyPost: BlogPost = {
  _id: 'mock-post-5',
  title: 'Digital Media Transparency in the UK: What Every Advertiser Must Know',
  slug: { current: 'digital-media-transparency-uk-guide' },
  author: mockAuthor,
  categories: [mockCategories[0], mockCategories[2]],
  publishedAt: '2024-01-03T09:15:00Z',
  excerpt: 'Navigate the complex world of UK digital media transparency. From programmatic fees to data ownership, protect your investment.',
  mainImage: {
    _type: 'image',
    asset: {
      _ref: 'image-mock-post-5',
      _type: 'reference'
    }
  },
  body: [
    {
      _type: 'block',
      _key: 'intro-5',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Digital media transparency remains a critical issue for UK advertisers. With programmatic buying now representing over 80% of digital display spend, understanding where your money goes has never been more important. Recent UK regulatory developments make transparency non-negotiable.'
        }
      ]
    }
  ]
}

export const mockPosts: BlogPost[] = [
  ukMediaAuditPost,
  agencyPitchPost,
  contractNegotiationPost,
  performanceReviewPost,
  digitalTransparencyPost
] 