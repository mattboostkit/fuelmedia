export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  bio?: any[]
  image?: SanityImage
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  author?: Author
  categories?: Category[]
  publishedAt: string
  mainImage?: SanityImage
  excerpt?: string
  body?: any[]
}

export interface PortableTextBlock {
  _type: 'block'
  _key: string
  style?: string
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: any[]
}