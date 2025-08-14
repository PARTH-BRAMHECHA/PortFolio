// Project Modal Logic
const projectModal = document.getElementById('project-modal');
const projectModalContent = document.getElementById('project-modal-content');
const projectModalBody = document.getElementById('project-modal-body');
const projectModalClose = document.getElementById('project-modal-close');
const projectModalOverlay = document.getElementById('project-modal-overlay');

const projectDetails = {
  'yield-vision': {
    title: 'Yield Vision',
    img: 'assets/images/yvlogo.png',
    desc: 'A computer vision system for crop yield prediction using satellite imagery and ML. Integrates remote sensing, deep learning, and data analytics for smarter agriculture.',
    link: 'https://www.youtube.com/watch?v=_ZcWCp_xLI4',
    category: 'ML-Integrated Project'
  },
  'prep-genius': {
    title: 'Prep Genius',
    img: 'assets/images/pglogo.jpg',
    desc: 'GenAI-powered personalized exam preparation platform. Adaptive quizzes, AI-generated explanations, and performance analytics for students.',
    link: 'https://github.com/PARTH-BRAMHECHA',
    category: 'GenAI Powered'
  },
  'ocr-parser': {
    title: 'OCR-ID Card Parser',
    img: './assets/images/ocr-parser.jpg',
    desc: 'Application for extracting and parsing ID card data using OCR and ML. Supports multiple formats and languages.',
    link: 'https://github.com/PARTH-BRAMHECHA/ocr-id-card-parser',
    category: 'Applications'
  },
  'movie-recommender': {
    title: 'Movie Recommendation System',
    img: './assets/images/movie-recommender.jpg',
    desc: 'ML-based movie recommendation engine using collaborative filtering and content-based methods. Built with Python and deployed as a web app.',
    link: 'https://github.com/PARTH-BRAMHECHA/movie-recommendation-system',
    category: 'ML-Integrated Project'
  }
};

document.querySelectorAll('.project-item .project-trigger').forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    const parent = trigger.closest('.project-item');
    const key = parent.getAttribute('data-project');
    if (projectDetails[key]) {
      projectModalBody.innerHTML = `
        <div style="display:flex;align-items:center;gap:1.5rem;margin-bottom:1.5rem;flex-wrap:wrap;">
          <img src="${projectDetails[key].img}" alt="${projectDetails[key].title}" style="height:120px;width:120px;border-radius:16px;object-fit:cover;box-shadow:0 2px 12px #0002;">
          <div>
            <h2 style="margin:0 0 0.5rem 0;">${projectDetails[key].title}</h2>
            <span style="font-size:0.98rem;color:#888;">${projectDetails[key].category}</span>
          </div>
        </div>
        <div style="font-size:1.05rem;margin-bottom:1.2rem;">${projectDetails[key].desc}</div>
        <a href="${projectDetails[key].link}" target="_blank" style="display:inline-block;padding:10px 18px;background:#0cb86e;color:#fff;border-radius:6px;font-weight:600;text-decoration:none;">View Project</a>
      `;
      projectModal.classList.add('active');
    }
  });
});

