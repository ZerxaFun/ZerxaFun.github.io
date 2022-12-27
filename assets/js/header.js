/* ==========================================
scrollTop() >= 300
Добавление к nav > nav-bar фиксации при X скролле
========================================== */

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 250) {
        jQuery('header').addClass('fixed-header');
        jQuery('.header-banner').addClass('resize');
        jQuery('nav div').addClass('scroll-header');
    } else {
        jQuery('header').removeClass('fixed-header');
        jQuery('.header-banner').removeClass('resize');
        jQuery('nav div').removeClass('scroll-header');
    }

});


!(function (f, c, d, b) {
    (f.navigation = function (x, z) {
        var E = {
                responsive: !0,
                mobileBreakpoint: 993,
                showDuration: 200,
                hideDuration: 200,
                showDelayDuration: 0,
                hideDelayDuration: 0,
                submenuTrigger: "hover",
                effect: "fadeIn",
                submenuIndicator: !0,
                submenuIndicatorTrigger: !1,
                hideSubWhenGoOut: !0,
                visibleSubmenusOnMobile: !1,
                fixed: !1,
                overlay: !0,
                overlayColor: "rgba(0, 0, 0, 0.5)",
                hidden: !1,
                hiddenOnMobile: !1,
                offCanvasSide: "left",
                offCanvasCloseButton: !0,
                animationOnShow: "",
                animationOnHide: "",
                onInit: function () {
                },
                onLandscape: function () {
                },
                onPortrait: function () {
                },
                onShowOffCanvas: function () {
                },
                onHideOffCanvas: function () {
                }
            }, B = this, q = Number.MAX_VALUE, L = 1, G = "click.nav touchstart.nav", K = "mouseenter focusin",
            M = "mouseleave focusout";
        B.settings = {};
        var x = (f(x), x);
        f(x).find(".nav-search").length > 0 && f(x).find(".nav-search").find("form").prepend("<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"), (B.init = function () {
            (B.settings = f.extend({}, E, z)), B.settings.offCanvasCloseButton && f(x).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>&#10005;</span>"), "right" == B.settings.offCanvasSide && f(x).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"), B.settings.hidden && (f(x).addClass("navigation-hidden"), (B.settings.mobileBreakpoint = 99999)), n(), B.settings.fixed && f(x).addClass("navigation-fixed"), f(x).find(".nav-toggle").on("click touchstart", function (g) {
                g.stopPropagation(), g.preventDefault(), B.showOffcanvas(), z !== b && B.callback("onShowOffCanvas")
            }), f(x).find(".nav-menus-wrapper-close-button").on("click touchstart", function () {
                B.hideOffcanvas(), z !== b && B.callback("onHideOffCanvas")
            }), f(x).find(".nav-search-button, .nav-search-close-button").on("click touchstart keydown", function (g) {
                g.stopPropagation(), g.preventDefault();
                var h = g.keyCode || g.which;
                "click" === g.type || "touchstart" === g.type || ("keydown" === g.type && 13 == h) ? B.toggleSearch() : 9 == h && f(g.target).blur()
            }), f(x).find(".megamenu-tabs").length > 0 && i(), f(c).resize(function () {
                B.initNavigationMode(A()), e(), B.settings.hiddenOnMobile && F()
            }), B.initNavigationMode(A()), B.settings.hiddenOnMobile && F(), z !== b && B.callback("onInit")
        });
        var I = function () {
            f(x).find(".nav-submenu").hide(0), f(x).find("li").removeClass("focus")
        }, n = function () {
            f(x).find("li").each(function () {
                f(this).children(".nav-dropdown,.megamenu-panel").length > 0 && (f(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"), B.settings.submenuIndicator && f(this).children("a").append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"))
            })
        }, F = function () {
            f(x).hasClass("navigation-portrait") ? f(x).addClass("navigation-hidden") : f(x).removeClass("navigation-hidden")
        };
        (B.showSubmenu = function (g, h) {
            A() > B.settings.mobileBreakpoint && f(x).find(".nav-search").find("form").fadeOut(), "fade" == h ? f(g).children(".nav-submenu").stop(!0, !0).delay(B.settings.showDelayDuration).fadeIn(B.settings.showDuration).removeClass(B.settings.animationOnHide).addClass(B.settings.animationOnShow) : f(g).children(".nav-submenu").stop(!0, !0).delay(B.settings.showDelayDuration).slideDown(B.settings.showDuration).removeClass(B.settings.animationOnHide).addClass(B.settings.animationOnShow), f(g).addClass("focus")
        }), (B.hideSubmenu = function (g, h) {
            "fade" == h ? f(g).find(".nav-submenu").stop(!0, !0).delay(B.settings.hideDelayDuration).fadeOut(B.settings.hideDuration).removeClass(B.settings.animationOnShow).addClass(B.settings.animationOnHide) : f(g).find(".nav-submenu").stop(!0, !0).delay(B.settings.hideDelayDuration).slideUp(B.settings.hideDuration).removeClass(B.settings.animationOnShow).addClass(B.settings.animationOnHide), f(g).removeClass("focus").find(".focus").removeClass("focus")
        });
        var D = function () {
            f("body").addClass("no-scroll"), B.settings.overlay && (f(x).append("<div class='nav-overlay-panel'></div>"), f(x).find(".nav-overlay-panel").css("background-color", B.settings.overlayColor).fadeIn(300).on("click touchstart", function (g) {
                B.hideOffcanvas()
            }))
        }, J = function () {
            f("body").removeClass("no-scroll"), B.settings.overlay && f(x).find(".nav-overlay-panel").fadeOut(400, function () {
                f(this).remove()
            })
        };
        (B.showOffcanvas = function () {
            D(), "left" == B.settings.offCanvasSide ? f(x).find(".nav-menus-wrapper").css("transition-property", "left").addClass("nav-menus-wrapper-open") : f(x).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open")
        }), (B.hideOffcanvas = function () {
            f(x).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd", function () {
                f(x).find(".nav-menus-wrapper").css("transition-property", "none").off()
            }), J()
        }), (B.toggleOffcanvas = function () {
            A() <= B.settings.mobileBreakpoint && (f(x).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open") ? (B.hideOffcanvas(), z !== b && B.callback("onHideOffCanvas")) : (B.showOffcanvas(), z !== b && B.callback("onShowOffCanvas")))
        }), (B.toggleSearch = function () {
            "none" == f(x).find(".nav-search").find("form").css("display") ? (f(x).find(".nav-search").find("form").fadeIn(200), f(x).find(".nav-search").find("input").focus()) : (f(x).find(".nav-search").find("form").fadeOut(200), f(x).find(".nav-search").find("input").blur())
        }), (B.initNavigationMode = function (g) {
            B.settings.responsive ? (g <= B.settings.mobileBreakpoint && q > B.settings.mobileBreakpoint && (f(x).addClass("navigation-portrait").removeClass("navigation-landscape"), a(), z !== b && B.callback("onPortrait")), g > B.settings.mobileBreakpoint && L <= B.settings.mobileBreakpoint && (f(x).addClass("navigation-landscape").removeClass("navigation-portrait"), H(), J(), B.hideOffcanvas(), z !== b && B.callback("onLandscape")), (q = g), (L = g)) : (f(x).addClass("navigation-landscape"), H(), z !== b && B.callback("onLandscape"))
        });
        var N = function () {
            f("html").on("click.body touchstart.body", function (g) {
                0 === f(g.target).closest(".navigation").length && (f(x).find(".nav-submenu").fadeOut(), f(x).find(".focus").removeClass("focus"), f(x).find(".nav-search").find("form").fadeOut())
            })
        }, A = function () {
            return (c.innerWidth || d.documentElement.clientWidth || d.body.clientWidth)
        }, j = function () {
            f(x).find(".nav-menu").find("li, a").off(G).off(K).off(M)
        }, e = function () {
            if (A() > B.settings.mobileBreakpoint) {
                var g = f(x).outerWidth(!0);
                f(x).find(".nav-menu").children("li").children(".nav-submenu").each(function () {
                    f(this).parent().position().left + f(this).outerWidth() > g ? f(this).css("right", 0) : f(this).css("right", "auto")
                })
            }
        }, i = function () {
            function h(m) {
                var o = f(m).children(".megamenu-tabs-nav").children("li"), l = f(m).children(".megamenu-tabs-pane");
                f(o).on("click.tabs touchstart.tabs", function (p) {
                    p.stopPropagation(), p.preventDefault(), f(o).removeClass("active"), f(this).addClass("active"), f(l).hide(0).removeClass("active"), f(l[f(this).index()]).show(0).addClass("active")
                })
            }

            if (f(x).find(".megamenu-tabs").length > 0) {
                for (var k = f(x).find(".megamenu-tabs"), g = 0; g < k.length; g++) {
                    h(k[g])
                }
            }
        }, H = function () {
            j(), I(), navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || "click" == B.settings.submenuTrigger ? f(x).find(".nav-menu, .nav-dropdown").children("li").children("a").on(G, function (g) {
                if ((B.hideSubmenu(f(this).parent("li").siblings("li"), B.settings.effect), f(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(B.settings.hideDuration), f(this).siblings(".nav-submenu").length > 0)) {
                    if ((g.stopPropagation(), g.preventDefault(), "none" == f(this).siblings(".nav-submenu").css("display"))) {
                        return (B.showSubmenu(f(this).parent("li"), B.settings.effect), e(), !1)
                    }
                    if ((B.hideSubmenu(f(this).parent("li"), B.settings.effect), "_blank" === f(this).attr("target") || "blank" === f(this).attr("target"))) {
                        c.open(f(this).attr("href"))
                    } else {
                        if ("#" === f(this).attr("href") || "" === f(this).attr("href") || "javascript:void(0)" === f(this).attr("href")) {
                            return !1
                        }
                        c.location.href = f(this).attr("href")
                    }
                }
            }) : f(x).find(".nav-menu").find("li").on(K, function () {
                B.showSubmenu(this, B.settings.effect), e()
            }).on(M, function () {
                B.hideSubmenu(this, B.settings.effect)
            }), B.settings.hideSubWhenGoOut && N()
        }, a = function () {
            j(), I(), B.settings.visibleSubmenusOnMobile ? f(x).find(".nav-submenu").show(0) : (f(x).find(".submenu-indicator").removeClass("submenu-indicator-up"), B.settings.submenuIndicator && B.settings.submenuIndicatorTrigger ? f(x).find(".submenu-indicator").on(G, function (g) {
                return (g.stopPropagation(), g.preventDefault(), B.hideSubmenu(f(this).parent("a").parent("li").siblings("li"), "slide"), B.hideSubmenu(f(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == f(this).parent("a").siblings(".nav-submenu").css("display") ? (f(this).addClass("submenu-indicator-up"), f(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), f(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), B.showSubmenu(f(this).parent("a").parent("li"), "slide"), !1) : (f(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), void B.hideSubmenu(f(this).parent("a").parent("li"), "slide")))
            }) : f(x).find(".nav-menu, .nav-dropdown").children("li").children("a").on(G, function (g) {
                if ((g.stopPropagation(), g.preventDefault(), B.hideSubmenu(f(this).parent("li").siblings("li"), B.settings.effect), B.hideSubmenu(f(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == f(this).siblings(".nav-submenu").css("display"))) {
                    return (f(this).children(".submenu-indicator").addClass("submenu-indicator-up"), f(this).parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), f(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), B.showSubmenu(f(this).parent("li"), "slide"), !1)
                }
                if ((f(this).parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), B.hideSubmenu(f(this).parent("li"), "slide"), "_blank" === f(this).attr("target") || "blank" === f(this).attr("target"))) {
                    c.open(f(this).attr("href"))
                } else {
                    if ("#" === f(this).attr("href") || "" === f(this).attr("href") || "javascript:void(0)" === f(this).attr("href")) {
                        return !1
                    }
                    c.location.href = f(this).attr("href")
                }
            }))
        };
        (B.callback = function (g) {
            z[g] !== b && z[g].call(x)
        }), B.init()
    }), (f.fn.navigation = function (a) {
        return this.each(function () {
            if (b === f(this).data("navigation")) {
                var g = new f.navigation(this, a);
                f(this).data("navigation", g)
            }
        })
    })
})(jQuery, window, document);
(function (a) {
    var b = a(window);
    if (a.fn.navigation) {
        a("#navigation").navigation();
        a("#always-hidden-nav").navigation({hidden: true})
    }
    b.on("load", function () {
        a("#preloader").fadeOut("slow", function () {
            a(this).remove()
        })
    })
})(jQuery);
jQuery("#site-navigation-sub .sub-menu").hide();
jQuery("#site-navigation-sub > #menu-top-navigation > .sub-menu-parent > a").click(function (a) {
    a.preventDefault();
    jQuery(this).parent().toggleClass("expanded");
    jQuery(this).parent().children(".sub-menu").slideToggle("fast")
});
