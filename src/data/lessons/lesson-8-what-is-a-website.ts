import { Lesson } from '../../types';

export const lessonWhatIsAWebsite: Lesson = {
  slug: 'what-is-a-website',
  order: 8,
  title: 'What is a Website? Browsers, Domains, Hosting & How the Web Works',
  shortTitle: 'What is a Website?',
  metaTitle: 'What is a Website? Web Basics Explained in Simple English',
  metaDescription: 'Learn what a website is in simple English. Understand web pages vs websites, browsers, URLs, domain names, web hosting, HTML, CSS, JavaScript, and how pages load.',
  h1: 'What is a Website?',
  directAnswer: 'A website is a collection of related digital pages (called web pages) containing text, images, videos, and links, stored on a connected computer (called a web server) and accessible to anyone in the world using the internet. When you type an address into a web browser on your phone or laptop, your device requests those files across the network, and the browser displays them as an interactive page on your screen.',
  readingTime: '10 min read',
  category: 'Internet & Web Basics',
  diagramType: 'web-request',
  summary: [
    'A web page is an individual digital document; a website is the entire collection of connected pages under one domain name.',
    'A web browser (like Chrome or Edge) is the software viewer that turns internet code into readable visual pages.',
    'A URL is the exact web address (like https://www.example.com/about) pointing to a specific page.',
    'A domain name is your online street address, while web hosting is the computer storage space you rent on the internet.',
    'Every website is built with three core languages: HTML (the skeleton), CSS (the styling and clothes), and JavaScript (the interactive muscles).'
  ],
  sections: [
    {
      id: 'web-page-vs-website',
      h2: 'Web Page vs Website: The Book Analogy',
      paragraphs: [
        'People often use the terms "web page" and "website" as if they mean the exact same thing, but there is a clear difference between them.'
      ],
      callout: {
        type: 'analogy',
        title: 'Real-Life Analogy: The Page and the Book',
        text: 'A web page is like a single printed page in a physical textbook. A website is the entire complete textbook bound together. Right now, you are reading one specific web page (the "What is a Website" lesson), which belongs to the larger website called "Computer Basics Made Simple".'
      },
      bullets: [
        'Web Page: One single document with its own specific web address (like /what-is-a-website).',
        'Website: The entire home, containing many linked web pages, images, and tools under a shared domain name.'
      ]
    },
    {
      id: 'browser-and-url',
      h2: 'How You Access Websites: The Browser and the URL',
      paragraphs: [
        'To visit any website, you need two fundamental tools: a web browser and a website address.'
      ],
      subsections: [
        {
          h3: 'What is a Web Browser?',
          paragraphs: [
            'A web browser is an application program installed on your computer or phone that retrieves files from web servers and translates raw code into text, pictures, buttons, and videos you can see and interact with.',
            'Popular modern web browsers include Google Chrome, Microsoft Edge, Apple Safari (on iPhones and Macs), and Mozilla Firefox. The internet is the global network of connected computers; the browser is your viewing window into that network.'
          ]
        },
        {
          h3: 'What is a URL? (Decoding the Web Address)',
          paragraphs: [
            'URL stands for Uniform Resource Locator. It is the full address you type into the top bar of your browser to find a specific page. Let us break down a typical URL piece by piece:'
          ],
          bullets: [
            'https:// — The Protocol: HyperText Transfer Protocol Secure. The "s" stands for secure, meaning communication between your browser and the server is encrypted with a digital padlock so hackers cannot steal your passwords.',
            'www. — The Subdomain: Stands for World Wide Web (used by many traditional sites, though optional today).',
            'example.com — The Domain Name: The unique, friendly name of the website (like google.com or bfacademy.com).',
            '/about — The Path: Points to the specific sub-folder or individual web page inside that website.'
          ]
        }
      ]
    },
    {
      id: 'domains-and-hosting',
      h2: 'Domain Names and Web Hosting Explained Simply',
      paragraphs: [
        'If you want to build and publish your own website on the internet, you will always encounter two terms: domain name and web hosting.'
      ],
      subsections: [
        {
          h3: 'What is a Domain Name?',
          paragraphs: [
            'Behind the scenes, every computer connected to the internet is identified by a string of numbers called an IP Address (such as 142.250.190.46). Humans are terrible at remembering long lists of random numbers, but we are great at remembering names like "google.com" or "wikipedia.org".',
            'A domain name is the human-friendly name you register for your website. A worldwide digital phonebook system called DNS (Domain Name System) translates the friendly name into the real number address instantly.'
          ]
        },
        {
          h3: 'What is Web Hosting?',
          paragraphs: [
            'Your website files (HTML code, images, videos) must live on a computer that is connected to high-speed internet and never turns off, so people can visit day or night.',
            'Web hosting is a service where you rent storage space on a powerful computer server in a secure data center. When you deploy a website to platforms like Vercel or cloud hosting providers, your code is stored safely on their web servers.'
          ],
          analogy: 'Analogy: Think of building a physical shop. The street address on the signpost is your Domain Name. The actual physical plot of land and bricks where your store sits is your Web Hosting. The merchandise and shelves inside are your Web Pages.'
        }
      ]
    },
    {
      id: 'how-website-loads',
      h2: 'Step-by-Step: What Happens When You Open a Website?',
      paragraphs: [
        'When you type an address into your browser and press Enter, an incredible journey happens in less than half a second:'
      ],
      bullets: [
        'Step 1 (The Request): Your browser asks the DNS system: "Where does this domain live?" DNS replies with the server\'s IP number.',
        'Step 2 (The Journey): Your browser sends a digital request across internet cables to that web server asking for the page files.',
        'Step 3 (The Server Response): The hosting server receives the message, locates the requested files, and beams them back across the internet to your phone or computer.',
        'Step 4 (Rendering): Your web browser reads the code files and paints the text, buttons, and pictures onto your screen.'
      ]
    },
    {
      id: 'html-css-javascript',
      h2: 'The Three Building Blocks: HTML, CSS, and JavaScript',
      paragraphs: [
        'Almost every modern website is constructed using three foundational programming languages that work hand-in-hand:'
      ],
      bullets: [
        'HTML (HyperText Markup Language) — The Skeleton: Defines the structure and content of the page. It tells the browser: "This is a main heading, this is a paragraph, this is an image, and this is a bullet point."',
        'CSS (Cascading Style Sheets) — The Clothes and Paint: Controls how everything looks. It chooses font sizes, text colours, background shades, spacing between boxes, and ensures the page looks attractive on both mobile phones and wide desktop screens.',
        'JavaScript — The Muscles and Brains: Makes the website interactive and alive. It handles image slideshows, popup alert modals, calculators, and ensures forms check for errors before submitting.'
      ]
    },
    {
      id: 'types-of-websites',
      h2: 'Common Types of Websites You Visit Every Day',
      paragraphs: [
        'Websites are built for different purposes to serve different audiences.'
      ],
      bullets: [
        'Educational Websites: Provide lessons, courses, and tutorials for students (such as Computer Basics Made Simple).',
        'E-Commerce Websites: Online stores where customers can browse items, add them to a shopping cart, and pay online (like Amazon or Daraz).',
        'Search Engines: Websites with massive indexes that help you discover other pages on the internet (like Google or Bing).',
        'Social Media Platforms: Websites that allow people to create personal profiles, share photos, and chat with friends (like Facebook or Instagram).',
        'News and Media Portals: Sites that publish daily journalism, weather forecasts, and sports results (like BBC or Dawn News).'
      ]
    }
  ],
  comparisonTable: {
    title: 'The Three Web Languages Compared',
    caption: 'How HTML, CSS, and JavaScript collaborate to build a complete web experience.',
    headers: ['Language', 'Human Body Analogy', 'Primary Job', 'Simple Code Example'],
    rows: [
      ['HTML', 'The Bones / Skeleton', 'Defines page structure & content', '<h1>Welcome</h1>'],
      ['CSS', 'Skin, Clothes & Paint', 'Sets colours, fonts, layout & styles', 'color: navy; font-size: 18px;'],
      ['JavaScript', 'Muscles & Brains', 'Handles clicks, animations & logic', 'button.addEventListener("click", ...);']
    ]
  },
  faqs: [
    {
      question: 'What is the difference between the internet and the World Wide Web?',
      answer: 'The internet is the physical global network of millions of interconnected computers, cables, and routers. The World Wide Web (WWW) is a system of websites, web pages, and links that runs on top of the internet. The internet is like the highway roads; the World Wide Web is like the delivery trucks driving on those roads.'
    },
    {
      question: 'What does the padlock icon next to a website address mean?',
      answer: 'The padlock indicates that the site uses HTTPS encryption. Any passwords, credit card numbers, or personal messages you send to the website are encrypted so third parties cannot intercept them.'
    },
    {
      question: 'Can I make a website without knowing how to write code?',
      answer: 'Yes! While professional web developers write code using HTML, CSS, and JavaScript, beginners can build simple websites using website builders (like WordPress, Wix, or Shopify) using drag-and-drop tools.'
    },
    {
      question: 'Why do some websites load very slowly on mobile phones?',
      answer: 'Websites load slowly if they use giant, uncompressed image files, too many heavy scripts, or if the web hosting server is far away or underpowered. Fast websites keep their code clean and optimize their images.'
    },
    {
      question: 'How do search engines like Google find new websites?',
      answer: 'Google uses automated software programs called "web crawlers" or "spiders" that follow links from page to page across the web, reading content and adding new pages to Google\'s worldwide search index.'
    }
  ],
  testYourself: [
    {
      question: 'What is the main difference between a web page and a website?',
      answer: 'A web page is a single document; a website is the complete collection of related web pages under one domain name.',
      hint: 'Think of a single page in a book versus the complete book.'
    },
    {
      question: 'Which web language is responsible for styling the page with colours, fonts, and responsive layout?',
      answer: 'CSS (Cascading Style Sheets).',
      hint: 'It acts like the clothes and paint for the HTML skeleton.'
    },
    {
      question: 'What does the "s" in "https://" stand for?',
      answer: 'Secure.',
      hint: 'It means the connection is encrypted with a digital certificate.'
    },
    {
      question: 'What is the name of the system that translates friendly domain names into numerical IP addresses?',
      answer: 'DNS (Domain Name System).',
      hint: 'It acts like the internet\'s digital phone directory.'
    },
    {
      question: 'Name three popular web browsers used today.',
      answer: 'Google Chrome, Microsoft Edge, and Apple Safari (or Mozilla Firefox).',
      hint: 'The software applications you open to browse the web.'
    }
  ],
  previousSlug: 'what-is-microsoft-excel',
  nextSlug: 'what-is-ai',
  relatedSlugs: ['what-is-microsoft-excel', 'what-is-ai', 'careers-in-computer-fields']
};
