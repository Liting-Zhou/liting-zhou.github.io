export default function Home() {
  return (
    <div className="py-8 sm:py-12">
      {/* Intro */}
      <section className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight pb-2">
          Liting Zhou
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Vancouver, BC, Canada ·{" "}
          <a href="mailto:lt.zhou1119@gmail.com" className="underline">
            lt.zhou1119@gmail.com
          </a>{" "}
          · 672-966-1119
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-semibold heading-accent">
          Professional Experience
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-medium">
                Software Engineer · AtlasNova AI
              </h3>
              <span className="text-sm text-gray-500">
                Feb 2025 – Present · Cupertino, US
              </span>
            </div>
            <ul className="list-disc ms-5 mt-2 text-sm leading-6">
              <li>
                Frontend development with JavaScript, TypeScript, React,
                Next.js, and Tailwind CSS.
              </li>
              <li>
                Backend development with JavaScript, Python, Express.js, RESTful
                APIs, DynamoDB, AWS, and Docker.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-medium">
                Data Analyst · Huaxia Bank & Hengfeng Bank
              </h3>
              <span className="text-sm text-gray-500">
                Aug 2015 – Jul 2023 · Beijing, CN
              </span>
            </div>
            <ul className="list-disc ms-5 mt-2 text-sm leading-6">
              <li>Executed data querying and extraction using SQL.</li>
              <li>
                Applied statistical methods and machine learning algorithms for
                data analysis using Python.
              </li>
              <li>Managed a visualized report portal system.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-medium">
                Research Assistant · University of Amsterdam
              </h3>
              <span className="text-sm text-gray-500">
                Sep 2011 – Sep 2014 · Amsterdam, NL
              </span>
            </div>
            <ul className="list-disc ms-5 mt-2 text-sm leading-6">
              <li>
                Researched risk manipulation and market performance using
                MATLAB.
              </li>
              <li>Assisted in teaching Mathematics and Economics courses.</li>
              <li>Supervised bachelor&#39;s and master&#39;s theses.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-12">
        <h2 className="text-2xl font-semibold heading-accent">Education</h2>
        <div className="mt-6 space-y-4">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium">
                Master of Science in Computer Science
              </span>
              <span className="text-sm text-gray-500">Sep 2023 – Dec 2024</span>
            </div>
            <p className="text-sm text-gray-600">
              Northeastern University, Vancouver, Canada
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium">
                Master of Science in Economics
              </span>
              <span className="text-sm text-gray-500">Sep 2009 – Aug 2011</span>
            </div>
            <p className="text-sm text-gray-600">
              University of Amsterdam, Amsterdam, Netherlands
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium">Bachelor in Statistics</span>
              <span className="text-sm text-gray-500">Sep 2005 – Jun 2009</span>
            </div>
            <p className="text-sm text-gray-600">
              Huazhong University of Science and Technology, Wuhan, China
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-semibold heading-accent mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <article className="card p-5 transition-shadow hover:shadow-md flex flex-col h-full">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-medium text-lg">
                  AI Experts for Enterprise
                </h3>
                <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full font-semibold shadow-md">
                  Featured
                </span>
              </div>
              <ul className="list-disc ms-5 space-y-2 text-sm leading-6 mb-4">
                <li>
                  The platform leverages Retrieval-Augmented Generation (RAG) to
                  create customized AI agents for enterprises.
                </li>
                <li>
                  Built frontend components including landing page, application
                  interface, and admin panel using React and Next.js.
                </li>
                <li>
                  Implemented backend services using JavaScript and Python,
                  integrating with Stripe, Uber Eats, Google, Instagram, and
                  other APIs.
                </li>
                <li>
                  Constructed data pipelines for analytics visualization and
                  implemented LLM-powered AI agent suggestion features.
                </li>
                <li>
                  Automated deployment processes using GitHub Actions and AWS
                  infrastructure.
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                href="https://drive.google.com/drive/folders/15tqlPaOe0r6KMW7opYhzbZv6EKx9Ad2_?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Watch demos
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md flex flex-col h-full">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-medium text-lg">
                  Maternal & Baby Second-hand Market with AI Parenting
                </h3>
                <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full font-semibold shadow-md">
                  Featured
                </span>
              </div>
              <ul className="list-disc ms-5 space-y-2 text-sm leading-6 mb-4">
                <li>
                  The platform integrates second-hand trading and parenting Q&A
                  to help parents efficiently and safely trade baby products
                  while providing personalized parenting advice.
                </li>
                <li>
                  Uses image recognition to automatically generate product
                  titles and descriptions, improving user posting efficiency.
                </li>
                <li>
                  Utilizes LLM to generate personalized parenting
                  recommendations based on user data.
                </li>
              </ul>
            </div>
            {/* <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                href="https://drive.google.com/drive/folders/15tqlPaOe0r6KMW7opYhzbZv6EKx9Ad2_?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Watch demos
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div> */}
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-4">
                Currency Master Website
              </h3>
              <ul className="list-disc ms-5 space-y-2 text-sm leading-6">
                <li>
                  Built a dynamic website to inspect latest and historic
                  exchange rates, perform currency conversion, and manage
                  assets.
                </li>
                <li>
                  Developed the frontend using React, JavaScript, HTML, and CSS,
                  and connected the backend with RESTful APIs to external
                  services.
                </li>
                <li>
                  Utilized Prisma for database connectivity and management.
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                href="https://www.youtube.com/watch?v=trrZVCQ0F30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Watch demo
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-4">Currency Manager App</h3>
              <ul className="list-disc ms-5 space-y-2 text-sm leading-6">
                <li>
                  Created a mobile app for monitoring exchange rates, currency
                  conversion, asset management, transaction history, and
                  notifications.
                </li>
                <li>Applied React Native, Expo framework for frontend.</li>
                <li>
                  Utilized Firebase for database connectivity and management.
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                href="https://www.youtube.com/watch?v=mCqeC1i0Vqs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Watch demo
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-4">
                Automatic Speech Recognition
              </h3>
              <ul className="list-disc ms-5 space-y-2 text-sm leading-6">
                <li>
                  Fine-tuned OpenAI&#39;s Whisper model to improve recognition
                  accuracy for aphasic speech.
                </li>
                <li>
                  Implemented in Python and Shell, using PyTorch and the Hugging
                  Face Transformers library.
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                href="https://github.com/Liting-Zhou/Aphasic_speech_recognition"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                View source
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-4">
                Game of Kill Doctor Happy
              </h3>
              <ul className="list-disc ms-5 space-y-2 text-sm leading-6 mb-4">
                <li>
                  Developed a game similar to the classic board game Kill Doctor
                  Lucky using the MVC pattern.
                </li>
                <li>
                  Utilized Java, JUnit for testing, and Java Swing for GUI.
                </li>
                <li>Supported both text-based and GUI-based gameplay.</li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                href="https://github.com/Liting-Zhou/the-world"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                View source
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-4">
                Virtual Memory Manager Simulator
              </h3>
              <ul className="list-disc ms-5 space-y-2 text-sm leading-6">
                <li>
                  Designed a VMM simulator incorporating interactions among page
                  table, TLB, OS, MMU, memory, and permanent storage.
                </li>
                <li>
                  Implemented in C++ with a focus on a two-level page table,
                  two-level TLB and supporting variable page sizes.
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                href="https://github.com/Liting-Zhou/VMM_simulator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                View source
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-4">
                Shortest Path - SkyTrain Service
              </h3>
              <ul className="list-disc ms-5 space-y-2 text-sm leading-6">
                <li>
                  Applied and compared Dijkstra&#39;s and A<sup>∗</sup>{" "}
                  algorithms to generate the shortest path for each pair of
                  SkyTrain stops in Greater Vancouver.
                </li>
                <li>
                  Compared the fare change of transitioning from zone-based to
                  distance-based pricing systems.
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a
                href="https://youtu.be/BStUwHF0PtQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Watch demo
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2 className="text-2xl font-semibold heading-accent">
          Technical Skills
        </h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Programming Languages:
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">Java</span>
              <span className="chip">TypeScript</span>
              <span className="chip">JavaScript</span>
              <span className="chip">Python</span>
              <span className="chip">Shell</span>
              <span className="chip">C++</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Frontend Technologies:
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">React.js</span>
              <span className="chip">Next.js</span>
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">Tailwind CSS</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Backend Technologies:
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">Node.js</span>
              <span className="chip">Express.js</span>
              <span className="chip">RESTful APIs</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Databases:
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">PostgreSQL</span>
              <span className="chip">MySQL</span>
              <span className="chip">MongoDB</span>
              <span className="chip">DynamoDB</span>
              <span className="chip">Redis</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              DevOps & Cloud:
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">Docker</span>
              <span className="chip">AWS</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Tools & Other Technologies:
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="chip">Git</span>
              <span className="chip">GitHub</span>
              <span className="chip">Yarn</span>
              <span className="chip">pnpm</span>
              <span className="chip">npm</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
