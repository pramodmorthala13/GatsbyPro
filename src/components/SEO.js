import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

const SEO = ({title,description}) => {
    const {site}=useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `)
    
    const seo={
        title:title?`${title}-${site.siteMetadata.title}`:site.siteMetadata.title,
        description:description||site.siteMetadata.description
    }
  return (
    <Helmet title={seo.title}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description}/>
      <script src="https://cdn.jsdelivr.net/gh/PostHog/cookie-banner@main/public/cookiebanner.min.js"></script>
      <script src="cookieBanner.js"></script>
    </Helmet>
  );
};

export default SEO;
