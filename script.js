document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var projectModal = document.querySelector('#project-modal');
  var projectLinks = document.querySelectorAll('.project-details-link');
  var detailNumber = document.querySelector('#project-detail-number');
  var detailTitle = document.querySelector('#project-detail-title');
  var detailIntro = document.querySelector('#project-detail-intro');
  var detailCopy = document.querySelector('#project-detail-copy');
  var detailBudget = document.querySelector('#project-detail-budget');

  var projectDetails = {
    'foto-video': { number: '01', intro: 'Shërbim profesional fotografimi, filmimi dhe montazhi.', copy: 'Shto këtu përshkrimin e plotë të shërbimit dhe dokumentimit të atraksioneve dhe aktiviteteve.', budget: '300,000 LEKË' },
    'dizajn': { number: '02', intro: 'Realizimi i dizajnit grafik dhe promovimi i projektit.', copy: 'Shto këtu informacionin për materialet grafike, fushatën dhe kanalet digjitale.', budget: '250,000 LEKË' },
    'printime': { number: '03', intro: 'Printimi i materialeve promovuese të projektit.', copy: 'Shto këtu listën e materialeve, sasitë dhe çdo informacion tjetër të rëndësishëm.', budget: '200,000 LEKË' },
    'terren': { number: '04', intro: 'Shërbime dhe logjistikë për vizitat në terren.', copy: 'Shto këtu itinerarin, aktivitetet dhe rezultatet e 5 vizitave në territorin e Bashkisë Kavajë.', budget: '500,000 LEKË' }
  };

  function closeProjectDetails() {
    if (!projectModal) return;
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('project-modal-open');
  }

  if (projectModal) {
    projectLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var detail = projectDetails[link.dataset.project];
        if (!detail) return;
        detailNumber.textContent = detail.number;
        detailIntro.textContent = detail.intro;
        detailCopy.textContent = detail.copy;
        detailBudget.textContent = detail.budget;
        projectModal.classList.add('is-open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('project-modal-open');
      });
    });

    projectModal.querySelectorAll('[data-close-project]').forEach(function (element) {
      element.addEventListener('click', closeProjectDetails);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeProjectDetails();
    });
  }
});
