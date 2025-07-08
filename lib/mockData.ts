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
          text: 'Sarah is a senior media strategist with over 10 years of experience in digital marketing and media auditing.'
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

export const mockCategory: Category = {
  _id: 'mock-category-1',
  title: 'Media Strategy',
  slug: { current: 'media-strategy' }
}

export const mockBlogPost: BlogPost = {
  _id: 'mock-post-1',
  title: 'The Future of Digital Media Buying: AI-Powered Optimisation Strategies',
  slug: { current: 'future-digital-media-buying-ai-optimisation' },
  author: mockAuthor,
  categories: [mockCategory],
  publishedAt: '2024-01-15T10:00:00Z',
  excerpt: 'Discover how artificial intelligence is revolutionising media buying and optimisation strategies, leading to unprecedented ROI improvements and campaign efficiency.',
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
          text: 'The landscape of digital media buying is undergoing a seismic shift, driven by the integration of artificial intelligence and machine learning technologies. As we move into 2024, forward-thinking brands are leveraging AI-powered optimisation strategies to achieve unprecedented levels of campaign performance and ROI.'
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
          text: 'The AI Revolution in Media Buying'
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
          text: 'Traditional media buying relied heavily on historical data and manual optimisation processes. However, AI-powered systems can now analyse vast amounts of real-time data, including user behaviour, market trends, and competitive activity, to make split-second decisions about bid adjustments, audience targeting, and creative optimisation.'
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
          text: 'Key Benefits of AI-Powered Optimisation'
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
          text: 'Real-time bid optimisation based on performance signals'
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
          text: 'Predictive audience targeting using machine learning algorithms'
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
          text: 'Automated creative testing and optimisation'
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
          text: 'Cross-channel attribution and budget allocation'
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
          text: 'Implementation Strategies'
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
          text: 'To successfully implement AI-powered media buying strategies, brands should start with a phased approach. Begin by integrating AI tools into existing campaigns, gradually expanding their use as you build confidence and see results. Focus on platforms that offer transparent reporting and allow for human oversight of AI decisions.'
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
          text: 'The future belongs to those who can harness the power of AI while maintaining the human touch that makes campaigns truly resonate with audiences.'
        }
      ]
    }
  ]
}

export const mockPosts: BlogPost[] = [mockBlogPost]
export const mockCategories: Category[] = [mockCategory] 