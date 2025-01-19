export const APP_CONSTANT = {
  _UI: "_UI",
  TRY_FREE_PREVIEW_BTN: "TRY_FREE_PREVIEW",
  LOGIN_BTN: "LOGIN",
  BUY_CTA_BTN: "BUY_BUTTON",
  HEADER_BANNER_CLICK: "HEADER_BANNER_CLICK",
  FREE_READ_PREVIEW: "FREE_READ_PREVIEW",

  APP_SECTION: {
    LEAD_MODAL: "LEAD_MODAL",
    PAYMENT_MODAL: "PAYMENT_MODAL",
    COUPON_MODAL: "COUPON_MODAL",
  },

  LOCAL_STORAGE: {
    LEAD_INFO: "leadInfo",
  },

  PAYMENT_MODE: {
    STRIPE: "STRIPE",
    GUMROAD: "GUMROAD",
  },
};

export const LEAD_COLLECTION_CHAPTERS = {
  "pricing-for-pm": [
    "pm-interview/1-whatsapp-senior-pm",
    "pm-interview/2-twitter-pm-elon-musk",
  ],
};

export const topCompanies = [
  {
    logo: "/1.svg",
  },
  {
    logo: "/2.svg",
  },
  {
    logo: "/3.svg",
  },
  {
    logo: "/4.svg",
  },
  {
    logo: "/5.svg",
  },
  {
    logo: "/9.svg",
  },
  {
    logo: "/10.svg",
  },
  {
    logo: "/6.svg",
  },
  {
    logo: "/7.svg",
  },
  {
    logo: "/8.svg",
  },
];

export const keyChapterData = {
  "api-for-pm": [
    {
      title: "Introduction to APIs",
      description: "Why do we even need an API? What is an API?",
      color: "#91e6c1",
      slug: "",
    },
    {
      title: "Types of APIs",
      description: "Learn about REST, SOAP, GraphQL, Websocket, webhooks etc.",
      color: "#91b0e6",
      slug: "",
    },
    {
      title: "Request & Response",
      description: "Learn about HTTP request, response, endpoint etc.",
      color: "#c091e6",
      slug: "",
    },
    {
      title: "Work with Postman",
      description: "Learn how to make HTTP requests using Postman",
      color: "#e6bc91",
      slug: "",
    },
    {
      title: "API Integration",
      description: "Build sample app by integrating with 3rd party APIs",
      color: "rgb(181 182 255)",
      slug: "",
    },
    {
      title: "Others",
      description: "Learn about webhooks, SDKs, Oauth, API rate limiting, etc",
      color: "#e6919e",
      slug: "",
    },
  ],

  "pricing-for-pm": [
    {
      title: "Introduction to Pricing & Monetisation",
      description:
        "Pricing & monetisation is a complex jigsaw puzzle. Learn to crack it",
      color: "#91e6c1",
      slug: "introduction",
    },
    {
      title: "Pricing Strategies",
      description:
        "Learn how Netflix failed at creating the right pricing strategy for India",
      color: "#91b0e6",
      slug: "pricing-strategy",
    },
    {
      title: "Pricing Models",
      description: "Learn about freemium, subscription & tiered pricing",
      color: "#c091e6",
      slug: "pricing-model",
    },
    {
      title: "Pricing Psychology",
      description:
        "Learn cool psychology hacks like decoy pricing, anchoring etc.",
      color: "#e6bc91",
      slug: "pricing-psychology",
    },
    {
      title: "Case Studies",
      description:
        "Learn case studies of Netflix, Bumble, LinkedIn, Unacademy, Jio",
      color: "rgb(181 182 255)",
      slug: "pricing-strategy/4-price-skimming",
    },
    {
      title: "Interview Preparation",
      description: "Get 2 free pricing & monetisation solved interview cases",
      color: "#e6919e",
      slug: "introduction",
    },
  ],

  "ux-writing": [
    {
      title: "Introduction to UX Writing",
      description: "What is UX Writing? Why is it important?",
      color: "#91e6c1",
      slug: "product-design",
    },
    {
      title: "UX Writing examples",
      description:
        "Learn how to write copy for a tooltip, errors, empty state etc.",
      color: "#91b0e6",
      slug: "product-improvement",
    },
    {
      title: "Collaboration",
      description: "How do UX writers work with product managers & designers?",
      color: "#c091e6",
      slug: "root-cause-analysis",
    },
    {
      title: "Processes & tools",
      description:
        "Learn how to leverage figma for wireframing & collaboration",
      color: "#e6bc91",
      slug: "metrics",
    },
    {
      title: "Tone & voice",
      description: "Learn how brands communicate with words",
      color: "rgb(181 182 255)",
      slug: "product-strategy",
    },
    {
      title: "Others",
      description: "Learn about content first design and other best practises",
      color: "#e6919e",
      slug: "guess-estimate",
    },
  ],
};

