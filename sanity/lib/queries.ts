import { groq } from 'next-sanity'

export const postsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "author": author->{
      name,
      image
    },
    "categories": categories[]->{
      _id,
      title
    }
  }
`

export const postQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    body,
    "author": author->{
      name,
      image,
      bio
    },
    "categories": categories[]->{
      _id,
      title
    }
  }
`

export const teamQuery = groq`
  *[_type == "teamMember"] | order(name asc) {
    _id,
    name,
    role,
    image,
    bio,
    socialLinks
  }
`

export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    client,
    challenge,
    solution,
    results,
    images
  }
`

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    description
  }
`