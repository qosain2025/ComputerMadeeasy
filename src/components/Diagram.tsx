import React from 'react';

interface DiagramProps {
  type: string;
}

export function Diagram({ type }: DiagramProps) {
  switch (type) {
    case 'ipsv':
      return (
        <figure className="diagram-container">
          <svg
            viewBox="0 0 760 220"
            role="img"
            aria-label="Diagram showing the 4 basic steps of computing: Input, Process, Storage, and Output"
            className="diagram-svg"
          >
            <rect width="760" height="220" rx="12" fill="#0f2648" />
            
            {/* Box 1: Input */}
            <g transform="translate(30, 45)">
              <rect width="140" height="130" rx="8" fill="#1b3b6f" stroke="#d97706" strokeWidth="2" />
              <circle cx="70" cy="40" r="20" fill="#2c5282" />
              <path d="M70 28 v24 M58 40 h24" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" />
              <text x="70" y="85" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="16">1. INPUT</text>
              <text x="70" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="12">Keyboard, Mouse</text>
              <text x="70" y="120" textAnchor="middle" fill="#93c5fd" fontSize="11">Data enters</text>
            </g>

            {/* Arrow 1 */}
            <path d="M180 110 h35" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />

            {/* Box 2: Process */}
            <g transform="translate(225, 45)">
              <rect width="140" height="130" rx="8" fill="#1b3b6f" stroke="#d97706" strokeWidth="2" />
              <circle cx="70" cy="40" r="20" fill="#2c5282" />
              <path d="M60 40 h20 M70 30 v20" stroke="#fcd34d" strokeWidth="2.5" />
              <text x="70" y="85" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="16">2. PROCESS</text>
              <text x="70" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="12">CPU (Brain)</text>
              <text x="70" y="120" textAnchor="middle" fill="#93c5fd" fontSize="11">Calculates & rules</text>
            </g>

            {/* Bi-directional arrows to Storage */}
            <path d="M375 110 h35" stroke="#f59e0b" strokeWidth="3" />

            {/* Box 3: Storage */}
            <g transform="translate(420, 45)">
              <rect width="140" height="130" rx="8" fill="#1b3b6f" stroke="#d97706" strokeWidth="2" />
              <circle cx="70" cy="40" r="20" fill="#2c5282" />
              <ellipse cx="70" cy="35" rx="14" ry="6" fill="none" stroke="#fcd34d" strokeWidth="2" />
              <ellipse cx="70" cy="45" rx="14" ry="6" fill="none" stroke="#fcd34d" strokeWidth="2" />
              <text x="70" y="85" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="16">3. STORAGE</text>
              <text x="70" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="12">RAM & SSD/HDD</text>
              <text x="70" y="120" textAnchor="middle" fill="#93c5fd" fontSize="11">Saved safely</text>
            </g>

            {/* Arrow 3 */}
            <path d="M570 110 h35" stroke="#f59e0b" strokeWidth="3" />

            {/* Box 4: Output */}
            <g transform="translate(615, 45)">
              <rect width="115" height="130" rx="8" fill="#1b3b6f" stroke="#d97706" strokeWidth="2" />
              <circle cx="57" cy="40" r="20" fill="#2c5282" />
              <rect x="47" y="32" width="20" height="16" rx="2" fill="none" stroke="#fcd34d" strokeWidth="2" />
              <text x="57" y="85" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="16">4. OUTPUT</text>
              <text x="57" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="12">Screen, Print</text>
              <text x="57" y="120" textAnchor="middle" fill="#93c5fd" fontSize="11">Useful results</text>
            </g>

            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
              </marker>
            </defs>
          </svg>
          <figcaption className="diagram-caption">
            Figure 1: The 4-step computing cycle: Data enters (Input), is calculated (Process), saved (Storage), and presented (Output).
          </figcaption>
        </figure>
      );

    case 'parts':
      return (
        <figure className="diagram-container">
          <svg
            viewBox="0 0 720 230"
            role="img"
            aria-label="Illustration showing internal computer parts connected to external peripherals"
            className="diagram-svg"
          >
            <rect width="720" height="230" rx="12" fill="#0f2648" />
            <text x="360" y="30" textAnchor="middle" fill="#fcd34d" fontWeight="700" fontSize="16">
              HOW COMPUTER PARTS WORK AS ONE TEAM
            </text>

            {/* Motherboard container */}
            <rect x="40" y="50" width="450" height="150" rx="8" fill="#132e57" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
            <text x="55" y="70" fill="#93c5fd" fontSize="12" fontWeight="700">MOTHERBOARD (Main Circuit Board)</text>

            {/* CPU */}
            <rect x="70" y="90" width="100" height="90" rx="6" fill="#1e3a8a" stroke="#d97706" strokeWidth="2" />
            <text x="120" y="125" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="15">CPU</text>
            <text x="120" y="145" textAnchor="middle" fill="#cbd5e1" fontSize="11">The Brain</text>
            <text x="120" y="160" textAnchor="middle" fill="#fcd34d" fontSize="10">Calculations</text>

            {/* RAM */}
            <rect x="195" y="90" width="120" height="90" rx="6" fill="#1e3a8a" stroke="#10b981" strokeWidth="2" />
            <text x="255" y="125" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="15">RAM</text>
            <text x="255" y="145" textAnchor="middle" fill="#cbd5e1" fontSize="11">Desk Memory</text>
            <text x="255" y="160" textAnchor="middle" fill="#34d399" fontSize="10">Fast & Temporary</text>

            {/* Storage */}
            <rect x="340" y="90" width="130" height="90" rx="6" fill="#1e3a8a" stroke="#8b5cf6" strokeWidth="2" />
            <text x="405" y="125" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="15">SSD / HDD</text>
            <text x="405" y="145" textAnchor="middle" fill="#cbd5e1" fontSize="11">Filing Cabinet</text>
            <text x="405" y="160" textAnchor="middle" fill="#c084fc" fontSize="10">Permanent Storage</text>

            {/* External Peripherals */}
            <rect x="520" y="50" width="160" height="150" rx="8" fill="#1e3a8a" stroke="#f59e0b" strokeWidth="2" />
            <text x="600" y="75" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="13">PERIPHERALS</text>
            <text x="600" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="12">Screen / Monitor</text>
            <text x="600" y="125" textAnchor="middle" fill="#cbd5e1" fontSize="12">Keyboard & Mouse</text>
            <text x="600" y="145" textAnchor="middle" fill="#cbd5e1" fontSize="12">Printer & Speakers</text>
            <text x="600" y="175" textAnchor="middle" fill="#fcd34d" fontSize="11">Connected via Ports</text>
          </svg>
          <figcaption className="diagram-caption">
            Figure 2: The CPU, RAM, and SSD mount onto the motherboard and connect to external peripherals.
          </figcaption>
        </figure>
      );

    case 'input-output':
      return (
        <figure className="diagram-container">
          <svg
            viewBox="0 0 720 200"
            role="img"
            aria-label="Diagram showing input devices feeding into computer system and leading to output devices"
            className="diagram-svg"
          >
            <rect width="720" height="200" rx="12" fill="#0f2648" />

            {/* Input Column */}
            <rect x="30" y="25" width="200" height="150" rx="8" fill="#17345f" stroke="#3b82f6" strokeWidth="2" />
            <text x="130" y="55" textAnchor="middle" fill="#93c5fd" fontWeight="700" fontSize="15">INPUT DEVICES</text>
            <text x="130" y="80" textAnchor="middle" fill="#ffffff" fontSize="12">Keyboard & Mouse</text>
            <text x="130" y="102" textAnchor="middle" fill="#ffffff" fontSize="12">Microphone & Webcam</text>
            <text x="130" y="124" textAnchor="middle" fill="#ffffff" fontSize="12">Scanner & Barcode</text>
            <text x="130" y="152" textAnchor="middle" fill="#fcd34d" fontSize="11">(Send Data In)</text>

            {/* Center Box */}
            <rect x="270" y="45" width="180" height="110" rx="8" fill="#1e3a8a" stroke="#d97706" strokeWidth="2" />
            <text x="360" y="85" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="16">COMPUTER</text>
            <text x="360" y="108" textAnchor="middle" fill="#cbd5e1" fontSize="12">Processes instructions</text>
            <text x="360" y="128" textAnchor="middle" fill="#fcd34d" fontSize="11">Zeros and Ones</text>

            {/* Output Column */}
            <rect x="490" y="25" width="200" height="150" rx="8" fill="#17345f" stroke="#10b981" strokeWidth="2" />
            <text x="590" y="55" textAnchor="middle" fill="#6ee7b7" fontWeight="700" fontSize="15">OUTPUT DEVICES</text>
            <text x="590" y="80" textAnchor="middle" fill="#ffffff" fontSize="12">Monitor Screen</text>
            <text x="590" y="102" textAnchor="middle" fill="#ffffff" fontSize="12">Laser / Inkjet Printer</text>
            <text x="590" y="124" textAnchor="middle" fill="#ffffff" fontSize="12">Speakers & Headphones</text>
            <text x="590" y="152" textAnchor="middle" fill="#fcd34d" fontSize="11">(Soft & Hard Copy)</text>
          </svg>
          <figcaption className="diagram-caption">
            Figure 3: Input devices deliver commands to the computer, which produces readable output.
          </figcaption>
        </figure>
      );

    case 'excel-grid':
      return (
        <figure className="diagram-container">
          <svg
            viewBox="0 0 700 220"
            role="img"
            aria-label="Illustration of an Excel spreadsheet grid showing columns, rows, and cell B4"
            className="diagram-svg"
          >
            <rect width="700" height="220" rx="10" fill="#0b203c" />
            
            {/* Header / Column labels */}
            <rect x="30" y="20" width="60" height="30" fill="#1e293b" stroke="#475569" />
            <text x="60" y="40" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700"></text>
            
            <rect x="90" y="20" width="180" height="30" fill="#1e3a8a" stroke="#475569" />
            <text x="180" y="40" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700">Column A (Items)</text>

            <rect x="270" y="20" width="180" height="30" fill="#1e3a8a" stroke="#475569" />
            <text x="360" y="40" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700">Column B (Prices)</text>

            <rect x="450" y="20" width="220" height="30" fill="#1e3a8a" stroke="#475569" />
            <text x="560" y="40" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700">Formula Bar</text>

            {/* Row 1 */}
            <rect x="30" y="50" width="60" height="35" fill="#1e293b" stroke="#475569" />
            <text x="60" y="73" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">1</text>
            <rect x="90" y="50" width="180" height="35" fill="#ffffff" stroke="#cbd5e1" />
            <text x="105" y="73" fill="#0f172a" fontSize="13">Notebook</text>
            <rect x="270" y="50" width="180" height="35" fill="#ffffff" stroke="#cbd5e1" />
            <text x="285" y="73" fill="#0f172a" fontSize="13">250</text>

            {/* Row 2 */}
            <rect x="30" y="85" width="60" height="35" fill="#1e293b" stroke="#475569" />
            <text x="60" y="108" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">2</text>
            <rect x="90" y="85" width="180" height="35" fill="#ffffff" stroke="#cbd5e1" />
            <text x="105" y="108" fill="#0f172a" fontSize="13">Blue Ballpen</text>
            <rect x="270" y="85" width="180" height="35" fill="#ffffff" stroke="#cbd5e1" />
            <text x="285" y="108" fill="#0f172a" fontSize="13">50</text>

            {/* Row 3 - Highlighted Formula Row */}
            <rect x="30" y="120" width="60" height="35" fill="#1e293b" stroke="#475569" />
            <text x="60" y="143" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">3</text>
            <rect x="90" y="120" width="180" height="35" fill="#fef3c7" stroke="#d97706" />
            <text x="105" y="143" fill="#b45309" fontWeight="700" fontSize="13">Total Sum</text>
            <rect x="270" y="120" width="180" height="35" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="285" y="143" fill="#15803d" fontWeight="700" fontSize="13">=SUM(B1:B2) → 300</text>

            {/* Callout box */}
            <rect x="450" y="50" width="220" height="105" rx="6" fill="#17345f" stroke="#38bdf8" />
            <text x="465" y="78" fill="#fcd34d" fontWeight="700" fontSize="13">Cell B3 is Active!</text>
            <text x="465" y="100" fill="#e2e8f0" fontSize="12">Column: B, Row: 3</text>
            <text x="465" y="120" fill="#e2e8f0" fontSize="12">Formula calculates 250+50</text>
            <text x="465" y="140" fill="#34d399" fontSize="12">Result: 300</text>
          </svg>
          <figcaption className="diagram-caption">
            Figure 4: A spreadsheet grid with rows, columns, and an active SUM formula in cell B3.
          </figcaption>
        </figure>
      );

    case 'web-request':
      return (
        <figure className="diagram-container">
          <svg
            viewBox="0 0 720 200"
            role="img"
            aria-label="Illustration showing how a browser requests a page from a web server and receives HTML, CSS, and JS"
            className="diagram-svg"
          >
            <rect width="720" height="200" rx="12" fill="#0f2648" />

            {/* Client Browser */}
            <g transform="translate(35, 40)">
              <rect width="180" height="120" rx="8" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
              <text x="90" y="40" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="14">YOUR BROWSER</text>
              <text x="90" y="65" textAnchor="middle" fill="#cbd5e1" fontSize="11">Chrome, Edge, Safari</text>
              <rect x="20" y="80" width="140" height="24" rx="4" fill="#0f172a" />
              <text x="90" y="96" textAnchor="middle" fill="#38bdf8" fontSize="10">https://example.com</text>
            </g>

            {/* Request Arrow */}
            <path d="M225 80 h130" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-web)" />
            <text x="290" y="72" textAnchor="middle" fill="#fcd34d" fontSize="11">1. HTTP Request</text>

            {/* DNS / Cloud */}
            <circle cx="360" cy="100" r="30" fill="#1b3b6f" stroke="#d97706" strokeWidth="2" />
            <text x="360" y="95" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">DNS</text>
            <text x="360" y="112" textAnchor="middle" fill="#93c5fd" fontSize="9">Directory</text>

            {/* Response Arrow */}
            <path d="M495 120 h-130" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-web-green)" />
            <text x="430" y="140" textAnchor="middle" fill="#6ee7b7" fontSize="11">2. HTML, CSS, JS</text>

            {/* Hosting Server */}
            <g transform="translate(505, 40)">
              <rect width="180" height="120" rx="8" fill="#1e3a8a" stroke="#10b981" strokeWidth="2" />
              <text x="90" y="40" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="14">WEB SERVER</text>
              <text x="90" y="65" textAnchor="middle" fill="#cbd5e1" fontSize="11">Hosting Data Center</text>
              <text x="90" y="90" textAnchor="middle" fill="#6ee7b7" fontSize="12">Stores Site Files</text>
              <text x="90" y="108" textAnchor="middle" fill="#a7f3d0" fontSize="10">Runs 24/7 online</text>
            </g>

            <defs>
              <marker id="arrow-web" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
              </marker>
              <marker id="arrow-web-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
              </marker>
            </defs>
          </svg>
          <figcaption className="diagram-caption">
            Figure 5: How a website loads: your browser sends a request, and the web server returns the files.
          </figcaption>
        </figure>
      );

    case 'ai-layers':
      return (
        <figure className="diagram-container">
          <svg
            viewBox="0 0 700 240"
            role="img"
            aria-label="Concentric diagram showing Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI"
            className="diagram-svg"
          >
            <rect width="700" height="240" rx="12" fill="#0f2648" />

            {/* Outer Box: AI */}
            <rect x="30" y="20" width="640" height="200" rx="10" fill="#132b4f" stroke="#3b82f6" strokeWidth="2" />
            <text x="50" y="45" fill="#93c5fd" fontWeight="700" fontSize="15">
              1. ARTIFICIAL INTELLIGENCE (Broadest Field: Simulating Human Intelligence)
            </text>

            {/* Inner Box: ML */}
            <rect x="70" y="60" width="560" height="145" rx="8" fill="#193b6e" stroke="#10b981" strokeWidth="2" />
            <text x="90" y="85" fill="#6ee7b7" fontWeight="700" fontSize="14">
              2. MACHINE LEARNING (Learning from Data & Experience)
            </text>

            {/* Inner Box: Deep Learning */}
            <rect x="110" y="100" width="480" height="90" rx="6" fill="#1e3a8a" stroke="#f59e0b" strokeWidth="2" />
            <text x="130" y="125" fill="#fcd34d" fontWeight="700" fontSize="13">
              3. DEEP LEARNING (Multi-layer Artificial Neural Networks)
            </text>

            {/* Core Box: Generative AI */}
            <rect x="150" y="140" width="400" height="38" rx="4" fill="#d97706" />
            <text x="350" y="164" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="13">
              4. GENERATIVE AI (Creates New Text, Images & Code)
            </text>
          </svg>
          <figcaption className="diagram-caption">
            Figure 6: The relationship between AI, Machine Learning, Deep Learning, and Generative AI.
          </figcaption>
        </figure>
      );

    case 'types':
    case 'careers':
    default:
      return (
        <figure className="diagram-container">
          <svg
            viewBox="0 0 720 180"
            role="img"
            aria-label="Illustration showing connected technology learning areas"
            className="diagram-svg"
          >
            <rect width="720" height="180" rx="12" fill="#0f2648" />
            <text x="360" y="35" textAnchor="middle" fill="#fcd34d" fontWeight="700" fontSize="16">
              FOUNDATIONAL PILLARS OF COMPUTER LITERACY
            </text>

            <rect x="40" y="60" width="140" height="90" rx="6" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
            <text x="110" y="95" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="13">HARDWARE</text>
            <text x="110" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="11">Parts & Devices</text>
            <text x="110" y="132" textAnchor="middle" fill="#93c5fd" fontSize="10">Physical tools</text>

            <rect x="210" y="60" width="140" height="90" rx="6" fill="#1e3a8a" stroke="#10b981" strokeWidth="2" />
            <text x="280" y="95" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="13">SOFTWARE</text>
            <text x="280" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="11">Word & Excel</text>
            <text x="280" y="132" textAnchor="middle" fill="#34d399" fontSize="10">Everyday tasks</text>

            <rect x="380" y="60" width="140" height="90" rx="6" fill="#1e3a8a" stroke="#f59e0b" strokeWidth="2" />
            <text x="450" y="95" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="13">INTERNET</text>
            <text x="450" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="11">Web & Cloud</text>
            <text x="450" y="132" textAnchor="middle" fill="#fcd34d" fontSize="10">Global connections</text>

            <rect x="540" y="60" width="140" height="90" rx="6" fill="#1e3a8a" stroke="#ec4899" strokeWidth="2" />
            <text x="610" y="95" textAnchor="middle" fill="#ffffff" fontWeight="700" fontSize="13">MODERN TECH</text>
            <text x="610" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="11">AI & Careers</text>
            <text x="610" y="132" textAnchor="middle" fill="#f472b6" fontSize="10">Future opportunities</text>
          </svg>
          <figcaption className="diagram-caption">
            Figure: Building your computer confidence step by step from physical hardware to future technology.
          </figcaption>
        </figure>
      );
  }
}
