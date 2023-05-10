export interface webInterface {
  image: String; // path to image in images folder
  websiteUrl: String;
  webdescription: String;
}
export interface Project {
  type: string;
  description: string;
  projects: webInterface[];
}

export const websites: webInterface[] = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fdownload%20(2).png?alt=media&token=d2351d12-d566-4803-b94c-898667318bfd",
    websiteUrl: "www.website.com",
    webdescription: "EighthNote Music Studio website",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fdownload.png?alt=media&token=3076d456-2d1c-4399-9a5a-ac58673ec179",
    websiteUrl: "https://github.com/mathewcyrus/Arcade-hotel-front-end.git",
    webdescription: "Arcade hotel website",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fmobile%20(1).png?alt=media&token=bb80cd36-9cac-471d-a382-50e2ab9cf3ae",
    websiteUrl: "http://mathewcyrus-portifolio.vercel.app",
    webdescription: "My Portifolio website",
  },
];

export const seoProjects: webInterface[] = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fdownload%20(2).png?alt=media&token=d2351d12-d566-4803-b94c-898667318bfd",
    websiteUrl: "www.website.com",
    webdescription: "EighthNote Music Studio website",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fdownload.png?alt=media&token=3076d456-2d1c-4399-9a5a-ac58673ec179",
    websiteUrl: "https://github.com/mathewcyrus/Arcade-hotel-front-end.git",
    webdescription: "Arcade hotel website",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fmobile%20(1).png?alt=media&token=bb80cd36-9cac-471d-a382-50e2ab9cf3ae",
    websiteUrl: "http://mathewcyrus-portifolio.vercel.app",
    webdescription: "My Portifolio website",
  },
];
