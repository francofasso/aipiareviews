(function () {
  "use strict";

  // --- Cookie consent banner ---
  var CONSENT_KEY = "aipia-cookie-consent";
  var banner = document.getElementById("cookie-banner");
  if (banner) {
    var stored = null;
    try { stored = localStorage.getItem(CONSENT_KEY); } catch (e) {}
    if (!stored) {
      banner.hidden = false;
    }
    var acceptBtn = banner.querySelector('[data-cookie-action="accept"]');
    var rejectBtn = banner.querySelector('[data-cookie-action="reject"]');
    function setConsent(value) {
      try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
      banner.hidden = true;
    }
    if (acceptBtn) acceptBtn.addEventListener("click", function () { setConsent("accepted"); });
    if (rejectBtn) rejectBtn.addEventListener("click", function () { setConsent("rejected"); });
  }

  // --- Review search / filter / sort ---
  var grid = document.querySelector("[data-review-grid]");
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".review-card"));
    var searchInput = document.querySelector("[data-review-search]");
    var sourceFilter = document.querySelector("[data-review-source-filter]");
    var sortSelect = document.querySelector("[data-review-sort]");
    var noResults = document.querySelector(".no-results");

    function applyFilters() {
      var query = (searchInput && searchInput.value || "").trim().toLowerCase();
      var source = sourceFilter && sourceFilter.value || "";
      var visibleCount = 0;

      cards.forEach(function (card) {
        var matchesText = !query || card.getAttribute("data-review-text").indexOf(query) !== -1;
        var matchesSource = !source || card.getAttribute("data-review-source") === source;
        var visible = matchesText && matchesSource;
        card.style.display = visible ? "" : "none";
        if (visible) visibleCount++;
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
      }
    }

    function applySort() {
      if (!sortSelect) return;
      var mode = sortSelect.value;
      var sorted = cards.slice().sort(function (a, b) {
        if (mode === "rating-desc") {
          return Number(b.getAttribute("data-review-rating")) - Number(a.getAttribute("data-review-rating"));
        }
        if (mode === "rating-asc") {
          return Number(a.getAttribute("data-review-rating")) - Number(b.getAttribute("data-review-rating"));
        }
        if (mode === "date-asc") {
          return new Date(a.getAttribute("data-review-date")) - new Date(b.getAttribute("data-review-date"));
        }
        // default: date-desc
        return new Date(b.getAttribute("data-review-date")) - new Date(a.getAttribute("data-review-date"));
      });
      sorted.forEach(function (card) { grid.appendChild(card); });
    }

    if (searchInput) searchInput.addEventListener("input", applyFilters);
    if (sourceFilter) sourceFilter.addEventListener("change", applyFilters);
    if (sortSelect) sortSelect.addEventListener("change", applySort);
  }

  // --- Review submission form ---
  var form = document.querySelector("[data-review-form]");
  if (form) {
    var loadedAt = Date.now();
    var MIN_FILL_SECONDS = 4;
    var successBox = form.querySelector('[data-status="success"]');
    var errorBox = form.querySelector('[data-status="error"]');

    function showStatus(box, message) {
      [successBox, errorBox].forEach(function (b) {
        if (b) b.classList.remove("is-visible");
      });
      if (box) {
        if (message) box.textContent = message;
        box.classList.add("is-visible");
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var honeypot = form.querySelector('[name="azienda_verifica"]');
      if (honeypot && honeypot.value.trim() !== "") {
        // Silently drop: likely a bot.
        showStatus(successBox);
        form.reset();
        return;
      }

      var elapsedSeconds = (Date.now() - loadedAt) / 1000;
      if (elapsedSeconds < MIN_FILL_SECONDS) {
        showStatus(errorBox, "Il modulo e' stato inviato troppo velocemente. Riprova tra qualche secondo.");
        return;
      }

      var consent = form.querySelector('[name="consenso"]');
      if (consent && !consent.checked) {
        showStatus(errorBox, "Per inviare la recensione devi accettare il trattamento dei dati.");
        return;
      }

      var action = form.getAttribute("action");
      var data = new FormData(form);

      fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            showStatus(successBox);
            form.reset();
          } else {
            showStatus(errorBox, "Non siamo riusciti a inviare la recensione. Riprova piu' tardi o scrivici a segreteria@aipia.it.");
          }
        })
        .catch(function () {
          showStatus(errorBox, "Non siamo riusciti a inviare la recensione. Controlla la connessione e riprova.");
        });
    });
  }
})();
