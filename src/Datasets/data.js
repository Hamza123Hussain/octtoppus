export const backendUrl = process.env.PUBLIC_URL
const hostname = window.location.hostname

export const APIURL =
  process.env.REACT_APP_API_METHOD + hostname + process.env.REACT_APP_API_URL
// export const APIURL = process.env.REACT_APP_BACKEND_URL;
// console.log(APIURL);
export const bg_image_4 = backendUrl + 'images/our_vision1.jpg'
export const bg_image_1 = backendUrl + 'images/bg-image-1.jpg'
export const bg_image_5 = backendUrl + 'images/bg-image-5.jpeg'
export const iphonesvg = backendUrl + 'images/svg/iphone.svg'
export const contact_form_bg =
  backendUrl + 'images/contact-form-background-image.jpg'
export const enterpriseHero_bg_image = backendUrl + 'images/expertise_hero.gif'
export const facebook = 'https://www.facebook.com/octtoppus'
export const instagram = 'https://www.instagram.com/octtoppus'
export const linkedin = 'https://www.linkedin.com/company/octtoppus/'

export const team_companies = [
  {
    imagelink: 'ABN-AMRO_Logo.png',
    imageALT: 'ABN AMRO',
  },
  {
    imagelink: 'belmatt.png',
    imageALT: 'Belmatt Logo',
  },
  {
    imagelink: 'Bose-Logo.png',
    imageALT: 'Bose',
  },
  {
    imagelink: 'cartier-logo.png',
    imageALT: 'Cartier',
  },
  {
    imagelink: 'commnuity-fibre.png',
    imageALT: 'Community Fibre',
  },
  {
    imagelink: 'deloitte-logo.png',
    imageALT: 'Deloitte',
  },
  {
    imagelink: 'facebook-logo.webp',
    imageALT: 'Facebook',
  },
  {
    imagelink: 'HPJ-Japan-Logo.png',
    imageALT: 'House of Representatives Japan',
  },
  {
    imagelink: 'kpmg-logo.png',
    imageALT: 'KPMG Logo',
  },
  {
    imagelink: 'lactalis.png',
    imageALT: 'Lactalis Logo',
  },
  {
    imagelink: 'Medecins-san-logo.png',
    imageALT: 'takeda',
  },
  {
    imagelink: 'pwc-logo.png',
    imageALT: 'PWC Logo',
  },
  {
    imagelink: 'Takeda_logo.png',
    imageALT: 'Takeda',
  },
]

export const languageLogos = [
  {
    imagelink: 'aws_Logo.svg',
    imageALT: 'AWS',
  },
  {
    imagelink: 'Android_logo.png',
    imageALT: 'Android',
  },
  {
    imagelink: 'azure-logo.png',
    imageALT: 'Microsoft Azure',
  },
  {
    imagelink: 'docker-mark-blue.png',
    imageALT: 'Docker',
  },
  {
    imagelink: 'Figma-logo.png',
    imageALT: 'Figma',
  },
  {
    imagelink: 'IOS-Logo.png',
    imageALT: 'App Store IOS',
  },
  {
    imagelink: 'java-logo.png',
    imageALT: 'Java',
  },
  {
    imagelink: 'jira-logo.png',
    imageALT: 'Jira',
  },
  {
    imagelink: 'Python_logo.png',
    imageALT: 'Python',
  },
  {
    imagelink: 'MongoDB_Logo.png',
    imageALT: 'MongoDB',
  },
  {
    imagelink: 'Mysql_logo.png',
    imageALT: 'MySQL',
  },
  {
    imagelink: 'Nodejs-icon.png',
    imageALT: 'Nodejs',
  },
  {
    imagelink: 'oracle-logo.png',
    imageALT: 'Oracle',
  },
  {
    imagelink: 'Kubernetes_logo.png',
    imageALT: 'Kubernetes',
  },
  {
    imagelink: 'SAP_logo.png',
    imageALT: 'SAP',
  },
  {
    imagelink: 'googlecloudplatform-icon.png',
    imageALT: 'Google Cloud Platform',
  },
  {
    imagelink: 'HTML5_icon.png',
    imageALT: 'HTML5',
  },
  {
    imagelink: 'CSS3_icon.png',
    imageALT: 'CSS3',
  },
  {
    imagelink: 'JavaScript-Icon.png',
    imageALT: 'Javascript',
  },
  {
    imagelink: 'C_Icon.png',
    imageALT: 'C++',
  },
  {
    imagelink: 'flutter-icon.png',
    imageALT: 'Flutter',
  },
  {
    imagelink: 'Amazon_Logo.png',
    imageALT: 'Amazon',
  },
  {
    imagelink: 'Shopify_icon.png',
    imageALT: 'Shopify',
  },
  {
    imagelink: 'sktech-logo.png',
    imageALT: 'Sktech',
  },
  {
    imagelink: 'adobecc.png',
    imageALT: 'Adobe Creative Cloud',
  },
]

export const SlideshowData = [
  {
    heading: 'Re-imagine your business with Data and AI',
    category: 'Artifical Intelligence',
    image: 'images/',
    articleLink: '/services',
  },
]