projectModalClose.addEventListener('click', () => {
  projectModal.classList.remove('active');
});
projectModalOverlay.addEventListener('click', () => {
  projectModal.classList.remove('active');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') projectModal.classList.remove('active');
});
'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Experience Modal Logic
const expModal = document.getElementById('exp-modal');
const expModalContent = document.getElementById('exp-modal-content');
const expClose = document.getElementById('exp-close');
const expDetails = {
  l3cube: {
    title: 'L3 Cube Labs',
    logo: './assets/images/l3cube.png',
    info: `<b>Intern</b> <span style="float:right;">OnGoing</span><br><br>Worked on low level NLP tasks, including text preprocessing, tokenization, and optimization of language models for Indian languages during the internship.`
  },
iitkgp: {
  title: 'IIT Kharagpur',
  logo: './assets/images/iitkh.png',
  info: `
    <b>RND Intern</b> <span style="float:right;">May 2025 - July 2025</span><br><br>
    During my internship at IIT Kharagpur, I was responsible for designing and implementing a 
    <b>cross-platform guided installer</b> for the CHAVIDS medical software, which follows a distributed architecture.<br><br>
    
    Key contributions included:
    <ul>
      <li>Developed a <b>GUI-based installation wizard</b> using both <b>Tkinter</b> and <b>PyQt5</b> to ensure a consistent experience across Windows and Linux.</li>
      <li>Created <b>Bash and Batch automation scripts</b> for system-level tasks like Java & MySQL setup, directory configuration, and permission handling.</li>
      <li>Integrated <b>dependency checks</b> and automated configuration steps to reduce installation errors.</li>
      <li>Authored a <b>comprehensive installation guide</b> with troubleshooting steps and default configurations for non-technical users.</li>
      <li>Optimized the installer for <b>distributed environments</b> to ensure seamless component integration.</li>
    </ul>

    <h3>Certificate</h3>
    <a href="./assets/docs/iitkgp_certificate.pdf" target="_blank" style="
      display:inline-block;
      padding:8px 12px;
      background:#007bff;
      color:white;
      border-radius:5px;
      text-decoration:none;
      font-weight:bold;
      font-size:14px;
    ">
      View Certificate (PDF)
    </a>

    <h3 style="margin-top:15px;">Work Screenshots</h3>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <img src="./assets/images/iitkgp_screenshot1.png" 
           alt="Work Screenshot 1" 
           style="width:120px;height:90px;border-radius:6px;object-fit:cover;cursor:pointer;"
           onclick="openImageModal('./assets/images/iitkgp_screenshot1.png')">
      <img src="./assets/images/iitkgp_screenshot2.png" 
           alt="Work Screenshot 2" 
           style="width:120px;height:90px;border-radius:6px;object-fit:cover;cursor:pointer;"
           onclick="openImageModal('./assets/images/iitkgp_screenshot2.png')">
    </div>
  `
}

,
  campusdekho: {
  title: 'Campus Dekho.AI',
  logo: './assets/images/campusdekho.png',
  info: `
    <b>Project Intern</b> <span style="float:right;">Nov 2024 - Feb 2025</span><br><br>
    During my internship at Campus Dekho.AI, I contributed to the project <b>"Structured Data Extraction from Educational Websites"</b>, 
    focusing on automating the extraction and processing of seat-matrix and admission data.<br><br>
    
    Key contributions included:
    <ul>
      <li>Designed and deployed Python-based solutions to <b>auto-extract data</b> from MHT-CET and AI seat-matrix files.</li>
      <li>Utilized <b>web scraping</b> to retrieve structured seat allocation data from educational portals like Career360 and JOSAA.</li>
      <li>Performed <b>data cleansing and analysis</b> to transform raw, unstructured datasets into actionable insights.</li>
      <li>Carried out <b>case studies</b> on real-world admission datasets to identify trends and patterns for decision-making.</li>
    </ul>

    <h3>Certificate</h3>
    <a href="./assets/docs/gdb_certificate.pdf" target="_blank" style="
      display:inline-block;
      padding:8px 12px;
      background:#007bff;
      color:white;
      border-radius:5px;
      text-decoration:none;
      font-weight:bold;
      font-size:14px;
    ">
      View Certificate (PDF)
    </a>

    <h3 style="margin-top:15px;">Work Screenshots</h3>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <img src="./assets/images/campusdekho_screenshot1.png" 
           alt="Work Screenshot 1" 
           style="width:120px;height:90px;border-radius:6px;object-fit:cover;cursor:pointer;"
           onclick="openImageModal('./assets/images/campusdekho_screenshot1.png')">
      <img src="./assets/images/campusdekho_screenshot2.png" 
           alt="Work Screenshot 2" 
           style="width:120px;height:90px;border-radius:6px;object-fit:cover;cursor:pointer;"
           onclick="openImageModal('./assets/images/campusdekho_screenshot2.png')">
    </div>
  `
}
,
googledev: {
  title: 'Google for Developers',
  logo: './assets/images/gfd.png',
  info: `
    <b>Virtual Intern</b> <span style="float:right;">Jan 2025 - Mar 2025</span><br><br>
    During my virtual internship with Google for Developers, I gained hands-on experience with Google's cloud-based tools 
    and applied them to machine learning and big data projects.<br><br>
    
    Key contributions and learnings included:
    <ul>
      <li>Worked with <b>Google BigTable</b> for managing and querying large-scale datasets efficiently.</li>
      <li>Utilized <b>Google Colab</b> for collaborative machine learning experiments and prototyping.</li>
      <li>Explored <b>Vision Transformer</b> models for advanced image processing tasks.</li>
      <li>Developed a <b>market analysis project</b> leveraging big data components as its foundation.</li>
    </ul>

    <h3>Certificate</h3>
    <a href="./assets/docs/googledev_certificate.pdf" target="_blank" style="
      display:inline-block;
      padding:8px 12px;
      background:#007bff;
      color:white;
      border-radius:5px;
      text-decoration:none;
      font-weight:bold;
      font-size:14px;
    ">
      View Certificate (PDF)
    </a>

    <h3 style="margin-top:15px;">GitHub Repository</h3>
    <a href="https://github.com/PARTH-BRAMHECHA/Inventory-Demand-Forecasting" target="_blank" style="
      display:inline-block;
      padding:8px 12px;
      background:#28a745;
      color:white;
      border-radius:5px;
      text-decoration:none;
      font-weight:bold;
      font-size:14px;
    ">
      View on GitHub
    </a>
  `
}
,
pict: {
  title: 'PICT Sports Department',
  logo: './assets/images/pict.png',
  info: `
    <b>Web Development Intern</b> <span style="float:right;">Mar 2025 – Apr 2025</span><br><br>
    As a Web Development Intern for the PICT Sports Department, I designed, developed, and deployed a 
    <b>full-stack MERN application</b> to digitally showcase departmental activities and streamline event updates.<br><br>

    Key contributions included:
    <ul>
      <li>Developed a <b>responsive and performance-optimized frontend</b> using React.js and Tailwind CSS.</li>
      <li>Implemented <b>backend APIs in Node.js & Express.js</b> to manage dynamic content and event data.</li>
      <li>Integrated <b>MongoDB</b> for storing achievements, event details, and user role permissions.</li>
      <li>Designed <b>role-based authentication & authorization</b> for admins, editors, and general visitors.</li>
      <li>Deployed the application to ensure <b>seamless access across devices</b> and enhanced the department’s online presence.</li>
    </ul>

    <h3>Links</h3>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <a href="https://github.com/yourusername/pict-sports" target="_blank" style="
        display:inline-block;
        padding:8px 12px;
        background:#28a745;
        color:white;
        border-radius:5px;
        text-decoration:none;
        font-weight:bold;
        font-size:14px;
      ">View on GitHub</a>

      <a href="https://sports-website-1.onrender.com/" target="_blank" style="
        display:inline-block;
        padding:8px 12px;
        background:#007bff;
        color:white;
        border-radius:5px;
        text-decoration:none;
        font-weight:bold;
        font-size:14px;
      ">View Live Website</a>
    </div>

    <h3 style="margin-top:15px;">Work Screenshots</h3>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <img src="./assets/images/pict_screenshot1.png" 
           alt="Work Screenshot 1" 
           style="width:120px;height:90px;border-radius:6px;object-fit:cover;cursor:pointer;"
           onclick="openImageModal('./assets/images/pict_screenshot1.png')">
      <img src="./assets/images/pict_screenshot2.png" 
           alt="Work Screenshot 2" 
           style="width:120px;height:90px;border-radius:6px;object-fit:cover;cursor:pointer;"
           onclick="openImageModal('./assets/images/pict_screenshot2.png')">
    </div>
  `
}

};
function openImageModal(src) {
  document.getElementById('imgModal').style.display = 'flex';
  document.getElementById('imgModalContent').src = src;
}

