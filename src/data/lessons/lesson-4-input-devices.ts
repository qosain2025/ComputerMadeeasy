import { Lesson } from '../../types';

export const lessonInputDevices: Lesson = {
  slug: 'input-devices',
  order: 4,
  title: 'Input Devices: How We Give Commands to Computers',
  shortTitle: 'Input Devices',
  metaTitle: 'Computer Input Devices Explained in Simple English with Examples',
  metaDescription: 'Learn about all computer input devices in simple English: keyboard, mouse, touchscreen, microphone, webcam, scanner, barcode reader, and stylus.',
  h1: 'Input Devices',
  directAnswer: 'An input device is any hardware tool that lets you enter data, give instructions, or send signals into a computer. Without input devices, a computer would have no way of knowing what you want it to do. Common input devices include keyboards for typing letters, mice and touchscreens for pointing and clicking, microphones for capturing speech, webcams for recording video, and scanners for digitising paper documents.',
  readingTime: '9 min read',
  category: 'Hardware Basics',
  diagramType: 'input-output',
  summary: [
    'Input devices translate human actions (typing, moving a hand, speaking) into electronic signals the computer understands.',
    'The keyboard is the most common text input device, while the mouse and touchscreen are primary pointing devices.',
    'Audio and video input devices like microphones and webcams capture live sound and visuals.',
    'Optical input devices like scanners and barcode readers turn physical printed data into digital files.',
    'Specialised controllers like joysticks and stylus pens enable gaming and digital artwork.'
  ],
  sections: [
    {
      id: 'what-is-input',
      h2: 'What is an Input Device?',
      paragraphs: [
        'Think of how you communicate with other people: you speak words, wave your hands, or write on paper. A computer does not have ears, eyes, or hands of its own. It only understands electric pulses (zeros and ones).',
        'An input device acts as a translator between you and the computer. When you press the letter "A" on your keyboard, the keyboard converts that physical tap into a tiny electronic code and sends it along a cable or wireless radio wave directly into the computer’s processor. Within a few milliseconds, the computer understands your action and shows the letter "A" on your screen.'
      ],
      callout: {
        type: 'analogy',
        title: 'Real-Life Analogy: Human Senses and Hands',
        text: 'Input devices are like your eyes, ears, and fingertips. Just as your senses collect sights and sounds from the world and send them to your human brain, input devices collect keystrokes, voice notes, and touch taps and send them to the CPU.'
      }
    },
    {
      id: 'text-and-pointing',
      h2: '1. Text and Pointing Input Devices',
      paragraphs: [
        'These are the input tools you use most frequently every single day when sitting at a desk or holding a modern mobile phone.'
      ],
      subsections: [
        {
          h3: 'The Keyboard',
          paragraphs: [
            'The keyboard is the primary tool for entering letters, numbers, punctuation marks, and control commands into a computer. Most keyboards use the standard "QWERTY" layout, named after the first six letters on the top letter row.',
            'Keyboards feature different groups of keys: alphanumeric keys (letters A-Z and numbers 0-9), punctuation keys, special keys (Spacebar, Enter, Backspace, Shift, Caps Lock), arrow navigation keys, and function keys (F1 to F12) that trigger software shortcuts.'
          ],
          bullets: [
            'Enter key: Confirms a choice or starts a new line in a text document.',
            'Backspace: Deletes the character directly to the left of your cursor.',
            'Caps Lock: Toggles typing in uppercase capital letters (LIKE THIS).'
          ]
        },
        {
          h3: 'The Computer Mouse and Trackpad',
          paragraphs: [
            'A computer mouse is a handheld pointing tool that controls the movement of a pointer (cursor) on your screen. As you roll the mouse over your desk surface, an optical sensor underneath tracks the movement using a tiny red or invisible light beam.',
            'A mouse usually has a Left Button (used for clicking links and selecting text), a Right Button (used to open shortcut option menus), and a Scroll Wheel in the middle for scrolling up and down long web pages.',
            'On laptops, the mouse is replaced by a flat, touch-sensitive pad called a Trackpad or Touchpad. You glide your finger across the smooth pad to move the cursor and tap it to click.'
          ]
        },
        {
          h3: 'Touchscreens',
          paragraphs: [
            'A touchscreen is a display screen that also detects the touch of your finger or a digital pen. This means a touchscreen acts as both an input device and an output device at the exact same time!',
            'Touchscreens are standard on modern smartphones, tablets, bank ATM machines, supermarket self-checkout registers, and airport check-in kiosks. You can tap, double-tap, swipe left or right, and pinch with two fingers to zoom into photos.'
          ]
        }
      ]
    },
    {
      id: 'audio-visual-input',
      h2: '2. Audio and Visual Input Devices',
      paragraphs: [
        'These devices allow computers to hear human voices and record real-world images and videos.'
      ],
      subsections: [
        {
          h3: 'Microphones',
          paragraphs: [
            'A microphone captures physical sound waves from your voice or musical instruments and converts them into digital audio signals.',
            'Microphones are used for speaking on WhatsApp voice calls, attending online IELTS lectures, recording podcasts, and giving voice commands to smart assistants like Siri or Google Assistant.'
          ]
        },
        {
          h3: 'Webcams and Digital Cameras',
          paragraphs: [
            'A webcam is a small digital video camera either clipped onto a desktop monitor or built directly into the top edge of a laptop screen.',
            'It continuously captures live video of your face and surroundings and feeds it into communication software like Zoom, Microsoft Teams, or Google Meet for video meetings and remote education.'
          ]
        },
        {
          h3: 'Image Scanners',
          paragraphs: [
            'A flatbed scanner works like a digital photocopier. You place a physical sheet of paper (such as an ID card, paper certificate, passport, or old printed photograph) onto a glass panel. A bright light bulb and digital optical sensor pass slowly underneath, taking a high-resolution snapshot and saving it as a PDF or image file on your computer.'
          ]
        }
      ]
    },
    {
      id: 'specialised-input',
      h2: '3. Specialised and Commercial Input Devices',
      paragraphs: [
        'Many industries use specialised input devices designed for specific daily jobs.'
      ],
      subsections: [
        {
          h3: 'Barcode Readers and QR Code Scanners',
          paragraphs: [
            'A barcode reader uses a red laser beam or camera sensor to scan the pattern of black and white vertical stripes printed on grocery packaging, medicine boxes, and clothing tags.',
            'The scanner immediately translates the striped pattern into a product number, enabling supermarket cash registers to ring up prices and update inventory stocks in less than a second.'
          ]
        },
        {
          h3: 'Joysticks and Gamepads',
          paragraphs: [
            'A joystick consists of a stick that pivots on a base and reports its angle and direction to the computer. Gamepads feature thumb buttons and directional pads. They provide fast, natural control for video games, flight simulators, and remote-controlled industrial cranes.'
          ]
        },
        {
          h3: 'Stylus Pens and Graphics Tablets',
          paragraphs: [
            'A stylus is a digital pen used on a touchscreen or dedicated drawing tablet. Digital artists, graphic designers, and architects use stylus pens to sketch illustrations, paint paintings, and sign legal documents with natural pressure sensitivity.'
          ]
        }
      ]
    }
  ],
  comparisonTable: {
    title: 'Summary: Common Input Devices and Their Data Types',
    caption: 'Overview of standard computer input devices, the type of data they enter, and typical use cases.',
    headers: ['Input Device', 'Type of Data Entered', 'Primary Benefit', 'Common Real-World Example'],
    rows: [
      ['Keyboard', 'Text, numbers, shortcuts', 'Fast, accurate typing', 'Writing essays, coding, sending emails'],
      ['Mouse / Trackpad', '2D screen coordinates, clicks', 'Easy navigation and selection', 'Browsing websites, dragging files'],
      ['Touchscreen', 'Direct finger touch coordinates', 'Intuitive and space saving', 'Smartphones, bank ATMs, tablets'],
      ['Microphone', 'Audio sound waves', 'Hands-free communication', 'Voice calls, speech recognition'],
      ['Webcam', 'Live video frames', 'Real-time face-to-face visual', 'Zoom meetings, online classes'],
      ['Scanner', 'Physical paper documents', 'Preserves paper documents digitally', 'Scanning passport, certificates'],
      ['Barcode Reader', 'Printed code numbers', 'Zero typing errors at checkout', 'Supermarkets, warehouses, parcel tracking']
    ]
  },
  faqs: [
    {
      question: 'Is a computer monitor an input device or an output device?',
      answer: 'A regular monitor is purely an output device because it only displays pictures from the computer. However, a touchscreen monitor is both an input and output device because you can touch it to send commands and view results on the same glass.'
    },
    {
      question: 'Why are keys arranged in QWERTY order instead of ABCDEF?',
      answer: 'The QWERTY layout was invented in the 1870s for early mechanical typewriters. It placed commonly paired letters far apart on the keyboard so the metal mechanical arms would not crash and jam together when typists typed quickly.'
    },
    {
      question: 'Can I connect multiple input devices to the same computer at once?',
      answer: 'Yes! You can easily plug in a keyboard, two mice, a webcam, a microphone, and a drawing tablet into separate USB ports, and the computer will accept input from all of them.'
    },
    {
      question: 'What is a wireless mouse, and how does it connect?',
      answer: 'A wireless mouse connects to the computer without a physical cord. It communicates using a tiny USB radio receiver (2.4 GHz wireless) plugged into your computer or directly through Bluetooth wireless signals.'
    },
    {
      question: 'How does voice typing work on a computer?',
      answer: 'When you speak into your microphone, the audio is converted into digital signals. Speech-to-text software analyzes your voice sounds, compares them to an extensive vocabulary dictionary, and types the matching English words onto your screen automatically.'
    }
  ],
  testYourself: [
    {
      question: 'What is the main definition of an input device?',
      answer: 'A hardware component that sends data, commands, or signals into a computer for processing.',
      hint: 'It allows human instructions to get inside the machine.'
    },
    {
      question: 'Which device is used in supermarkets to instantly read product prices from striped tags?',
      answer: 'A barcode reader (or barcode scanner).',
      hint: 'It uses a red laser beam to read black and white striped patterns.'
    },
    {
      question: 'Why is a touchscreen considered both an input and an output device?',
      answer: 'Because it displays visual results (output) while also sensing finger taps and gestures to receive commands (input).',
      hint: 'It does two jobs at the same time on one glass screen.'
    },
    {
      question: 'What is the flat, touch-sensitive mouse area on a laptop called?',
      answer: 'A trackpad (or touchpad).',
      hint: 'You glide your finger across it instead of rolling an external mouse.'
    },
    {
      question: 'What type of input device converts physical printed paper documents into digital image files?',
      answer: 'An optical scanner (or flatbed scanner).',
      hint: 'It works like a digital photocopier.'
    }
  ],
  previousSlug: 'types-of-computers',
  nextSlug: 'output-devices',
  relatedSlugs: ['output-devices', 'parts-of-a-computer', 'what-is-a-computer']
};
