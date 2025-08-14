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
    info: `<b>Intern</b> <span style="float:right;">Low Level NLP</span><br><br>Worked on low level NLP tasks, including text preprocessing, tokenization, and optimization of language models for Indian languages during the internship.`
  },
  iitkgp: {
    title: 'IIT Kharagpur',
    logo: './assets/images/iitkgp.png',
    info: `<b>Research Intern</b> <span style="float:right;">Ongoing</span><br><br>Designed & implemented a guided Bash installer for CHAVIDS medical software (distributed architecture).<br>Automated cross-platform setup & dependency management to improve onboarding speed.`
  },
  campusdekho: {
    title: 'Campus Dekho.AI',
    logo: './assets/images/campusdekho.png',
    info: `<b>Project Intern</b> <span style="float:right;">Nov 2024 – Feb 2025</span><br><br>Automated data extraction from MHT-CET & AI seat-matrix files using Python.<br>Built web scrapers for Career360 & JOSAA, transforming raw data into actionable insights.`
  },
  googledev: {
    title: 'Google for Developers',
    logo: './assets/images/googledev.png',
    info: `<b>Virtual Intern</b> <span style="float:right;">Jan 2025 – Mar 2025</span><br><br>Worked with BigTable, Google Colab & Vision Transformers for ML & image processing.<br>Developed an inventory demand forecasting project leveraging big data components.`
  },
  pict: {
    title: 'PICT Sports Department',
    logo: './assets/images/pict.png',
    info: `<b>Web Development Intern</b> <span style="float:right;">Mar 2025 – Apr 2025</span><br><br>Built & deployed a full-stack MERN site to showcase events, achievements, & role-based features.<br>Enhanced digital presence with responsive, performance-optimized design.`
  }
};

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

