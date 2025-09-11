import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Steven Edmund",
  lastName: "Pratama",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Engineer",
  avatar: "/images/projects/project-01/imgprofile.jpg",
  email: "stevenedmund18@gmail.com",
  location: "Asia/Pontianak", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MonarcH1501",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/steven-edmund-pratama-83a339225/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/project/project-01/webticketing2.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Passionate in Backend And Mobile Developer</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Ticketing System</strong></>,
    href: "/work/Ticketing-System-Laravel-React",
  },
  subline: (
    <>
      I'm Steven Edmund , i am a Backend Developer, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am An Information Technology student currently pursuing a degree 
        at the Institute of Technology and Business Sabda Setia (ITBSS). In addition to academic pursuits, 
        I am also working as a Junior Web Programmer and IT Support at the Yayasan Gereja Protestan Kampung Bali (YGPKB). 
        Passionate about web development, mobile programming, and continuous learning in the tech industry.

      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "YGPKB",
        timeframe: "2023 - Present",
        role: "Web Programmer",
        achievements: [
          <>
            Developing and maintaining web-based systems using Laravel and React JS
          </>,
          <>
            Working closely with stakeholders to implement new functionalities
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/webticketing3.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/webticketing6.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/webticketing4.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/webticketing5.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "YGPKB",
        timeframe: "2023 - Present",
        role: "IT Support",
        achievements: [
          <>
            Troubleshooting and repairing computer hardware and software issues
          </>,
          <>
            Installing, configuring, and maintaining 
            network devices (routers, switches, access points)
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Institut teknologi dan Bisnis Sabda Setia",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Tanjungpura University",
        description: <>Studied software engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/figma-skill.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/figma-skill2.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/figma-skill3.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/figma-skill4.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Java Desktop Apps",
        description: <>Building desktop Apps with Java Netbeans</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/pos-admin.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/pos-kasir.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Web Development",
        description: <>Building Responsive and dynamic web using php and javascript framework</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/pos-admin.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/pos-kasir.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/gallery3-hor.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery5-hor.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery8-hor.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery6-hor.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery1-ver.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery2-ver.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery4-ver.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery7-ver.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social,home, about, work, gallery };
