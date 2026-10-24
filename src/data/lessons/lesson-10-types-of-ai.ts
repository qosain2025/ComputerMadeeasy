import { Lesson } from '../../types';

export const lessonTypesOfAi: Lesson = {
  slug: 'types-of-ai',
  order: 10,
  title: 'Types of AI: Narrow AI, Machine Learning, Deep Learning & Generative AI',
  shortTitle: 'Types of AI',
  metaTitle: 'Types of AI Explained in Simple English: Narrow AI to Generative AI',
  metaDescription: 'Explore the different types and branches of Artificial Intelligence: Narrow AI vs General AI, Machine Learning, Deep Learning, Generative AI, and Robotics.',
  h1: 'Types of Artificial Intelligence',
  directAnswer: 'Artificial Intelligence is not a single technology; it is a broad umbrella containing several distinct branches and levels of capability. Today, all real-world AI is "Narrow AI"—specialized systems trained to excel at one specific job, such as playing chess or translating languages. Within this field, technologies like Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Generative AI give machines the ability to see, read, create, and adapt.',
  readingTime: '10 min read',
  category: 'Modern Technology & AI',
  diagramType: 'ai-layers',
  summary: [
    'Every existing AI today is "Narrow AI", built for one dedicated task at a time.',
    '"General AI" (a machine with human-like general awareness across all topics) DOES NOT EXIST yet.',
    'Machine Learning allows software to improve through data rather than hand-written rules.',
    'Deep Learning uses multi-layered artificial neural networks inspired by biological brain cells.',
    'Generative AI creates brand-new sentences, realistic photographs, audio music, and code.',
    'Computer Vision allows machines to understand images, while NLP allows them to understand human language.'
  ],
  sections: [
    {
      id: 'capability-levels',
      h2: 'The Three Theoretical Levels of AI: The Honest Truth',
      paragraphs: [
        'Computer scientists divide artificial intelligence into three capability tiers based on how close they are to human thinking. Being honest about what exists today is critical for beginners.'
      ],
      subsections: [
        {
          h3: '1. Narrow AI (Weak AI) — What Exists Today',
          paragraphs: [
            'Narrow AI is designed and trained to perform one specific, well-defined task with high competence. It cannot do anything outside its narrow specialty.',
            'For example, an AI chess champion (like Deep Blue or Stockfish) can defeat the best human grandmaster in the world at chess. But if you ask that exact same chess computer to play a simple game of tic-tac-toe or tell you how the weather is outside, it cannot answer. It has zero knowledge of anything except chess.',
            'Every AI tool that exists in the world today—including ChatGPT, Apple Siri, Google Translate, and Tesla self-driving systems—is Narrow AI.'
          ]
        },
        {
          h3: '2. Artificial General Intelligence (AGI / Strong AI) — Does NOT Exist Yet',
          paragraphs: [
            'Artificial General Intelligence refers to a hypothetical future machine that could understand, learn, adapt, and apply knowledge across any intellectual task just like a human adult.',
            'An AGI system could learn to paint a portrait in the morning, perform brain surgery in the afternoon, write an original philosophy essay in the evening, and tell funny jokes at dinner. IMPORTANT TRUTH: AGI does not exist today. It remains an active area of scientific research and debate, and no one knows if or when it will ever be built.'
          ]
        },
        {
          h3: '3. Artificial Superintelligence (ASI) — Pure Science Fiction',
          paragraphs: [
            'Superintelligence refers to a theoretical machine that would far surpass the combined intellect of all human brains on Earth across every field, from scientific creativity to social skills. Today, this exists purely in science fiction novels and Hollywood films.'
          ]
        }
      ]
    },
    {
      id: 'branches-of-ai',
      h2: 'The Major Technical Branches of Artificial Intelligence',
      paragraphs: [
        'When computer scientists build intelligent systems, they use different specialized techniques depending on the problem.'
      ],
      subsections: [
        {
          h3: 'Machine Learning (ML)',
          paragraphs: [
            'Machine Learning is a method where computers learn from historical experience (data) without being explicitly programmed with rules for every scenario.',
            'Example: An email spam detector studies 100,000 emails marked "Spam" and 100,000 normal emails. It figures out on its own that messages containing words like "FREE PRIZE WINNER CLICK NOW" are 99% likely to be spam.'
          ]
        },
        {
          h3: 'Deep Learning (Artificial Neural Networks)',
          paragraphs: [
            'Deep Learning is a specialized subfield of Machine Learning inspired by the human brain. It uses layers of mathematical equations called "artificial neural networks".',
            'Data passes through dozens or hundreds of hidden layers, with each layer discovering more sophisticated details. For instance, the first layer might spot simple straight lines; the next layer spots curved shapes; the next spots eyes and noses; and the final layer recognizes an entire human face.'
          ]
        },
        {
          h3: 'Generative AI (GenAI)',
          paragraphs: [
            'Older AI systems were mostly "analytical"—they looked at existing data and classified it (for example: "Is this photo a cat or a dog?").',
            'Generative AI goes a step further: it creates brand-new content that never existed before. Based on patterns learned from billions of human examples, it can write an original bedtime story, compose music, create realistic digital paintings from a text description, or generate computer code.'
          ]
        },
        {
          h3: 'Computer Vision',
          paragraphs: [
            'Computer Vision gives machines the ability to see and understand visual imagery. It enables a camera to identify objects, measure distances, and track moving targets in real time.',
            'Examples: Self-driving cars using cameras to spot pedestrians and red traffic lights, hospital scanners detecting bone fractures, and security gates verifying passport photos.'
          ]
        },
        {
          h3: 'Natural Language Processing (NLP)',
          paragraphs: [
            'NLP allows computers to read, interpret, understand, and generate human languages like English, Urdu, French, or Arabic.',
            'Because human languages are full of slang, idioms, humor, and cultural expressions, teaching a computer to understand human speech is one of the most challenging areas of AI. NLP powers Google Translate, grammar checkers, and search engines.'
          ]
        },
        {
          h3: 'Robotics',
          paragraphs: [
            'Robotics combines AI software with mechanical hardware (motors, wheels, joints, and metal arms) to perform physical actions in the real physical world.',
            'Examples: Robotic vacuum cleaners navigating living room furniture, robotic arms welding car doors in factories, and exploration rovers driving on Mars.'
          ]
        }
      ]
    }
  ],
  comparisonTable: {
    title: 'Overview: Branches of Modern AI and Real-World Applications',
    caption: 'How the main technical disciplines of AI operate in daily software and hardware.',
    headers: ['Branch of AI', 'What it Does in Simple English', 'Everyday Example'],
    rows: [
      ['Narrow AI', 'Excels at one specific task only', 'Playing chess or finding driving directions'],
      ['Machine Learning', 'Learns patterns from past data without manual coding', 'Predicting house prices or weather trends'],
      ['Deep Learning', 'Uses multi-layered neural networks for complex patterns', 'Self-driving vehicle camera vision'],
      ['Generative AI', 'Creates brand-new text, images, or code from prompts', 'ChatGPT, Midjourney, and GitHub Copilot'],
      ['Computer Vision', 'Interprets and recognizes digital photos and video feeds', 'Unlocking phones with your face; airport security'],
      ['NLP', 'Understands and processes human speech and text', 'Google Translate and autocorrect keyboards'],
      ['Robotics', 'Gives physical bodies to AI to perform real-world work', 'Factory welding arms and robotic vacuum cleaners']
    ]
  },
  faqs: [
    {
      question: 'Does General AI (AGI) exist in 2026?',
      answer: 'No. Despite rapid advances in tools like ChatGPT, true Artificial General Intelligence (a machine with general human-like reasoning and adaptable intellect across all domains) does not exist yet.'
    },
    {
      question: 'Is Generative AI the same thing as Machine Learning?',
      answer: 'Generative AI is a specialized sub-branch of Machine Learning. All Generative AI is built using machine learning techniques, but not all machine learning is generative (many ML models only classify data or predict numbers).'
    },
    {
      question: 'What is an Artificial Neural Network?',
      answer: 'An artificial neural network is a mathematical algorithm loosely modeled on the interconnected neurons of a biological brain. It processes data across multiple layers to recognize subtle, complex patterns.'
    },
    {
      question: 'Can computer vision see in the dark?',
      answer: 'Yes! Computer vision systems can connect to infrared thermal cameras or night-vision sensors, allowing computers to "see" heat signatures and objects in complete pitch darkness where human eyes cannot.'
    },
    {
      question: 'Which branch of AI should a beginner programmer learn first?',
      answer: 'Beginners usually start with basic Machine Learning using the Python programming language. Python offers simple libraries like Scikit-Learn that make it easy to understand how computers learn from data tables.'
    }
  ],
  testYourself: [
    {
      question: 'What type of AI are all current real-world systems classified as?',
      answer: 'Narrow AI (or Weak AI).',
      hint: 'They are built to do one dedicated task well, not everything.'
    },
    {
      question: 'Does Artificial General Intelligence (AGI) exist today?',
      answer: 'No, AGI does not exist yet. It is still an unachieved research concept.',
      hint: 'Be completely honest about the current state of technology.'
    },
    {
      question: 'Which branch of AI allows computers to understand and translate human languages like English and Urdu?',
      answer: 'Natural Language Processing (NLP).',
      hint: 'Three words: Natural, Language, Processing.'
    },
    {
      question: 'What makes Generative AI different from traditional analytical AI?',
      answer: 'Analytical AI analyzes and categorizes existing data, while Generative AI creates brand-new content (text, images, audio, code).',
      hint: 'Think of sorting existing photos versus painting a brand-new picture.'
    },
    {
      question: 'Which branch of AI gives physical machinery the ability to move and work in the physical world?',
      answer: 'Robotics.',
      hint: 'Combines mechanical engineering with computer software.'
    }
  ],
  previousSlug: 'what-is-ai',
  nextSlug: 'careers-in-computer-fields',
  relatedSlugs: ['what-is-ai', 'careers-in-computer-fields', 'what-is-a-computer']
};
