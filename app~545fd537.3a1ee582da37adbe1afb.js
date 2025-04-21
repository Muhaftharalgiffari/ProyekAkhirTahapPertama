"use strict";
(self["webpackChunkdicoding_story_app"] = self["webpackChunkdicoding_story_app"] || []).push([[703],{

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AboutPage)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AboutPage = /*#__PURE__*/function () {
  function AboutPage() {
    _classCallCheck(this, AboutPage);
  }
  return _createClass(AboutPage, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <section class=\"about-page\">\n        <a href=\"#about-content\" class=\"skip-link\">Langsung ke konten tentang kami</a>\n        \n        <div class=\"about-header\">\n          <div class=\"header-icon\">\n            <i class=\"fas fa-book-open\" style=\"font-family: 'Font Awesome 6 Free';\"></i>\n          </div>\n          <h1>Tentang Map Talers</h1>\n          <p class=\"subtitle\">Platform berbagi cerita dan momen berharga dengan lokasi</p>\n        </div>\n\n        <div class=\"about-content\" id=\"about-content\" tabindex=\"-1\">\n          <div class=\"about-section mission\">\n            <div class=\"section-icon\">\n              <i class=\"fas fa-rocket\" style=\"font-family: 'Font Awesome 6 Free';\"></i>\n            </div>\n            <h2>Misi Kami</h2>\n            <p>Map Talers hadir untuk menghubungkan dan menginspirasi melalui cerita. Kami percaya setiap orang memiliki cerita unik yang layak dibagikan ke dunia.</p>\n          </div>\n\n          <div class=\"about-section features\">\n            <div class=\"section-icon\">\n              <i class=\"fas fa-star\"></i>\n            </div>\n            <h2>Fitur Utama</h2>\n            <div class=\"features-grid\">\n              <div class=\"feature-card\">\n                <i class=\"fas fa-camera\"></i>\n                <h3>Ambil Foto</h3>\n                <p>Abadikan momen spesialmu langsung dari kamera</p>\n              </div>\n              <div class=\"feature-card\">\n                <i class=\"fas fa-map-marker-alt\"></i>\n                <h3>Lokasi</h3>\n                <p>Tandai lokasi ceritamu di peta</p>\n              </div>\n              <div class=\"feature-card\">\n                <i class=\"fas fa-share-alt\"></i>\n                <h3>Bagikan</h3>\n                <p>Bagikan ceritamu dengan komunitas</p>\n              </div>\n              <div class=\"feature-card\">\n                <i class=\"fas fa-heart\"></i>\n                <h3>Inspirasi</h3>\n                <p>Temukan inspirasi dari cerita lain</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"about-section tech\">\n            <div class=\"section-icon\">\n              <i class=\"fas fa-code\"></i>\n            </div>\n            <h2>Teknologi</h2>\n            <div class=\"tech-grid\">\n              <div class=\"tech-card\">\n                <i class=\"fab fa-js\"></i>\n                <h3>JavaScript</h3>\n                <p>Modern JavaScript dengan ES6+</p>\n              </div>\n              <div class=\"tech-card\">\n                <i class=\"fas fa-mobile-alt\"></i>\n                <h3>Responsive</h3>\n                <p>Tampilan responsif di semua perangkat</p>\n              </div>\n              <div class=\"tech-card\">\n                <i class=\"fas fa-map\"></i>\n                <h3>Maps API</h3>\n                <p>Integrasi dengan OpenStreetMap</p>\n              </div>\n              <div class=\"tech-card\">\n                <i class=\"fas fa-server\"></i>\n                <h3>API Integration</h3>\n                <p>REST API dengan fitur lengkap</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"about-section credits\">\n            <div class=\"section-icon\">\n              <i class=\"fas fa-user\"></i>\n            </div>\n            <h2>Dikembangkan Oleh</h2>\n            <div class=\"credits-content\">\n              <h3>Muh. Afthar algiffari</h3>\n              <p class=\"developer-title\">Full Stack Developer</p>\n              <p class=\"developer-description\">\n                Mahasiswa yang bersemangat dalam pengembangan web dan mobile. \n                Berkomitmen untuk menciptakan aplikasi yang bermanfaat dan mudah digunakan.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"about-section version\">\n            <div class=\"section-icon\">\n              <i class=\"fas fa-info-circle\"></i>\n            </div>\n            <h2>Informasi Aplikasi</h2>\n            <div class=\"version-info\">\n              <p><strong>Versi:</strong> 1.0.0</p>\n              <p><strong>Terakhir Diperbarui:</strong> Februari 2024</p>\n              <p><strong>Dibuat untuk:</strong> Submission Dicoding</p>\n            </div>\n          </div>\n        </div>\n\n        <footer class=\"footer\">\n          <div class=\"footer-content\">\n            <div class=\"footer-section\">\n              <h3>Tentang Map Talers</h3>\n              <p>Map Talers adalah platform berbagi cerita yang memungkinkan kamu membagikan pengalaman, inspirasi, dan momen berharga dalam hidupmu kepada dunia.</p>\n            </div>\n            <div class=\"footer-section\">\n              <h3>Menu Utama</h3>\n              <ul class=\"footer-links\">\n                <li><a href=\"#/home\">Beranda</a></li>\n                <li><a href=\"#/add-story\">Tambah Cerita</a></li>\n                <li><a href=\"#/about\">Tentang Kami</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"footer-bottom\">\n            <p>&copy; Map Talers. Dibuat oleh Muh. Afthar algiffari by Dicoding</p>\n          </div>\n        </footer>\n      </section>\n    ");
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function render() {
        return _render.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "afterRender",
    value: function () {
      var _afterRender = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var aboutLink;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Tambahkan kelas active pada link menu About
              aboutLink = document.querySelector('a[href="#/about"]');
              if (aboutLink) {
                aboutLink.classList.add('active');
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function afterRender() {
        return _afterRender.apply(this, arguments);
      }
      return afterRender;
    }()
  }]);
}();


/***/ }),

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(761);
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(351);
/* harmony import */ var _presenters_login_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(636);
/* harmony import */ var _presenters_register_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(262);
/* harmony import */ var _models_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(481);
/* harmony import */ var _models_story_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(542);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }






