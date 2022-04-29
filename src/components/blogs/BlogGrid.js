import React from 'react'
import {BlogGridStyles} from '../../styles/blog/BlogGridStyles'
import BlogItem from './BlogItem'

const BlogGrid = ({blogs}) => {
  return (
    <BlogGridStyles>
        {blogs && blogs.map((blog)=><BlogItem title={blog.title} 
        path={blog.slug.current}
        categories={blog.categories}
        image={{
          imageData:blog.mainImage.asset.gatsbyImageData
        }}
        publishedAt={blog.publishedAt}
        />)}
    </BlogGridStyles>
  )
}

export default BlogGrid