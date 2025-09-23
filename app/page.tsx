export default function Home() {
  return (
    <div className="py-8 sm:py-12">
      {/* Intro */}
      <section className="mb-10">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          style={{ color: "var(--color-foreground)" }}
        >
          Liting Zhou
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Vancouver, BC ·{" "}
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">
              <span className="font-medium">
                Master of Science in Computer Science
              </span>{" "}
              · Northeastern University, Vancouver, Canada
            </p>
            <span className="text-sm text-gray-500">Sep 2023 – Dec 2024</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">
              <span className="font-medium">
                Master of Science in Economics
              </span>{" "}
              · University of Amsterdam, Amsterdam, Netherlands
            </p>
            <span className="text-sm text-gray-500">Sep 2009 – Aug 2011</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">
              <span className="font-medium">Bachelor in Statistics</span> ·
              Huazhong University of Science and Technology, Wuhan, China
            </p>
            <span className="text-sm text-gray-500">Sep 2005 – Jun 2009</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-12">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold heading-accent">Projects</h2>
          <a
            href="https://drive.google.com/drive/folders/15tqlPaOe0r6KMW7opYhzbZv6EKx9Ad2_?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            View all projects ↗
          </a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <article className="card p-5 transition-shadow hover:shadow-md">
            <h3 className="font-medium">AI Experts for Enterprise</h3>
            <ul className="list-disc ms-5 mt-2 text-sm leading-6">
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
                integrating with Stripe, Uber Eats, Google, Instagram, and other
                APIs.
              </li>
              <li>
                Constructed data pipelines for analytics visualization and
                implemented LLM-powered suggestion features.
              </li>
              <li>
                Automated deployment processes using GitHub Actions and AWS
                infrastructure.
              </li>
            </ul>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md">
            <h3 className="font-medium">Game of Kill Doctor Happy</h3>
            <ul className="list-disc ms-5 mt-2 text-sm leading-6">
              <li>
                Developed a game similar to the classic board game Kill Doctor
                Lucky using the MVC pattern.
              </li>
              <li>Utilized Java, JUnit for testing, and Java Swing for GUI.</li>
              <li>Supported both text-based and GUI-based gameplay.</li>
            </ul>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md">
            <h3 className="font-medium">Currency Master Website</h3>
            <ul className="list-disc ms-5 mt-2 text-sm leading-6">
              <li>
                Built a dynamic website to inspect latest and historic exchange
                rates, perform currency conversion, and manage assets.
              </li>
              <li>
                Developed the frontend using React, JavaScript, HTML, and CSS,
                and connected the backend with RESTful APIs to external
                services.
              </li>
              <li>Utilized Prisma for database connectivity and management.</li>
            </ul>
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md">
            <h3 className="font-medium">Currency Manager App</h3>
            <ul className="list-disc ms-5 mt-2 text-sm leading-6">
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
          </article>

          <article className="card p-5 transition-shadow hover:shadow-md sm:col-span-2">
            <h3 className="font-medium">Automatic Speech Recognition</h3>
            <ul className="list-disc ms-5 mt-2 text-sm leading-6">
              <li>
                Fine-tuned OpenAI’s Whisper model to improve recognition
                accuracy for aphasic speech.
              </li>
              <li>
                Implemented in Python and Shell, using PyTorch and the Hugging
                Face Transformers library.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-12">
        <h2 className="text-2xl font-semibold heading-accent">
          Technical Skills
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="chip">JavaScript</span>
          <span className="chip">TypeScript</span>
          <span className="chip">Python</span>
          <span className="chip">Java</span>
          <span className="chip">SQL</span>
          <span className="chip">NoSQL</span>
          <span className="chip">Shell</span>
          <span className="chip">C++</span>
          <span className="chip">HTML</span>
          <span className="chip">CSS</span>
          <span className="chip">React</span>
          <span className="chip">Node.js</span>
          <span className="chip">RESTful APIs</span>
        </div>
      </section>
    </div>
  );
}