export const teamData = [
  {
    id: 1,
    name: 'Faheem Ahmad Butt',
    jobTitle: 'CEO / Founder',
    imageURL: 'images/team/faheem.jpeg',
    imageALT: 'Faheem Ahmad Butt Image',
    linkedin: 'https://www.linkedin.com/in/faheemabutt/',
    description:
      'Leading Octtoppus, I leverage my engineering background (Six Sigma Green Belt) and wealth management experience to empower individuals achieve financial freedom through informed decisions and personalized guidance. ',
    // likes: 'karahi',
    // dislikes: 'everything else',
  },
  {
    id: 2,
    name: 'Faizan Mureed',
    jobTitle: 'Chief Financial Advisor',
    imageURL: 'images/team/faizan.jpeg',
    imageALT: 'Faizan Mureed Image',
    linkedin: 'https://www.linkedin.com/in/muhammad-faizan-a6447352/',
    description:
      'In a rapidly evolving financial landscape, having a trusted advisor with a strong track record is essential. Faizan is committed to helping you navigate challenges and capitalize on opportunities, ensuring that your financial strategies align with your vision for growth and stability.',
    // description: 'I am Tech Lead',
    // likes: 'karahi',
    // dislikes: 'everything else',
  },
  // {
  //     id: 3,
  //     name: 'Muhammad Daniyal',
  //     jobTitle: 'Director Business Development',
  //     imageURL: 'images/team/daniyal.jpg',
  //     imageALT: 'Daniyal Image',
  //     linkedin: 'https://www.linkedin.com/in/daniyal1898/',
  //     description: 'Drive business growth and innovation at Octtoppus by leveraging extensive expertise in business development and technology. The objective is to inspire and guide our clients toward achieving their goals through cutting-edge technology and strategic insights.',
  //     // likes: 'karahi',
  //     // dislikes: 'everything else',
  // },
  {
    id: 4,
    name: 'Raaid Hussain',
    jobTitle: 'Senior Financial Consultant / Advisor',
    imageURL: 'images/team/raaid.jpeg',
    imageALT: 'Raaid Hussain',
    description:
      "Raaid is a seasoned finance professional with 7+ years of work experience. Initiated career at Deloitte's prestigious Audit Graduate Scheme in London, collaborating with and advising Private Equity-backed businesses across diverse sectors such as real estate funds, energy, and consumer business.",
    likes: 'Travelling',
    linkedin: 'https://www.linkedin.com/in/raaidhussain/',
  },
  {
    id: 5,
    name: 'Andrew Aeey',
    jobTitle: 'Taxation Consultant / Certified Coach',
    imageURL: 'images/team/andrew.jpeg',
    imageALT: 'Andrew Aeey',
    description:
      "I'm originally from Newcastle, in the North-East of England, and after spells in London and Sydney have been working in Tokyo since 2002. I'm the managing director of Platinum Training Consultants and I'm also a Professor at Kenichi Ohmae Graduate School of Business. ",
    linkedin: 'https://www.linkedin.com/in/andrew-abbey-04ba8017/',
  },
  {
    id: 6,
    name: 'Hamza Hussain',
    jobTitle: 'Technical Lead',
    imageURL: 'images/team/Hamza.jpg',
    imageALT: 'Hamza Hussain',
    description:
      'Shahzaib is a skilled full-stack developer with expertise in HTML, CSS, JavaScript, Python, C++, C#, and the MERN Stack (MongoDB, Express.js, React.js, Node.js). Outside of work, he enjoys exploring IoT projects and gaming in Valorant and Minecraft.',
    likes: 'Food, Technology, Video games',
    dislikes: 'No internet access, My hair, Peas',
    instagram: 'https://instagram.com/zaibwho',
    linkedin: 'https://linkedin.com/in/zaibwho',
    facebook: 'https://facebook.com/zaibwho',
  },

  {
    id: 7,
    name: 'Tanseer Ahmad',
    jobTitle: 'Head of Creative',
    imageURL: 'images/team/tanseer.jpeg',
    imageALT: 'Tanseer Image',
    linkedin: 'https://www.linkedin.com/in/tanseer-ahmed/',
    description:
      'Meet Tanseer Ahmed, a versatile Graphic Designer & Illustrator with three years of experience in branding, illustration, stream assets, UI/UX, and editorial design. Tanseer excels in crafting compelling visual narratives tailored to diverse client needs.',
    // likes: 'karahi',
    // dislikes: 'everything else',
  },

  // {
  //     id: 8,
  //     name: 'Waseem Ahmed',
  //     jobTitle: 'Director Merchandise Trading & Sourcing',
  //     imageURL: 'images/team/waseem.jpeg',
  //     imageALT: 'Waseem Ahmad Image',
  //     linkedin: 'https://www.linkedin.com/in/waseem-ahmed-937110147/',
  //     // description: 'I am Tech Lead',
  //     // likes: 'karahi',
  //     // dislikes: 'everything else',
  // },

  {
    id: 10,
    name: 'Subtain Abbas',
    jobTitle: 'Data Scientist',
    imageURL: 'images/team/subtain.jpg',
    imageALT: 'Subtain Abbas Image',
    linkedin: 'https://www.linkedin.com/in/subtain-abbas-a58723238/',
    description:
      'Subtain Abbas is proficient in data entry, administration, programming, SQL, and databases, with a background in software engineering and recent completion of the Google Data Analytics Professional Certificate.',
  },

  // {
  //   id: 9,
  //   name: 'Maira Amjad',
  //   jobTitle: 'Head of PR (Pakistan Region)',
  //   imageURL: 'images/team/maira.jpg',
  //   imageALT: 'Maira Amjad Image',
  //   // linkedin: 'https://www.linkedin.com/in/subtain-abbas-a58723238/',
  //   // description: 'Subtain Abbas is proficient in data entry, administration, programming, SQL, and databases, with a background in software engineering and recent completion of the Google Data Analytics Professional Certificate. He is actively seeking new opportunities to apply his expertise in these areas.',
  // },

  // {
  //     id: 11,
  //     name: 'Faaiz Lodhi',
  //     jobTitle: 'Head of E-Commerce',
  //     imageURL: 'images/team/faaiz.jpg',
  //     imageALT: 'Tech Lead Image',
  //     description: '',

  // },
]

