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
  var pageNumberElement = document.querySelector('.project-page-number');
  var documentByNumber = {
    '01': 'documents/ToR%20Sherbim%20fotografik.pdf',
    '02': 'documents/ToR%20Dizajn%20dhe%20fushata%20digjitale.pdf',
    '03': 'documents/ToR%20Printimet.pdf',
    '04': 'documents/ToRs%20per%205%20vizitat.pdf',
    '05': 'documents/ToRs%203%20guida.pdf',
    '06': 'documents/ToRs%20aktiviteti%20permbylles.pdf'
  };
  var currentPage = window.location.pathname.split('/').pop();
  var documentPath = documentByPage[currentPage] || (pageNumberElement && documentByNumber[pageNumberElement.textContent.trim()]);
  if (documentPath) {
    documentLinks.forEach(function (link) {
      link.href = documentPath;
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
  var imageByNumber = {
    '01': 'images/foto%201.png',
    '02': 'images/foto%202.png',
    '03': 'images/foto%203.png',
    '04': 'images/foto%204.png',
    '05': 'images/foto%205.png',
    '06': 'images/foto%206.jpeg'
  };
  var imagePath = imageByPage[currentPage] || (pageNumberElement && imageByNumber[pageNumberElement.textContent.trim()]);
  if (imagePath) {
    projectImages.forEach(function (image) {
      image.src = imagePath;
    });
  }

  document.querySelectorAll('.project-download-note').forEach(function (note) {
    note.remove();
  });

});
