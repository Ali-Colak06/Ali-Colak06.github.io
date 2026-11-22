// Fixed singleton IDs match studio/structure. Exact IDs also exclude drafts
// and release versions. Both locales are retrieved for this small static site.
export const siteContentQuery = `{
  "siteSettings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    name, professionalTitle{en, tr}, email, githubUrl, linkedinUrl
  },
  "homePage": *[_type == "homePage" && _id == "homePage"][0]{
    heroDescription{en, tr},
    currently{studying{en, tr}, learning{en, tr}, workingOn{en, tr}},
    contactCtaDescription{en, tr}
  },
  "aboutPage": *[_type == "aboutPage" && _id == "aboutPage"][0]{
    introduction{en, tr},
    education[]{institution{en, tr}, program{en, tr}, startYear, endYear}
  },
  "contactPage": *[_type == "contactPage" && _id == "contactPage"][0]{
    description{en, tr}
  }
}`;