export const pricingCardText = {
  "api-for-pm": [
    {
      des: "Product Management of APIs",
    },
    {
      des: "Product Management of APIs",
    },
    {
      des: "API Business Model - Pricing your API",
    },
    {
      des: "Why is freemium Spotify's biggest leverage?",
    },
    {
      des: "Why did Swiggy launch Super at a low price?",
    },
    {
      des: "Why did Netflix premium pricing fail in India?",
    },
  ],
  "pricing-for-pm": [
    {
      des: "Why is the biggest competition of Grammarly isn't anyone else but Grammarly itself?",
    },
    {
      des: "How did LinkedIn and e-bay monetise themselves by using the power of data?",
    },
    {
      des: "How does booking.com create a scarcity effect?",
    },
    {
      des: "Why is freemium Spotify's biggest leverage?",
    },
    {
      des: "Why did Swiggy launch Super at a low price?",
    },
    {
      des: "Why did Netflix premium pricing fail in India?",
    },
  ],
};
export const apiForPmsFaq=[
  {
    question: "Do I have access to the recordings?",
    answer: "Yes, you will have lifetime access to the session recordings.",
  },
  {
    question: "How long are the sessions?",
    answer: "The sessions typically run for 2 hours and 15 minutes.",
  },
  {
    question: "I have a query about the session. Whom should I contact?",
    answer:
      "For any session-related queries, please reach out to the instructor on WhatsApp at 6377485246.",
  },
  {
    question: "In which roles are Product Managers expected to know about APIs?",
    answer:
      "API knowledge is critical for Product Managers working in platform-based products like Salesforce, Oracle, or fintech companies such as Stripe, Adyen, and Razorpay. These roles often require PMs to design APIs and build API products that meet customer needs.",
  },
  {
    question:
      "What is the role bifurcation between a Product Manager designing an API and a Senior Engineer/Architect?",
    answer:
      "A Product Manager views APIs as products and focuses on the 'who,' 'what,' and 'why' aspects—understanding the customers, their personas, and their needs. On the other hand, a Senior Engineer or Architect concentrates on the 'how,' focusing on the technical implementation, scalability, and architecture of the API.",
  },
  {
    question: "Will there be any hands-on sessions?",
    answer:
      "Yes, there will be three hands-on sessions. These include exploring the YouTube API to search for a keyword, making requests to a payments API, and participating in a breakout room activity to collaboratively design an API.",
  },
]

export const apiForPmFaq = [
  {
    question: "How long can I access this course?",
    answer: "You will have lifetime access to the course.",
  },
  {
    question: "How can I purchase the ebook?",
    answer:
      "To purchase the course, click on the Buy Now button. Once the payment is successful, please check your dashboard to view the course content.",
  },
  {
    question: "Can I pay via UPI to purchase the course?",
    answer:
      "Yes, to purchase this course via UPI, please reach out to us on chat support available on bottom right or write to us at xplainerr.com@gmail.com",
  },
  {
    question: "I have completed the payment, how can I access the course?",
    answer:
      "Once the payment is complete, your course will be visible in the dashboard section. If you encounter any issues, please try logging out and logging back in. If the problem persists, please reach out to us via the chat support available at the bottom right or send us an email at xplainerr.com@gmail.com.",
  },
];

export const allCourses = [
  {
    title: "API for Product Manager",
    slug: "api-for-pm",
    icon: "apiForPm.svg",
    instructor: "Deepak Kumar",
    coverImage: "courses/Api__1_.jpg",
  },
  {
    title: "Pricing & Monetization",
    slug: "pricing-for-pm",
    icon: "pricing.svg",
    instructor: "Deepak Kumar",
    coverImage: "courses/Api__1_.jpg",
  },

  {
    title: "UX Writing 101",
    slug: "ux-writing",
    icon: "users.svg",
    instructor: "Deepak Kumar",
    coverImage: "courses/pricing-for-pm",
  },

  // {
  //   title: "How to do user interviews",
  //   slug: "user-interview",
  //   icon: "users.svg",
  //   instructor: "Deepak Kumar",
  //   coverImage: "courses/pricing-for-pm",
  // },
];

export const allCohort = [
  {
    title: "Tech for Product Managers",
    category: "Product Management",
    slug: "tech-for-product-managers",
    description: "Top rated, beginner friendly",
    status: "upcoming",
    icon: "noCode.svg",
  },
  {
    title: "API for Product Managers",
    category: "Product Management",
    slug: "api-for-pms",
    description: "Top rated, beginner friendly",
    status: "upcoming",
    icon: "noCode.svg",
  },
];

