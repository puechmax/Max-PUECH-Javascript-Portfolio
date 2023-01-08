(function() {
    var options = {
      initialDelay: 1,
      delay: 0.8
    };
    var animateLoader = function(loader, index) {

        var line = document.createElement("div");
      line.classList.add("ms-line");
      line.appendChild(document.createElement("div"));
      var lineColor = line.querySelector(":scope > div");
      loader.appendChild(line);

      var percent = document.createElement("div");
      percent.classList.add("ms-percent");
      percent.innerHTML = loader.getAttribute("percent");
      loader.appendChild(percent);

      setTimeout(function() {
        line.querySelector(":scope > div").style.width = loader.getAttribute("percent");
      }, (options.initialDelay * 1000) + (options.delay * 1000 * index));
    };

    document.addEventListener("DOMContentLoaded", function(evt) {
      var skills = document.querySelector(".ms-skills");

      var loaders = document.querySelectorAll(".ms-list .ms-loader");

      for (var i=0; i<=loaders.length-1; i++) animateLoader(loaders[i], i);
    });
  })();