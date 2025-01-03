// Config for the entire site.
module.exports = {
  // Site title.
  title: "Sikandar Khan",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Sikandar Khan.",

  // Site URLs.
  baseUrl: "https://www.tagglabs.ai/", // No slash at the end.
  shortBaseUrl: "www.tagglabs.ai", // Same as baseUrl but without http or https.

  // Your name.
  name: "Sikandar Heyat Khan",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/Sikandar-khan/SikandarKhan.jpeg",
    small: "https://d35hr0os3yc7ki.cloudfront.net/Sikandar-khan/SikandarKhan.jpeg",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://d35hr0os3yc7ki.cloudfront.net/Sikandar-khan/Sikandar_audio.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "Business Development Lead at Tagglabs (UAE)",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/Sikandar-khan/SikandarKhan.jpeg",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/Sikandar-khan/SikandarKhan.jpeg",
  },

  // Links to your other websites.
  // - "fa" is the FontAwesome code for the icon; for example, see here:
  //   https://fontawesome.com/v5.15/icons/globe-americas
  // - textColor is configured strangely because tailwind needs to pick up on it
  //   and avoid purging the class name -- see here:
  //   https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //   - See tailwind.config.js (in the root of this repo) for how to add custom
  //     colors.
  links: [
    {
      name: "Work",
      desc: "sikandar@tagglabs.ai",
      url: "mailto:sikandar@tagglabs.ai",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "LinkedIn",
      desc: "@SikandarHeyatKhan",
      url: "https://www.linkedin.com/in/sikandarphotowala/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
    {
      name: "Telegram",
      desc: "@experientialstoryteller",
      url: "https://t.me/experientialstoryteller",
      fa: "fab fa-telegram",
      textColor: "text-telegram",
    },
    {
      name: "Instagram",
      desc: "@sikandar_photowala",
      url: "https://www.instagram.com/sikandar_photowala",
      fa: "fab fa-instagram",
      textColor: "text-instagram",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/Sikandar-khan/Sikandar_contact.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
