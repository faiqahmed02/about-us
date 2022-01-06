function setButtonURL() { zE.activate() } $(window).on("load", function () { AOS.init(), $(".menu-bottom").on("click", function () { $("html").toggleClass("menu-open") }), $(".menu-bottom").click(function () { $(this).toggleClass("click") }), $(".content").mCustomScrollbar({ autoHideScrollbar: !0 }) }), $(document).ready(function () { $(".popupform_sending").validate(), $(".video_popupform").validate(), $(".website_popupform").validate(), $(".validate-popupform-logo").validate(), $(".contact-form fomr").validate(); var e = $("meta[name=ip2loc]").attr("content"); $.ajax({ method: "get", url: "https://pro.ip-api.com/json/" + e, data: { key: "5XpThOAEkfgOvEJ" }, success: function (e) { e && ($("input[name=ip2loc_ip]").val(e.query), $("input[name=ip2loc_isp]").val(e.isp), $("input[name=ip2loc_org]").val(e.org), $("input[name=ip2loc_country]").val(e.country), $("input[name=ip2loc_region]").val(e.regionName), $("input[name=ip2loc_city]").val(e.city)) } }), $(".owl-testimonial").owlCarousel({ loop: !0, dots: !0, margin: 20, responsiveClass: !0, autoplay: !0, autoplayTimeout: 8e3, autoplaySpeed: 800, items: 1, nav: !1 }), $(".owl-logo-text").owlCarousel({ loop: !0, dots: !0, margin: 20, responsiveClass: !0, autoplay: !0, autoplayTimeout: 8e3, autoplaySpeed: 800, items: 1, nav: !1 }), $(".owl-logo-bar").owlCarousel({ loop: !0, dots: !1, margin: 20, mouseDrag: !1, autoplay: !0, autoplayTimeout: 3e3, autoplaySpeed: 500, items: 6, nav: !1, responsiveClass: !0, fluidSpeed: !0, smartSpeed: 3e3, responsive: { 0: { items: 6 }, 320: { items: 3, loop: !0 }, 1000: { items: 6 } } }), $(".owl-branding-text").owlCarousel({ loop: !0, dots: !1, margin: 20, responsiveClass: !0, autoplay: !0, autoplayTimeout: 8e3, autoplaySpeed: 800, items: 1, nav: !0 }), $(".disclaimer a").click(function () { $(".disclaimer p").slideToggle("fast") }), $(".various").click(function () { var e = $(this).attr("name"); $(".popupform .leadprice").val(e) }); var t = location.href.toLowerCase(); $(".navbar-nav li a").each(function () { t.indexOf(this.href.toLowerCase()) > -1 && ($("li.active").removeClass("active"), $(this).parent().addClass("active")) }); var o = $(".grid").isotope({ itemSelector: ".element-item", layoutMode: "fitRows" }); $("#filters").on("click", "button", function () { var e = $(this).attr("data-filter"); e = e, o.isotope({ filter: e }) }), $(".button-group").each(function (e, t) { var o = $(t); o.on("click", "button", function () { o.find(".is-checked").removeClass("is-checked"), $(this).addClass("is-checked") }) }); var a = 8, i = o.data("isotope"); function l(e) { o.find(".hidden").removeClass("hidden"); var t = i.filteredItems.slice(e, i.filteredItems.length).map(function (e) { return e.element }); $(t).addClass("hidden"), o.isotope("layout"), 0 == t.length ? jQuery("#showMore").hide() : jQuery("#showMore").show() } $("#showMore ").on("click", function (e) { e.preventDefault(), showNextItems(next_items) }), l(8), o.after('<button id="showMore"> Show More</button>'), $("#showMore").click(function () { $("#filters").data("clicked") ? (a = 8, $("#filters").data("clicked", !1)) : a = a, l(a += 8) }), $("#filters").click(function () { $(this).data("clicked", !0), l(8) }), $(".lazy").lazy() }), 
// document.write("<script id='ze-snippet' src='https://static.zdassets.com/ekr/snippet.js?key=1612ddc9-f1ba-41ac-9f1b-72f297e31f20'> <\/script>"), $(".chat").click(function () { zE.activate() });


document.addEventListener('touchstart', onTouchStart, {passive: true});
$(document).ready(function () {

    $('.owl-testimonial').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 13000,
        autoplaySpeed: 800,

        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            },
            360: {
                items: 1
            }
        }
    });

});






$(".validate-helpform").validate();