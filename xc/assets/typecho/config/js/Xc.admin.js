document.addEventListener("DOMContentLoaded",
function() {
    var e = document.querySelectorAll(".Xc_config__aside .item"),
    t = document.querySelector(".Xc_config__notice"),
    s = document.querySelector(".Xc_config > form"),
    n = document.querySelectorAll(".Xc_content");
    if (e.forEach(function(o) {
        o.addEventListener("click",
        function() {
            e.forEach(function(e) {
                e.classList.remove("active")
            }),
            o.classList.add("active");
            var c = o.getAttribute("data-current");
            sessionStorage.setItem("Xc_config_current", c),
            "Xc_notice" === c ? (t.style.display = "block", s.style.display = "none") : (t.style.display = "none", s.style.display = "block"),
            n.forEach(function(e) {
                e.style.display = "none";
                var t = e.classList.contains(c);
                t && (e.style.display = "block")
            })
        })
    }), sessionStorage.getItem("Xc_config_current")) {
        var o = sessionStorage.getItem("Xc_config_current");
        "Xc_notice" === o ? (t.style.display = "block", s.style.display = "none") : (s.style.display = "block", t.style.display = "none"),
        e.forEach(function(e) {
            var t = e.getAttribute("data-current");
            t === o && e.classList.add("active")
        }),
        n.forEach(function(e) {
            e.classList.contains(o) && (e.style.display = "block")
        })
    } else e[0].classList.add("active"),
    t.style.display = "block",
    s.style.display = "none";
    t.innerHTML = "和谐版，公告已去除！"
});