module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Starter",
    author: {
      name: 'Ashrith',
      github: 'https://www.github.com/ashr81',
      phone: '+91-43243545345',
      twitter: 'https://twitter.com/ashrith381',
      image_url: 'https://pbs.twimg.com/profile_images/427296555805048832/mSI_6vM7_400x400.jpeg'    
    },
    description: 'Gatsby theme starter using contentful CMS'
  },
  plugins: [{
    resolve: "@ashr81/gatsby-theme-profile-builder",
    options: {
      contentFulCredentials: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  }],
}