export const OurExpertiseSection = [
  {
    iconclass: 'fa-list-check',
    title: 'Strategy',
    description:
      'Our strategic minds are adept at charting the course for businesses to achieve their goals. We develop forward-thinking plans, identify growth opportunities, and equip organizations with the knowledge to outmaneuver competitors.',
    imageURL: 'images/expertise/Strategy.png',
    imageALT: 'Startegy PNG',
  },
  {
    iconclass: 'fa-tv',
    title: 'Media',
    description:
      'With our media prowess, we take ideas to the world. Through a myriad of platforms, we amplify messages, engage communities, and ignite conversations that resonate globally.',
    imageURL: 'images/expertise/media.png',
    imageALT: 'Media PNG',
  },
  {
    iconclass: 'fa-lightbulb',
    title: 'creative',
    description:
      'Imagination knows no bounds in our creative realm. Our designers, storytellers, and visionaries craft captivating experiences that ignite emotions and forge strong connections between brands and their audiences.',
    imageURL: 'images/expertise/creative.png',
    imageALT: 'Creative PNG',
  },
  {
    iconclass: 'fa-database',
    title: 'Data',
    description:
      'Data is the fuel that powers informed decisions. Our data scientists analyze, interpret, and translate raw information into actionable insights, empowering clients to make data-driven choices that pave the way for sustainable success.',
    imageURL: 'images/expertise/data.png',
    imageALT: 'Data PNG',
  },
  {
    iconclass: 'fa-microchip',
    title: 'Technology',
    description:
      'In a world driven by technology, our tech-savvy experts provide digital solutions that transform the way businesses operate. From cutting-edge software to streamlined processes, we guide companies towards the forefront of the digital revolution.',
    imageURL: 'images/expertise/technology.png',
    imageALT: 'Technology PNG',
  },
  {
    iconclass: 'fa-users',
    title: 'People',
    description:
      'The heart of every endeavour lies in its people. Our people experts focus on cultivating strong teams, nurturing talents, and fostering a culture of empowerment that drives innovation and growth.',
    imageURL: 'images/expertise/people.png',
    imageALT: 'People PNG',
  },
  {
    iconclass: 'fa-handshake',
    title: 'Strategic Partnerships',
    description:
      'We understand that collaboration strengthens us all. We forge strategic partnerships with industry leaders. technology pioneers, and top-notch talent. expanding our capabilities and enriching our solutions .',
    imageURL: 'images/expertise/partnership.png',
    imageALT: 'Strategic Partnerships PNG',
  },
  {
    iconclass: 'fa-piggy-bank',
    title: 'Finance Management & Strategy',
    description:
      "Integrating finance management into our holistic approach to consulting, Octtoppus ensures that financial strategies align seamlessly with a client's overall business objectives. This results in a more comprehensive and effective approach to financial management that enhances financial stability, supports growth. and maximizes financial resources.",
    imageURL: 'images/expertise/finance.png',
    imageALT: 'Finance Management & Strategy PNG',
  },
]

// Small Cards in Services and the details of those services

// enterprise section vertical tabs

