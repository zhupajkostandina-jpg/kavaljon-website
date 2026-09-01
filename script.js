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
