<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Neo Zhiyong — Software Developer</title>

    <!-- SEO -->
    <meta name="description" content="Portfolio of Neo Zhiyong — Software developer focused on clean design, reliable systems, and data-informed apps. Projects in Python, React, Node.js, and more." />
    <meta name="author" content="Neo Zhiyong" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0b1220" />

    <!-- Open Graph / Twitter -->
    <meta property="og:title" content="Neo Zhiyong — Software Developer" />
    <meta property="og:description" content="Building impactful applications with clean interfaces, reliable systems, and thoughtful use of data." />
    <meta property="og:image" content="https://gnoyihzoen.github.io/assets/og-image.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://gnoyihzoen.github.io/" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Icons -->
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon-16.png" />
    <link rel="apple-touch-icon" href="./assets/apple-touch-icon.png" />

    <!-- Fonts & Styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Outfit:wght@600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css">
    <link rel="stylesheet" href="style.css" />
    <script src="app.js" defer></script>
  </head>

  <body>
    <header id="top" class="site-header">
      <nav class="nav container" aria-label="Main navigation">
        <a class="brand" href="#top" aria-label="Neo home">
          <img id="personal-logo" src="./assets/headshot_circle.png" alt="Neo Zhiyong headshot" loading="lazy" />
          <span class="brand__name">Neo Zhiyong</span>
        </a>

        <button class="hamburger" id="navToggle" aria-expanded="false" aria-controls="primaryNav" aria-label="Toggle menu">
          <span class="hamburger__bar"></span>
          <span class="hamburger__bar"></span>
          <span class="hamburger__bar"></span>
        </button>

        <ul id="primaryNav" class="nav__links" role="menubar">
          <li><a href="#projects" class="nav__link">Projects</a></li>
          <li><a href="#skills" class="nav__link">Skills</a></li>
          <li><a href="#about" class="nav__link" onclick="openAbout(event)">About</a></li>
          <li>
            <button class="icon-btn" aria-label="Toggle dark mode" id="themeToggle">
              <i class="fa-solid fa-circle-half-stroke"></i>
            </button>
          </li>
        </ul>
      </nav>

      <section class="hero">
        <div class="hero__inner container">
          <div class="hero__copy">
            <h1 class="title">Hi, I’m <span class="blue">ZhiYong</span>.</h1>
            <p class="lead">
              A <b class="blue">software developer</b> crafting clean, accessible apps with a love for systems design, real-time data, and meaningful interfaces.
            </p>

            <ul class="quick-highlights">
              <li>💻 Full stack web & system development</li>
              <li>🧠 Passion for AI, UX and digital tools</li>
              <li>📮 Available for internship / freelance</li>
            </ul>

            <div class="cta-row">
              <a class="btn btn--primary" href="#projects"><i class="fa-solid fa-code"></i> View Projects</a>
              <a class="btn btn--ghost" href="mailto:zhiyong.work@gmail.com"><i class="fa-solid fa-paper-plane"></i> Contact</a>
            </div>

            <div class="social">
              <a href="https://github.com/gnoyihzoen" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/neo-zhiyong" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
              <a href="mailto:zhiyong.work@gmail.com" aria-label="Email Neo"><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>

        <a class="scroll" href="#projects" aria-label="Scroll to projects"><span class="scroll__dot"></span></a>
      </section>
    </header>

    <main id="main">
      <section id="projects" class="section">
        <div class="container">
          <h2 class="section__title">My <span class="blue">Projects</span></h2>
          <p class="projects-lead lead">Projects showcasing my experience with AI, full-stack app design, and practical automation systems.</p>

          <ul class="project__grid">
            <!-- Project 1 -->
            <li class="project">
              <div class="project__media">
                <img src="./assets/rfid.jpg" alt="RFID Self Service Storage System interface and hardware" />
                <div class="project__overlay">
                  <h3>RFID Self Service Storage System</h3>
                  <p>Designed a distributed storage solution with UHF RFID real-time tracking and location-based detection.</p>
                  <p><b>Tech:</b> Docker, PostgreSQL, Python</p>
                  <p><b>Impact:</b> Reduced manual handling time by 40%.</p>
                  <a class="btn btn--primary" href="https://github.com/gnoyihzoen/RFID_Self_Service_Storage_System" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github"></i> Code
                  </a>
                </div>
              </div>
            </li>

            <!-- Project 2 -->
            <li class="project">
              <div class="project__media">
                <img src="./assets/f1.jpg" alt="F1 dashboards and charts" />
                <div class="project__overlay">
                  <h3>F1 Statistical Analysis Web App</h3>
                  <p>Built an interactive dashboard to explore all-time Formula 1 metrics using embedded Power BI visualizations.</p>
                  <p><b>Tech:</b> React, Power BI, JavaScript</p>
                  <p><b>Outcome:</b> Enables dynamic race, driver and constructor insights.</p>
                  <a class="btn btn--primary" href="https://github.com/gnoyihzoen/F1_PowerBI_React" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github"></i> Code
                  </a>
                </div>
              </div>
            </li>

            <!-- Project 3 -->
            <li class="project">
              <div class="project__media">
                <img src="./assets/LLM.jpg" alt="RAG pipeline diagram" />
                <div class="project__overlay">
                  <h3>Contextual LLM Retrieval (RAG)</h3>
                  <p>Implemented a retrieval-augmented generation pipeline for semantic search, context embeddings, and question answering.</p>
                  <p><b>Tech:</b> Python, LangChain, OpenAI API</p>
                  <p><b>Use Case:</b> Automates Q&A based on customer support docs.</p>
                  <a class="btn btn--primary" href="https://github.com/TenshiRachel/pto-rag" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github"></i> Code
                  </a>
                </div>
              </div>
            </li>

            <!-- Project 4 -->
            <li class="project">
              <div class="project__media">
                <img src="./assets/warehouse.jpg" alt="Warehouse routing and optimization UI" />
                <div class="project__overlay">
                  <h3>Warehouse Optimizer</h3>
                  <p>Developed routing, inventory control, and mining tools to reduce logistics cost and increase efficiency.</p>
                  <p><b>Tech:</b> Flask, Python, Dijkstra, ABC Analysis</p>
                  <p><b>Effect:</b> 25% faster routing and demand forecasting.</p>
                  <a class="btn btn--primary" href="https://github.com/gnoyihzoen/Warehouse_Route_Optimization" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github"></i> Code
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" class="section section--alt">
        <div class="container">
          <h2 class="section__title">Core <span class="blue">Skills</span></h2>
          <ul class="skills">
            <li>Python</li><li>JavaScript</li><li>React</li><li>Node.js</li>
            <li>Flask</li><li>PostgreSQL</li><li>TensorFlow</li><li>Docker</li>
            <li>LangChain</li><li>OpenAI</li><li>Git & CI/CD</li><li>HTML/CSS</li>
          </ul>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container contact">
          <div>
            <h2 class="section__title">Let’s <span class="blue">Collaborate</span></h2>
            <p class="lead">Available for full-stack or AI-driven development projects. Remote or Singapore-based roles preferred.</p>

            <div class="cta-row">
              <a class="btn btn--primary" href="mailto:zhiyong.work@gmail.com"><i class="fa-solid fa-paper-plane"></i> Email me</a>
              <a class="btn" href="https://www.linkedin.com/in/neo-zhiyong" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
              <a class="btn" href="https://github.com/gnoyihzoen" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
            </div>
          </div>

          <img class="contact__art" src="./assets/contact-illustration.svg" alt="Decorative SVG" />
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <a href="#top" class="footer__brand">Neo Zhiyong</a>
        <div class="footer__links">
          <a href="https://github.com/gnoyihzoen" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/neo-zhiyong" target="_blank">LinkedIn</a>
          <a href="mailto:zhiyong.work@gmail.com">Email</a>
        </div>
        <div class="footer__copy">© <span id="year"></span> Neo Zhiyong</div>
      </div>
    </footer>

    <!-- About Modal -->
    <section id="about" class="sr-only"></section>
    <div id="about-modal" class="modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="about-title">
      <div class="modal__content" role="document">
        <button class="modal__close" aria-label="Close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
        <h3 id="about-title" class="modal__heading">About Neo Zhiyong</h3>
        <p class="modal__text">I’m Neo — a software developer passionate about creating tools that are usable, scalable and meaningful. I work with Python, React, and AI to build well-engineered apps.</p>
        <div class="modal__skills"><span>Python</span><span>React</span><span>Flask</span><span>LangChain</span><span>Node.js</span><span>SQL</span></div>
        <div class="modal__cta">
          <a class="btn btn--primary" href="mailto:zhiyong.work@gmail.com"><i class="fa-solid fa-paper-plane"></i> Email me</a>
          <a class="btn" href="https://www.linkedin.com/in/neo-zhiyong" target="_blank">LinkedIn</a>
          <a class="btn" href="https://github.com/gnoyihzoen" target="_blank">GitHub</a>
        </div>
      </div>
    </div>

    <!-- Back to top -->
    <button id="backToTop" class="back-to-top" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>

    <!-- Structured data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Neo Zhiyong",
        "url": "https://gnoyihzoen.github.io",
        "image": "https://gnoyihzoen.github.io/assets/headshot_circle.png",
        "jobTitle": "Software Developer",
        "sameAs": [
          "https://github.com/gnoyihzoen",
          "https://www.linkedin.com/in/neo-zhiyong"
        ]
      }
    </script>
  </body>
</html>