var _content = /*#__PURE__*/new WeakMap();
var _drawerButton = /*#__PURE__*/new WeakMap();
var _navigationDrawer = /*#__PURE__*/new WeakMap();
var AppManager = /*#__PURE__*/function () {
  function AppManager(_ref) {
    var navigationDrawer = _ref.navigationDrawer,
      drawerButton = _ref.drawerButton,
      content = _ref.content;
    _classCallCheck(this, AppManager);
    _classPrivateFieldInitSpec(this, _content, null);
    _classPrivateFieldInitSpec(this, _drawerButton, null);
    _classPrivateFieldInitSpec(this, _navigationDrawer, null);
    _defineProperty(this, "authModel", null);
    _defineProperty(this, "storyModel", null);
    _classPrivateFieldSet(_content, this, content);
    _classPrivateFieldSet(_drawerButton, this, drawerButton);
    _classPrivateFieldSet(_navigationDrawer, this, navigationDrawer);
    this.authModel = new _models_auth_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A();
    this.storyModel = new _models_story_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A();
    this.authModel.setStoryModel(this.storyModel);
    var token = this.authModel._getToken();
    if (token) {
      _data_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.setToken(token);
    }
    this._initialAppShell();
  }
  return _createClass(AppManager, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      this._setupDrawerButton();
      this._setupLogoutLink();
      this._updateMenu();
    }
  }, {
    key: "_setupDrawerButton",
    value: function _setupDrawerButton() {}
  }, {
    key: "_setupLogoutLink",
    value: function _setupLogoutLink() {
      var _this = this;
      var logoutLink = document.getElementById('logoutLink');
      if (logoutLink) {
        logoutLink.addEventListener('click', /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  _context.next = 3;
                  return _this._handleLogout();
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    }
  }, {
    key: "_handleLogout",
    value: function () {
      var _handleLogout2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var mainContent, notification, _mainContent, _notification;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _classPrivateFieldGet(_content, this).classList.add('fade-out');
              _context3.next = 4;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 150);
              });
            case 4:
              this.authModel.logout();
              _data_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.setToken(null);
              _classPrivateFieldGet(_navigationDrawer, this).classList.remove('open');
              this._updateMenu();
              if (!document.startViewTransition) {
                _context3.next = 13;
                break;
              }
              _context3.next = 11;
              return document.startViewTransition(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      window.location.replace('#/login');
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }))).finished;
            case 11:
              _context3.next = 14;
              break;
            case 13:
              window.location.replace('#/login');
            case 14:
              mainContent = document.querySelector('#main-content');
              if (mainContent) {
                notification = document.createElement('div');
                notification.className = 'notification success fade-in';
                notification.textContent = 'Anda berhasil logout';
                mainContent.insertAdjacentElement('afterbegin', notification);
                setTimeout(function () {
                  notification.classList.add('fade-out');
                  setTimeout(function () {
                    return notification.remove();
                  }, 300);
                }, 3000);
              }
              setTimeout(function () {
                window.location.reload();
              }, 100);
              _context3.next = 24;
              break;
            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](0);
              console.error('Error during logout:', _context3.t0);
              _mainContent = document.querySelector('#main-content');
              if (_mainContent) {
                _notification = document.createElement('div');
                _notification.className = 'notification error fade-in';
                _notification.textContent = 'Terjadi kesalahan saat logout';
                _mainContent.insertAdjacentElement('afterbegin', _notification);
                setTimeout(function () {
                  _notification.classList.add('fade-out');
                  setTimeout(function () {
                    return _notification.remove();
                  }, 300);
                }, 3000);
              }
            case 24:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 19]]);
      }));
      function _handleLogout() {
        return _handleLogout2.apply(this, arguments);
      }
      return _handleLogout;
    }()
  }, {
    key: "_updateMenu",
    value: function _updateMenu() {
      var token = this.authModel._getToken();
      var authMenu = document.getElementById('auth-menu');
      var userMenu = document.getElementById('user-menu');
      var currentPath = window.location.hash.slice(1) || '/';
      var brandLink = document.querySelector('.brand-name');
      var navigationDrawer = document.querySelector('.navigation-drawer');
      if (token) {
        brandLink.href = '#/home';
      } else {
        brandLink.href = '#/login';
      }
      var isAuthPage = currentPath === '/login' || currentPath === '/register';
      if (token) {
        if (authMenu) authMenu.style.display = 'none';
        if (userMenu) userMenu.style.display = 'flex';
        if (navigationDrawer) {
          navigationDrawer.classList.remove('auth-only');
        }
      } else {
        if (authMenu) authMenu.style.display = 'flex';
        if (userMenu) userMenu.style.display = 'none';
        if (navigationDrawer) {
          navigationDrawer.classList.add('auth-only');
        }
        var loginLink = document.getElementById('login-link');
        var registerLink = document.getElementById('register-link');
        if (loginLink && registerLink) {
          if (currentPath === '/login') {
            loginLink.style.display = 'none';
            registerLink.style.display = 'flex';
          } else if (currentPath === '/register') {
            loginLink.style.display = 'flex';
            registerLink.style.display = 'none';
          } else {
            loginLink.style.display = 'flex';
            registerLink.style.display = 'flex';
          }
        }
      }
      document.querySelectorAll('.nav-list a').forEach(function (link) {
        link.classList.remove('active');
      });
      var activeLink = document.querySelector(".nav-list a[href=\"#".concat(currentPath, "\"]"));
      if (activeLink) {
        activeLink.classList.add('active');
      }
      document.body.classList.toggle('auth-page', isAuthPage);
    }
  }, {
    key: "_getPageFromPath",
    value: function _getPageFromPath(path) {
      if (path.startsWith('/map/')) {
        return _routes_routes__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A['/map/:id'];
      }
      return _routes_routes__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[path];
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this2 = this;
        var path, token, pageFactory, page, content, transition, mainContent, notification;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              path = window.location.hash.slice(1).toLowerCase() || '/';
              token = this.authModel._getToken();
              if (!(!token && path !== '/login' && path !== '/register')) {
                _context5.next = 6;
                break;
              }
              window.location.replace('#/login');
              return _context5.abrupt("return");
            case 6:
              if (!(token && (path === '/login' || path === '/register'))) {
                _context5.next = 9;
                break;
              }
              window.location.replace('#/home');
              return _context5.abrupt("return");
            case 9:
              pageFactory = this._getPageFromPath(path);
              if (pageFactory) {
                _context5.next = 13;
                break;
              }
              console.error('No route found for path:', path);
              return _context5.abrupt("return");
            case 13:
              page = pageFactory();
              _context5.next = 16;
              return page.render();
            case 16:
              content = _context5.sent;
              if (!_classPrivateFieldGet(_content, this)) {
                _context5.next = 37;
                break;
              }
              _classPrivateFieldGet(_content, this).classList.add('fade-out');
              _context5.next = 21;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 150);
              });
            case 21:
              if (!document.startViewTransition) {
                _context5.next = 28;
                break;
              }
              transition = document.startViewTransition(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      _classPrivateFieldGet(_content, _this2).innerHTML = content;
                      _classPrivateFieldGet(_content, _this2).classList.remove('fade-out');
                      _classPrivateFieldGet(_content, _this2).classList.add('fade-in');
                      if (!(typeof page.afterRender === 'function')) {
                        _context4.next = 6;
                        break;
                      }
                      _context4.next = 6;
                      return page.afterRender();
                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              })));
              _context5.next = 25;
              return transition.finished;
            case 25:
              _classPrivateFieldGet(_content, this).classList.remove('fade-in');
              _context5.next = 37;
              break;
            case 28:
              _classPrivateFieldGet(_content, this).innerHTML = content;
              _classPrivateFieldGet(_content, this).classList.remove('fade-out');
              _classPrivateFieldGet(_content, this).classList.add('fade-in');
              if (!(typeof page.afterRender === 'function')) {
                _context5.next = 34;
                break;
              }
              _context5.next = 34;
              return page.afterRender();
            case 34:
              _context5.next = 36;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 300);
              });
            case 36:
              _classPrivateFieldGet(_content, this).classList.remove('fade-in');
            case 37:
              if (path === '/login') {
                new _presenters_login_presenter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A(page).init();
              } else if (path === '/register') {
                new _presenters_register_presenter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(page).init();
              }
              this._updateMenu();
              this._setupLogoutLink();
              _context5.next = 47;
              break;
            case 42:
              _context5.prev = 42;
              _context5.t0 = _context5["catch"](0);
              console.error('Error rendering page:', _context5.t0);
              mainContent = document.querySelector('#main-content');
              if (mainContent) {
                notification = document.createElement('div');
                notification.className = 'notification error fade-in';
                notification.textContent = 'Terjadi kesalahan saat memuat halaman';
                mainContent.insertAdjacentElement('afterbegin', notification);
                setTimeout(function () {
                  notification.classList.add('fade-out');
                  setTimeout(function () {
                    return notification.remove();
                  }, 300);
                }, 3000);
              }
            case 47:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 42]]);
      }));
      function renderPage() {
        return _renderPage.apply(this, arguments);
      }
      return renderPage;
    }()
  }, {
    key: "_setupPushNotification",
    value: function () {
      var _setupPushNotification2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this3 = this;
        var registration, permissionPopup, allowButton, blockButton;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(!('serviceWorker' in navigator) || !('PushManager' in window))) {
                _context7.next = 3;
                break;
              }
              console.log('Service Worker atau Push Notification tidak didukung');
              return _context7.abrupt("return");
            case 3:
              if (this.authModel._getToken()) {
                _context7.next = 6;
                break;
              }
              console.log('User belum login, tidak bisa subscribe push notification');
              return _context7.abrupt("return");
            case 6:
              _context7.prev = 6;
              _context7.next = 9;
              return navigator.serviceWorker.register('/service-worker.js');
            case 9:
              registration = _context7.sent;
              console.log('Service Worker berhasil didaftarkan');
              permissionPopup = document.getElementById('notificationPermission');
              allowButton = document.getElementById('allowNotification');
              blockButton = document.getElementById('blockNotification');
              permissionPopup.classList.add('show');
              allowButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var permission, subscription, newSubscription;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      permissionPopup.classList.remove('show');
                      _context6.next = 3;
                      return Notification.requestPermission();
                    case 3:
                      permission = _context6.sent;
                      if (!(permission === 'granted')) {
                        _context6.next = 15;
                        break;
                      }
                      _context6.next = 7;
                      return registration.pushManager.getSubscription();
                    case 7:
                      subscription = _context6.sent;
                      if (subscription) {
                        _context6.next = 15;
                        break;
                      }
                      _context6.next = 11;
                      return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
                      });
                    case 11:
                      newSubscription = _context6.sent;
                      _context6.next = 14;
                      return _this3.authModel.subscribePushNotification(newSubscription);
                    case 14:
                      console.log('Berhasil berlangganan push notification');
                    case 15:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              })));
              blockButton.addEventListener('click', function () {
                permissionPopup.classList.remove('show');
              });
              _context7.next = 22;
              break;
            case 19:
              _context7.prev = 19;
              _context7.t0 = _context7["catch"](6);
              console.error('Error setup push notification:', _context7.t0);
            case 22:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[6, 19]]);
      }));
      function _setupPushNotification() {
        return _setupPushNotification2.apply(this, arguments);
      }
      return _setupPushNotification;
    }()
  }, {
    key: "_urlBase64ToUint8Array",
    value: function () {
      var _urlBase64ToUint8Array2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(base64String) {
        var padding, base64, rawData, outputArray, i;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              padding = '='.repeat((4 - base64String.length % 4) % 4);
              base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
              rawData = window.atob(base64);
              outputArray = new Uint8Array(rawData.length);
              for (i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
              }
              return _context8.abrupt("return", outputArray);
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function _urlBase64ToUint8Array(_x2) {
        return _urlBase64ToUint8Array2.apply(this, arguments);
      }
      return _urlBase64ToUint8Array;
    }()
  }, {
    key: "_setupLoading",
    value: function () {
      var _setupLoading2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var loading, loadingSpinner, loadingText;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              loading = document.querySelector('.loading');
              loadingSpinner = document.querySelector('.loading-spinner');
              loadingText = document.querySelector('.loading-text');
              if (!(!loading || !loadingSpinner || !loadingText)) {
                _context9.next = 6;
                break;
              }
              console.error('Loading elements not found');
              return _context9.abrupt("return");
            case 6:
              this._showLoading = function () {
                var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Memuat...';
                loadingText.textContent = message;
                loading.style.display = 'flex';
                document.body.style.overflow = 'hidden';
              };
              this._hideLoading = function () {
                loading.style.display = 'none';
                document.body.style.overflow = '';
              };
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function _setupLoading() {
        return _setupLoading2.apply(this, arguments);
      }
      return _setupLoading;
    }()
  }, {
    key: "_showNotification",
    value: function () {
      var _showNotification2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(message) {
        var type,
          notification,
          _args10 = arguments;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              type = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : 'success';
              notification = document.querySelector('.notification');
              if (notification) {
                _context10.next = 5;
                break;
              }
              console.error('Notification element not found');
              return _context10.abrupt("return");
            case 5:
              notification.textContent = message;
              notification.className = "notification ".concat(type);
              notification.style.opacity = '1';
              setTimeout(function () {
                notification.style.opacity = '0';
              }, 3000);
            case 9:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function _showNotification(_x3) {
        return _showNotification2.apply(this, arguments);
      }
      return _showNotification;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _context11.next = 3;
              return this._setupDrawerButton();
            case 3:
              _context11.next = 5;
              return this._setupNavigation();
            case 5:
              _context11.next = 7;
              return this._setupPushNotification();
            case 7:
              _context11.next = 9;
              return this._setupViewTransition();
            case 9:
              _context11.next = 11;
              return this._setupSkipToContent();
            case 11:
              _context11.next = 13;
              return this._setupAuth();
            case 13:
              _context11.next = 15;
              return this._setupNotification();
            case 15:
              _context11.next = 17;
              return this._setupLoading();
            case 17:
              _context11.next = 23;
              break;
            case 19:
              _context11.prev = 19;
              _context11.t0 = _context11["catch"](0);
              console.error('Error initializing app:', _context11.t0);
              this._showNotification('Terjadi kesalahan saat memuat aplikasi', 'error');
            case 23:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[0, 19]]);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "_setupNavigation",
    value: function _setupNavigation() {
      var drawerButton = document.getElementById('drawer-button');
      var navigationDrawer = document.getElementById('navigation-drawer');
      if (drawerButton) {
        drawerButton.addEventListener('click', function () {
          navigationDrawer.classList.toggle('active');
        });
      }
      document.addEventListener('click', function (e) {
        if (!e.target.closest('#navigation-drawer') && !e.target.closest('#drawer-button')) {
          navigationDrawer.classList.remove('active');
        }
      });
      var navLinks = document.querySelectorAll('#navigation-drawer a');
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          navigationDrawer.classList.remove('active');
        });
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppManager);

/***/ })

}]);
//# sourceMappingURL=app~545fd537.3a1ee582da37adbe1afb.js.map