export const enterpriseSection = [
  {
    id: 'accounting',
    icon: 'fa-solid fa-cloud',
    name: 'Accounting Services',
    paragraph:
      'We offer unparalleled financial services, covering all aspects of bookkeeping, auditing, tax preparation, and financial analysis. Our expertise ensures that businesses comply with regulations and make well-informed decisions. Leave your financial records in our hands, and we guarantee unrivalled diligence and accuracy.',
    imagelink: 'images/Accounting-Services.jpg',
    direction: 'left',
  },
  {
    id: 'banking-financial-services',
    icon: 'fa-solid fa-cloud',
    name: 'Banking & Financial Services',
    paragraph:
      'We provide comprehensive financial advisory services, including Financial Analysis, Risk Management, Capital Raising, M&A, Financial Modeling, Corporate Finance, Investment Advisory, Regulation Compliance, Restructuring, Tax Planning, Cash Flow Management, Due Diligence, and Customized Consulting. Our expertise spans various sectors, supporting businesses in optimizing performance, managing risks, and achieving financial goals.',
    imagelink: 'images/Banking.jfif',
    direction: 'left',
  },
  {
    id: 'bpo',
    icon: 'fa-solid fa-cloud',
    name: 'Business Process Outsourcing',
    paragraph:
      'Octtoppus provides customised BPO solutions that let you focus on your core business activities while we handle your non-core processes with our expertise and resources.',
    imagelink: 'images/BPO.jpg',
    direction: 'left',
  },
  {
    id: 'human-resources',
    icon: 'fa-solid fa-cloud',
    name: 'Human Resources',
    paragraph:
      'Effective personnel management is vital for any organisation to thrive. This involves managing various personnel-related functions, such as recruitment, training, payroll, benefits administration, and employee relations, to create a productive and harmonious workplace. Personnel management helps build a solid and cohesive team that can take the organisation to new heights by ensuring all employees are well-trained, fairly compensated, and motivated.',
    imagelink: 'images/HR.jpg',
    direction: 'right',
  },
  {
    id: 'machine-automation',
    icon: 'fa-solid fa-cloud',
    name: 'Machine Automation',
    paragraph:
      "Octtoppus leads in Asset Performance Management (APM), leveraging advanced technology to combat challenges such as shortened asset lifespan and productivity decline. Our digital solution maximizes efficiency, extends asset life, and saves costs through real-time tracking, analysis, and AI-driven predictive maintenance. Octtoppus ensures unparalleled operational efficiency, reliability, and full compliance, revolutionizing businesses' operations. Choose Octtoppus for transformative results.",
    imagelink: 'images/maintein.png',
    direction: 'left',
    izout: true,
  },
  {
    id: 'supply-chain',
    icon: 'fa-solid fa-cloud',
    name: 'Supply Chain Management',
    paragraph:
      'Supply chain management at Octtoppus encompasses the efficient coordination of goods and services from suppliers to customers. It involves procurement, logistics, inventory control, and distribution to streamline operations, minimize costs, and enhance customer satisfaction through timely delivery and optimized resource utilization.',
    imagelink: 'images/supply-chain.jpg',
    direction: 'right',
  },
  {
    id: 'computer-vision',
    icon: 'fa-solid fa-cloud',
    name: 'Visual AI',
    paragraph:
      'Octtoppus provides visual AI tools for optimizing offline processes. By analyzing CCTV footage, we uncover insights into customer and staff behavior, identifying inefficiencies and growth opportunities. Their pilot project aims to rearrange product layouts based on data analysis, optimizing conversion rates and revenue. Octtoppus seeks partnerships for further technology development and implementation.',
    imagelink: 'images/linza-metrics-es.png',
    direction: 'right',
    imagedescription:
      "We use Customer Behavior data for better understanding of merchant's business.",
    fulli: true,
  },
]

export const XScardsdata = [
  {
    icon: 'fa-solid fa-bell',
    iconLink: 'innovate.png',
    title: 'Innovation',
    description:
      'We thrive on innovation, constantly exploring new technologies to provide our clients with the most advanced and effective solutions. Your success is our priority, and we are committed to staying ahead of the curve.',
  },
  {
    icon: 'fa-solid fa-handshake',
    iconLink: 'collab.png',
    title: 'Collaboration',
    description:
      'Your business is unique, and so are your requirements. We believe in close collaboration with our clients, ensuring a deep understanding of your goals and challenges. Together, we create solutions that align with your vision and objectives.',
  },
  {
    icon: 'fa-solid fa-bolt',
    iconLink: 'result.png',
    title: 'Result-Driven Approach',
    description:
      "Our focus is on delivering measurable results. Whether it's increased efficiency, enhanced user experience, or data-driven insights, our solutions are designed to drive tangible outcomes for your business.",
  },
]

