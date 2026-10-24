import { Lesson } from '../../types';

export const lessonWhatIsAComputer: Lesson = {
  slug: 'what-is-a-computer',
  order: 1,
  title: 'What is a Computer? (Simple Explanation for Beginners)',
  shortTitle: 'What is a Computer?',
  metaTitle: 'What is a Computer? Beginner Guide in Simple English',
  metaDescription: 'Learn what a computer is in very simple English. Understand how computers take input, process data, store files, and produce output with everyday examples.',
  h1: 'What is a Computer?',
  directAnswer: 'A computer is an electronic machine that takes raw information (called data), works on it according to your instructions (processing), saves it safely (storage), and shows you the final result (output). It helps people solve problems, write letters, calculate numbers, send messages, and browse the internet quickly and accurately.',
  readingTime: '8 min read',
  category: 'Computer Fundamentals',
  diagramType: 'ipsv',
  summary: [
    'A computer is an electronic tool that changes raw data into meaningful information.',
    'Every computer follows the four-step IPSO cycle: Input, Process, Store, and Output.',
    'Data means raw, unorganized facts; information means data that is organized and useful.',
    'Early computers filled entire rooms, but modern computers fit in your pocket or on your wrist.',
    'Today we rely on computers for studying, banking, healthcare, office work, and staying in touch with family.'
  ],
  sections: [
    {
      id: 'definition',
      h2: 'Understanding the Word "Computer" in Plain Words',
      paragraphs: [
        'The word "compute" simply means to calculate or count. Long ago, a "computer" was actually a human job title! People sat at desks with paper and pens to calculate long lists of numbers for ships, taxes, and banks. Today, when we say computer, we mean an electronic machine designed to do calculations and process information millions of times faster than any human ever could.',
        'Unlike a toaster or a light bulb, which can only do one single job, a computer is a general-purpose machine. This means you can use the exact same computer to type a school essay, listen to music, watch a video lesson, calculate your monthly grocery budget, or talk with a friend across the world.'
      ],
      callout: {
        type: 'analogy',
        title: 'Real-Life Analogy: The Fruit Blender',
        text: 'Think of a computer like making fresh juice. Putting whole oranges into the blender is Input. The spinning blades cutting the fruit is Processing. The juice sitting in the pitcher is Storage. Pouring the sweet juice into your drinking glass is Output.'
      }
    },
    {
      id: 'four-functions',
      h2: 'The Four Main Jobs of Every Computer (IPSO Cycle)',
      paragraphs: [
        'No matter how big or small a computer is—whether it is a giant weather computer or the smartphone in your palm—it always performs four basic actions in order. We call this the IPSO cycle: Input, Process, Storage, and Output.'
      ],
      subsections: [
        {
          h3: '1. Input (Giving Instructions and Data)',
          paragraphs: [
            'Input is any information or instruction you send into the computer. Before a machine can do any work, you must tell it what to do. You give input whenever you press keys on a keyboard, click a button with a mouse, speak into a microphone, or tap your finger on a smartphone screen.'
          ],
          bullets: [
            'Typing the letters "2 + 2" on your keyboard.',
            'Clicking a file icon on your desktop to open it.',
            'Speaking the words "Call Mum" into your phone microphone.'
          ]
        },
        {
          h3: '2. Process (Doing the Thinking and Work)',
          paragraphs: [
            'Processing is the actual work the computer does with your input. The computer takes the raw facts you gave it, follows set rules or computer programs, and calculates the result. The part inside the computer that handles this job is called the Central Processing Unit, or CPU for short. People often call the CPU the "brain" of the computer.'
          ],
          bullets: [
            'Adding the numbers 2 and 2 together to get 4.',
            'Checking your typed text for spelling mistakes.',
            'Translating a sentence from English to Urdu or Spanish.'
          ]
        },
        {
          h3: '3. Storage (Keeping Information for Later)',
          paragraphs: [
            'Computers need a safe place to hold information. Storage allows the computer to remember your files, photos, letters, and programs even after you switch the power off. Without storage, every letter you typed would disappear the second you shut down your device.'
          ],
          bullets: [
            'Temporary storage (RAM): Holds what you are working on right now while the power is on.',
            'Permanent storage (SSD or Hard Drive): Keeps your family photos, downloaded books, and software safe for years.'
          ]
        },
        {
          h3: '4. Output (Showing You the Finished Result)',
          paragraphs: [
            'Output is the final information that the computer gives back to you after finishing its work. Output turns numbers and electric signals into something human eyes can read, human ears can hear, or human hands can touch.'
          ],
          bullets: [
            'Seeing the number "4" appear clearly on your monitor screen.',
            'Hearing your teacher speak through your headphones during an online lesson.',
            'Printing a family recipe onto paper using an office printer.'
          ]
        }
      ]
    },
    {
      id: 'data-vs-information',
      h2: 'The Difference Between "Data" and "Information"',
      paragraphs: [
        'Beginners often mix up the words "data" and "information", but they mean two different things in computer science. Understanding the difference will make learning much easier.',
        'Data means raw, unorganized facts, numbers, or symbols. On its own, raw data does not tell a clear story. For example, if someone walks into a room and shouts: "98, 42, Ali, 15", you will be confused. Those are raw numbers and names without context.',
        'Information is data that has been cleaned, organized, and given meaning by a computer. When the computer organizes those numbers into a neat table that says "Ali scored 98 marks in English and 42 marks in Science", it becomes valuable information that a teacher or parent can understand and act upon.'
      ],
      bullets: [
        'Data = Raw ingredients (like raw flour, sugar, and raw eggs).',
        'Processing = Baking them together in an oven.',
        'Information = The finished, delicious birthday cake ready to eat.'
      ]
    },
    {
      id: 'simple-history',
      h2: 'A Very Short and Simple History of Computers',
      paragraphs: [
        'Humans have always searched for faster ways to count. Thousands of years ago, merchants used the Abacus—a wooden frame with sliding beads—to add and subtract trade goods quickly.',
        'In the 1830s, an English mathematician named Charles Babbage designed a machine made of brass gears and steam power called the "Analytical Engine". Although he never finished building it, his design contained an input unit, a calculation engine, and memory. Because of these ideas, Charles Babbage is known as the "Father of the Computer".',
        'In the 1940s, during the Second World War, scientists built the first electronic computers, such as the famous ENIAC in the United States. ENIAC weighed 30 tons, used over 17,000 glass vacuum tubes, and took up an entire large room. It used so much electricity that street lights in the surrounding city dimmed when it turned on!',
        'The great breakthrough happened in the 1950s and 1960s with the invention of the silicon transistor and the microchip. Engineers could now fit millions of tiny electric switches onto a chip smaller than a postage stamp. This allowed computers to become small enough to sit on an office desk in the 1980s, and eventually small enough to slide into your trousers pocket as modern smartphones.'
      ]
    },
    {
      id: 'why-we-use-computers',
      h2: 'Why Do We Use Computers in Modern Life?',
      paragraphs: [
        'Today, computers are an essential part of almost every career and household. We do not use computers just because they are modern; we use them because they provide three major benefits: speed, accuracy, and tireless reliability.'
      ],
      bullets: [
        'Speed: A human might take ten minutes to add up 500 long numbers. A computer can add 500 million numbers in less than one second.',
        'Accuracy: When given correct instructions, a computer never makes math errors, never gets distracted, and never forgets a step.',
        'Storage Capacity: A tiny memory card the size of a fingernail can store hundreds of heavy books, thousands of songs, and years of letters.',
        'Communication: Computers connected to the internet allow students in Chakswari to take international classes, share research, and speak with family anywhere on Earth instantly.',
        'Everyday Work: Banks use computers to keep money safe, hospitals use them to monitor patient heartbeats, and schools use them to teach modern digital skills.'
      ]
    }
  ],
  faqs: [
    {
      question: 'Can a computer make mistakes on its own?',
      answer: 'No. Computers only follow the instructions given to them by humans. If a computer produces a wrong answer, it is almost always because a human typed incorrect data (known as "Garbage In, Garbage Out") or because there is an error in the software program.'
    },
    {
      question: 'What is the most important part of a computer?',
      answer: 'The Central Processing Unit (CPU) is considered the most important part because it acts as the brain. It carries out every instruction and calculation that makes programs run.'
    },
    {
      question: 'Is a smartphone really a computer?',
      answer: 'Yes! A smartphone is a complete, powerful computer. It has a CPU, memory, permanent storage, a touchscreen for input and output, and an operating system (like Android or iOS).'
    },
    {
      question: 'What is the difference between hardware and software?',
      answer: 'Hardware is the physical machinery you can touch with your hands (like the keyboard or screen). Software is the set of invisible instructions and programs (like Windows, Word, or games) that tell the hardware what to do.'
    },
    {
      question: 'Do I need internet access to use a computer?',
      answer: 'No. You can write letters, draw pictures, listen to saved music, and do calculations on a computer without any internet connection. You only need the internet when you want to visit websites, send emails, or download new files.'
    }
  ],
  testYourself: [
    {
      question: 'What does the acronym "IPSO" stand for in computer science?',
      answer: 'Input, Process, Storage, and Output.',
      hint: 'It describes the four fundamental steps every computer performs.'
    },
    {
      question: 'Which part of a computer is often called its "brain"?',
      answer: 'The Central Processing Unit (CPU).',
      hint: 'It is the main chip that does all the calculations and thinking.'
    },
    {
      question: 'What is the main difference between raw data and information?',
      answer: 'Data is raw unorganized facts; information is data that has been processed, structured, and given clear meaning.',
      hint: 'Think of raw fruit versus a ready-to-drink glass of juice.'
    },
    {
      question: 'Who is widely regarded as the "Father of the Computer"?',
      answer: 'Charles Babbage, who designed the mechanical Analytical Engine in the 1830s.',
      hint: 'He was an English mathematician from the 19th century.'
    },
    {
      question: 'Name two everyday examples of computer output.',
      answer: 'Text or images displayed on a monitor screen, and sound coming out of speakers or headphones (or printed paper from a printer).',
      hint: 'Think of what you can see, hear, or hold after the computer finishes its work.'
    }
  ],
  previousSlug: undefined,
  nextSlug: 'parts-of-a-computer',
  relatedSlugs: ['parts-of-a-computer', 'types-of-computers', 'input-devices']
};
