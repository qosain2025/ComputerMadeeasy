import { Lesson } from '../../types';

export const lessonTypesOfComputers: Lesson = {
  slug: 'types-of-computers',
  order: 3,
  title: 'Types of Computers: From Desktops and Phones to Supercomputers',
  shortTitle: 'Types of Computers',
  metaTitle: 'Types of Computers Explained in Simple English: Desktop to Supercomputer',
  metaDescription: 'Learn about all types of computers: desktops, laptops, tablets, smartphones, servers, mainframes, supercomputers, and embedded systems with comparison tables.',
  h1: 'Types of Computers',
  directAnswer: 'Computers come in many different shapes, sizes, and power levels to match different tasks and budgets. They range from small embedded microchips inside washing machines and pocket smartphones, to portable laptops and office desktop PCs, all the way up to giant cloud servers, enterprise mainframes, and room-sized supercomputers used for space exploration and weather forecasting.',
  readingTime: '9 min read',
  category: 'Computer Fundamentals',
  diagramType: 'types',
  summary: [
    'Personal computers (PCs) include desktops, laptops, tablets, and smartphones designed for one person at a time.',
    'Servers deliver websites, files, and video streams to thousands of people simultaneously across the internet.',
    'Mainframes are heavy-duty, highly dependable machines used by international banks and airlines for massive transaction volumes.',
    'Supercomputers are the fastest calculating machines on Earth, capable of quadrillions of calculations per second.',
    'Embedded computers are tiny, single-purpose processors hidden inside cars, microwaves, medical monitors, and smart TVs.'
  ],
  sections: [
    {
      id: 'personal-computers',
      h2: '1. Personal Computers (For Everyday Individual Use)',
      paragraphs: [
        'A Personal Computer (or PC) is designed to be used by one person at a time for everyday tasks like writing documents, watching movies, doing homework, and checking social media.'
      ],
      subsections: [
        {
          h3: 'Desktop Computers',
          paragraphs: [
            'A desktop computer is designed to sit permanently on or under a work desk. It has separate parts: a heavy case (tower), a separate monitor screen, a standalone keyboard, and a mouse connected by cables or wireless signals.',
            'Because desktops do not need to fit into a backpack or run on a battery, they usually offer more computing power for a lower price. They are also very easy to open, repair, and upgrade with new parts over time. Desktops are popular in offices, school computer labs, and gaming bedrooms.'
          ]
        },
        {
          h3: 'Laptops (Notebooks)',
          paragraphs: [
            'A laptop is an all-in-one portable computer. It folds like a book, combining the screen, keyboard, trackpad mouse, CPU, memory, and rechargeable battery into a single lightweight unit.',
            'Laptops let students and business travellers work from a library, café, train, or classroom. When fully charged, modern laptops can run for 8 to 15 hours without being plugged into an electric wall outlet.'
          ]
        },
        {
          h3: 'Tablets',
          paragraphs: [
            'A tablet (such as an Apple iPad or Samsung Galaxy Tab) is a thin, flat slab that consists almost entirely of a glass touchscreen. Tablets do not have physical keyboards by default; you tap on-screen keys with your finger or use a digital stylus pen.',
            'Tablets are lighter than laptops and are ideal for reading digital books, watching video tutorials, drawing artwork, and browsing recipe websites in the kitchen.'
          ]
        },
        {
          h3: 'Smartphones',
          paragraphs: [
            'A smartphone is a pocket-sized personal computer that can make phone calls. It features a touchscreen, fast mobile internet, GPS satellite positioning, high-resolution cameras, and access to millions of downloadable apps.',
            'For billions of people around the globe—including many students and families in Pakistan—a smartphone is their primary computer for online banking, messaging family, studying English, and reading daily news.'
          ]
        }
      ]
    },
    {
      id: 'business-and-cloud',
      h2: '2. Multi-User and Large-Scale Computers',
      paragraphs: [
        'While personal computers serve one individual, large organisations need powerful central systems that serve thousands or millions of users at the exact same moment.'
      ],
      subsections: [
        {
          h3: 'Servers',
          paragraphs: [
            'A server is a heavy-duty computer dedicated to providing data, files, websites, and services to other computers (called "clients") over a network or the internet. Whenever you watch a YouTube video, send a WhatsApp voice note, or visit a website, a server in a data centre receives your request and sends the file back to your screen.',
            'Servers are built to run 24 hours a day, 365 days a year without ever turning off or crashing. They often have multiple power supplies and duplicate hard drives for safety.'
          ]
        },
        {
          h3: 'Mainframe Computers',
          paragraphs: [
            'Mainframes are giant, highly secure computers used by large commercial enterprises, such as international banks, governments, tax departments, and airlines. Mainframes are famous for handling vast volumes of financial transactions simultaneously without failing.',
            'When thousands of people swipe their debit cards at automated teller machines (ATMs) across the country at the exact same second, it is usually a mainframe verifying the account balances.'
          ]
        },
        {
          h3: 'Supercomputers',
          paragraphs: [
            'Supercomputers are the most powerful and expensive calculation engines in human history. A supercomputer is not just a single box; it is an entire room filled with thousands of interconnected high-performance processors working in perfect coordination.',
            'Supercomputers are measured in "FLOPS" (floating-point operations per second). Modern supercomputers can calculate more than a quintillion (a 1 followed by 18 zeros) calculations every single second! They are used by climate scientists to predict severe storms, by doctors to design lifesaving medicines, and by space agencies to guide rockets to other planets.'
          ]
        }
      ]
    },
    {
      id: 'embedded-computers',
      h2: '3. Embedded Computers (The Invisible Helpers)',
      paragraphs: [
        'An embedded computer is a tiny computer chip dedicated to running one specific appliance. You do not see a desktop screen or a keyboard, but the machine is still taking input from sensors, processing data, and controlling actions.',
        'Most people have dozens of embedded computers in their homes without even realizing it!'
      ],
      bullets: [
        'Microwave ovens: The embedded chip reads button presses, counts down seconds, and turns off the microwave heater.',
        'Washing machines: Sensors measure the weight of the clothes and decide how much water and spinning speed are required.',
        'Modern cars: Microprocessors control fuel injection, anti-lock braking (ABS), speedometers, and airbag deployment.',
        'Smart TVs: Embedded chips decode digital streaming video signals and connect to home Wi-Fi networks.'
      ]
    }
  ],
  comparisonTable: {
    title: 'Comprehensive Comparison: Major Types of Computers',
    caption: 'How different computer categories compare in portability, user capacity, speed, and real-world usage.',
    headers: ['Computer Type', 'Portability', 'Users at Once', 'Main Strength', 'Where You See It'],
    rows: [
      ['Desktop PC', 'Stationary (Stays on desk)', 'Single user', 'High power, easy to repair', 'Offices, schools, homes'],
      ['Laptop', 'High (Folds into bag)', 'Single user', 'Portable with long battery', 'Universities, travel, coffee shops'],
      ['Tablet', 'Very High (Handheld)', 'Single user', 'Touchscreen simplicity', 'Digital drawing, reading, media'],
      ['Smartphone', 'Maximum (Fits in pocket)', 'Single user', 'Always connected with you', 'Everyday communication, navigation'],
      ['Server', 'None (Rack mounted in data center)', 'Hundreds to millions', 'Reliability, 24/7 uptime', 'Cloud companies, web hosting, banks'],
      ['Mainframe', 'None (Room sized cabinet)', 'Thousands of concurrent users', 'Extreme security, zero downtime', 'Airlines, national banks, governments'],
      ['Supercomputer', 'None (Entire warehouse room)', 'Teams of scientists', 'Unrivaled mathematical speed', 'Weather forecasting, nuclear physics, space research'],
      ['Embedded System', 'Built directly into appliance', 'Automatic (System only)', 'Low cost, dedicated to one task', 'Cars, washing machines, smart watches, microwaves']
    ]
  },
  faqs: [
    {
      question: 'Is a smart TV considered a computer?',
      answer: 'Yes. Smart TVs contain microprocessors, memory, internal storage, an operating system (like Android TV or webOS), and network connections to run apps like Netflix and YouTube.'
    },
    {
      question: 'Can I use a laptop as a desktop computer at home?',
      answer: 'Yes! You can plug an external full-size monitor, USB keyboard, and mouse into your laptop. This gives you the comfort of a desktop computer at home, while still being able to unplug your laptop and take it with you on the go.'
    },
    {
      question: 'What is the main difference between a server and a supercomputer?',
      answer: 'A server is built to handle millions of simple customer requests at the same time (like loading web pages or sending messages). A supercomputer is built to solve one giant, extremely difficult mathematical problem as fast as possible (like simulating the Earth\'s climate).'
    },
    {
      question: 'Why do mainframes still exist if we have cloud servers?',
      answer: 'Mainframes offer unmatched reliability and security. Some bank mainframes have operated for over 30 years without a single second of unplanned downtime, processing trillions of dollars in transactions safely.'
    },
    {
      question: 'Which type of computer is best for a student beginner?',
      answer: 'A mid-range laptop is usually the best choice for students. It offers enough power for typing essays, attending Zoom classes, and doing research, with the flexibility to take it to school or study at home.'
    }
  ],
  testYourself: [
    {
      question: 'Which type of computer combines screen, keyboard, and battery into one portable clamshell body?',
      answer: 'A laptop (notebook) computer.',
      hint: 'It can be carried in a backpack and runs on rechargeable power.'
    },
    {
      question: 'What is the fastest and most mathematically powerful type of computer on Earth?',
      answer: 'A supercomputer.',
      hint: 'Used for weather simulations and space travel calculations.'
    },
    {
      question: 'What do we call a small computer chip permanently built inside a microwave or washing machine?',
      answer: 'An embedded computer (or embedded system).',
      hint: 'It does one dedicated job inside a home appliance.'
    },
    {
      question: 'Which computer type serves websites and digital files to thousands of client computers over the internet?',
      answer: 'A server.',
      hint: 'It runs 24/7 inside data centres to serve internet requests.'
    },
    {
      question: 'Give one major advantage of a desktop PC over a laptop.',
      answer: 'Desktops provide more processing power for a lower price, and their parts are easy to open, repair, and upgrade over time.',
      hint: 'Think about space, cooling, and replacing parts.'
    }
  ],
  previousSlug: 'parts-of-a-computer',
  nextSlug: 'input-devices',
  relatedSlugs: ['what-is-a-computer', 'parts-of-a-computer', 'careers-in-computer-fields']
};
