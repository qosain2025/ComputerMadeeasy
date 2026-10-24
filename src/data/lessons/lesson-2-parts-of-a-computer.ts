import { Lesson } from '../../types';

export const lessonPartsOfAComputer: Lesson = {
  slug: 'parts-of-a-computer',
  order: 2,
  title: 'Parts of a Computer: Hardware, Software & Components Explained',
  shortTitle: 'Parts of a Computer',
  metaTitle: 'Parts of a Computer: Hardware & Components in Simple English',
  metaDescription: 'Discover the main parts of a computer in plain English. Learn what the CPU, RAM, motherboard, hard drive, monitor, and keyboard do with easy real-life analogies.',
  h1: 'Parts of a Computer',
  directAnswer: 'A computer is made up of two essential halves: hardware (the physical parts you can touch with your hands) and software (the invisible programs and instructions that tell the machine what to do). Inside the computer case and on your desk, specialized components like the CPU, RAM, motherboard, storage drive, monitor, and keyboard work together as a single harmonious team.',
  readingTime: '9 min read',
  category: 'Computer Fundamentals',
  diagramType: 'parts',
  summary: [
    'Hardware is everything physical you can touch; software consists of the programs and code you run.',
    'The CPU is the central brain that calculates numbers and executes instructions.',
    'RAM is fast temporary memory (your desk workspace); storage drives (HDD/SSD) are permanent filing cabinets.',
    'The motherboard is the master circuit board connecting every single part together.',
    'External parts like monitors, keyboards, mice, and printers let you interact with the computer smoothly.'
  ],
  sections: [
    {
      id: 'hardware-vs-software',
      h2: 'Hardware vs Software: The Two Halves of Every System',
      paragraphs: [
        'Before looking inside the computer box, we must understand the most important division in computing: the difference between hardware and software.',
        'Hardware refers to the physical machinery and electronic parts. If you can kick it, touch it with your finger, drop it on the floor, or hold it in your hand, it is hardware. Examples include your keyboard, monitor, cables, and chips.',
        'Software refers to the digital programs, apps, and instructions written by programmers. You cannot touch software with your fingers; it only exists as digital code running inside the hardware. Examples include Microsoft Windows, your Google Chrome web browser, WhatsApp, and computer games.'
      ],
      callout: {
        type: 'analogy',
        title: 'Real-Life Analogy: The Book and the Story',
        text: 'Hardware is like the paper pages, cardboard cover, and printed black ink of a book. Software is the story, characters, and ideas written inside. You cannot enjoy a good story without paper to read it on, and a blank book without a story is just an empty pile of paper.'
      }
    },
    {
      id: 'internal-components',
      h2: 'The Core Internal Components (Inside the Computer Case)',
      paragraphs: [
        'If you open the side panel of a desktop computer case or look inside a laptop, you will find several electronic components. Each part has one specific job to keep the computer running smoothly.'
      ],
      subsections: [
        {
          h3: '1. The CPU (Central Processing Unit)',
          paragraphs: [
            'The CPU is a small square silicon chip tucked under a metal fan. It is often called the "brain" of the computer because it performs all arithmetic calculations, makes logical decisions, and directs orders to every other part of the system.',
            'Every time you click a button or open an app, the CPU reads the instruction, breaks it down into simple mathematical steps, and executes it in fractions of a nanosecond.'
          ],
          analogy: 'Analogy: The CPU is like the head chef in a busy restaurant kitchen, barking orders and making sure every meal is prepared properly.'
        },
        {
          h3: '2. The Motherboard (Main Circuit Board)',
          paragraphs: [
            'The motherboard is a large green, black, or blue circuit board that sits flat at the bottom or side of the computer case. It contains hundreds of tiny copper tracks, slots, and sockets.',
            'The motherboard does not do heavy calculations itself; instead, it connects every single part—the CPU, memory, hard drive, keyboard, and mouse—so they can communicate and send electric signals to one another.'
          ],
          analogy: 'Analogy: The motherboard is like the human nervous system and skeleton, connecting all our limbs and organs to our central brain.'
        },
        {
          h3: '3. RAM (Random Access Memory - Short-Term Memory)',
          paragraphs: [
            'RAM consists of thin rectangular green sticks that clip directly into slots on the motherboard. RAM is the super-fast temporary memory of the computer.',
            'When you open an app like Microsoft Word or a web browser, the computer copies that program from your slower storage drive into fast RAM so you can work without delays. However, RAM is "volatile"—meaning the moment you turn off the computer, everything stored in RAM is instantly wiped clean.'
          ],
          analogy: 'Analogy: RAM is like the flat surface of your work desk. The bigger your desk, the more books and papers you can spread out and read at the same time.'
        },
        {
          h3: '4. Storage Drives: HDD and SSD (Long-Term Memory)',
          paragraphs: [
            'Unlike RAM, storage drives hold your data permanently. When you save a photograph, essay, or song, it stays safely saved on this drive even when the computer is shut down and unplugged from the wall.',
            'There are two main types of storage drives today: Hard Disk Drives (HDD), which use magnetic spinning metal platters, and Solid State Drives (SSD), which use modern flash memory chips with no moving parts. SSDs are much faster, quieter, and less fragile than older HDDs.'
          ],
          analogy: 'Analogy: A storage drive is like a heavy metal filing cabinet in your office where you store files in folders for months and years.'
        },
        {
          h3: '5. The Power Supply Unit (PSU)',
          paragraphs: [
            'The Power Supply Unit is a metal box with a thick bundle of colored wires. It plugs into the wall socket and converts high-voltage alternating current (AC) electricity into safe, low-voltage direct current (DC) electricity that computer chips can use without burning out.'
          ],
          analogy: 'Analogy: The PSU is the human heart, pumping life-giving electric current to every component inside the computer body.'
        },
        {
          h3: '6. The Graphics Card (GPU - Video Card)',
          paragraphs: [
            'The Graphics Processing Unit (GPU) is a specialized chip designed specifically to handle visual imagery, 3D graphics, games, and high-definition video rendering. While some CPUs have basic graphics built inside them, gamers and video editors install a separate, powerful graphics card.'
          ],
          analogy: 'Analogy: The GPU is like a dedicated visual artist in an office who handles all drawing and painting so the head chef (CPU) can focus on calculations.'
        }
      ]
    },
    {
      id: 'external-parts',
      h2: 'External Hardware (Peripherals and Desk Components)',
      paragraphs: [
        'External components (often called peripherals) sit outside the computer box on your desk so you can see, hear, and interact with the digital system.'
      ],
      subsections: [
        {
          h3: 'Monitor (The Display Screen)',
          paragraphs: [
            'The monitor is your visual window into the computer. It displays text, pictures, windows, and mouse cursors using millions of microscopic coloured dots called pixels (red, green, and blue).'
          ]
        },
        {
          h3: 'Keyboard and Mouse',
          paragraphs: [
            'The keyboard allows you to type letters, numbers, and symbols into documents. The mouse is a pointing device that lets you move an arrow on the screen, select icons, click buttons, and drag windows easily.'
          ]
        },
        {
          h3: 'Speakers and Headphones',
          paragraphs: [
            'These devices turn digital sound files into audible sound waves so you can hear video lectures, notifications, music, and voices during calls.'
          ]
        },
        {
          h3: 'Printer',
          paragraphs: [
            'A printer takes digital documents from your screen and transfers them onto physical paper sheets using liquid ink or dry toner powder.'
          ]
        },
        {
          h3: 'External Ports (USB, HDMI, Audio, Ethernet)',
          paragraphs: [
            'Ports are the physical sockets on the front, back, or sides of the computer. USB ports let you connect flash drives, mice, and phones. HDMI ports send video and audio to monitors and televisions. Ethernet ports plug into network cables for stable internet.'
          ]
        }
      ]
    }
  ],
  comparisonTable: {
    title: 'Quick Comparison: RAM (Short-Term) vs Storage (Long-Term)',
    caption: 'Understand the critical differences between computer memory and computer storage.',
    headers: ['Feature', 'RAM (Memory)', 'Storage Drive (HDD / SSD)'],
    rows: [
      ['Purpose', 'Holds active tasks open right now', 'Stores files and apps permanently'],
      ['Speed', 'Extremely fast (instant response)', 'Slower compared to RAM'],
      ['When Power Turns Off', 'All data is immediately lost (volatile)', 'All data remains safe and saved'],
      ['Typical Size', '8 GB, 16 GB, or 32 GB', '256 GB, 512 GB, 1 TB or more'],
      ['Real-Life Analogy', 'Your open desk workspace', 'Your locked filing cabinet']
    ]
  },
  faqs: [
    {
      question: 'What happens if a computer runs out of RAM?',
      answer: 'When RAM becomes full, the computer slows down significantly. It starts temporarily moving data to the slower hard drive (called virtual memory or paging), which can cause programs to freeze or lag.'
    },
    {
      question: 'Why should I choose an SSD instead of a Hard Disk (HDD)?',
      answer: 'An SSD (Solid State Drive) is between 5 and 10 times faster than a traditional HDD. An SSD makes your computer start in a few seconds, opens apps instantly, and has no moving parts to break if shaken.'
    },
    {
      question: 'Can a computer work without a motherboard?',
      answer: 'No. The motherboard is the backbone of the computer. Without it, the CPU, memory, power supply, and screen would have no way to communicate or receive electricity.'
    },
    {
      question: 'What is the fan inside the computer for?',
      answer: 'Computer chips—especially the CPU and graphics card—produce a lot of heat when calculating data. Fans and metal heat sinks pull this heat away so the chips do not overheat or get damaged.'
    },
    {
      question: 'Are cables and flash drives considered hardware?',
      answer: 'Yes. Any physical object related to the computer that you can touch with your hands—including charging cables, flash drives, and power plugs—is hardware.'
    }
  ],
  testYourself: [
    {
      question: 'Which component is known as the "brain" of the computer?',
      answer: 'The CPU (Central Processing Unit).',
      hint: 'It performs arithmetic calculations and carries out program instructions.'
    },
    {
      question: 'Why is RAM called "volatile" memory?',
      answer: 'Because all information stored inside RAM disappears the moment the computer loses electric power.',
      hint: 'Think about what happens to open work if the power cuts before you press save.'
    },
    {
      question: 'What is the main role of the computer motherboard?',
      answer: 'To act as the master circuit board that connects all internal and external parts together so they can share data and power.',
      hint: 'Think of the human skeleton and nervous system.'
    },
    {
      question: 'Is Microsoft Word classified as hardware or software?',
      answer: 'Software, because it is an invisible digital application made of code rather than a physical part you can hold.',
      hint: 'Can you hold the words themselves in your hand, or only the paper they are printed on?'
    },
    {
      question: 'What is the difference between an HDD and an SSD?',
      answer: 'An HDD uses magnetic spinning mechanical disks to store data, while an SSD uses high-speed flash memory chips with no moving parts.',
      hint: 'One has spinning disks; the other uses silent microchips.'
    }
  ],
  previousSlug: 'what-is-a-computer',
  nextSlug: 'types-of-computers',
  relatedSlugs: ['what-is-a-computer', 'input-devices', 'output-devices']
};