export const allQuiz = [
  {
    title: "Product Management",
    category: "quiz",
    slug: "product-management",
    description: "Top rated, beginner friendly",
    status: "upcoming",
    icon: "apiForPm.svg",
  },
  {
    title: "Growth & GTM",
    category: "quiz",
    slug: "growth-gtm",
    description: "Top rated, beginner friendly",
    status: "upcoming",
    icon: "noCode.svg",
  },
  {
    title: "Software engineering",
    category: "quiz",
    slug: "engineering",
    description: "Top rated, beginner friendly",
    status: "upcoming",
    icon: "noCode.svg",
  },
];

export const mentors = [
  // {
  //   name: "Deepak Kumar",
  //   image:
  //     "https://ik.imagekit.io/zwxa4kttt/1621098083610.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1677357898740",
  //   job1: "Product Manager at Razorpay ",
  //   job2: "Ex-Internshala | Ex- Frontbench",
  // },
  {
    name: "Deepak Kumar",
    image:
      "https://ik.imagekit.io/zwxa4kttt/1661931118137.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1677357864998",
    job1: "SDE -2 @ Airmeet",
    job2: "Ex - 91 wheels | Flux Auto (YC 18)",
  },
  {
    name: "Naman Goyal",
    image:
      "https://ik.imagekit.io/zwxa4kttt/naman.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1677357952363",
    job1: "Product Manager at Internshala ",
    job2: "Ed-tech enthusiast",
  },
];
export const authors = {
  "api-for-pm": [
    {
      name: "Deepak Kumar",
      profile:
        "https://ik.imagekit.io/zwxa4kttt/1661931118137.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1677357864998",
      job: "Software Engineer - II",
      description:
        "Deepak currently works as a Software engineer 2 at Airmeet and has taught API to 100s of aspiring product managers and software engineers with API Masterclass series. Reach out to him on Linkedin. ",
    },
  ],
};

export const offers = [
  {
    description: "Product Management Aspirants",
  },
  {
    description: "Platform Product Managers",
  },
  {
    description: "Experienced Product Managers wanting to know more about APIs",
  },
  {
    description: "API Product Managers",
  },
  {
    description: "Technical product managers",
  },
  {
    description: "Business analysts",
  },
  {
    description: "Startups and Product Teams",
  },
];

export const certificateTexts = [
  {
    description:
      "Receive an instructor signed certificate with the institution’s logo to verify your achievements and increase your job prospects",
    icon: "Ci1.svg",
  },
  {
    description:
      "Add the certificate to your CV or your resume or post it directly on LinkedIn. You can even post it on Instagram and Twitter.",
    icon: "Ci2.svg",
  },
  {
    description:
      "Use your certificate to enhance your professional credibility and stand out among your peers!",
    icon: "Ci3.svg",
  },
];

export const footerColOne = [
  {
    slug: "1",
    text: "Link One",
  },
  {
    slug: "2",
    text: "Link Two",
  },
  {
    slug: "3",
    text: "Link Three",
  },
  {
    slug: "4",
    text: "Link Four",
  },
  {
    slug: "5",
    text: "Link Five",
  },
];
export const footerColTwo = [
  {
    slug: "6",
    text: "Link Six",
  },
  {
    slug: "7",
    text: "Link Seven",
  },
  {
    slug: "8",
    text: "Link Eight",
  },
  {
    slug: "9",
    text: "Link Nine",
  },
  {
    slug: "10",
    text: "Link Ten",
  },
];
export const footerColThree = [
  {
    slug: "11",
    text: "Link Eleven",
  },
  {
    slug: "12",
    text: "Link Twelve",
  },
  {
    slug: "13",
    text: "Link Thirteen",
  },
  {
    slug: "13",
    text: "Link Fourteen",
  },
  {
    slug: "15",
    text: "Link Fifteen",
  },
];

export const policy = [
  {
    slug: "",
    text: "Privacy Policy",
  },
  {
    slug: "",
    text: "Terms of Service ",
  },
  {
    slug: "",
    text: "Cookies Settings",
  },
];

export const upgradeItem = [
  {
    title: "Entire course library",
    des: "Get full access to our course library, with hours of lessons and example answers.",
  },
  {
    title: "Mock interview videos",
    des: "Watch experts answer real interview questions in hundreds of videos.",
  },
  {
    title: "Private Slack access",
    des: "Join our daily discussions with 10,000 other Exponent members on Slack.",
  },
  {
    title: "Live daily practice",
    des: "With our new peer practice tool, you can practice with other members every day.",
  },
];

