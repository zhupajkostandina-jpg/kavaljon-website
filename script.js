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

  var documentLinks = document.querySelectorAll('.project-page-download a[download]');
  var documentByPage = {
    'project-foto-video.html': 'documents/ToR%20Sherbim%20fotografik.pdf',
    'project-dizajn.html': 'documents/ToR%20Dizajn%20dhe%20fushata%20digjitale.pdf',
    'project-printime.html': 'documents/ToR%20Printimet.pdf',
    'project-terren.html': 'documents/ToRs%20per%205%20vizitat.pdf',
    'project-etapa-05.html': 'documents/ToRs%203%20guida.pdf',
    'project-etapa-06.html': 'documents/ToRs%20aktiviteti%20permbylles.pdf'
  };
  var currentPage = window.location.pathname.split('/').pop();
  if (documentByPage[currentPage]) {
    documentLinks.forEach(function (link) {
      link.href = documentByPage[currentPage];
    });
  }

  var projectImages = document.querySelectorAll('.project-page-image img');
  var imageByPage = {
    'project-foto-video.html': 'images/foto%201.png',
    'project-dizajn.html': 'images/foto%202.png',
    'project-printime.html': 'images/foto%203.png',
    'project-terren.html': 'images/foto%204.png',
    'project-etapa-05.html': 'images/foto%205.png',
    'project-etapa-06.html': 'images/foto%206.jpeg'
  };
  if (imageByPage[currentPage]) {
    projectImages.forEach(function (image) {
      image.src = imageByPage[currentPage];
    });
  }

  document.querySelectorAll('.project-download-note').forEach(function (note) {
    note.remove();
  });

});