export const SmallCardData = [
  {
    id: 'webdev',
    name: 'Website Development',
    paragraph:
      'Experience exceptional web development with Octtoppus, merging creativity and functionality seamlessly. Opt for our template-based method using platforms like WordPress, Shopify, and Wix for rapid deployment, or a custom-based approach with HTML5, CSS, JavaScript, Node.js, and Python for unparalleled flexibility. With Agile project management and Scrum practices, we efficiently guide your ideas from concept to an engaging online presence. Trust Octtoppus for expert IT project execution and bringing your vision to reality.',
    icon: 'fa-solid fa-globe',
    imagelink: 'images/web-dev.jpg',
    direction: 'left',
    logos: [
      {
        link: 'HTML5_icon.ico',
        alt: 'HTML 5',
      },
      {
        link: 'CSS3_icon.ico',
        alt: 'CSS 3',
      },
      {
        link: 'JavaScript-Icon.ico',
        alt: 'JavaScript',
      },
      {
        link: 'Nodejs-icon.ico',
        alt: 'Node JS',
      },
      {
        link: 'Wordpress_icon.ico',
        alt: 'Wordpress',
      },
      {
        link: 'Shopify_icon.ico',
        alt: 'Shopify',
      },
      {
        link: 'Python_logo.ico',
        alt: 'Python',
      },
      {
        link: 'Figma-logo.ico',
        alt: 'Figma',
      },
    ],
  },
  {
    id: 'softwaredev',
    name: 'Software Development',
    paragraph:
      'Experience innovative software development services. Our team handles every aspect from concept to deployment, ensuring seamless integration and robust functionality. With a focus on quality, security, and scalability, we deliver tailor-made solutions. Services include analysis, design, coding, testing, deployment, and maintenance. Trust us to propel your business forward confidently.',
    icon: 'fa-solid fa-box-open',
    imagelink: 'images/Soft-dev.jpg',
    direction: 'right',
    logos: [
      {
        link: 'java-logo.ico',
        alt: 'Java',
      },
      {
        link: 'Python_logo.ico',
        alt: 'Python',
      },
      {
        link: 'C_Icon.ico',
        alt: 'C++',
      },
      {
        link: 'docker-mark-blue.ico',
        alt: 'docker',
      },
    ],
  },
  {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    paragraph:
      'Octtoppus offers graphic design and UI/UX design services. Our graphic design services include branding, illustration, and visual communication, while our UI/UX design service focuses on creating seamless and visually appealing interfaces that prioritize user experience. We use industry-leading tools like Adobe Creative Suite, Adobe XD, Sketch, and Figma to craft unique brand identities and produce eye-catching marketing materials.',
    icon: 'fa-solid fa-box-open',
    imagelink: 'images/graphic-design.jpg',
    direction: 'right',
    logos: [
      {
        link: 'ps-logo.ico',
        alt: 'Adobe Photoshop Logo',
      },
      {
        link: 'ai-logo.ico',
        alt: 'Adobe Illustrator Logo',
      },
      {
        link: 'id-logo.ico',
        alt: 'Adobe InDesign',
      },
      {
        link: 'pr-logo.ico',
        alt: 'Adobe Premier Pro Logo',
      },
      {
        link: 'ae-logo.ico',
        alt: 'Adobe Animate',
      },
      {
        link: 'adobe-xd.ico',
        alt: 'Adobe XD Logo',
      },
      {
        link: 'sktech-logo.ico',
        alt: 'Sktech Logo',
      },
      {
        link: 'Figma-logo.ico',
        alt: 'Figma Logo',
      },
    ],
  },
  {
    id: 'mobiledev',
    name: 'Mobile Application',
    paragraph:
      'Seeking top-notch mobile app development? Our experts craft cutting-edge apps for iOS and Android, prioritizing intuitive UX/UI design. Proficient in Flutter, Java, Kotlin, Xcode, Swift, and React Native, we ensure seamless performance. Trust us to bring your app idea to life with precision and innovation, elevating your business to new heights.',
    icon: 'fa-solid fa-box-open',
    imagelink: 'images/mobile-application.jpg',
    direction: 'left',
    logos: [
      {
        link: 'flutter-icon.ico',
        alt: 'flutter',
      },
      {
        link: 'IOS-Logo.ico',
        alt: 'IOS',
      },
      {
        link: 'Kotlin_Icon.ico',
        alt: 'Kotlin',
      },
      {
        link: 'ReactNative_icon.webp',
        alt: 'React Native',
      },
      {
        link: 'Xcode-icon.ico',
        alt: 'Xcode',
      },
      {
        link: 'Swift-icon.ico',
        alt: 'Swift',
      },
      {
        link: 'Python_logo.ico',
        alt: 'Python',
      },
    ],
  },
  {
    id: 'EcomSol',
    name: 'E-commerce Solutions',
    paragraph:
      'Revamp your online business with our robust E-commerce Solutions for leading platforms like Amazon, Shopify, Ali Express, CJ Dropshipping, and more. We offer an unbeatable combination of responsive web design, cutting-edge payment gateways, and other essential features guaranteeing a thriving online store. Our top priority is to create a shopping experience that delights your customers, ensuring their satisfaction and repeat business.',
    icon: 'fa-solid fa-square-poll-vertical',
    imagelink: 'images/e-com.jpg',
    direction: 'right',
    logos: [
      {
        link: 'Aliexpress-icon.ico',
        alt: 'Ali Express',
      },
      {
        link: 'Amazon_Logo.ico',
        alt: 'Amazon',
      },
      {
        link: 'cj-icon.ico',
        alt: 'CJ DropShipping',
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing Strategies',
    paragraph:
      "Elevate your brand's digital presence with our strategic marketing services. Our approach includes competitor analysis, user research, and symmetrical designs for maximum impact. Trust us for cohesive content across channels and engaging strategies that resonate with your audience, driving meaningful engagement and brand growth.",
    icon: 'fa-solid fa-ranking-star',
    imagelink: 'images/marketing-strategy.jpg',
    direction: 'left',
    logos: [
      {
        link: 'Email-Marketing.ico',
        alt: 'Email Marketing',
        name: 'Email Marketing',
      },
      {
        link: 'Social-media.ico',
        alt: 'Social Media',
        name: 'Social Media',
      },
      {
        link: 'SEO.ico',
        alt: 'SEO',
        name: 'SEO',
      },
      {
        link: 'Influencer.ico',
        alt: 'Influencer',
        name: 'Influencer',
      },
    ],
  },
  {
    id: 'DigitalMarketing',
    name: 'Digital Marketing',
    paragraph:
      'Elevate your digital presence with our tailored marketing solutions for B2B and B2C audiences. From SEO optimization to social media campaigns, we ensure your brand shines. Our expert team crafts engaging content strategies and manages social media ads for maximum ROI. Trust us to propel your brand to new heights digitally.',
    icon: 'fa-solid fa-ranking-star',
    imagelink: 'images/digital-marketing.jpg',
    direction: 'right',
    logos: [
      {
        link: 'meta.ico',
        alt: 'Meta Logo',
      },
      {
        link: 'tiktok.ico',
        alt: 'Tiktok Logo',
      },
      {
        link: 'x.ico',
        alt: 'X (Twitter) Logo',
      },
    ],
  },
  {
    id: 'dataInsights',
    name: 'Data Insights & Analytics',
    paragraph:
      'Unlock growth opportunities with our Data Insights & Analytics service. Utilizing cutting-edge technology, our expert team tailors comprehensive solutions to your needs. We extract valuable intelligence using predictive modeling, machine learning, and data visualization. Gain strategic advantages in operations, customer experiences, and competition. Trust us to transform your data into actionable insights for limitless success.',
    icon: 'fa-solid fa-database',
    imagelink: 'images/data-insights.jpg',
    direction: 'left',
    logos: [
      {
        link: 'powerbi.ico',
        alt: 'PowerBi Logo',
      },
      {
        link: 'excel.ico',
        alt: 'Excel Logo',
      },
      {
        link: 'Python_logo.ico',
        alt: 'Python Logo',
      },
      {
        link: 'Mysql_logo.ico',
        alt: 'Mysql Logo',
      },
      {
        link: 'R.ico',
        alt: 'R Logo',
      },
    ],
  },
  {
    id: 'cloud-com',
    name: 'Cloud Computing',
    paragraph:
      "Don't let a lack of scalable cloud infrastructure hold your business back. Choose Octtoppus Cloud Computing and watch your business soar. Our team of experts is here to help you innovate and adapt to the dynamic digital landscape of AWS, Azure, or Google Cloud Platform. Take charge of your success and elevate your business to new heights with the best cloud infrastructure available.",
    icon: 'fa-solid fa-cloud',
    imagelink: 'images/cloud-computing.jpg',
    direction: 'right',
    logos: [
      {
        link: 'aws_Logo.ico',
        alt: 'AWS',
      },
      {
        link: 'azure-logo.ico',
        alt: 'Azure',
      },
      {
        link: 'googlecloudplatform-icon.ico',
        alt: 'Google Cloud Platform',
      },
    ],
  },
  {
    id: 'corporate-training',
    name: 'Corporate Training',
    paragraph:
      "We design tailored programs for small and large enterprises to help employees grow professionally and improve their skills and knowledge. These initiatives cover many areas, including leadership development, technical skills training, compliance, and soft skills enhancement. These programs aim to align with the organisation's objectives and promote a culture of continuous learning, growth and development, leading to improved performance and increased productivity.",
    icon: 'fa-solid fa-cloud',
    imagelink: 'images/Corporate-Training.jpg',
    direction: 'left',
    logos: [
      {
        link: 'development.ico',
        alt: 'Developement',
        name: 'Developement',
      },
      {
        link: 'retention.ico',
        alt: 'Retention',
        name: 'Retention',
      },
      {
        link: 'leadership.ico',
        alt: 'Leadership',
        name: 'Leadership',
      },
      {
        link: 'compliance.ico',
        alt: 'Compliance',
        name: 'Compliance',
      },
      {
        link: 'performance.ico',
        alt: 'Performance',
        name: 'Performance',
      },
    ],
  },
  {
    id: 'accounting',
    icon: 'fa-solid fa-cloud',
    name: 'Accounting Services',
    paragraph:
      'We offer unparalleled financial services, covering all aspects of bookkeeping, auditing, tax preparation, and financial analysis. Our expertise ensures that businesses comply with regulations and make well-informed decisions. Leave your financial records in our hands, and we guarantee unrivalled diligence and accuracy.',
    imagelink: 'images/Accounting-Services.jpg',
    direction: 'right',
    logos: [
      {
        link: 'accounting-services.ico',
        alt: 'Accounting',
        name: 'Accounting',
        big: true,
      },
    ],
  },
  {
    id: 'banking-financial-services',
    icon: 'fa-solid fa-cloud',
    name: 'Banking & Financial Services',
    paragraph:
      'We provide comprehensive financial services for businesses in the financial sector, including financial analysis, risk management, capital raising, M&A advisory, financial modeling, corporate finance, investment advice, regulatory compliance, financial restructuring, tax planning, cash flow management, due diligence, and holistic financial consulting, tailored to individual needs.',
    imagelink: 'images/Banking.jfif',
    direction: 'left',
    logos: [
      {
        link: 'banking-finanical-services.ico',
        alt: 'Banking',
        name: 'Banking',
        big: true,
      },
    ],
  },
  {
    id: 'bpo',
    icon: 'fa-solid fa-cloud',
    name: 'Business Process Outsourcing',
    paragraph:
      'Octtoppus provides customised BPO solutions that let you focus on your core business activities while we handle your non-core processes with our expertise and resources.    ',
    imagelink: 'images/BPO.jpg',
    direction: 'right',
    logos: [
      {
        link: 'bpo.ico',
        alt: 'BPO',
        name: 'BPO',
        big: true,
      },
      {
        link: 'customer_service.ico',
        alt: 'Customer Service',
        name: 'Customer Service',
        big: true,
      },
    ],
  },
  {
    id: 'human-resources',
    icon: 'fa-solid fa-cloud',
    name: 'Human Resources',
    paragraph:
      'Effective personnel management is vital for any organisation to thrive. This involves managing various personnel-related functions, such as recruitment, training, payroll, benefits administration, and employee relations, to create a productive and harmonious workplace. Personnel management helps build a solid and cohesive team that can take the organisation to new heights by ensuring all employees are well-trained, fairly compensated, and motivated.',
    imagelink: 'images/HR.jpg',
    direction: 'left',
    logos: [
      {
        link: 'hr.ico',
        alt: 'Human Resources',
        name: 'Resource Management',
        big: true,
      },
      {
        link: 'dynamic_workforce.ico',
        alt: 'Dynamic WorkForce',
        name: 'Dynamic WorkForce',
        big: true,
      },
    ],
  },
  {
    id: 'machine-automation',
    icon: 'fa-solid fa-cloud',
    name: 'Machine Automation',
    paragraph:
      'Octtoppus leads in Asset Performance Management (APM), tackling industry challenges with cutting-edge technology. Our digital tool optimizes asset performance, ensuring efficiency, extended lifespan, and cost savings through real-time tracking and AI-driven predictive maintenance. Choose Octtoppus for unmatched operational efficiency, reliability, and compliance. Witness your business transform today.',
    imagelink: 'images/Machine-Automation.jpg',
    direction: 'right',
    logos: [
      {
        link: 'automation_precision.ico',
        alt: 'Automation Precision',
        name: 'Automation Precision',
        big: true,
      },
      {
        link: 'smart_manufacturing.ico',
        alt: 'Smart Manufacturing',
        name: 'Smart Manufacturing',
        big: true,
      },
    ],
  },
  {
    id: 'supply-chain',
    icon: 'fa-solid fa-cloud',
    name: 'Supply Chain Management',
    paragraph:
      'Supply chain management at Octtoppus encompasses the efficient coordination of goods and services from suppliers to customers. It involves procurement, logistics, inventory control, and distribution to streamline operations, minimize costs, and enhance customer satisfaction through timely delivery and optimized resource utilization.',
    imagelink: 'images/supply-chain.jpg',
    direction: 'left',

    logos: [
      {
        link: 'optimised_operations.ico',
        alt: 'Optimised Operations',
        name: 'Optimised Operations',
        big: true,
      },
      {
        link: 'supply_chain.ico',
        alt: 'Supply Chain Management',
        name: 'Supply Chain',
        big: true,
      },
    ],
  },
  {
    id: 'computer-vision',
    icon: 'fa-solid fa-cloud',
    name: 'Visual AI',
    paragraph:
      'Octtoppus offers advanced visual AI tools to optimize offline processes for businesses. Our technology analyzes CCTV footage, revealing insights into customer and staff behavior for improvement and growth. Currently piloting projects to enhance product layouts and increase revenue. Seeking partnerships with innovative businesses.',
    imagelink: 'images/Linza-metrics.jpg',
    direction: 'right',
    fulli: true,
  },
]

export const cardData = [
  {
    ImageURL: process.env.PUBLIC_URL + 'svg/webdev.svg',
    category: 'Services',
    title: 'Web Development',
    info: 'Octtoppus offers versatile web solutions. Choose from template-based ease with WordPress, Shopify, and Wix, or opt for custom mastery in HTML5, CSS, JavaScript, Node.js, and Python.',
    link: '/services',
  },
  {
    ImageURL: process.env.PUBLIC_URL + 'svg/SoftDev.svg',
    category: 'Services',
    title: 'Software Development',
    info: 'Partner with Octtoppus for cutting-edge software solutions. Our expert team handles every aspect of the development process, from concept to deployment, with an unwavering commitment to quality, security, and scalability. Trust us to take your business to the next level.',
    link: '/services',
  },
  {
    ImageURL: process.env.PUBLIC_URL + 'svg/ecommerce.svg',
    category: 'Services',
    title: 'E-commerce Solutions',
    info: 'Are you looking to boost your online business? Our E-Commerce Solutions help companies to succeed on popular platforms such as Amazon, Shopify, Ali Express, CJ drop shipping and more. We offer various services, from responsive web design to secure payment gateways, all of which combine to create a seamless shopping experience for your customers. Let us help you transform your online store into a thriving business.    ',
    link: '/services',
  },
  {
    ImageURL: process.env.PUBLIC_URL + 'svg/digital-marketing.svg',
    category: 'Services',
    title: 'Digital Marketing',
    info: "Boost your brand's online presence with our digital marketing services, including targeted campaigns, SEO, email and social media marketing, and ad management. Our team of experts creates tailored strategies to achieve your goals. Our language is direct and easy to follow. Achieve your marketing goals with us.    ",
    link: '/services',
  },
  {
    ImageURL: process.env.PUBLIC_URL + 'svg/data-analysis.svg',
    category: 'Services',
    title: 'Data Insights & Analytics',
    info: "Our Data Insights & Analytics experts can give you the strategic advantage you need to dominate today's data-driven world. They will help you optimise your operations, enhance customer experiences, and gain a competitive edge.",
    link: '/services',
  },
]

export const industry_data = [
  {
    name: 'Manufacturing',
    ImageURL: 'images/manufacturing.jpg',
  },
  {
    name: 'IT Industry',
    ImageURL: 'images/it_image.jpg',
  },
  {
    name: 'Food & Beverages',
    ImageURL: 'images/FoodBeverages.jpg',
  },
  {
    name: 'Automotive Industry',
    ImageURL: 'images/automotive.jpg',
  },
  {
    name: 'Apparel & Textile',
    ImageURL: 'images/textiles.jpg',
  },
  {
    name: 'Utilities',
    ImageURL: 'images/utilities.jpg',
  },
]

export const about_us_sections = [
  {
    id: 'about_us',
    name: 'About us',
    paragraph:
      'Welcome to Octtoppus, where innovation leads. We excel in web design, application development, e-commerce, and digital marketing. Our dedicated team pioneers transformative tech solutions, specializing in IoT, AI, cybersecurity, cloud computing, fintech, and more. Partner with Octtoppus for unparalleled technological excellence and strategic innovation.',
    imagelink: 'images/octto.jpg',
    direction: 'left',
  },
  {
    id: 'oct_mission',
    name: 'Mission and Values',
    paragraph:
      'Octtoppus empowers global businesses with advanced solutions for growth and control. Our collaborative approach ensures sustained success and brand value enhancement through pioneering technology and data insights. We lead industry transformation through strategic partnerships, committed to being the preferred choice for enterprises worldwide.',
    imagelink: 'images/mission-value.jpg',
    direction: 'right',
  },
  {
    id: 'oct_community',
    name: 'Community Involvement',
    paragraph:
      "At Octtoppus, we strongly believe in giving back to the community that has supported us. Our core values are centred around positively impacting people's lives through various philanthropic initiatives and volunteer work. We understand that working together can make great things and make a real difference in the world. Join us in our mission to create a better tomorrow for everyone.    ",
    imagelink: 'images/Community1.jpg',
    direction: 'left',
  },
  {
    id: 'oct_future_vision',
    name: 'Future Vision',
    paragraph:
      'As we set our sights on the future, we are thrilled to take charge of driving innovation and technology forward. With an unwavering focus on unrelenting progress and an uncompromising commitment to exceeding client expectations, we are committed to empowering businesses to thrive in the dynamic digital landscape.',
    imagelink: 'images/Future-Vision1.jpg',
    direction: 'right',
  },
]

export const companiesLogoURL = [
  {
    url: 'images/logos/white/PP-Logo-White.png',
    alt: 'Power Pulse Logo',
    link: 'https://powerpulse.pk/',
  },
  {
    url: 'images/logos/white/GG-logo-white.png',
    alt: 'Global Grads Logo',
    link: 'https://globalgrads.org/',
  },

  {
    url: 'images/logos/white/ICU-Finlac.png',
    alt: 'Finlac Logo',
  },

  {
    url: 'images/logos/white/omnia.png',
    alt: 'Omnia Logo',
    link: 'https://omnialam.net/',
  },
  {
    url: 'images/logos/white/PF-LOGO.png',
    alt: 'Precision Forging Logo',
    link: 'https://nsrforging.com/',
  },
  // {
  //   url: 'images/logos/white/belmatt.png',
  //   alt: 'BElmatt Logo'
  // },
]

export const card_carousel_default = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: null,
  pauseOnHover: true,
  pauseOnFocus: true,
  autoplay: true,
  autoplaySpeed: 5000,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const companies_carousel_default = {
  dots: null,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: null,
  pauseOnHover: true,
  pauseOnFocus: true,
  autoplay: true,
  autoplaySpeed: 5000,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
  ],
}

export const logo_carousel_infinite = {
  dots: false,
  arrows: null,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  pauseOnFocus: true,
  autoplay: true,
  cssEase: 'linear',
  autoplaySpeed: 0,
  infinite: true,
  speed: 8000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 468,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export const text_carousel_infinite = {
  dots: false,
  arrows: null,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
  autoplay: true,
  cssEase: 'linear',
  autoplaySpeed: 0,
  infinite: true,
  speed: 8000,
}

export const menuItemsWithLinks = [
  { mainMenuItem: 'Our Services', mainMenuLink: '/services' },
  { mainMenuItem: 'Our Expertise', mainMenuLink: '/expertise' },
  { mainMenuItem: 'Blogs', mainMenuLink: '/blogs' },
  { mainMenuItem: 'About us', mainMenuLink: '/about-us' },
  { mainMenuItem: 'Contact us', mainMenuLink: '/contact-us' },
]