export const myCourses = [
  {
    title: "API for Product Manager",
    permalink: "api-for-pm",
    coverImage: "myCourse.svg",
    ratings: "",
    instructor: "Deepak Kumar",
    progress: 10,
  },
  {
    title: "Pricing & Monetisation",
    permalink: "pricing-for-pm",
    coverImage: "myCourse.svg",
    ratings: "",
    instructor: "Deepak Kumar",
    progress: 10,
  },
];

export const allCourse = [
  {
    title: "UX Writing",
    coverImage: "excel.png",
    category: "Product Management",
    categorySlug: "product-management",
    ratings: "4.0",
    learners: "3,000",
    slug: "",
  },
  {
    title: "Docker Fundamentals",
    coverImage: "data-science.png",
    category: "Programming",
    categorySlug: "programming",
    ratings: "4.5",
    learners: "2,000",
    slug: "",
  },
  {
    title: "API For Product Manager",
    coverImage: "excel.png",
    category: "Product Management",
    categorySlug: "product-management",
    ratings: "5.0",
    learners: "40,000",
    slug: "",
  },
  {
    title: "Master ChatGPT",
    coverImage: "digital-marketing.png",
    category: "Product Management",
    categorySlug: "product-management",
    ratings: "4.0",
    learners: "25,000",
    slug: "",
  },
  {
    title: "Be a Github Pro",
    coverImage: "c-plus-plus.png",
    category: "Programming",
    categorySlug: "programming",
    ratings: "3.5",
    learners: "12,000",
    slug: "",
  },
  {
    title: "A to Z Of Pricing",
    coverImage: "digital-marketing.png",
    category: "Product Management",
    categorySlug: "product-management",
    ratings: "5.0",
    learners: "30,000",
    slug: "",
  },
  {
    title: "Postman 101",
    coverImage: "data-science.png",
    category: "Product Management",
    categorySlug: "product-management",
    ratings: "4.5",
    learners: "34,000",
    slug: "",
  },
  {
    title: "API For Product Manager",
    coverImage: "digital-marketing.png",
    category: "Product Management",
    categorySlug: "product-management",
    ratings: "5.0",
    learners: "40,000",
    slug: "",
  },
  {
    title: "JavaScript Fundamentals",
    coverImage: "c-plus-plus.png",
    category: "Programming",
    categorySlug: "programming",
    ratings: "4.0",
    learners: "3,003",
    slug: "",
  },
];

export const courseCategories = [
  {
    name: "Most Popular",
    slug: "most-popular",
  },
  {
    name: "Product Management",
    slug: "product-management",
  },
  {
    name: "Programming",
    slug: "programming",
  },
  {
    name: "Business & Management",
    slug: "business-Management",
  },
  {
    name: "Core Engineering",
    slug: "core-engineering",
  },
  {
    name: "Design",
    slug: "design",
  },
  {
    name: "Creative Arts",
    slug: "creative-arts",
  },
  {
    name: "Language",
    slug: "language",
  },
  {
    name: "Career Development",
    slug: "career-development",
  },
  {
    name: "Architecture",
    slug: "architecture",
  },
  {
    name: "Online Courses",
    slug: "online-courses",
  },
];

export const learningItems = [
  {
    title:
      "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
  },
  {
    title:
      "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
  },
  { title: "After the course you will be able to build ANY website you want." },
  {
    title:
      "Build fully-fledged websites and web apps for your startup or business.",
  },
  { title: "Work as a freelance web developer." },
  { title: "Master frontend development with React" },
  { title: "Master backend development with Node" },
  { title: "Learn professional developer best practices." },
];

export const courseIncludes = [
  {
    title: "7 coding exercises",
  },
  {
    title: "75 articles",
  },
  {
    title: "81 downloadable resources",
  },
  {
    title: "Full lifetime access",
  },
  {
    title: "Certificate of completion",
  },
];

export const IMAGE_KIT_CDN = "https://ik.imagekit.io/zwxa4kttt/";

export const ALL_COURSES = {
  API_FOR_PM: "api-for-pm",
  PRICING_FOR_PM: "pricing-for-pm",
  UX_WRITING_101: "ux-writing",
};

export const ENV = {
  TEST: "test",
  LIVE: "live",
};

export const DEFAULT_PRICE_LIST = {
  [ALL_COURSES.API_FOR_PM]: {
    [ENV.TEST]: "price_1Ms0b3SBqetirFH0Nt5qV6aQ",
    [ENV.LIVE]: "price_1Mu0ocSBqetirFH0s6YkBmCF",
  },
  [ALL_COURSES.PRICING_FOR_PM]: {
    [ENV.TEST]: "price_1Mtz8QSBqetirFH0Cj3MsCKs",
    [ENV.LIVE]: "price_1MuhpWSBqetirFH0hqhtdA0u",
  },
};

export const BASE_URL = "https://www.xplainerr.com/";
