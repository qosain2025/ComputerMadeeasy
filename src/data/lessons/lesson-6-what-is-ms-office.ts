import { Lesson } from '../../types';

export const lessonWhatIsMsOffice: Lesson = {
  slug: 'what-is-ms-office',
  order: 6,
  title: 'What is MS Office? Word, Excel, PowerPoint & More Explained Simply',
  shortTitle: 'What is MS Office?',
  metaTitle: 'What is Microsoft Office? Simple Beginner Guide to Word, Excel & Tools',
  metaDescription: 'Learn what Microsoft Office is in very simple English. Understand Word, Excel, PowerPoint, Outlook, Access, and OneNote with practical everyday examples.',
  h1: 'What is Microsoft Office?',
  directAnswer: 'Microsoft Office is a popular collection (or "suite") of desktop computer programs created to handle everyday paperwork, calculations, presentations, and communication. Instead of buying separate tools from different companies, MS Office bundles essential applications together—such as Microsoft Word for typing letters, Microsoft Excel for calculating numbers, and Microsoft PowerPoint for creating slide shows—so they share the same friendly interface and work seamlessly as a team.',
  readingTime: '9 min read',
  category: 'Software Skills',
  summary: [
    'MS Office is an office software package combining Word, Excel, PowerPoint, Outlook, Access, and OneNote.',
    'Microsoft Word handles text documents like resumes, school essays, and business letters.',
    'Microsoft Excel handles spreadsheets, mathematical calculations, and financial budgets.',
    'Microsoft PowerPoint creates visual slide presentations for lectures, speeches, and client meetings.',
    'It is the most widely demanded software skill in offices, schools, and government departments worldwide.'
  ],
  sections: [
    {
      id: 'why-office-matters',
      h2: 'Why is Microsoft Office Used Everywhere?',
      paragraphs: [
        'Before personal computers became common in offices, workers had separate mechanical tools on their desks: a typewriter for writing letters, a paper ledger and mechanical calculator for adding numbers, a carousel slide projector for business presentations, and a paper rolodex for customer addresses.',
        'Microsoft Office brought all of these physical tools together into one single software package on your computer screen. When you know how to use Microsoft Office, you can perform almost any standard office, school, or administrative task.'
      ],
      callout: {
        type: 'analogy',
        title: 'Real-Life Analogy: The Student Stationery Pencil Case',
        text: 'Think of Microsoft Office like a complete student pencil case. Inside one zipped pouch, you have a blue pen for writing (Word), a ruler and calculator for numbers (Excel), coloured markers for drawing posters (PowerPoint), and an address notebook (Outlook). Each tool does a different job, but they are all kept together.'
      }
    },
    {
      id: 'core-programs',
      h2: 'The 6 Major Microsoft Office Programs Explained',
      paragraphs: [
        'Each program in the Office suite is designed to solve a specific type of office or school problem.'
      ],
      subsections: [
        {
          h3: '1. Microsoft Word (The Word Processor)',
          paragraphs: [
            'Microsoft Word is a program dedicated to creating, editing, and formatting text documents. You type on a virtual white page that matches standard A4 printing paper.',
            'Word gives you complete control over your writing: you can change font styles, make text bold or italic, check spelling and grammar automatically, insert photos and tables, and save your work as a printable PDF.'
          ],
          bullets: [
            'Who uses it: Students writing essays, job seekers writing CVs/resumes, lawyers drafting contracts, and teachers making exam papers.',
            'Everyday Example: Typing an application letter to apply for an IT or IELTS course at Bright Future Academy in Chakswari.'
          ]
        },
        {
          h3: '2. Microsoft Excel (The Spreadsheet Calculator)',
          paragraphs: [
            'Microsoft Excel organizes data into a giant grid made of horizontal rows and vertical columns. The small boxes where rows and columns cross are called "cells".',
            'Excel is famous for its mathematical power. You can enter thousands of numbers and tell Excel to calculate totals, averages, percentages, and taxes automatically using built-in formulas. If you change one number, the entire sheet recalculates in a split second.'
          ],
          bullets: [
            'Who uses it: Accountants, shopkeepers, office managers, teachers calculating student grades, and families budgeting household expenses.',
            'Everyday Example: Creating a monthly grocery list that automatically calculates total spending and shows how much money is left over.'
          ]
        },
        {
          h3: '3. Microsoft PowerPoint (The Presentation Maker)',
          paragraphs: [
            'Microsoft PowerPoint allows you to build digital slide presentations (slide decks). Each page is called a "slide".',
            'You can arrange large titles, bullet points, diagrams, photos, and short video clips on each slide. When speaking to an audience, you connect your laptop to a projector or TV and advance slides one by one to keep people engaged.'
          ],
          bullets: [
            'Who uses it: Teachers delivering lectures, students presenting school projects, businessmen pitching ideas to clients, and doctors giving conference talks.',
            'Everyday Example: A teacher showing 10 slides on a projector screen to explain the parts of a computer to a classroom of 30 beginners.'
          ]
        },
        {
          h3: '4. Microsoft Outlook (Email and Calendar Manager)',
          paragraphs: [
            'Microsoft Outlook is an email client and personal calendar manager. Instead of opening a web browser to check email, Outlook runs directly on your computer desktop.',
            'Outlook organizes incoming emails into tidy folders, filters out spam messages, stores contact addresses, and keeps a daily calendar that sends popup reminders before important meetings or classes.'
          ],
          bullets: [
            'Who uses it: Corporate office workers, university professors, and managers who send dozens of professional emails every morning.',
            'Everyday Example: Scheduling an interview appointment on Tuesday at 11:00 AM and having Outlook send an alarm 15 minutes before.'
          ]
        },
        {
          h3: '5. Microsoft OneNote (The Digital Notebook)',
          paragraphs: [
            'Microsoft OneNote is a flexible digital notebook where you can type notes, sketch diagrams with a stylus pen, paste website screenshots, and record audio clips.',
            'Unlike Word, which enforces strict margins and pages, OneNote is an open, expandable digital whiteboard organized into color-coded tabs and sections.'
          ],
          bullets: [
            'Who uses it: University students taking rapid lecture notes, researchers gathering links, and planners organizing projects.',
            'Everyday Example: Creating a notebook named "IELTS Preparation" with separate tabs for Speaking, Writing, Reading, and Vocabulary.'
          ]
        },
        {
          h3: '6. Microsoft Access (The Database Manager)',
          paragraphs: [
            'Microsoft Access is a relational database management tool designed for handling large, connected lists of records.',
            'While Excel is great for simple lists of numbers, Access is designed for complex data with relationships—such as keeping track of 5,000 students, the courses they are taking, the fees they have paid, and the teachers assigned to each classroom.'
          ],
          bullets: [
            'Who uses it: Small business owners, school registrars, and library administrators managing inventories and client profiles.',
            'Everyday Example: A hospital tracking 2,000 patient medical histories and doctor appointments without mixing up files.'
          ]
        }
      ]
    },
    {
      id: 'versions-and-alternatives',
      h2: 'Microsoft Office vs Microsoft 365 and Free Alternatives',
      paragraphs: [
        'Over the years, the way people buy Microsoft Office has changed. Traditionally, you purchased a boxed CD with a one-time payment (like Office 2016 or Office 2021) and installed it on one desktop.',
        'Today, Microsoft offers "Microsoft 365", a monthly or annual subscription service that keeps your software updated with the latest features, gives you 1 TB of cloud storage on OneDrive, and allows you to access Word and Excel on your mobile phone and web browser.',
        'If you do not have Microsoft Office, there are excellent free alternatives available: Google Docs and Google Sheets (which run free in your web browser) and LibreOffice (a completely free, open-source office suite you can install on Windows, Mac, or Linux).'
      ]
    }
  ],
  comparisonTable: {
    title: 'Quick Guide: Which MS Office Program Should You Open?',
    caption: 'Match your current task to the best Microsoft Office program.',
    headers: ['What You Want to Do', 'Best Program', 'Default File Format', 'Key Strength'],
    rows: [
      ['Type a letter, resume, or essay', 'Microsoft Word', '.docx', 'Beautiful text formatting & spellcheck'],
      ['Calculate a budget or track expenses', 'Microsoft Excel', '.xlsx', 'Automated math formulas & charts'],
      ['Deliver a speech or classroom presentation', 'Microsoft PowerPoint', '.pptx', 'Visual slides, bullet points & images'],
      ['Manage business emails and appointments', 'Microsoft Outlook', '.pst / .ost', 'Email folders, calendar alarms & contacts'],
      ['Jot down quick thoughts and study notes', 'Microsoft OneNote', '.one', 'Freeform digital notebook pages'],
      ['Manage thousands of linked student records', 'Microsoft Access', '.accdb', 'Structured relational databases']
    ]
  },
  faqs: [
    {
      question: 'Is Microsoft Office free to use on desktop computers?',
      answer: 'The full desktop versions of Word and Excel usually require a paid license or a Microsoft 365 subscription. However, Microsoft offers simplified online versions of Word and Excel that are 100% free to use inside any web browser at office.com.'
    },
    {
      question: 'Can I open a Microsoft Word document on a smartphone?',
      answer: 'Yes! Microsoft provides free mobile apps for Word, Excel, and PowerPoint on both Android phones and Apple iPhones through Google Play Store and Apple App Store.'
    },
    {
      question: 'What happens if my computer crashes while using MS Word?',
      answer: 'Modern versions of Word include an "AutoRecover" feature. Word automatically saves a backup of your document every few minutes. When you reopen the program after a crash, it asks if you want to restore your recovered work.'
    },
    {
      question: 'Can files saved in Microsoft Word be opened in Google Docs?',
      answer: 'Yes. Google Docs can easily open, edit, and convert standard Microsoft Word files (.docx) without losing formatting.'
    },
    {
      question: 'Why do employers ask for MS Office skills on job applications?',
      answer: 'Almost every modern office relies on Word for typing communications and Excel for reviewing budgets. Having strong MS Office skills shows an employer that you can start working on day one without needing basic software training.'
    }
  ],
  testYourself: [
    {
      question: 'Which Microsoft Office application is primarily used for creating text documents like CVs and essays?',
      answer: 'Microsoft Word.',
      hint: 'It simulates typing on standard white sheets of paper.'
    },
    {
      question: 'What is the main purpose of Microsoft Excel?',
      answer: 'To calculate numbers, manage data in rows and columns, and create visual financial charts.',
      hint: 'It uses grids of cells and mathematical formulas like SUM.'
    },
    {
      question: 'Which Office program is used to create visual slide decks for speeches and lectures?',
      answer: 'Microsoft PowerPoint.',
      hint: 'It organizes content on individual slides.'
    },
    {
      question: 'What is the file extension used by modern Microsoft Word documents?',
      answer: '.docx',
      hint: 'It starts with .doc followed by an x.'
    },
    {
      question: 'Name one free alternative to Microsoft Office.',
      answer: 'Google Docs (or Google Sheets / LibreOffice).',
      hint: 'A free web-based suite provided by Google or an open-source project.'
    }
  ],
  previousSlug: 'output-devices',
  nextSlug: 'what-is-microsoft-excel',
  relatedSlugs: ['what-is-microsoft-excel', 'careers-in-computer-fields', 'what-is-a-website']
};