function closeImageModal() {
  document.getElementById('imgModal').style.display = 'none';
}


document.querySelectorAll('.experience-card').forEach(card => {
  card.addEventListener('click', function() {
    const key = card.getAttribute('data-exp');
    if (expDetails[key]) {
      expModalContent.innerHTML = `
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
          <img src="${expDetails[key].logo}" alt="${expDetails[key].title}" style="height:48px;width:48px;border-radius:12px;">
          <h2 style="margin:0;">${expDetails[key].title}</h2>
        </div>
        <div>${expDetails[key].info}</div>
      `;
      expModal.classList.add('active');
    }
  });
});

expClose.addEventListener('click', () => {
  expModal.classList.remove('active');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') expModal.classList.remove('active');
});


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

const skillsBtn = document.getElementById("skills-toggle-btn");
const mainSkillsCloud = document.getElementById("main-skills-cloud");
const aboutText = document.getElementById("about-text");

if (skillsBtn && mainSkillsCloud && aboutText) {
  skillsBtn.addEventListener("click", function() {
    if (mainSkillsCloud.style.display === "none") {
      mainSkillsCloud.style.display = "block";
      aboutText.style.opacity = "0.2";
      aboutText.style.transition = "opacity 0.5s";
    } else {
      mainSkillsCloud.style.display = "none";
      aboutText.style.opacity = "1";
    }
  });
}

