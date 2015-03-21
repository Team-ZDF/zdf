document.addEventListener('DOMContentLoaded', function() {
  var manifestUrl = location.hash.substring(1) || '../samples/how-to-spy/manifest.json';
  var relativeUrl = manifestUrl.substring(0, manifestUrl.lastIndexOf('/') + 1);

  getPmlManifest(manifestUrl, function(manifest) {
    processPmlManifest(manifest, relativeUrl)
  });
});

function getPmlManifest(manifestUrl, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      var manifest = xhr.response;
      typeof callback === 'function' && callback(manifest);
    }
  }, false);

  xhr.open('GET', cacheDodge(manifestUrl), true);
  xhr.send();
}

function getPmlContent(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      var html = xhr.responseText;

      var doc = (new DOMParser()).parseFromString(html, 'text/html');
      var body = doc.body;
      var stylesheets = stripElements(doc, 'link[rel="stylesheet"]');
      var scripts = stripElements(doc, 'script');
      var footers = stripElements(doc, 'footer');
      var headers = stripElements(doc, 'header');

      typeof callback === 'function' && callback({
        body: body,
        document: doc,
        footer: footers.length ? footers[0] : null,
        header: headers.length ? headers[0] : null,
        rawHtml: html,
        scripts: scripts,
        stylesheets: stylesheets,
        title: doc.title
      });
    }
  }, false);

  xhr.open('GET', url, true);
  xhr.send();
}

function processPmlManifest(manifest, relativeUrl) {
  if (manifest.mainFile) {
    getPmlContent(cacheDodge(relativeUrl + manifest.mainFile), function(content) {
      document.title = content.title || manifest.title || manifestUrl;
      var container = document.getElementById('container');
      appendAll(document.head, prefixAttribute(content.stylesheets, 'href', relativeUrl, false));
      //appendAll(document.body, prefixAttribute(content.scripts, 'src', relativeUrl, false));

      var context = {
        date: (new Date()).toLocaleDateString(),
        page: 1,
        totalPages: 1
      };
      var page = document.createElement('div');
      page.classList.add('page');
      if (manifest.page) {
        if (manifest.page.height) {
          page.style.height = manifest.page.height;
        }
        if (manifest.page.width) {
          page.style.width = manifest.page.width;
        }
      }

      var pageFrame = document.createElement('div');
      pageFrame.classList.add('page-frame');
      var html = '';
      if (content.header) {
        html += content.header.outerHTML;
      }
      var pageContent = document.createElement('div');
      pageContent.classList.add('page-content');
      pageContent.innerHTML += content.body.innerHTML;
      html += pageContent.outerHTML;
      if (content.footer) {
        html += content.footer.outerHTML;
      }
      pageFrame.innerHTML = replace(html, context);
      page.appendChild(pageFrame);

      container.innerHTML = page.outerHTML;
    });
  } else {
    throw 'Manifest must have a main file specified. What do we do now?';
  }
}

function cacheDodge(url) {
  return url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
}

function replace(html, context) {
  return html
    .replace(/\{\{date\}\}/g, context.date)
    .replace(/\{\{page\}\}/g, context.page)
    .replace(/\{\{totalPages\}\}/g, context.totalPages);
}

function stripElements(doc, selector) {
  var els = doc.querySelectorAll(selector);
  for (var i = 0; i < els.length; i++) {
    els[i].remove();
  }
  return els;
}

function prefixAttribute(elements, attribute, prefix, cache) {
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var val = el.getAttribute(attribute);
    val = prefix + val;
    if (!cache) {
      val = cacheDodge(val);
    }
    el.setAttribute(attribute, val);
  }
  return elements;
}

function appendAll(target, elements) {
  for (var i = 0; i < elements.length; i++) {
    target.appendChild(elements[i]);
  }
}
