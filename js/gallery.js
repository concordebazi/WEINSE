/* =====================================
   EVENT GALLERY LIGHTBOX
   Click a photo to view it large.
   Arrows / swipe to move, Esc or × to close.
===================================== */

(function () {

    var box = document.getElementById("lightbox");
    var items = Array.prototype.slice.call(
        document.querySelectorAll(".gallery-item")
    );

    if (!box || !items.length) {
        return;
    }

    var img = box.querySelector(".lightbox-img");
    var caption = box.querySelector(".lightbox-caption");
    var closeBtn = box.querySelector(".lightbox-close");
    var current = 0;
    var lastFocus = null;

    function show(i) {
        current = (i + items.length) % items.length;
        var link = items[current];
        img.src = link.getAttribute("href");
        img.alt = link.querySelector("img").alt;
        caption.textContent =
            box.dataset.photo + " " + (current + 1) +
            " " + box.dataset.of + " " + items.length;
    }

    function open(i) {
        lastFocus = document.activeElement;
        show(i);
        box.hidden = false;
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    }

    function close() {
        box.hidden = true;
        img.src = "";
        document.body.style.overflow = "";
        if (lastFocus) {
            lastFocus.focus();
        }
    }

    items.forEach(function (link, i) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            open(i);
        });
    });

    closeBtn.addEventListener("click", close);
    box.querySelector(".lightbox-prev").addEventListener("click", function () { show(current - 1); });
    box.querySelector(".lightbox-next").addEventListener("click", function () { show(current + 1); });

    // Click on the dark background closes
    box.addEventListener("click", function (e) {
        if (e.target === box) {
            close();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (box.hidden) {
            return;
        }
        if (e.key === "Escape") { close(); }
        if (e.key === "ArrowLeft") { show(current - 1); }
        if (e.key === "ArrowRight") { show(current + 1); }
    });

    // Swipe on phones
    var startX = null;
    box.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
    }, { passive: true });
    box.addEventListener("touchend", function (e) {
        if (startX === null) {
            return;
        }
        var dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) {
            show(current + (dx < 0 ? 1 : -1));
        }
        startX = null;
    });

})();
