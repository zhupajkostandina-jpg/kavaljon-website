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
  var isEnglishPage = window.location.pathname.indexOf('/en/') !== -1;
  var assetBase = isEnglishPage ? '../' : '';
  var documentByPage = {
    'project-foto-video.html': assetBase + 'documents/ToR%20Sherbim%20fotografik.pdf',
    'project-dizajn.html': assetBase + 'documents/ToR%20Dizajn%20dhe%20fushata%20digjitale.pdf',
    'project-printime.html': assetBase + 'documents/ToR%20Printimet.pdf',
    'project-terren.html': assetBase + 'documents/ToRs%205%20Vizita_dhe%203%20Guida%20Kavaja%20365%20Experience.pdf',
    'project-etapa-05.html': assetBase + 'documents/ToRs%203%20guida.pdf',
    'project-etapa-06.html': assetBase + 'documents/ToRs%20aktiviteti%20permbylles.pdf'
  };
  var pageNumberElement = document.querySelector('.project-page-number');
  var documentByNumber = {
    '01': assetBase + 'documents/ToR%20Sherbim%20fotografik.pdf',
    '02': assetBase + 'documents/ToR%20Dizajn%20dhe%20fushata%20digjitale.pdf',
    '03': assetBase + 'documents/ToR%20Printimet.pdf',
    '04': assetBase + 'documents/ToRs%205%20Vizita_dhe%203%20Guida%20Kavaja%20365%20Experience.pdf',
    '04-05': assetBase + 'documents/ToRs%205%20Vizita_dhe%203%20Guida%20Kavaja%20365%20Experience.pdf',
    '05': assetBase + 'documents/ToRs%203%20guida.pdf',
    '06': assetBase + 'documents/ToRs%20aktiviteti%20permbylles.pdf'
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
    'project-foto-video.html': assetBase + 'images/foto%201.png',
    'project-dizajn.html': assetBase + 'images/foto%202.png',
    'project-printime.html': assetBase + 'images/foto%203.png',
    'project-terren.html': assetBase + 'images/foto%207.jpeg',
    'project-etapa-05.html': assetBase + 'images/foto%205.png',
    'project-etapa-06.html': assetBase + 'images/foto%206.jpeg'
  };
  var imageByNumber = {
    '01': assetBase + 'images/foto%201.png',
    '02': assetBase + 'images/foto%202.png',
    '03': assetBase + 'images/foto%203.png',
    '04': assetBase + 'images/foto%207.jpeg',
    '04-05': assetBase + 'images/foto%207.jpeg',
    '05': assetBase + 'images/foto%205.png',
    '06': assetBase + 'images/foto%206.jpeg'
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
