import { format } from "date-fns";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { render } from "react-dom";
import { BlogItemStyles } from "../../styles/blog/BlogItemStyles";
import ParagraphText from "../typography/ParagraphText";
import { Title } from "../typography/Title";

const BlogItem = ({ title, path, image, publishedAt, categories }) => {
  console.log(categories[0].title)
  
  return (
    <BlogItemStyles>
      <Link to={`/blogs/${path}`}>
        <GatsbyImage image={image.imageData} alt={title} className="img" />
      </Link>
      <Link to={`/blogs/${path}`}>
        <Title>{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), "p, MMMM dd, yyyy")}
        </ParagraphText>
      )}
      
      
    </BlogItemStyles>
  );
};

export default BlogItem;
