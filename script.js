(function () {
  "use strict";

  /* ---------- Filtro recensioni (solo se presenti in pagina) ---------- */
  var list = document.querySelector("[data-review-list]");
  if (list) {
    var searchInput = document.querySelector("[data-review-search]");
    var sortSelect = document.querySelector("[data-review-sort]");
    var sourceFilter = document.querySelector("[data-review-source-filter]");
    var liveCount = document.querySelector("[data-review-count]");
    var noResults = document.querySelector("[data-no-results]");
    var items = Array.prototype.slice.call(
      list.querySelectorAll("[data-review-item]")
    );

    function normalize(str) {
      return (str || "").toLowerCase();
    }

    function applyFilter() {
      var term = normalize(searchInput ? searchInput.value : "");
      var sourceWanted = sourceFilter ? sourceFilter.value : "";
      var visible = 0;
      items.forEach(function (item) {
        var haystack = normalize(item.getAttribute("data-search"));
        var matchesTerm = term === "" || haystack.indexOf(term) !== -1;
        var matchesSource =
          sourceWanted === "" || item.getAttribute("data-source") === sourceWanted;
        var match = matchesTerm && matchesSource;
        item.style.display = match ? "" : "none";
        if (match) visible += 1;
      });
      if (liveCount) {
        liveCount.textContent =
          visible === items.length
            ? visible + " recensioni"
            : visible + " di " + items.length + " recensioni";
      }
      if (noResults) {
        noResults.style.display = visible === 0 ? "block" : "none";
      }
    }

    function applySort() {
      if (!sortSelect) return;
      var mode = sortSelect.value;
      var sorted = items.slice().sort(function (a, b) {
        if (mode === "rating") {
          return (
            Number(b.getAttribute("data-rating")) -
            Number(a.getAttribute("data-rating"))
          );
        }
        // default: data decrescente
        return (
          new Date(b.getAttribute("data-date")) -
          new Date(a.getAttribute("data-date"))
        );
      });
      sorted.forEach(function (item) {
        list.appendChild(item);
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", applyFilter);
    }
    if (sourceFilter) {
      sourceFilter.addEventListener("change", applyFilter);
    }
    if (sortSelect) {
      sortSelect.addEventListener("change", applySort);
    }
    applyFilter();
  }

  /* ---------- Banner cookie ---------- */
  var CONSENT_KEY = "aipia-cookie-consent";
  var banner = document.getElementById("cookie-banner");
  if (banner) {
    var stored = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      stored = null;
    }
    if (!stored) {
      banner.classList.add("is-visible");
    }
    var acceptBtn = banner.querySelector("[data-cookie-accept]");
    var rejectBtn = banner.querySelector("[data-cookie-reject]");
    function setConsent(value) {
      try {
        localStorage.setItem(CONSENT_KEY, value);
      } catch (e) {
        /* privacy mode / storage non disponibile: il banner ricomparirà, non è bloccante */
      }
      banner.classList.remove("is-visible");
    }
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        setConsent("accepted");
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        setConsent("rejected");
      });
    }
  }
})();
