import { Lesson } from '../../types';

export const lessonWhatIsAi: Lesson = {
  slug: 'what-is-ai',
  order: 9,
  title: 'What is Artificial Intelligence (AI)? A Friendly Beginner Guide',
  shortTitle: 'What is AI?',
  metaTitle: 'What is Artificial Intelligence (AI)? Simple Explanation for Beginners',
  metaDescription: 'Learn what AI is in plain, simple English. Understand how machines learn from data, everyday AI examples, benefits, limits, and how to use AI tools safely.',
  h1: 'What is Artificial Intelligence (AI)?',
  directAnswer: 'Artificial Intelligence (often shortened to AI) is a branch of computer science where engineers build computer programs that can perform tasks that usually require human intelligence. This includes recognising spoken voices, understanding written sentences, spotting patterns in millions of photos, translating languages, and making decisions based on past experience.',
  readingTime: '9 min read',
  category: 'Modern Technology & AI',
  diagramType: 'ai-layers',
  summary: [
    'AI is software designed to simulate aspects of human thinking, learning, and problem-solving.',
    'Traditional software only follows fixed rules; AI learns patterns from large amounts of training data.',
    'You already use AI every day in map navigation, email spam filters, YouTube suggestions, and phone face unlocking.',
    'AI does not have feelings, consciousness, or real understanding; it is a mathematical pattern calculator.',
    'Always use AI tools safely by checking facts independently and never typing private passwords or confidential data.'
  ],
  sections: [
    {
      id: 'simple-definition',
      h2: 'Traditional Software vs AI: What Makes AI Special?',
      paragraphs: [
        'To understand what Artificial Intelligence is, you first need to look at how traditional computer programs work.',
        'In traditional programming, a human programmer must write down every single rule in advance. If you build a calculator program, you write: "If the user clicks plus, add the two numbers together." The machine obeys blindly. If a situation happens that the programmer did not predict, the software crashes or fails.',
        'Artificial Intelligence works differently. Instead of giving the computer every rule, we give the computer millions of examples (called training data) and let the computer discover the patterns on its own.'
      ],
      callout: {
        type: 'analogy',
        title: 'Real-Life Analogy: Teaching a Child to Recognize a Cat',
        text: 'How do you teach a young child what a cat looks like? You do not give the child a 500-page mathematics manual describing the exact angle of the cat\'s ears or the millimeter length of its whiskers. Instead, you point at real cats in the street and say: "Look, a cat!" After seeing 20 different cats (black cats, fluffy cats, sleeping cats), the child\'s brain recognizes the pattern. AI learns in this exact same way by studying millions of image examples.'
      }
    },
    {
      id: 'everyday-examples',
      h2: 'Everyday Examples of AI You Already Use',
      paragraphs: [
        'Many beginners think AI is only found in science fiction movies with walking metal robots. In reality, you probably interacted with artificial intelligence three or four times this morning before breakfast!'
      ],
      bullets: [
        'Smartphone Face Recognition: When you look at your locked phone, AI examines the distance between your eyes, nose, and chin to verify your identity, even if you put on glasses or a hat.',
        'Email Spam Filters: Gmail uses AI to read incoming emails, spotting suspicious words and tricky links to keep dangerous phishing messages out of your inbox.',
        'GPS Map Navigation: Google Maps analyzes live traffic data from millions of cars to calculate the fastest route home and predict road delays.',
        'Streaming Recommendations: When YouTube or Netflix suggests a new video you might like, an AI algorithm has studied what you watched previously and found similar videos enjoyed by people with matching tastes.',
        'Voice Assistants: Apple Siri, Google Assistant, and Amazon Alexa use speech recognition AI to transcribe your spoken words and answer your questions.'
      ]
    },
    {
      id: 'benefits-of-ai',
      h2: 'Why is Artificial Intelligence Helpful?',
      paragraphs: [
        'AI is transforming modern medicine, farming, education, and office work by tackling complex, repetitive tasks with tireless speed.'
      ],
      bullets: [
        'Medical Diagnosis: AI programs can review thousands of hospital chest X-rays in seconds, spotting early signs of pneumonia or tumours that a tired human doctor might miss.',
        'Language Translation: AI tools can translate long documents between 100 different languages instantly, helping people communicate across cultural borders.',
        'Automating Repetitive Tasks: AI can quickly sort through thousands of customer invoices, answer simple support questions 24/7, and summarize long meeting transcripts.'
      ]
    },
    {
      id: 'limits-and-risks',
      h2: 'The Limits, Flaws, and Risks of AI',
      paragraphs: [
        'Despite all the excitement, AI is not magic and it is not a human being. It has serious limitations that every beginner must understand.'
      ],
      subsections: [
        {
          h3: 'AI Has No True Understanding or Feelings',
          paragraphs: [
            'An AI writing tool can generate a touching poem about the rain, but the computer does not feel the rain, does not know what water feels like, and has no emotions. It is simply choosing the words that mathematically sound best based on human books it read during training.'
          ]
        },
        {
          h3: 'Hallucinations (Confident Falsehoods)',
          paragraphs: [
            'Sometimes, AI tools will state a completely fabricated "fact" with supreme confidence. Computer scientists call this a "hallucination". If you ask an AI for a historical date or scientific reference, it may invent a fake book or a non-existent law that sounds completely believable.'
          ]
        },
        {
          h3: 'Biased Data Leads to Biased Answers',
          paragraphs: [
            'Because AI learns from historical human text and pictures on the internet, it also inherits human prejudices and stereotypes. If the training data contains errors or unfair bias, the AI will repeat those same biases.'
          ]
        }
      ]
    },
    {
      id: 'safety-rules',
      h2: 'How to Use AI Tools Safely and Smartly',
      paragraphs: [
        'If you use modern AI assistants (like ChatGPT, Gemini, or Copilot) for school studies or office work, follow these three essential safety rules:'
      ],
      bullets: [
        '1. Never Share Private Data: Never type your bank account numbers, passwords, personal home address, or confidential family documents into public AI chat tools.',
        '2. Always Verify Facts Independently: Treat an AI assistant like an eager junior intern who sometimes makes things up. Always double-check historical dates, medical advice, and legal points using trusted textbooks or verified educational sources.',
        '3. Use AI as a Learning Helper, Not a Replacement for Thinking: Use AI to explain difficult grammar concepts, brainstorm essay outlines, or practice English vocabulary—but always do the final writing and learning yourself.'
      ]
    }
  ],
  comparisonTable: {
    title: 'Traditional Software vs Artificial Intelligence',
    caption: 'Key differences between standard rule-based code and modern AI machine learning.',
    headers: ['Feature', 'Traditional Software', 'Artificial Intelligence (AI)'],
    rows: [
      ['How it Works', 'Programmer writes exact rigid rules (If / Then)', 'Learns patterns automatically from vast training data'],
      ['Handling New Situations', 'Fails or crashes if scenario was not coded', 'Can make intelligent guesses on unseen examples'],
      ['Transparency', 'Easy to trace every single calculation step', 'Often a "black box" where reasoning is complex math'],
      ['Human Error Risk', 'Bugs made directly by the programmer', 'Biases and hallucinations inherited from training data'],
      ['Everyday Example', 'A basic desktop pocket calculator', 'Facial recognition unlocking your phone']
    ]
  },
  faqs: [
    {
      question: 'Is Artificial Intelligence alive or conscious?',
      answer: 'No. AI is not alive, has no thoughts, feelings, soul, or self-awareness. It is purely mathematical software executing statistical probability algorithms on silicon computer chips.'
    },
    {
      question: 'Can AI replace all human jobs?',
      answer: 'No. While AI can automate repetitive tasks like typing data and basic proofreading, human jobs require empathy, emotional care, leadership, hands-on physical skill, and moral judgment that computers cannot provide.'
    },
    {
      question: 'What is a "prompt" in modern AI tools?',
      answer: 'A prompt is the instruction, question, or paragraph you type into an AI tool (such as "Explain photosynthesis in simple English for an 8-year-old"). The clearer your prompt, the better the AI response.'
    },
    {
      question: 'Why do AI tools sometimes give wrong answers?',
      answer: 'AI tools predict the next likely word based on statistics, not by actually verifying facts in the real world. When training data has gaps or contradictions, the tool can generate confident-sounding falsehoods (hallucinations).'
    },
    {
      question: 'Is it safe for students to use AI for homework?',
      answer: 'Yes, if used as a personal tutor to explain hard topics and provide examples. However, copying and pasting AI answers directly into school assignments without understanding them is harmful to learning and against school honesty policies.'
    }
  ],
  testYourself: [
    {
      question: 'What is the main difference between traditional computer code and Artificial Intelligence?',
      answer: 'Traditional code follows rigid human-written rules; AI discovers patterns and learns from large sets of training data.',
      hint: 'Think of rules given in advance versus learning from examples.'
    },
    {
      question: 'What term is used when an AI tool states a completely fabricated fact with high confidence?',
      answer: 'An AI hallucination.',
      hint: 'A word borrowed from psychology when someone sees or hears things that are not there.'
    },
    {
      question: 'Name two everyday examples of AI that you might find on a smartphone.',
      answer: 'Face recognition unlocking and voice assistants like Siri / Google Assistant (or predictive text).',
      hint: 'Think of features that look at your face or listen to your voice.'
    },
    {
      question: 'Does modern Artificial Intelligence possess real feelings or consciousness?',
      answer: 'No. AI is completely unconscious and has no feelings; it is mathematical code calculating word and pattern probabilities.',
      hint: 'It does not feel happy, sad, or pain.'
    },
    {
      question: 'What is the number one safety rule when chatting with public AI tools?',
      answer: 'Never enter private, sensitive information like passwords, bank details, or confidential personal data.',
      hint: 'Keep your private identity and secrets safe.'
    }
  ],
  previousSlug: 'what-is-a-website',
  nextSlug: 'types-of-ai',
  relatedSlugs: ['types-of-ai', 'what-is-a-computer', 'careers-in-computer-fields']
};
