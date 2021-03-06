function FastClick(t) {
    "use strict";

    function i(t, i) {
        return function() {
            return t.apply(i, arguments)
        }
    }
    var e;
    this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = t, FastClick.notNeeded(t) || (deviceIsAndroid && (t.addEventListener("mouseover", i(this.onMouse, this), !0), t.addEventListener("mousedown", i(this.onMouse, this), !0), t.addEventListener("mouseup", i(this.onMouse, this), !0)), t.addEventListener("click", i(this.onClick, this), !0), t.addEventListener("touchstart", i(this.onTouchStart, this), !1), t.addEventListener("touchmove", i(this.onTouchMove, this), !1), t.addEventListener("touchend", i(this.onTouchEnd, this), !1), t.addEventListener("touchcancel", i(this.onTouchCancel, this), !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(i, e, s) {
        var n = Node.prototype.removeEventListener;
        "click" === i ? n.call(t, i, e.hijacked || e, s) : n.call(t, i, e, s)
    }, t.addEventListener = function(i, e, s) {
        var n = Node.prototype.addEventListener;
        "click" === i ? n.call(t, i, e.hijacked || (e.hijacked = function(t) {
            t.propagationStopped || e(t)
        }), s) : n.call(t, i, e, s)
    }), "function" == typeof t.onclick && (e = t.onclick, t.addEventListener("click", function(t) {
        e(t)
    }, !1), t.onclick = null))
}(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var t = /(\d|\.)+/g,
        i = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        e = function(t, i, e) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? i + 6 * (e - i) * t : .5 > t ? e : 2 > 3 * t ? i + 6 * (e - i) * (2 / 3 - t) : i) + .5
        },
        s = function(s) {
            if ("" === s || null == s || "none" === s) return i.transparent;
            if (i[s]) return i[s];
            if ("number" == typeof s) return [s >> 16, 255 & s >> 8, 255 & s];
            if ("#" === s.charAt(0)) return 4 === s.length && (s = "#" + s.charAt(1) + s.charAt(1) + s.charAt(2) + s.charAt(2) + s.charAt(3) + s.charAt(3)), s = parseInt(s.substr(1), 16), [s >> 16, 255 & s >> 8, 255 & s];
            if ("hsl" === s.substr(0, 3)) {
                s = s.match(t);
                var n = Number(s[0]) % 360 / 360,
                    o = Number(s[1]) / 100,
                    a = Number(s[2]) / 100,
                    r = .5 >= a ? a * (o + 1) : a + o - a * o,
                    h = 2 * a - r;
                return s.length > 3 && (s[3] = Number(s[3])), s[0] = e(n + 1 / 3, h, r), s[1] = e(n, h, r), s[2] = e(n - 1 / 3, h, r), s
            }
            return s.match(t) || i.transparent
        };
    window._gsDefine.plugin({
        propName: "colorProps",
        priority: -1,
        API: 2,
        init: function(t, i) {
            this._target = t;
            var e, n, o, a;
            for (e in i) o = s(i[e]), this._firstPT = a = {
                _next: this._firstPT,
                p: e,
                f: "function" == typeof t[e],
                n: e,
                r: !1
            }, n = s(a.f ? t[e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : t[e]), a.s = Number(n[0]), a.c = Number(o[0]) - a.s, a.gs = Number(n[1]), a.gc = Number(o[1]) - a.gs, a.bs = Number(n[2]), a.bc = Number(o[2]) - a.bs, (a.rgba = n.length > 3 || o.length > 3) && (a.as = 4 > n.length ? 1 : Number(n[3]), a.ac = (4 > o.length ? 1 : Number(o[3])) - a.as), a._next && (a._next._prev = a);
            return !0
        },
        set: function(t) {
            for (var i, e = this._firstPT; e;) i = (e.rgba ? "rgba(" : "rgb(") + (e.s + t * e.c >> 0) + ", " + (e.gs + t * e.gc >> 0) + ", " + (e.bs + t * e.bc >> 0) + (e.rgba ? ", " + (e.as + t * e.ac) : "") + ")", e.f ? this._target[e.p](i) : this._target[e.p] = i, e = e._next
        }
    })
}), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine.plugin({
        propName: "endArray",
        API: 2,
        version: "0.1.0",
        init: function(t, i) {
            var e, s, n = i.length,
                o = this.a = [];
            if (this.target = t, this._round = !1, !n) return !1;
            for (; --n > -1;) e = t[n], s = i[n], e !== s && o.push({
                i: n,
                s: e,
                c: s - e
            });
            return !0
        },
        round: function(t) {
            "endArray" in t && (this._round = !0)
        },
        set: function(t) {
            var i, e, s = this.target,
                n = this.a,
                o = n.length;
            if (this._round)
                for (; --o > -1;) i = n[o], e = i.s + i.c * t, s[i.i] = 0 | e + (e > 0 ? .5 : -.5);
            else
                for (; --o > -1;) i = n[o], e = i.s + i.c * t, s[i.i] = 1e-6 > e && e > -1e-6 ? 0 : e
        }
    })
}), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
        i = window,
        e = function(e, s) {
            var n = "x" === s ? "Width" : "Height",
                o = "scroll" + n,
                a = "client" + n,
                r = document.body;
            return e === i || e === t || e === r ? Math.max(t[o], r[o]) - (i["inner" + n] || Math.max(t[a], r[a])) : e[o] - e["offset" + n]
        },
        s = window._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.3",
            init: function(t, s, n) {
                return this._wdw = t === i, this._target = t, this._tween = n, "object" != typeof s && (s = {
                    y: s
                }), this._autoKill = s.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != s.x ? (this._addTween(this, "x", this.x, "max" === s.x ? e(t, "x") : s.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != s.y ? (this._addTween(this, "y", this.y, "max" === s.y ? e(t, "y") : s.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function(t) {
                this._super.setRatio.call(this, t);
                var s = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    n = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    o = n - this.yPrev,
                    a = s - this.xPrev;
                this._autoKill && (!this.skipX && (a > 7 || -7 > a) && e(this._target, "x") > s && (this.skipX = !0), !this.skipY && (o > 7 || -7 > o) && e(this._target, "y") > n && (this.skipY = !0), this.skipX && this.skipY && this._tween.kill()), this._wdw ? i.scrollTo(this.skipX ? s : this.x, this.skipY ? n : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        n = s.prototype;
    s.max = e, n.getX = function() {
        return this._wdw ? null != i.pageXOffset ? i.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, n.getY = function() {
        return this._wdw ? null != i.pageYOffset ? i.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, n._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), window._gsDefine && window._gsQueue.pop()();
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(t) {
        "use strict";
        switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled) return !0;
                break;
            case "input":
                if (deviceIsIOS && "file" === t.type || t.disabled) return !0;
                break;
            case "label":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, FastClick.prototype.needsFocus = function(t) {
        "use strict";
        switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !deviceIsAndroid;
            case "input":
                switch (t.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, FastClick.prototype.sendClick = function(t, i) {
        "use strict";
        var e, s;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), s = i.changedTouches[0], e = document.createEvent("MouseEvents"), e.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), e.forwardedTouchEvent = !0, t.dispatchEvent(e)
    }, FastClick.prototype.determineEventType = function(t) {
        "use strict";
        return deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, FastClick.prototype.focus = function(t) {
        "use strict";
        var i;
        deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (i = t.value.length, t.setSelectionRange(i, i)) : t.focus()
    }, FastClick.prototype.updateScrollParent = function(t) {
        "use strict";
        var i, e;
        if (i = t.fastClickScrollParent, !i || !i.contains(t)) {
            e = t;
            do {
                if (e.scrollHeight > e.offsetHeight) {
                    i = e, t.fastClickScrollParent = e;
                    break
                }
                e = e.parentElement
            } while (e)
        }
        i && (i.fastClickLastScrollTop = i.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(t) {
        "use strict";
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, FastClick.prototype.onTouchStart = function(t) {
        "use strict";
        var i, e, s;
        if (t.targetTouches.length > 1) return !0;
        if (i = this.getTargetElementFromEventTarget(t.target), e = t.targetTouches[0], deviceIsIOS) {
            if (s = window.getSelection(), s.rangeCount && !s.isCollapsed) return !0;
            if (!deviceIsIOS4) {
                if (e.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = e.identifier, this.updateScrollParent(i)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = i, this.touchStartX = e.pageX, this.touchStartY = e.pageY, 200 > t.timeStamp - this.lastClickTime && t.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(t) {
        "use strict";
        var i = t.changedTouches[0],
            e = this.touchBoundary;
        return Math.abs(i.pageX - this.touchStartX) > e || Math.abs(i.pageY - this.touchStartY) > e ? !0 : !1
    }, FastClick.prototype.onTouchMove = function(t) {
        "use strict";
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, FastClick.prototype.findControl = function(t) {
        "use strict";
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(t) {
        "use strict";
        var i, e, s, n, o, a = this.targetElement;
        if (!this.trackingClick) return !0;
        if (200 > t.timeStamp - this.lastClickTime) return this.cancelNextClick = !0, !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (o = t.changedTouches[0], a = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = a.tagName.toLowerCase(), "label" === s) {
            if (i = this.findControl(a)) {
                if (this.focus(a), deviceIsAndroid) return !1;
                a = i
            }
        } else if (this.needsFocus(a)) return t.timeStamp - e > 100 || deviceIsIOS && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(a), this.sendClick(a, t), deviceIsIOS4 && "select" === s || (this.targetElement = null, t.preventDefault()), !1);
        return deviceIsIOS && !deviceIsIOS4 && (n = a.fastClickScrollParent, n && n.fastClickLastScrollTop !== n.scrollTop) ? !0 : (this.needsClick(a) || (t.preventDefault(), this.sendClick(a, t)), !1)
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(t) {
        "use strict";
        return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0 : !0
    }, FastClick.prototype.onClick = function(t) {
        "use strict";
        var i;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (i = this.onMouse(t), i || (this.targetElement = null), i)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var t = this.layer;
        deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function(t) {
        "use strict";
        var i, e;
        if (window.ontouchstart === void 0) return !0;
        if (e = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!deviceIsAndroid) return !0;
            if (i = document.querySelector("meta[name=viewport]")) {
                if (-1 !== i.content.indexOf("user-scalable=no")) return !0;
                if (e > 31 && window.innerWidth <= window.screen.width) return !0
            }
        }
        return "none" === t.style.msTouchAction ? !0 : !1
    }, FastClick.attach = function(t) {
        "use strict";
        return new FastClick(t)
    }, "undefined" != typeof define && define.amd ? define(function() {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
    function e(t, i, s) {
        function n(a, r) {
            if (!i[a]) {
                if (!t[a]) {
                    var h = "function" == typeof require && require;
                    if (!r && h) return h(a, !0);
                    if (o) return o(a, !0);
                    throw Error("Cannot find module '" + a + "'")
                }
                var c = i[a] = {
                    exports: {}
                };
                t[a][0].call(c.exports, function(i) {
                    var e = t[a][1][i];
                    return n(e ? e : i)
                }, c, c.exports, e, t, i, s)
            }
            return i[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; s.length > a; a++) n(s[a]);
        return n
    }({
        1: [
            function(t, i) {
                function e(t, i) {
                    this.el = t.el, this.ctx = t.ctx, this.color = i || "gray"
                }
                e.prototype = {
                    draw: function(t) {
                        t && (this.color = "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")", this.ctx.fillStyle = this.color, (1 > t[3] || !t) && this.ctx.clearRect(0, 0, this.el.width, this.el.height), this.ctx.fillRect(0, 0, this.el.width, this.el.height))
                    }
                }, i.exports = e
            }, {}
        ],
        2: [
            function(t, i) {
                var e;
                (function() {
                    "use strict";

                    function t(t) {
                        var i, e, s, n, o, a, r = Number.POSITIVE_INFINITY,
                            h = Number.POSITIVE_INFINITY,
                            c = Number.NEGATIVE_INFINITY,
                            l = Number.NEGATIVE_INFINITY;
                        for (i = t.length; i--;) r > t[i][0] && (r = t[i][0]), t[i][0] > c && (c = t[i][0]), h > t[i][1] && (h = t[i][1]), t[i][1] > l && (l = t[i][1]);
                        return e = c - r, s = l - h, n = Math.max(e, s), o = r + .5 * e, a = h + .5 * s, [
                            [o - 20 * n, a - n],
                            [o, a + 20 * n],
                            [o + 20 * n, a - n]
                        ]
                    }

                    function s(t, i, e, s) {
                        var n, a, r, h, c, l, d, u, p, m, g = t[i][0],
                            f = t[i][1],
                            w = t[e][0],
                            v = t[e][1],
                            x = t[s][0],
                            y = t[s][1],
                            b = Math.abs(f - v),
                            T = Math.abs(v - y);
                        if (o > b && o > T) throw Error("Eek! Coincident points!");
                        return o > b ? (h = -((x - w) / (y - v)), l = (w + x) / 2, u = (v + y) / 2, n = (w + g) / 2, a = h * (n - l) + u) : o > T ? (r = -((w - g) / (v - f)), c = (g + w) / 2, d = (f + v) / 2, n = (x + w) / 2, a = r * (n - c) + d) : (r = -((w - g) / (v - f)), h = -((x - w) / (y - v)), c = (g + w) / 2, l = (w + x) / 2, d = (f + v) / 2, u = (v + y) / 2, n = (r * c - h * l + u - d) / (r - h), a = b > T ? r * (n - c) + d : h * (n - l) + u), p = w - n, m = v - a, {
                            i: i,
                            j: e,
                            k: s,
                            x: n,
                            y: a,
                            r: p * p + m * m
                        }
                    }

                    function n(t) {
                        var i, e, s, n, o, a;
                        for (e = t.length; e;)
                            for (n = t[--e], s = t[--e], i = e; i;)
                                if (a = t[--i], o = t[--i], s === o && n === a || s === a && n === o) {
                                    t.splice(e, 2), t.splice(i, 2);
                                    break
                                }
                    }
                    var o = 1 / 1048576;
                    e = {
                        triangulate: function(i, e) {
                            var a, r, h, c, l, d, u, p, m, g, f, w, v = i.length;
                            if (3 > v) return [];
                            if (i = i.slice(0), e)
                                for (a = v; a--;) i[a] = [i[a][e].x, i[a][e].y];
                            for (h = Array(v), a = v; a--;) h[a] = a;
                            for (h.sort(function(t, e) {
                                return i[e][0] - i[t][0]
                            }), c = t(i), i.push(c[0], c[1], c[2]), l = [s(i, v + 0, v + 1, v + 2)], d = [], u = [], a = h.length; a--; u.length = 0) {
                                for (w = h[a], r = l.length; r--;) p = i[w][0] - l[r].x, p > 0 && p * p > l[r].r ? (d.push(l[r]), l.splice(r, 1)) : (m = i[w][1] - l[r].y, p * p + m * m - l[r].r > o || (u.push(l[r].i, l[r].j, l[r].j, l[r].k, l[r].k, l[r].i), l.splice(r, 1)));
                                for (n(u), r = u.length; r;) f = u[--r], g = u[--r], l.push(s(i, g, f, w))
                            }
                            for (a = l.length; a--;) d.push(l[a]);
                            for (l.length = 0, a = d.length; a--;) v > d[a].i && v > d[a].j && v > d[a].k && l.push(d[a].i, d[a].j, d[a].k);
                            return l
                        },
                        contains: function(t, i) {
                            if (i[0] < t[0][0] && i[0] < t[1][0] && i[0] < t[2][0] || i[0] > t[0][0] && i[0] > t[1][0] && i[0] > t[2][0] || i[1] < t[0][1] && i[1] < t[1][1] && i[1] < t[2][1] || i[1] > t[0][1] && i[1] > t[1][1] && i[1] > t[2][1]) return null;
                            var e = t[1][0] - t[0][0],
                                s = t[2][0] - t[0][0],
                                n = t[1][1] - t[0][1],
                                o = t[2][1] - t[0][1],
                                a = e * o - s * n;
                            if (0 === a) return null;
                            var r = (o * (i[0] - t[0][0]) - s * (i[1] - t[0][1])) / a,
                                h = (e * (i[1] - t[0][1]) - n * (i[0] - t[0][0])) / a;
                            return 0 > r || 0 > h || r + h > 1 ? null : [r, h]
                        }
                    }, i !== void 0 && (i.exports = e)
                })()
            }, {}
        ],
        3: [
            function(t, i) {
                function e(t) {
                    this.options = t, this.isTouchDevice = "ontouchstart" in window || "onmsgesturechange" in window, this.isIphoneSafari = /iphone|ipod/i.test(navigator.userAgent.toLowerCase()), this.isIpadSafari = /ipad/i.test(navigator.userAgent.toLowerCase()), this.isAndroid = /Android/i.test(navigator.userAgent.toLowerCase()), this.$win = $(window), this.$bod = $("body"), this.$scrollWrap = this.$bod.find(".scroll-wrap"), this.$dom = this.$bod.find("section"), this.$background = this.$bod.find("#background"), this.$nav = this.$bod.find("nav"), this.dom = this.scanDom(), this.height = window.innerHeight, this.width = window.innerWidth, this.scrollDelta = 0, this.scrollTop = this.$win.scrollTop(), this.worlds = {}, this.scrollTime = 1.4, this.scrollDistance = 440, this.scrollPush = 0, this.delta = 0, this.timer, this.touchMoveAmount = {
                        delta: 0
                    }, this.isTouchDevice && this.$bod.addClass("touch-device"), (this.isIphoneSafari || this.isIpadSafari) && this.$bod.addClass("mobile-safari"), this.isIphoneSafari && this.$bod.addClass("static-layout"), this.autoScroll = this.isIpadSafari ? !1 : !0
                }
                var s = t("./util.js"),
                    n = t("./nav.js"),
                    o = t("./scroller.js"),
                    a = t("./shadow_caster.js");
                e.prototype = {
                    init: function(t) {
                        this.worlds = t, this.getDomHeight(), $("#background").css({
                            height: this.dom[this.dom.length - 1].bottomEdge + "px"
                        }), this.timelineLength = this.findTime(this.dom[this.dom.length - 1].bottomEdge), this.timeLine = new TimelineMax({
                            paused: !0,
                            useFrames: !0
                        }), this.addTweens(), this.setup(), this.bindEvents(), n.init(this.dom), this.isIphoneSafari && (this.$win.scrollTop(0), this.$bod.find(".intro").css({
                            height: this.height + "px"
                        })), this.shadowCaster = new a
                    },
                    addTweens: function() {
                        if (this.timeLine.to("body", this.timelineLength), !this.isIphoneSafari) {
                            this.timeLine.add(TweenLite.to(".arrow", .052, {
                                opacity: 0
                            }), 0), this.timeLine.add(TweenLite.to("#plax", 2.5, {
                                y: .75 * -this.height
                            }), 0), this.timeLine.add(TweenLite.to("#plax", 1, {
                                opacity: 0
                            }), .25);
                            var t = TweenMax.staggerTo(".info .reveal li", .15, {
                                    opacity: 1
                                }, .05, function() {
                                    this.timeline.remove(t)
                                }),
                                i = TweenMax.staggerTo(".col-fourth", .15, {
                                    opacity: 1
                                }, .05, function() {
                                    this.timeline.remove(i)
                                }),
                                e = TweenMax.staggerTo(".col-fourth h1", .25, {
                                    top: 0,
                                    ease: Circ.easeOut
                                }, .05, function() {
                                    this.timeline.remove(e)
                                }),
                                s = TweenMax.staggerTo(".col-fourth p", .25, {
                                    top: 0,
                                    ease: Circ.easeOut
                                }, .05, function() {
                                    this.timeline.remove(s)
                                }),
                                n = TweenMax.staggerTo(".col-left", .13, {
                                    opacity: 1
                                }, .05, function() {
                                    this.timeline.remove(n)
                                }),
                                o = TweenMax.staggerTo(".col-right", .15, {
                                    opacity: 1,
                                    right: 0,
                                    ease: Back.easeOut
                                }, .06, function() {
                                    this.timeline.remove(o)
                                });
                            this.timeLine.add(t, .96), this.timeLine.add(i, 1.88), this.timeLine.add(e, 1.98), this.timeLine.add(s, 1.98), this.timeLine.add(n, 2.86), this.timeLine.add(o, 2.86);
                            var a = {
                                    a: "rgba(83,163,186,1)",
                                    b: "rgba(83,163,186,0)"
                                },
                                r = .5,
                                h = .5,
                                c = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()) ? "-moz-" : /webkit/.test(navigator.userAgent.toLowerCase()) ? "-webkit-" : /msie/.test(navigator.userAgent.toLowerCase()) ? "-ms-" : /opera/.test(navigator.userAgent.toLowerCase()) ? "-o-" : "",
                                l = this,
                                d = function() {
                                    l.$nav.css({
                                        backgroundImage: c + "linear-gradient(top," + a.a + " 35%, " + a.b + ")"
                                    })
                                };
                            this.timeLine.add(TweenLite.to("#background", r, {
                                backgroundColor: "rgba(67,67,67,1)"
                            }), 1 + h), this.timeLine.add(TweenLite.to(a, r, {
                                colorProps: {
                                    a: "rgba(67,67,67,1)",
                                    b: "rgba(67,67,67,0)"
                                },
                                onUpdate: d
                            }), 1 + h), this.timeLine.add(TweenLite.to("#background", r, {
                                backgroundColor: "rgba(187,72,54,1)"
                            }), 2 + h), this.timeLine.add(TweenLite.to(a, r, {
                                colorProps: {
                                    a: "rgba(187,72,54,1)",
                                    b: "rgba(187,72,54,0)"
                                },
                                onUpdate: d
                            }), 2 + h), this.timeLine.add(TweenLite.to("#background", r, {
                                backgroundColor: "rgba(172,172,171,1)"
                            }), 3 + h), this.timeLine.add(TweenLite.to(a, r, {
                                colorProps: {
                                    a: "rgba(172,172,171,1)",
                                    b: "rgba(172,172,171,0)"
                                },
                                onUpdate: d
                            }), 3 + h), this.timeLine.add(TweenLite.to("#background", r, {
                                backgroundColor: "rgba(46,69,81,1)"
                            }), 4 + h), this.timeLine.add(TweenLite.to(a, r, {
                                colorProps: {
                                    a: "rgba(46,69,81,1)",
                                    b: "rgba(46,69,81,0)"
                                },
                                onUpdate: d
                            }), 4 + h), this.timeLine.add(TweenLite.to(this.options.base, r, {
                                colorProps: {
                                    baseColor: "rgb(13, 101, 127)"
                                }
                            }), 0 + h), this.timeLine.add(TweenLite.to(this.options.base, r, {
                                colorProps: {
                                    baseColor: "rgb(44, 44, 44)"
                                }
                            }), 1 + h), this.timeLine.add(TweenLite.to(this.options.base, r, {
                                colorProps: {
                                    baseColor: "rgb(153, 38, 20)"
                                }
                            }), 2 + h), this.timeLine.add(TweenLite.to(this.options.base, r, {
                                colorProps: {
                                    baseColor: "rgb(136, 136, 136)"
                                }
                            }), 3 + h), this.timeLine.add(TweenLite.to(this.options.base, r, {
                                colorProps: {
                                    baseColor: "rgb(15, 36, 42)"
                                }
                            }), 4 + h)
                        }
                        this.isTouchDevice || (this.timeLine.add(TweenLite.to(this.options.back, .5, {
                            globalAlpha: .9
                        }), .5), this.timeLine.add(TweenLite.to(this.options.middle, .5, {
                            globalAlpha: .3
                        }), .5), this.timeLine.add(TweenLite.to(this.options.front, .5, {
                            globalAlpha: .9
                        }), .5), this.timeLine.add(TweenLite.to(this.options.base, 1, {
                            spreadProgress: 1
                        }), 0), this.timeLine.add(TweenLite.to(this.options.mast, 1, {
                            minOpacity: 0
                        }), .25), this.timeLine.add(TweenLite.to(this.options.mast, 1, {
                            maxOpacity: 0
                        }), .25), this.timeLine.add(TweenLite.to(this.options.mast, 1, {
                            minSpeed: 1
                        }), .25), this.timeLine.add(TweenLite.to(this.options.mast, 1, {
                            maxSpeed: 2
                        }), .25), this.timeLine.add(TweenLite.to(this.options.mast, .1, {
                            followPath: 0
                        }), 0), this.timeLine.add(TweenLite.to(this.options.back, .1, {
                            maxTriangleOpacity: .05
                        }), 1), this.timeLine.add(TweenLite.to(this.options.base, 1, {
                            lineOpacity: .75
                        }), .55), this.timeLine.add(TweenLite.to(this.options.back, 1.3, {
                            globalAlpha: .4
                        }), 1), this.timeLine.add(TweenLite.to(this.options.middle, 1, {
                            globalAlpha: .9
                        }), 1.75), this.timeLine.add(TweenLite.to(this.options.middle, 2.75, {
                            maxSize: .5
                        }), .5), this.timeLine.add(TweenLite.to(this.options.middle, 2.5, {
                            maxLineLength: 200
                        }), .65), this.timeLine.add(TweenLite.to(this.options.middle, 3.75, {
                            minTriangleOpacity: 0
                        }), 2), this.timeLine.add(TweenLite.to(this.options.middle, 3.75, {
                            maxTriangleOpacity: .25
                        }), 2), this.timeLine.add(TweenLite.to(this.options.middle, 1.5, {
                            repelRadius: 40
                        }), 2.5), this.timeLine.add(TweenLite.to(this.options.middle, 1, {
                            maxLineLength: 500
                        }), 4.65), this.timeLine.add(TweenLite.to(this.options.middle, 1.5, {
                            repelRadius: 90
                        }), 4.3), this.timeLine.add(TweenLite.to(this.options.middle, 1.5, {
                            minArea: 2e4
                        }), 4.2), this.timeLine.add(TweenLite.to(this.options.middle, 1.5, {
                            maxArea: 2e4
                        }), 4.2), this.timeLine.add(TweenLite.to(this.options.middle, 1.5, {
                            minDepth: 2e4
                        }), 4.2), this.timeLine.add(TweenLite.to(this.options.middle, 1.5, {
                            maxDepth: 2e4
                        }), 4.2), this.timeLine.add(TweenLite.to(this.options.middle, 1.5, {
                            minAngle: 2
                        }), 4.3), this.timeLine.add(TweenLite.to(this.options.back, 1.5, {
                            globalAlpha: .2
                        }), 4.2), this.timeLine.add(TweenLite.to(this.options.middle, 1.5, {
                            globalAlpha: .6
                        }), 4.2))
                    },
                    setup: function(t) {
                        t && (this.options.base = t), this.dom = this.scanDom(), this.getDomHeight(), this.baseWander = this.options.base.wander, this.baseMinSpeed = this.options.base.minSpeed, this.baseMaxSpeed = this.options.base.maxSpeed, this.mastMinSpeed = this.options.mast.minSpeed, this.mastMaxSpeed = this.options.mast.maxSpeed, this.updateScroll()
                    },
                    update: function() {},
                    scanDom: function() {
                        var t = this,
                            i = [];
                        return this.$dom.each(function(e) {
                            var s = $(this),
                                n = s.offset().top;
                            0 == e && (n = 0), e == t.$dom.length - 1 && (n -= 120);
                            var o = s.outerHeight(),
                                a = n + s.outerHeight();
                            e == t.$dom.length - 2 && (o -= 120, a -= 120), i[e] = {
                                topEdge: n,
                                height: o,
                                bottomEdge: a
                            }
                        }), i
                    },
                    getDomHeight: function() {
                        this.domHeight = this.dom[this.dom.length - 1].bottomEdge
                    },
                    updateScroll: function() {
                        this.scrollTop = this.$win.scrollTop();
                        var t = this.scrollTop / (this.domHeight - this.$win.height()),
                            i = this.findTime(this.scrollTop),
                            t = s.constrain(i / this.timelineLength, 0, 1);
                        this.timeLine.progress(t).pause(), n.update(i, this.dom), this.scrollTop >= this.$win.height() ? (this.$background.css({
                            top: ""
                        }), this.$background.addClass("sticky"), this.$nav.addClass("sticky"), this.worlds.mastWorld && this.worlds.mastWorld.pause()) : (this.$background.hasClass("sticky") && (this.$background.removeClass("sticky"), this.$background[0].style.display = "none", this.$background[0].offsetHeight, this.$background[0].style.display = "block"), this.$nav.removeClass("sticky"), this.$nav.css({
                            background: "transparent !important"
                        }), this.worlds.mastWorld && this.worlds.mastWorld.play()), this.scrollTop >= this.$win.height() / 2 ? this.worlds.contentWorlds && $.each(this.worlds.contentWorlds, function() {
                            this.play()
                        }) : this.worlds.contentWorlds && $.each(this.worlds.contentWorlds, function() {
                            this.pause()
                        })
                    },
                    findTime: function(t) {
                        for (var i, e, s, n = 0; this.dom.length > n; n++) i = this.dom[n], i.bottomEdge >= t && t >= this.dom[n].topEdge && (e = (t - i.topEdge) / i.height, s = n + e);
                        return s
                    },
                    findScroll: function(t) {
                        for (var i = 0, e = 0; t - e > 1;) e++;
                        for (var n = e - 1; n >= 0; n--) i += this.dom[n].height;
                        return i += s.map(t - e, 0, 1, 0, this.dom[e].height)
                    },
                    updateMouse: function(t) {
                        (this.isIphoneSafari || this.isIpadSafari) && t.preventDefault();
                        var i = -t.originalEvent.deltaY / 40 || t.originalEvent.wheelDeltaY / 80;
                        this.handleScrollPush(i)
                    },
                    updateTouch: function(t) {
                        var i = -1 * s.map(t, 0, 1e3, 0, 10);
                        this.touchMoveAmount.delta = i, this.handleScrollPush(i)
                    },
                    handleScrollPush: function(t, i) {
                        var e, n = t || 0,
                            o = i || 1,
                            a = this.$win.scrollTop(),
                            r = (a - parseInt(n * this.scrollDistance * o), this.baseMaxSpeed - this.baseMinSpeed, Math.abs(n)),
                            h = s.map(r, 0, 30, 0, 1e3),
                            c = 1;
                        0 > n && (c = -1), h = s.constrain(h, 0, 40), h *= this.options.base.scrollAcceleration, e = 0 + h * c, this.options.base.spreadDelta = e, this.options.front.flow = s.map(e, 0, 100, 0, 28), this.options.middle.flow = s.map(e, 0, 100, 0, 20), this.options.back.flow = s.map(e, 0, 100, 0, 10), this.options.base.minSpeed = this.baseMinSpeed + h, this.options.base.maxSpeed = this.baseMaxSpeed + h, this.options.mast.minSpeed = this.mastMinSpeed + h, this.options.mast.maxSpeed = this.mastMaxSpeed + h
                    },
                    bindEvents: function() {
                        var t = this,
                            i = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        if (this.$win.on("scroll", function(i) {
                            0 == t.autoScroll && i.preventDefault(), t.isIphoneSafari || t.updateScroll(i)
                        }), this.$win.on(i, function(i) {
                            clearTimeout(t.timer), t.timer = setTimeout(function() {
                                t.handleScrollPush(0)
                            }, 150), t.updateMouse(i)
                        }), this.$win.on("resize", function() {
                            t.height = window.innerHeight, t.width = window.innerWidth, t.dom = t.scanDom(), t.getDomHeight(), t.updateScroll(), 360 > window.innerHeight ? (t.$bod.find(".intro").css({
                                height: "400px"
                            }).addClass("short"), t.$bod.find(".root").css({
                                top: "400px"
                            }), t.$bod.find("#background").css({
                                top: "400px"
                            })) : (t.$bod.find(".intro").css({
                                height: t.height + "px"
                            }).removeClass("short"), t.$bod.find(".root").css({
                                top: ""
                            }), t.$bod.find("#background").css({
                                top: ""
                            }))
                        }), this.$win.on("deviceorientation", function(i) {
                            t.isTouchDevice && t.shadowCaster.onDeviceMove(i)
                        }), this.$win.on("mousemove", function(i) {
                            t.shadowCaster.onMouseMove(i)
                        }), this.isIpadSafari) {
                            var e = new o(".root");
                            this.$win.on("touchstart", function(i) {
                                0 == t.autoScroll && (i.preventDefault(), e.onTouchStart(i.originalEvent))
                            }), this.$win.on("touchmove", function(i) {
                                0 == t.autoScroll && (i.preventDefault(), e.onTouchMove(i.originalEvent))
                            }), this.$win.on("touchend", function(i) {
                                0 == t.autoScroll && (i.preventDefault(), e.onTouchEnd(i.originalEvent))
                            })
                        }
                    }
                }, i.exports = e
            }, {
                "./nav.js": 8,
                "./scroller.js": 12,
                "./shadow_caster.js": 13,
                "./util.js": 14
            }
        ],
        4: [
            function(t, i) {
                function e() {
                    this.$bod = $("body"), this.$el = this.$bod.find(".interact");
                    var t = '<div class="hack-bg"><img src="img/h.png"><img src="img/a.png"><img src="img/c.png"><img src="img/k.png"></div>';
                    this.$el.append(t)
                }
                i.exports = e
            }, {}
        ],
        5: [
            function(t) {
                function i() {
                    return !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
                }
                var e = $("body"),
                    s = t("./manager.js");
                if (360 > window.innerHeight && (e.find(".intro").css({
                    height: "400px"
                }).addClass("short"), e.find(".root").css({
                    top: "400px"
                }), e.find("#background").css({
                    top: "400px"
                })), !i()) {
                    var n = $("img"),
                        o = /.*\.svg$/,
                        a = 0;
                    for (a; n.length > a; a++) {
                        var r = n[a].attr("src");
                        r.match(o) && n[a].attr("src", r.slice(0, -3) + "png")
                    }
                }
                var h = new s;
                h.setup(), h.go(), $(function() {
                    e.addClass("script"), FastClick.attach(document.body)
                })
            }, {
                "./manager.js": 6
            }
        ],
        6: [
            function(t, i) {
                function e() {}

                function s() {}

                function n() {}

                function o() {}

                function a() {}

                function r() {
                    this.isTouchDevice = "ontouchstart" in window || "onmsgesturechange" in window, this.engine = new c(y), this.tick = 0, this.worlds = [];
                    var t = new Image;
                    t.src = "img/particle.png", this.isTouchDevice || (this.mastWorld = new h("#mast-canvas", g, t), this.contentWorlds = {
                        front: new h("#content-canvas-front", f, t),
                        middle: new h("#content-canvas-middle", v, t),
                        back: new h("#content-canvas-back", x, t)
                    }, navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && delete this.contentWorlds.back), this.collectWorlds()
                }
                var h = t("./world.js"),
                    c = t("./engine.js"),
                    l = 120,
                    d = window.innerWidth / l,
                    u = window.innerHeight / l,
                    p = d * u;
                e.prototype = {
                    emitter: "emitSpread",
                    background: [27, 56, 72, 0],
                    baseColor: "rgb(23, 111, 137)",
                    globalAlpha: 0,
                    amount: _.constrain(p, 0, 125),
                    minSpeed: .8,
                    maxSpeed: 2,
                    minSize: .1,
                    maxSize: 2,
                    minOpacity: 0,
                    maxOpacity: .75,
                    showHex: !1,
                    hexAttractionRadius: 3,
                    hexBorderWidth: 15,
                    spreadCompulsion: !1,
                    spreadDelta: 0,
                    spreadProgress: 0,
                    wander: .8,
                    wanderRadius: .08,
                    wanderChange: .4,
                    wanderDistance: 10,
                    doFollow: !0,
                    followPath: 0,
                    doRepel: !0,
                    repel: .2,
                    repelRadius: 60,
                    avoidCenter: 0,
                    avoidCenterRadius: window.innerWidth / 3,
                    scrollAcceleration: 1.25,
                    flow: 0,
                    drawLines: !0,
                    maxLineLength: 10,
                    lineOpacity: .23,
                    drawTriangles: !0,
                    minArea: 3e3,
                    maxArea: 5e3,
                    minDepth: 3e3,
                    maxDepth: 5e3,
                    minTriangleOpacity: 0,
                    maxTriangleOpacity: 0,
                    minAngle: 20,
                    globalBlur: !1,
                    globalBlurAmount: 2
                };
                var m = new e;
                s.prototype = m;
                var g = new s;
                g.amount = Math.floor(.5 * m.amount), g.followPath = .0015, g.baseColor = "rgb(255, 255, 255)", g.repelRadius = 1, g.minSpeed = 1.75, g.maxSpeed = 4.5, g.spreadCompulsion = !0, g.minOpacity = 0, g.maxOpacity = .8, g.minSize = .5, g.maxSize = 2, g.maxLineLength = 20, g.globalAlpha = .9, g.doFollow = !0, g.drawTriangles = !1, n.prototype = m;
                var f = new n;
                f.amount = Math.floor(.35 * m.amount), f.baseColor = "rgb(255, 255, 255)", f.minOpacity = .1, f.maxOpacity = .8, f.minSize = .5, f.maxSize = 1.5, f.drawLines = !1, f.drawTriangles = !1, f.doRepel = !1, o.prototype = m;
                var v = new o;
                v.amount = Math.floor(.8 * m.amount), v.globalAlpha = .3, v.repelRadius = 30, a.prototype = m;
                var x = new a;
                x.amount = Math.floor(.7 * m.amount), x.maxLineLength = 90, x.minOpacity = 0, x.maxOpacity = 0, x.minArea = 2e3, x.maxArea = 2e3, x.minDepth = 500, x.maxDepth = 500, x.minTriangleOpacity = 0, x.maxTriangleOpacity = 0;
                var y = {
                    base: m,
                    mast: g,
                    front: f,
                    middle: v,
                    back: x
                };
                r.prototype = {
                    collectWorlds: function() {
                        this.worlds.push(this.mastWorld);
                        for (w in this.contentWorlds) this.worlds.push(this.contentWorlds[w])
                    },
                    setup: function() {
                        if (!this.isTouchDevice)
                            for (var t = this.worlds.length - 1; t >= 0; t--)
                                if (2 == t) {
                                    var i = !0;
                                    this.worlds[t].setup(i)
                                } else this.worlds[t].setup();
                        this.engine.init({
                            mastWorld: this.mastWorld,
                            contentWorlds: this.contentWorlds
                        })
                    },
                    go: function() {
                        if (!this.isTouchDevice) {
                            var t = this,
                                i = _.requestAnimFrame();
                            (function e() {
                                for (var s = t.worlds.length - 1; s >= 0; s--) t.worlds[s].draw(), t.worlds[s].tick++;
                                i(e), t.tick++
                            })()
                        }
                    }
                }, i.exports = r
            }, {
                "./engine.js": 3,
                "./world.js": 16
            }
        ],
        7: [
            function(t, i) {
                function e(t, i) {
                    this.c = t, this.el = t.el, this.ctx = t.ctx, this.buffer = i, this.smallestArea = 99999, this.greatestArea = 0
                }
                var s = t("./util.js"),
                    n = (t("./vec2.js"), t("./delaunay.js"));
                e.prototype = {
                    update: function(t, i, e) {
                        this.options = t || {}, this.particles = i, 0 == e % 1 && (this.triangles = n.triangulate(this.particles, "location"))
                    },
                    draw: function() {
                        this.ctx.strokeStyle = "rgba(" + this.particles[0].rgb[1] + ", " + this.particles[0].rgb[2] + "," + this.particles[0].rgb[3] + "," + this.options.lineOpacity + ")", this.ctx.lineWidth = .5;
                        for (var t = this.triangles, i = [], e = [], n = this.options.minArea, o = this.options.maxArea, a = this.options.minDepth, r = this.options.maxDepth, h = this.options.minTriangleOpacity, c = this.options.maxTriangleOpacity, l = this.options.minAngle, d = t.length - 1; d >= 0; d--) {
                            var u, p, m, g, f, w, i = [],
                                v = {
                                    x: this.particles[t[d]].location.x,
                                    y: this.particles[t[d]].location.y
                                };
                            d--;
                            var x = {
                                x: this.particles[t[d]].location.x,
                                y: this.particles[t[d]].location.y
                            };
                            d--;
                            var y = {
                                x: this.particles[t[d]].location.x,
                                y: this.particles[t[d]].location.y
                            };
                            u = s.dist(v.x, v.y, x.x, x.y), p = s.dist(x.x, x.y, y.x, y.y), m = s.dist(y.x, y.y, v.x, v.y), i.push(s.findAngle(v, x, y)), i.push(s.findAngle(x, v, y)), i.push(s.findAngle(x, y, v)), w = s.min(i) * (180 / Math.PI), g = Math.abs((v.x * (x.y - y.y) + x.x * (y.y - v.y) + y.x * (v.y - x.y)) / 2), e.push(g), f = 0, n >= g && g >= n - a && (f = s.map(g, n - a, n, h, c)), g >= n && o >= g && (f = c), g >= o && o + r >= g && (f = s.map(g, o + r, o, h, c)), this.options.drawTriangles && (u > 20 || p > 20 || m > 20) && w > l && g && (this.ctx.beginPath(), this.ctx.fillStyle = "rgba(255, 255, 255, " + f + ")", this.ctx.moveTo(v.x, v.y), this.ctx.lineTo(x.x, x.y), this.ctx.lineTo(y.x, y.y), this.ctx.fill(), this.ctx.closePath()), this.options.drawLines && this.options.maxLineLength > (u || p || m) && (this.ctx.beginPath(), this.ctx.moveTo(v.x, v.y), this.ctx.lineTo(x.x, x.y), this.ctx.lineTo(y.x, y.y), this.ctx.closePath(), this.ctx.stroke())
                        }
                    }
                }, i.exports = e
            }, {
                "./delaunay.js": 2,
                "./util.js": 14,
                "./vec2.js": 15
            }
        ],
        8: [
            function(t, i) {
                var e, s = $("body"),
                    n = s.find("nav"),
                    o = s.find(".nav-controls"),
                    a = n.find(".container"),
                    r = n.find(".nav-content"),
                    h = r.find("li"),
                    c = {
                        height: window.innerHeight + "px"
                    },
                    l = {
                        height: "0px"
                    };
                e = {
                    active: 0,
                    dom: [],
                    init: function(t) {
                        this.dom = t, o.click(function() {
                            var t = $("body").scrollTop(),
                                i = $("html").scrollTop();
                            isBodyLess = window.innerHeight > t, isHtmlLess = window.innerHeight > i, isBodyLess && t > 0 && 0 == i ? TweenLite.to($("body"), .4, {
                                scrollTop: window.innerHeight,
                                onComplete: e.toggleNav,
                                ease: Expo.easeOut
                            }) : isHtmlLess && i > 0 && 0 == t ? TweenLite.to($("html"), .4, {
                                scrollTop: window.innerHeight,
                                onComplete: e.toggleNav,
                                ease: Expo.easeOut
                            }) : e.toggleNav()
                        }), h.find("a").click(function(t) {
                            if (!$(t.target).hasClass("nav-out")) {
                                t.preventDefault();
                                var i = $(t.target),
                                    s = i.parent();
                                if (isActive = s.hasClass("active"), href = i.attr("href"), !isActive) {
                                    h.removeClass("active"), s.addClass("active"), n.hasClass("open") && e.toggleNav();
                                    var o = $(href).find(".content-center").offset().top - .18 * window.innerHeight;
                                    TweenLite.to($("body, html"), .8, {
                                        scrollTop: o,
                                        ease: Expo.easeOut
                                    })
                                }
                            }
                        })
                    },
                    toggleNav: function() {
                        c = {
                            height: window.innerHeight + "px"
                        }, n.hasClass("open") ? a.css(l) : a.css(c), s.toggleClass("overlay"), n.toggleClass("open")
                    },
                    update: function(t) {
                        var i = Math.floor(t);
                        i != this.active && (h.removeClass("active"), $(h[i - 1]).addClass("active"), this.active = i)
                    }
                }, i.exports = e
            }, {}
        ],
        9: [
            function(t, i) {
                function e(t, i, e, s, n) {
                    this.c = t, this.el = t.el, this.ctx = t.ctx, this.options = i || {}, this.emitter = this.options.emitter, this.path = e, this.buffer = s, this.particles = [], this.randList = [], this.fillRandList(), this.debug = n, this.init(), console.log(this.buffer)
                }
                var s = t("./particle.js"),
                    n = t("./vec2.js"),
                    o = (t("./delaunay.js"), t("./mesh.js"));
                e.prototype = {
                    fillRandList: function() {
                        for (var t = 3e3; t >= 0; t--) this.randList[t] = Math.random()
                    },
                    addParticle: function() {
                        this.particles.push(new s(this.c, this.origin))
                    },
                    applyForce: function(t) {
                        for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].applyForce(t)
                    },
                    applyRepeller: function(t) {
                        for (var i = this.particles.length - 1; i >= 0; i--) {
                            var e = this.particles[i],
                                s = t.repel(e);
                            e.applyForce(s)
                        }
                    },
                    init: function() {
                        this.mesh = new o(this.c, this.buffer), this.emit()
                    },
                    emit: function() {
                        var t = this.options.amount,
                            i = new n;
                        if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && (t /= 1.75), "emitCenter" == this.emitter)
                            for (var e = 0; t > e; e++) {
                                var o = this.randomCoordsInACircle(window.innerWidth / 2, window.innerHeight / 2 - 110, 120);
                                i.x = o.x, i.y = o.y;
                                var a = new s(this.c, i, this.options, this.sprite);
                                this.particles.push(a)
                            }
                        if ("emitSpread" == this.emitter)
                            for (var e = 0; t > e; e++) {
                                i.x = _.random(0, window.innerWidth), i.y = _.random(0, window.innerHeight);
                                var a = new s(this.c, i, this.options, this.sprite);
                                0 == e && this.debug && (a.debug = !0), this.particles.push(a)
                            }
                    },
                    randomCoordsInACircle: function(t, i, e) {
                        var s = e * Math.sqrt(Math.random()),
                            n = 2 * Math.PI * Math.random();
                        return {
                            angle: n,
                            x: s * Math.cos(n) + t,
                            y: s * Math.sin(n) + i
                        }
                    },
                    run: function(t) {
                        for (var i = this.particles.length - 1; i >= 0; i--) {
                            var e = this.particles[i];
                            e.opts = this.options, e.applyBehaviors(this.particles, this.path), this.ctx.beginPath(), e.run(t), this.ctx.closePath(), e.isDead() && this.particles.splice(i, 1)
                        }(this.options.drawTriangles || this.options.drawLines) && (this.mesh.update(this.options, this.particles, t), this.mesh.draw(t))
                    }
                }, i.exports = e
            }, {
                "./delaunay.js": 2,
                "./mesh.js": 7,
                "./particle.js": 10,
                "./vec2.js": 15
            }
        ],
        10: [
            function(t, i) {
                function e(t, i, e) {
                    loc = i || new n, this.opts = e || {}, this.el = t.el, this.ctx = t.ctx, this.location = loc.get(), this.acceleration = new n(0, 0), this.velocity = new n(0, 0), this.random = Math.random(), this.rgbRegex = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/, this.rgb = [], this.mass = 1, this.wanderTheta = 0, this.setup(), this.tick = 0, this.debug = !1, this.spreadLocation = new n(s.random(0, window.innerWidth), s.random(0, window.innerHeight)), this.spreadBegin = !1
                }
                var s = t("./util.js"),
                    n = t("./vec2.js");
                e.prototype = {
                    setup: function() {
                        this.rgb = this.rgbRegex.exec(this.opts.baseColor), this.color = "rgba( " + this.rgb[1] + ", " + this.rgb[2] + ", " + this.rgb[3] + ", " + s.map(this.random, 0, 1, this.opts.minOpacity, this.opts.maxOpacity) + ")" || "rgba(255,255,255,1.0)", this.radius = s.map(this.random, 0, 1, this.opts.minSize, this.opts.maxSize) || s.random(1.75, 1.75), this.lifespan = this.opts.lifeSpan || 1, this.maxForce = this.opts.maxForce || 5, this.maxSpeed = s.random(this.opts.minSpeed, this.opts.maxSpeed) || s.random(.5, 1)
                    },
                    update: function() {
                        if (this.setup(), this.velocity.add(this.acceleration), this.velocity.limit(this.maxSpeed), this.location.add(this.velocity), this.location.y += this.opts.flow, this.opts.spreadCompulsion && this.opts.spreadProgress > 0 && 1 > this.opts.spreadProgress && 0 > this.opts.spreadDelta) {
                            var t = n.sub(this.spreadLocation, this.location),
                                i = t.mag();
                            if (300 > i) {
                                var e = s.map(i, 0, 100, 0, 5);
                                t.setMag(e)
                            } else t.setMag(this.opts.spreadDelta);
                            var o = n.sub(t, this.velocity);
                            o.limit(this.maxForce), this.location.x += o.x, this.location.y += o.y, this.velocity = o
                        }
                        this.acceleration.mult(0)
                    },
                    display: function() {
                        this.ctx.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI, !1), this.ctx.fillStyle = this.color, this.ctx.fill()
                    },
                    run: function(t) {
                        this.tick++, this.update(t), this.borders(), this.display()
                    },
                    applyBehaviors: function(t, i) {
                        var e = (new n(this.el.clientWidth / 2, this.el.clientHeight / 2), this.wander());
                        if (this.opts.doRepel) var s = this.separate(t);
                        if (this.opts.doFollow) var o = this.follow(i);
                        this.opts.doFollow && (o.mult(this.opts.followPath), this.applyForce(o)), s && (s.mult(this.opts.repel), this.applyForce(s)), e.mult(this.opts.wander), this.applyForce(e)
                    },
                    applyForce: function(t) {
                        var i = t.get();
                        i.div(this.mass), this.acceleration.add(i)
                    },
                    flow: function() {
                        var t = new n(0, this.opts.flow / 2);
                        return t
                    },
                    separate: function(t) {
                        for (var i = this.opts.repelRadius, e = new n(0, 0), s = 0, o = t.length - 1; o >= 0; o--) {
                            var a = t[o],
                                r = n.dist(this.location, a.location);
                            if (r > 0 && i > r) {
                                var h = n.sub(this.location, a.location);
                                h.normalize(), h.div(r), e.add(h), s++
                            }
                        }
                        return s > 0 && e.div(s), e.mag() > 0 && (e.normalize(), e.mult(this.maxSpeed), e.sub(this.velocity), e.limit(this.maxForce)), e
                    },
                    avoid: function(t) {
                        var i = this.opts.avoidCenterRadius,
                            e = new n(0, 0),
                            s = n.dist(t, this.location);
                        if (s > 0 && i > s) {
                            var o = n.sub(this.location, t);
                            o.normalize(), o.div(s), e.add(o)
                        }
                        return e.mag() > 0 && (e.normalize(), e.mult(this.maxSpeed), e.sub(this.velocity), e.limit(this.maxForce)), e
                    },
                    seek: function(t) {
                        var i = n.sub(t, this.location),
                            e = i.mag();
                        if (300 > e) {
                            var o = s.map(e, 0, 100, 0, this.maxSpeed);
                            i.setMag(o)
                        } else i.setMag(this.maxSpeed);
                        var a = n.sub(i, this.velocity);
                        return a.limit(this.maxForce), a
                    },
                    wander: function() {
                        var t, i, e = this.opts.wanderRadius,
                            o = this.opts.wanderDistance,
                            a = this.opts.wanderChange,
                            r = this.velocity.get(),
                            h = this.velocity.heading2D();
                        return this.wanderTheta += s.random(-a, a), r.normalize(), r.mult(o), r.add(this.location), t = new n(e * Math.cos(this.wanderTheta + h), e * Math.sin(this.wanderTheta + h)), i = n.add(r, t), this.seek(i)
                    },
                    follow: function(t) {
                        var i = this.velocity.get();
                        i.normalize(), i.mult(5), predictLoc = n.add(this.location, i);
                        var e = null,
                            o = null,
                            a = 1e6;
                        pointsLength = t.points.length;
                        for (var r = 0; pointsLength > r; r++) {
                            var h = t.points[r],
                                c = t.points[(r + 1) % pointsLength],
                                l = this.getNormalPoint(predictLoc, h, c),
                                d = n.sub(c, h);
                            (l.x < s.min(h.x, c.x) || l.x > s.max(h.x, c.x) || l.y < s.min(h.y, c.y) || l.y > s.max(h.y, c.y)) && (l = c.get(), h = t.points[(r + 1) % pointsLength], c = t.points[(r + 2) % pointsLength], d = n.sub(c, h));
                            var u = n.dist(predictLoc, l);
                            a > u && (a = u, e = l, d.normalize(), d.mult(25), o = e.get(), o.add(d))
                        }
                        return a > t.radius ? this.seek(o) : new n(0, 0)
                    },
                    getNormalPoint: function(t, i, e) {
                        var s, o = n.sub(t, i),
                            a = n.sub(e, i);
                        return a.normalize(), a.mult(o.dot(a)), s = n.add(i, a)
                    },
                    borders: function() {
                        var t = this.location,
                            i = 50,
                            e = this.el.clientWidth,
                            s = this.el.clientHeight; - i > t.x && (t.x = e + i), -i > t.y && (t.y = s + i), t.x > e + i && (t.x = -i), t.y > s + i && (t.y = -i)
                    },
                    isDead: function() {
                        return 0 > this.lifespan ? !0 : !1
                    }
                }, i.exports = e
            }, {
                "./util.js": 14,
                "./vec2.js": 15
            }
        ],
        11: [
            function(t, i) {
                function e(t, i) {
                    this.opts = i || {}, this.c = t, this.el = t.el, this.ctx = t.ctx, this.points = [], this.strokeWidth = 15, this.strokeColor = "white", this.update()
                }
                var s = (t("./util.js"), t("./vec2.js"));
                e.prototype = {
                    init: function(t, i, e, s) {
                        this.addPoint(t - 1.25 * e, i - .7 * e - s), this.addPoint(t, i - 1.4 * e - s), this.addPoint(t + 1.25 * e, i - .7 * e - s), this.addPoint(t + 1.25 * e, i + .7 * e - s), this.addPoint(t, i + 1.4 * e - s), this.addPoint(t - 1.25 * e, i + .7 * e - s)
                    },
                    addPoint: function(t, i) {
                        var e = new s(t, i);
                        this.points.push(e)
                    },
                    update: function(t) {
                        this.radius = t
                    },
                    display: function() {
                        var t = this.points.length;
                        this.ctx.beginPath(), this.ctx.moveTo(this.points[0].x, this.points[0].y);
                        for (var i = 1; t > i; i++) {
                            var e = this.points[i];
                            this.ctx.lineTo(e.x, e.y)
                        }
                        this.ctx.closePath(), this.ctx.strokeStyle = this.strokeColor, this.ctx.lineWidth = this.opts.hexBorderWidth, this.ctx.stroke()
                    },
                    resize: function(t, i, e, s) {
                        this.points = [], this.init(t, i, e, s)
                    }
                }, i.exports = e
            }, {
                "./util.js": 14,
                "./vec2.js": 15
            }
        ],
        12: [
            function(t, i) {
                function e(t) {
                    this.element = t, this.startTouchY = 0, this.currentY = 0
                }
                e.prototype = {
                    onTouchStart: function(t) {
                        this.currentY = this.startTouchY = t.touches[0].clientY, this.startTime = t.timeStamp, this.contentStartOffsetY = t.touches[0].pageY - this.startTouchY
                    },
                    onTouchMove: function(t) {
                        this.currentY = t.touches[0].clientY, this.deltaY = this.currentY - this.startTouchY, this.deltaTime = t.timeStamp, this.newY = -this.deltaY + this.contentStartOffsetY, this.animateTo(this.newY)
                    },
                    onTouchEnd: function() {
                        distance = Math.abs(this.currentY - this.startTouchY), distance > 20 && this.doMomentum()
                    },
                    animateTo: function(t) {
                        this.contentOffsetY = t, this.tween = TweenLite.to(window, .01, {
                            scrollTo: {
                                y: t
                            },
                            ease: Power2.easeOut
                        })
                    },
                    getEndVelocity: function() {
                        var t = -1 * (this.currentY - this.startTouchY),
                            i = this.deltaTime - this.startTime,
                            e = t / i,
                            s = 0 > e ? -1 : 1,
                            n = Math.abs(e),
                            o = _.map(n, 0, 2.5, .25, 1);
                        return o *= s
                    },
                    doMomentum: function() {
                        var t = this.getEndVelocity(),
                            i = 0 > t ? 5e-4 : -5e-4,
                            e = -(t * t) / (2 * i),
                            s = .001 * (-t / i),
                            n = this.contentOffsetY + e;
                        this.contentOffsetY = n, this.tween = TweenMax.to(window, s, {
                            scrollTo: {
                                y: n,
                                autoKill: !0
                            },
                            ease: Expo.easeOut,
                            overwrite: 5
                        })
                    }
                }, i.exports = e
            }, {}
        ],
        13: [
            function(t, i) {
                function e() {
                    this.$el = $(".shadow-header span"), this.center = new n(0, 0), this.mouse = new n(0, 0), this.location = new n(0, 0), this.opacity = 0, this.maxDistance = 30, this.updateMaxDist()
                }
                var s = t("./util.js"),
                    n = t("./vec2.js");
                e.prototype = {
                    updateCenter: function() {
                        this.center.x = window.innerWidth / 2, this.center.y = window.innerHeight / 2
                    },
                    updateMaxDist: function() {
                        var t = this.$el.css("font-size");
                        this.maxDistance = .15 * parseInt(t, 10)
                    },
                    onMouseMove: function(t) {
                        this.mouse.x != t.clientX && this.mouse.y != t.clientY && (this.mouse.x = t.clientX, this.mouse.y = t.clientY, this.updateCenter());
                        var i = this.throwShadow();
                        this.location.x = i.target.x, this.location.y = i.target.y, this.opacity = i.opacity, this.draw()
                    },
                    onDeviceMove: function(t) {
                        var i = 3 * t.originalEvent.gamma,
                            e = 3 * t.originalEvent.beta;
                        if (!(-200 > i || i > 200)) {
                            var o = 0 > i ? -1 : 1,
                                a = 0 > e ? -1 : 1,
                                r = Math.abs(i),
                                h = Math.abs(e);
                            h = s.constrain(h, 0, 200);
                            var c = s.map(r, 0, 250, 0, this.maxDistance) * o,
                                l = s.map(h, 0, 200, 0, this.maxDistance) * a,
                                d = new n(c, l),
                                u = n.dist(d, this.center);
                            this.location.x = d.x, this.location.y = d.y, this.opacity = s.map(u, 0, this.maxDistance, 1, .1), this.draw()
                        }
                    },
                    throwShadow: function() {
                        var t = this.getAngle(this.center, this.mouse),
                            i = n.dist(this.mouse, this.center) / 2,
                            e = window.innerWidth / 2;
                        i = s.constrain(i, 0, e);
                        var o = s.map(i, 0, e, 5, this.maxDistance),
                            a = s.map(i, 0, e, 1, .1),
                            r = -Math.cos(t) * o,
                            h = -Math.sin(t) * o,
                            c = {
                                x: r,
                                y: h
                            };
                        return {
                            target: c,
                            opacity: a
                        }
                    },
                    draw: function() {
                        var t = this.location.x + "px, " + this.location.y + "px, 0";
                        this.$el.css({
                            "-webkit-transform": "translate3d(" + t + ")",
                            "-moz-transform": "translate3d(" + t + ")",
                            "-ms-transform": "translate3d(" + t + ")",
                            transform: "translate3d(" + t + ")",
                            opacity: Math.abs(this.opacity)
                        })
                    },
                    getAngle: function(t, i) {
                        var e = i.y - t.x,
                            s = i.x - t.x;
                        return degrees = 180 * Math.atan2(e, s) / Math.PI, radians = degrees * (Math.PI / 180)
                    }
                }, i.exports = e
            }, {
                "./util.js": 14,
                "./vec2.js": 15
            }
        ],
        14: [
            function(t, i) {
                var e = Math.random;
                _ = {
                    requestAnimFrame: function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                            window.setTimeout(t, 1e3 / 60)
                        }
                    },
                    map: function(t, i, e, s, n) {
                        return s + (n - s) * ((t - i) / (e - i))
                    },
                    lerp: function(t, i, e) {
                        return (1 - e) * t + e * i
                    },
                    ease: function(t, i, e, s) {
                        return 1 > (t /= s / 2) ? e / 2 * t * t + i : -e / 2 * (--t * (t - 2) - 1) + i
                    },
                    dist: function(t, i, e, s) {
                        var n = (e - t) * (e - t),
                            o = (s - i) * (s - i);
                        return Math.sqrt(n + o)
                    },
                    constrain: function(t, i, e) {
                        return t > e ? e : i > t ? i : t
                    },
                    random: function() {
                        if (0 === arguments.length) return e();
                        if (1 === arguments.length) return e() * arguments[0];
                        var t = arguments[0],
                            i = arguments[1];
                        return e() * (i - t) + t
                    },
                    max: function() {
                        if (2 === arguments.length) return arguments[0] < arguments[1] ? arguments[1] : arguments[0];
                        var t = 1 === arguments.length ? arguments[0] : arguments;
                        if (!("length" in t && t.length > 0)) throw "Non-empty array is expected";
                        for (var i = t[0], e = t.length, s = 1; e > s; ++s) t[s] > i && (i = t[s]);
                        return i
                    },
                    min: function() {
                        if (2 === arguments.length) return arguments[0] < arguments[1] ? arguments[0] : arguments[1];
                        var t = 1 === arguments.length ? arguments[0] : arguments;
                        if (!("length" in t && t.length > 0)) throw "Non-empty array is expected";
                        for (var i = t[0], e = t.length, s = 1; e > s; ++s) i > t[s] && (i = t[s]);
                        return i
                    },
                    findAngle: function(t, i, e) {
                        var s = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)),
                            n = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                            o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
                        return Math.acos((n * n + s * s - o * o) / (2 * n * s))
                    },
                    cssPrefix: function(t) {
                        var i = {};
                        if (i[t] || "" === i[t]) return i[t] + t;
                        var e = document.createElement("div"),
                            s = ["", "Moz", "Webkit", "O", "ms", "Khtml"];
                        for (var n in s)
                            if (e.style[s[n] + t] !== void 0) return i[t] = s[n], s[n];
                        return !1
                    }
                }, i.exports = _
            }, {}
        ],
        15: [
            function(t, i) {
                function e(t, i) {
                    this.x = t || 0, this.y = i || 0
                }
                e.angleBetween = function(t, i) {
                    return Math.acos(t.dot(i) / (t.mag() * i.mag()))
                }, e.lerp = function(t, i, s) {
                    var n = new e(t.x, t.y);
                    return n.lerp(i, s), n
                }, e.sub = function(t, i) {
                    return new e(t.x - i.x, t.y - i.y)
                }, e.add = function(t, i) {
                    return new e(t.x + i.x, t.y + i.y)
                }, e.dist = function(t, i) {
                    return t.dist(i)
                }, e.prototype = {
                    get: function() {
                        return new e(this.x, this.y)
                    },
                    set: function(t, i) {
                        1 === arguments.length ? this.set(t.x || t[0] || 0, t.y || t[1] || 0) : (this.x = t, this.y = i)
                    },
                    mag: function() {
                        var t = this.x,
                            i = this.y;
                        return Math.sqrt(t * t + i * i)
                    },
                    setMag: function(t, i) {
                        if (void 0 !== i) {
                            var e = t;
                            return e.normalize(), e.mult(i), e
                        }
                        i = t, this.normalize(), this.mult(i)
                    },
                    add: function(t, i) {
                        1 === arguments.length ? (this.x += t.x, this.y += t.y) : (this.x += t, this.y += i)
                    },
                    sub: function(t, i) {
                        1 === arguments.length ? (this.x -= t.x, this.y -= t.y) : (this.x -= t, this.y -= i)
                    },
                    mult: function(t) {
                        "number" == typeof t ? (this.x *= t, this.y *= t) : (this.x *= t.x, this.y *= t.y)
                    },
                    div: function(t) {
                        "number" == typeof t ? (this.x /= t, this.y /= t) : (this.x /= t.x, this.y /= t.y)
                    },
                    dist: function(t) {
                        var i = this.x - t.x,
                            e = this.y - t.y;
                        return Math.sqrt(i * i + e * e)
                    },
                    dot: function(t, i) {
                        return 1 === arguments.length ? this.x * t.x + this.y * t.y : this.x * t + this.y * i
                    },
                    normalize: function() {
                        var t = this.mag();
                        t > 0 && this.div(t)
                    },
                    limit: function(t) {
                        this.mag() > t && (this.normalize(), this.mult(t))
                    },
                    heading: function() {
                        return -Math.atan2(-this.y, this.x)
                    },
                    heading2D: function() {
                        return this.heading()
                    }
                }, i !== void 0 && (i.exports = e)
            }, {}
        ],
        16: [
            function(t, i) {
                function e(t, i) {
                    var e = window.document.querySelector(t),
                        s = document.createElement("canvas");
                    this.options = i || {}, this.tick = 0, this.c = {
                        el: e,
                        ctx: e.getContext("2d")
                    }, this.buffer = {
                        el: s,
                        ctx: s.getContext("2d")
                    }, this.mouse = {
                        x: 0,
                        y: 0,
                        pressed: !1
                    }, this.paused = !1, this.pathSize = 50, this.pathOffset = 180, this.resize(), this.bindEvents(), this.isSafari = function() {
                        var t = navigator.userAgent.toLowerCase();
                        return -1 != t.indexOf("safari") ? t.indexOf("chrome") > -1 ? !1 : !0 : void 0
                    }()
                }
                var s = (t("./util.js"), t("./vec2.js"), t("./background.js")),
                    n = t("./p_system.js"),
                    o = (t("./particle.js"), t("./path.js"));
                e.prototype = {
                    resize: function() {
                        var t = function() {
                            var t = navigator.userAgent.toLowerCase();
                            return -1 != t.indexOf("safari") ? t.indexOf("chrome") > -1 ? !1 : !0 : void 0
                        }();
                        this.devicePixelRatio = window.devicePixelRatio || 1, this.backingStoreRatio = this.c.ctx.webkitBackingStorePixelRatio || this.c.ctx.mozBackingStorePixelRatio || this.c.ctx.msBackingStorePixelRatio || this.c.ctx.oBackingStorePixelRatio || this.c.ctx.backingStorePixelRatio || 1, this.ratio = this.devicePixelRatio / this.backingStoreRatio, this.width = window.innerWidth, this.height = window.innerHeight, this.c.el.width = this.width, this.c.el.height = this.height, t ? this.width > 2e3 && (this.c.el.width = 2e3, this.c.el.height = 1e3, 2e3 / this.width, 1e3 / this.height, $(this.c.el).css({
                            "-webkit-transform-origin": "top left",
                            "transform-origin": "top left",
                            "-webkit-transform": "translate3d(0, 0, 0) scaleX(" + this.width / 2e3 + ") scaleY(" + this.height / 1e3 + ")",
                            transform: "translate3d(0, 0, 0) scaleX(" + this.width / 2e3 + ") scaleY(" + this.height / 1e3 + ")"
                        }), this.width = 2e3, this.height = 1e3) : this.devicePixelRatio !== this.backingStoreRatio && (this.c.ctx.webkitImageSmoothingEnabled && (this.c.ctx.webkitImageSmoothingEnabled = !1), this.c.el.width = this.width * this.ratio, this.c.el.height = this.height * this.ratio, this.c.el.style.width = this.width + "px", this.c.el.style.height = this.height + "px", this.c.ctx.scale(this.ratio, this.ratio))
                    },
                    setup: function() {
                        this.bg = new s(this.c), this.path = new o(this.c, this.options), this.path.init(this.width / 2, this.height / 2, this.pathSize, this.pathOffset), this.pSystem = new n(this.c, this.options, this.path, this.buffer)
                    },
                    draw: function() {
                        this.paused || (this.c.ctx.clearRect(0, 0, this.width, this.height), this.c.ctx.globalAlpha = this.options.globalAlpha, this.path.update(this.options.hexAttractionRadius), this.pSystem.run(this.tick), this.options.showHex && this.path.display())
                    },
                    bindEvents: function() {
                        var t = this;
                        $(this.c.el).on("mousemove", function(i) {
                            t.mouse.x = i.clientX, t.mouse.y = i.clientY
                        }), $(this.c.el).on("mousedown", function() {
                            t.mouse.pressed = !1
                        }), $(this.c.el).on("mouseup", function() {
                            t.mouse.pressed = !0
                        }), $(window).on("resize", function() {
                            console.log(window.innerWidth), t.resize(), t.path.resize(t.width / 2, t.height / 2, t.pathSize, t.pathOffset)
                        })
                    },
                    pause: function() {
                        this.paused = !0
                    },
                    play: function() {
                        this.paused = !1
                    }
                }, i.exports = e
            }, {
                "./background.js": 1,
                "./p_system.js": 9,
                "./particle.js": 10,
                "./path.js": 11,
                "./util.js": 14,
                "./vec2.js": 15
            }
        ]
    }, {}, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);