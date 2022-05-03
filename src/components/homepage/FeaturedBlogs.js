import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FeaturedBlogsStyles } from "../../styles/homePage/FeaturedBlogsStyles";
import { SectionTitle } from "../typography/Title";
import  ParagraphText  from "../typography/ParagraphText";
import BlogGrid from "../blogs/BlogGrid";

const FeaturedBlogs = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost {
        nodes {
          title
          slug {
            current
          }
          publishedAt
          id
          categories {
            title
          }
          mainImage {
            asset {
              gatsbyImageData
            }
          }
          body {
            children {
              text
            }
          }
        }
      }
    }
  `);
  const allPosts = data.allSanityPost.nodes;
  

  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured Posts on</SectionTitle>
      <ParagraphText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nequ necessitatibus, vitae autem ratione natu consequatur accusantium quaerat eveniet esse repudiandae non magnam. Saepe consectetur aliquam praesentium atque nemo eius perspiciatis.
      </ParagraphText>
      <BlogGrid blogs={allPosts}></BlogGrid>
    </FeaturedBlogsStyles>
  );
};

export default FeaturedBlogs;
