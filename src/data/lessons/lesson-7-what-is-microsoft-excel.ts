import { Lesson } from '../../types';

export const lessonWhatIsMicrosoftExcel: Lesson = {
  slug: 'what-is-microsoft-excel',
  order: 7,
  title: 'What is Microsoft Excel? Cells, Rows, Columns & Formulas for Beginners',
  shortTitle: 'What is Microsoft Excel?',
  metaTitle: 'What is Microsoft Excel? Beginner Guide to Formulas & Spreadsheets',
  metaDescription: 'Learn Microsoft Excel in very simple English. Understand rows, columns, cells, SUM, AVERAGE, MAX, MIN, COUNT formulas, sorting, filtering, and simple charts.',
  h1: 'What is Microsoft Excel?',
  directAnswer: 'Microsoft Excel is an electronic spreadsheet program used to store, organize, calculate, and analyze numerical data. Instead of writing on a blank blank page like Word, Excel opens up a large grid of rows and columns. When you type numbers into this grid, Excel can add them, find averages, calculate profits, sort records in alphabetical order, and turn complicated tables into colourful charts in seconds.',
  readingTime: '10 min read',
  category: 'Software Skills',
  diagramType: 'excel-grid',
  summary: [
    'Excel is an electronic spreadsheet made up of rows (numbers) and columns (letters).',
    'A "cell" is a single box where a row and column intersect, identified by a name like A1 or C5.',
    'Every formula in Excel must begin with an equal sign (=).',
    'The 5 most useful beginner formulas are SUM, AVERAGE, MAX, MIN, and COUNT.',
    'Sorting orders your records, filtering hides unwanted rows, and charts turn numbers into clear visual pictures.'
  ],
  sections: [
    {
      id: 'grid-structure',
      h2: 'The Anatomy of an Excel Spreadsheet (Grid Structure)',
      paragraphs: [
        'When you launch Excel, it looks like a large piece of graph paper. Let us break down the basic building blocks that make up this screen.'
      ],
      subsections: [
        {
          h3: 'Columns (Vertical)',
          paragraphs: [
            'Columns run vertically from top to bottom. Each column is named with a letter of the alphabet along the very top edge of the sheet: Column A, Column B, Column C, and so on. After Column Z, Excel continues with AA, AB, AC, all the way to XFD (over 16,000 columns!).'
          ]
        },
        {
          h3: 'Rows (Horizontal)',
          paragraphs: [
            'Rows run horizontally from left to right. Each row is labeled with a number along the left-hand edge: Row 1, Row 2, Row 3, and so on. A single Excel sheet has over 1 million rows!'
          ]
        },
        {
          h3: 'Cells and Cell Addresses',
          paragraphs: [
            'A cell is an individual rectangular box where one column meets one row. Every cell has a unique name called its "Cell Address" or "Cell Reference".',
            'To name a cell, you always take the column letter first, followed by the row number. For example, the box where Column B meets Row 4 is named cell B4. The box at the very top-left corner is cell A1.'
          ],
          analogy: 'Analogy: A cell address is like a street address for a house. If your friend lives on Baker Street at House 12, their address is "Baker 12". In Excel, if a number lives in Column C at Row 5, its address is simply "C5".'
        },
        {
          h3: 'Worksheet vs Workbook',
          paragraphs: [
            'A "Workbook" is the entire Excel file you save to your computer (with the .xlsx extension). Inside one workbook, you can have multiple separate pages called "Worksheets" (or sheets).',
            'Look at the bottom left of your Excel window: you will see tabs named "Sheet1", "Sheet2", and a plus button (+) to add new sheets. A small business might keep January expenses on Sheet1, February expenses on Sheet2, and March on Sheet3—all neatly organized in one single workbook file.'
          ]
        }
      ]
    },
    {
      id: 'formulas-and-functions',
      h2: 'The Golden Rule of Excel: Formulas and Built-in Functions',
      paragraphs: [
        'The real superpower of Excel is that it does your math homework for you. You never need to pull out a pocket calculator to add up your rows.',
        'THE GOLDEN RULE: Every single formula in Excel must begin with an equal sign (=). If you forget the equal sign and type "10 + 20", Excel will simply display the words "10 + 20" as plain text. But if you type "=10 + 20", Excel immediately calculates and displays the answer: 30!'
      ],
      subsections: [
        {
          h3: '1. The SUM Formula (Adding Numbers Together)',
          paragraphs: [
            'Instead of typing =A1 + A2 + A3 + A4 + A5, Excel gives you a shortcut function called SUM. You specify the starting cell and ending cell separated by a colon (:). The colon simply means "through to".',
            'Formula: =SUM(B2:B6)',
            'Meaning: "Excel, please add up every number from cell B2 all the way down to cell B6 and show me the total sum."'
          ]
        },
        {
          h3: '2. The AVERAGE Formula (Finding the Middle Value)',
          paragraphs: [
            'The AVERAGE formula adds all the numbers in a range together and divides by how many items there are, giving you the mathematical mean.',
            'Formula: =AVERAGE(C2:C10)',
            'Meaning: "Calculate the average exam mark for all students listed between cell C2 and C10."'
          ]
        },
        {
          h3: '3. The MAX and MIN Formulas (Highest and Lowest)',
          paragraphs: [
            'MAX finds the biggest number in a list; MIN finds the smallest number.',
            'Formula: =MAX(D2:D50) finds the highest temperature of the month.',
            'Formula: =MIN(D2:D50) finds the coldest temperature of the month.'
          ]
        },
        {
          h3: '4. The COUNT Formula (Counting Items)',
          paragraphs: [
            'The COUNT function tells you how many cells in your selected range contain numbers.',
            'Formula: =COUNT(A2:A100)',
            'Meaning: "Tell me how many customer receipts were recorded in this list."'
          ]
        }
      ]
    },
    {
      id: 'sorting-and-filtering',
      h2: 'Sorting and Filtering: Organizing Big Lists Fast',
      paragraphs: [
        'When you have a list of hundreds of names, products, or telephone numbers, finding what you need can be slow. Excel provides two essential tools under the "Data" tab: Sort and Filter.'
      ],
      bullets: [
        'Sorting: Changes the physical order of your rows. You can sort names alphabetically from A to Z, or sort financial numbers from Largest to Smallest (or Smallest to Largest).',
        'Filtering: Temporarily hides rows you do not want to see without deleting any data. Small dropdown arrows appear at the top of each column header. If you click the filter on the "City" column and select only "Chakswari", Excel instantly hides all rows for other cities and shows you only Chakswari records.'
      ]
    },
    {
      id: 'visual-charts',
      h2: 'Turning Numbers into Visual Charts',
      paragraphs: [
        'People often struggle to spot trends when staring at a wall of 500 black-and-white numbers. Excel allows you to highlight your numbers, click the "Insert" tab, and generate a visual chart in one click.'
      ],
      bullets: [
        'Column or Bar Charts: Best for comparing different items side-by-side (for example, comparing sales between four branch shops).',
        'Pie Charts: Best for showing proportions of a whole 100% (for example, seeing what percentage of your monthly salary goes toward rent, food, bills, and savings).',
        'Line Charts: Best for showing how a single number changes over time (for example, tracking a student\'s marks over six months).'
      ]
    }
  ],
  practiceExercise: {
    title: 'Beginner Practice Exercise: Create a Monthly Household Budget',
    scenario: 'Imagine you want to calculate your family grocery expenses for the week using Microsoft Excel. Follow these simple steps:',
    steps: [
      'Step 1: Open a blank workbook in Excel. In cell A1, type the title "Weekly Grocery Budget" and make it bold.',
      'Step 2: In cell A3, type "Item Name". In cell B3, type "Cost (Rs)".',
      'Step 3: Enter your items and prices in the rows below:\n- In A4, type "Flour (Atta)" and in B4 type 1500\n- In A5, type "Cooking Oil" and in B5 type 1800\n- In A6, type "Milk & Yogurt" and in B6 type 950\n- In A7, type "Fresh Fruit" and in B7 type 650\n- In A8, type "Rice & Pulses" and in B8 type 1100',
      'Step 4: In cell A9, type "Total Expense". In cell B9, type the formula: =SUM(B4:B8) and press Enter.',
      'Step 5: In cell A10, type "Average Item Cost". In cell B10, type: =AVERAGE(B4:B8) and press Enter.',
      'Step 6: Test Excel’s magic! Change the cost of Flour in cell B4 from 1500 to 2000. Notice how the Total in cell B9 updates itself automatically!'
    ],
    sampleResult: 'Cell B9 will calculate Total = 6,000 (after updating Flour to 2,000) and cell B10 will calculate Average = 1,300.'
  },
  faqs: [
    {
      question: 'What is the difference between a formula and a function in Excel?',
      answer: 'A formula is any math calculation you write yourself (like =A1 + B1). A function is a pre-built shortcut formula created by Microsoft with an official name (like SUM, AVERAGE, or COUNT).'
    },
    {
      question: 'What does the error "######" mean when it appears in a cell?',
      answer: 'Do not panic! The "######" error does not mean your math is wrong. It simply means the column is too narrow to display the full number. Hover your mouse over the vertical line between the column letters at the top and double-click to widen the column.'
    },
    {
      question: 'What does the "#DIV/0!" error mean?',
      answer: 'This error occurs when a formula tries to divide a number by zero or by an empty cell. In mathematics, division by zero is impossible, so Excel warns you.'
    },
    {
      question: 'Can Excel calculate dates and times?',
      answer: 'Yes! Excel stores dates as serial numbers behind the scenes. You can subtract two dates (like =B2 - A2) to find the exact number of days between two events.'
    },
    {
      question: 'Can I use Excel for free on a smartphone?',
      answer: 'Yes. The Microsoft Excel mobile app is free to download on Android and iPhone for viewing and basic spreadsheet editing.'
    }
  ],
  testYourself: [
    {
      question: 'What character must you always type at the beginning of every Excel formula?',
      answer: 'The equal sign (=).',
      hint: 'Without it, Excel thinks you are typing plain words.'
    },
    {
      question: 'In cell address "D8", what does "D" stand for and what does "8" stand for?',
      answer: '"D" is the column letter (vertical) and "8" is the row number (horizontal).',
      hint: 'Letters are columns; numbers are rows.'
    },
    {
      question: 'Which formula would you write to add all numbers from cell C1 to cell C20?',
      answer: '=SUM(C1:C20)',
      hint: 'Use the SUM function with a colon between the first and last cell.'
    },
    {
      question: 'What is the difference between an Excel workbook and a worksheet?',
      answer: 'A workbook is the entire saved file (.xlsx), while a worksheet is a single page/tab within that workbook.',
      hint: 'Think of a book versus a single page inside the book.'
    },
    {
      question: 'Which chart type is best for showing percentages that add up to a whole 100%?',
      answer: 'A Pie Chart.',
      hint: 'It is shaped like a circular sliced pie.'
    }
  ],
  previousSlug: 'what-is-ms-office',
  nextSlug: 'what-is-a-website',
  relatedSlugs: ['what-is-ms-office', 'careers-in-computer-fields', 'what-is-a-computer']
};
