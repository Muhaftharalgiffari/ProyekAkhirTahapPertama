"use strict";
(self["webpackChunkdicoding_story_app"] = self["webpackChunkdicoding_story_app"] || []).push([[209],{

/***/ 316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AddStoryPage)
/* harmony export */ });
/* harmony import */ var _models_story_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var AddStoryPage = /*#__PURE__*/function () {
  function AddStoryPage() {
    _classCallCheck(this, AddStoryPage);
    this.videoElement = null;
    this.stream = null;
    this.map = null;
    this.marker = null;
    this.selectedLocation = null;
    this.storyModel = new _models_story_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A();
    this._cleanup = this._cleanup.bind(this);
  }
  return _createClass(AddStoryPage, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <section class=\"add-story-page\">\n        <div class=\"add-story-content\">\n          <h1>Tambah Cerita Baru</h1>\n          \n          <form id=\"addStoryForm\" class=\"story-form\" aria-label=\"Form tambah cerita\">\n            <div class=\"form-group\">\n              <label for=\"description\">Deskripsi Cerita</label>\n              <textarea \n                id=\"description\" \n                name=\"description\" \n                required \n                placeholder=\"Tuliskan ceritamu di sini...\"\n                aria-required=\"true\"\n              ></textarea>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"photo\">Foto</label>\n              <div class=\"camera-container\" role=\"region\" aria-label=\"Kamera\">\n                <video id=\"camera\" playsinline aria-label=\"Preview kamera\" style=\"display: none;\"></video>\n                <div id=\"photoPreview\" class=\"photo-preview\" style=\"display: none;\" role=\"region\" aria-label=\"Preview foto\">\n                  <img id=\"previewImage\" src=\"\" alt=\"Preview foto yang diambil\">\n                </div>\n                <div class=\"camera-controls\">\n                  <button \n                    type=\"button\" \n                    id=\"startCameraBtn\" \n                    class=\"btn btn-secondary\"\n                    aria-label=\"Buka kamera\"\n                  >Buka Kamera</button>\n                  <button \n                    type=\"button\" \n                    id=\"captureBtn\" \n                    class=\"btn btn-secondary\"\n                    aria-label=\"Ambil foto menggunakan kamera\"\n                    style=\"display: none;\"\n                  >Ambil Foto</button>\n                  <button \n                    type=\"button\" \n                    id=\"closeCameraBtn\" \n                    class=\"btn btn-secondary\"\n                    aria-label=\"Tutup kamera\"\n                    style=\"display: none;\"\n                  >Tutup Kamera</button>\n                  <button \n                    type=\"button\" \n                    id=\"retakeBtn\" \n                    class=\"btn btn-secondary\" \n                    style=\"display: none;\"\n                    aria-label=\"Ambil ulang foto\"\n                  >Ambil Ulang</button>\n                </div>\n                <canvas id=\"photoCanvas\" style=\"display: none;\" aria-hidden=\"true\"></canvas>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"map\">Lokasi</label>\n              <div id=\"map\" class=\"map-container\" role=\"region\" aria-label=\"Peta untuk memilih lokasi\"></div>\n              <p class=\"location-info\" id=\"locationInfo\">Klik pada peta untuk memilih lokasi</p>\n            </div>\n\n            <div class=\"form-actions\">\n              <button \n                type=\"submit\" \n                class=\"btn btn-primary\"\n                aria-label=\"Simpan cerita baru\"\n              >Simpan Cerita</button>\n              <a \n                href=\"#/home\" \n                class=\"btn btn-secondary\"\n                aria-label=\"Batal dan kembali ke beranda\"\n              >Batal</a>\n            </div>\n          </form>\n        </div>\n\n        <footer class=\"footer\">\n          <div class=\"footer-content\">\n            <div class=\"footer-section\">\n              <h3>Tentang Map Talers</h3>\n              <p>Map Talers adalah platform berbagi cerita yang memungkinkan kamu membagikan pengalaman, inspirasi, dan momen berharga dalam hidupmu kepada dunia.</p>\n            </div>\n            <div class=\"footer-section\">\n              <h3>Menu Utama</h3>\n              <ul class=\"footer-links\">\n                <li><a href=\"#/home\">Beranda</a></li>\n                <li><a href=\"#/add-story\">Tambah Cerita</a></li>\n                <li><a href=\"#/about\">Tentang Kami</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"footer-bottom\">\n            <p>&copy; Map Talers. Dibuat oleh Muh. Afthar algiffari by Dicoding</p>\n          </div>\n        </footer>\n      </section>\n    ");
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
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this._setupCamera();
              this._setupMap();
              this._setupForm();

              // Tambahkan event listener untuk membersihkan kamera saat berpindah halaman
              window.addEventListener('hashchange', this._cleanup);
              window.addEventListener('beforeunload', this._cleanup);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function afterRender() {
        return _afterRender.apply(this, arguments);
      }
      return afterRender;
    }()
  }, {
    key: "_cleanup",
    value: function _cleanup() {
      // Matikan kamera
      if (this.stream) {
        this.stream.getTracks().forEach(function (track) {
          return track.stop();
        });
        this.stream = null;
      }

      // Hapus event listeners
      window.removeEventListener('hashchange', this._cleanup);
      window.removeEventListener('beforeunload', this._cleanup);
    }
  }, {
    key: "_setupCamera",
    value: function _setupCamera() {
      var _this = this;
      this.videoElement = document.getElementById('camera');
      var startCameraBtn = document.getElementById('startCameraBtn');
      var captureBtn = document.getElementById('captureBtn');
      var closeCameraBtn = document.getElementById('closeCameraBtn');
      var retakeBtn = document.getElementById('retakeBtn');
      var photoPreview = document.getElementById('photoPreview');
      var previewImage = document.getElementById('previewImage');
      var canvas = document.getElementById('photoCanvas');

      // Set fixed dimensions for video and canvas
      var videoWidth = 400;
      var videoHeight = 300;
      this.videoElement.width = videoWidth;
      this.videoElement.height = videoHeight;
      canvas.width = videoWidth;
      canvas.height = videoHeight;

      // Fungsi untuk memastikan video stream dimulai dengan benar
      var startVideoStream = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var stream;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return navigator.mediaDevices.getUserMedia({
                  video: {
                    width: {
                      ideal: videoWidth
                    },
                    height: {
                      ideal: videoHeight
                    }
                  }
                });
              case 3:
                stream = _context3.sent;
                // Stop any existing stream
                if (_this.stream) {
                  _this.stream.getTracks().forEach(function (track) {
                    return track.stop();
                  });
                }

                // Set new stream
                _this.stream = stream;
                _this.videoElement.srcObject = stream;

                // Ensure play() is called after loadedmetadata event
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  // If video is already loaded, play immediately
                  if (_this.videoElement.readyState >= 2) {
                    _this.videoElement.play().then(function () {
                      return resolve();
                    })["catch"](function (err) {
                      return reject(err);
                    });
                  } else {
                    // Otherwise wait for metadata to load
                    _this.videoElement.addEventListener('loadedmetadata', function () {
                      _this.videoElement.play().then(function () {
                        return resolve();
                      })["catch"](function (err) {
                        return reject(err);
                      });
                    }, {
                      once: true
                    });
                  }
                }));
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                console.error('Error accessing camera:', _context3.t0);
                alert('Tidak dapat mengakses kamera. Pastikan Anda memberikan izin akses kamera.');
                throw _context3.t0;
              case 15:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 10]]);
        }));
        return function startVideoStream() {
          return _ref.apply(this, arguments);
        };
      }();

      // Fungsi untuk menutup kamera
      var closeCamera = function closeCamera() {
        if (_this.stream) {
          _this.stream.getTracks().forEach(function (track) {
            return track.stop();
          });
          _this.stream = null;
        }
        _this.videoElement.style.display = 'none';
        captureBtn.style.display = 'none';
        closeCameraBtn.style.display = 'none';
        startCameraBtn.style.display = 'block';
        startCameraBtn.disabled = false;
      };

      // Setup start camera button
      startCameraBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              startCameraBtn.disabled = true;

              // Reset semua tampilan tombol terlebih dahulu
              startCameraBtn.style.display = 'none';
              captureBtn.style.display = 'none';
              closeCameraBtn.style.display = 'none';
              _this.videoElement.style.display = 'none';

              // Tunggu sebentar untuk memastikan UI sudah direset
              _context4.next = 8;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 100);
              });
            case 8:
              _context4.next = 10;
              return startVideoStream();
            case 10:
              // Setelah stream berhasil, tampilkan elemen yang diperlukan
              _this.videoElement.style.display = 'block';
              captureBtn.style.display = 'block';
              closeCameraBtn.style.display = 'block';
              _context4.next = 20;
              break;
            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              console.error('Error starting camera:', _context4.t0);
              alert('Gagal membuka kamera. Silakan coba lagi.');
              closeCamera();
            case 20:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 15]]);
      })));

      // Setup close camera button
      closeCameraBtn.addEventListener('click', closeCamera);

      // Setup capture button
      captureBtn.addEventListener('click', function () {
        var context = canvas.getContext('2d');
        context.drawImage(_this.videoElement, 0, 0, videoWidth, videoHeight);

        // Convert canvas to image and display preview
        var imageData = canvas.toDataURL('image/jpeg');
        previewImage.src = imageData;

        // Show preview and retake button, hide video and capture button
        photoPreview.style.display = 'flex';
        retakeBtn.style.display = 'block';
        _this.videoElement.style.display = 'none';
        captureBtn.style.display = 'none';
        closeCameraBtn.style.display = 'none';

        // Matikan kamera setelah mengambil foto
        if (_this.stream) {
          _this.stream.getTracks().forEach(function (track) {
            return track.stop();
          });
        }
      });

      // Setup retake button
      retakeBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              retakeBtn.disabled = true;

              // Hide preview and show camera controls
              photoPreview.style.display = 'none';
              retakeBtn.style.display = 'none';

              // Matikan dulu stream kamera yang ada
              if (_this.stream) {
                _this.stream.getTracks().forEach(function (track) {
                  return track.stop();
                });
                _this.stream = null;
              }

              // Tunggu sebentar sebelum memulai kamera baru
              _context5.next = 7;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 300);
              });
            case 7:
              _context5.next = 9;
              return startVideoStream();
            case 9:
              // Show video and buttons
              _this.videoElement.style.display = 'block';
              captureBtn.style.display = 'block';
              closeCameraBtn.style.display = 'block';
              retakeBtn.disabled = false;
              _context5.next = 21;
              break;
            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);
              console.error('Error restarting camera:', _context5.t0);
              alert('Gagal memulai ulang kamera. Silakan coba lagi.');
              closeCamera();
              retakeBtn.disabled = false;
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 15]]);
      })));
    }
  }, {
    key: "_setupMap",
    value: function _setupMap() {
      var _this2 = this;
      // Create default icon for marker
      var defaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Set default icon for all markers
      L.Marker.prototype.options.icon = defaultIcon;

      // Initialize map centered on Indonesia
      this.map = L.map('map').setView([-6.2088, 106.8456], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(this.map);

      // Add click event to map
      this.map.on('click', function (e) {
        var _e$latlng = e.latlng,
          lat = _e$latlng.lat,
          lng = _e$latlng.lng;

        // Remove existing marker if any
        if (_this2.marker) {
          _this2.map.removeLayer(_this2.marker);
        }

        // Add new marker with custom icon
        _this2.marker = L.marker([lat, lng], {
          icon: defaultIcon
        }).addTo(_this2.map);

        // Update selected location
        _this2.selectedLocation = {
          lat: lat,
          lon: lng
        };

        // Update location info text
        document.getElementById('locationInfo').textContent = "Lokasi dipilih: ".concat(lat.toFixed(6), ", ").concat(lng.toFixed(6));
      });
    }
  }, {
    key: "_setupForm",
    value: function _setupForm() {
      var _this3 = this;
      var form = document.getElementById('addStoryForm');
      form.addEventListener('submit', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
          var description, canvas;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                e.preventDefault();
                description = document.getElementById('description').value;
                canvas = document.getElementById('photoCanvas');
                if (_this3.selectedLocation) {
                  _context7.next = 6;
                  break;
                }
                alert('Silakan pilih lokasi di peta');
                return _context7.abrupt("return");
              case 6:
                if (!(!canvas.toDataURL || !canvas.toBlob)) {
                  _context7.next = 9;
                  break;
                }
                alert('Silakan ambil foto terlebih dahulu');
                return _context7.abrupt("return");
              case 9:
                try {
                  // Convert canvas to blob
                  canvas.toBlob(/*#__PURE__*/function () {
                    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(blob) {
                      var formData, _submitBtn;
                      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                        while (1) switch (_context6.prev = _context6.next) {
                          case 0:
                            if (blob) {
                              _context6.next = 3;
                              break;
                            }
                            alert('Gagal memproses foto, silakan coba lagi');
                            return _context6.abrupt("return");
                          case 3:
                            // Create form data
                            formData = new FormData();
                            formData.append('description', description);
                            formData.append('photo', blob, 'photo.jpg');
                            formData.append('lat', _this3.selectedLocation.lat);
                            formData.append('lon', _this3.selectedLocation.lon);
                            _context6.prev = 8;
                            // Show loading
                            _submitBtn = form.querySelector('button[type="submit"]');
                            _submitBtn.disabled = true;
                            _submitBtn.textContent = 'Menyimpan...';

                            // Submit data
                            _context6.next = 14;
                            return _this3.storyModel.addStory(formData);
                          case 14:
                            // Success message
                            alert('Cerita berhasil ditambahkan!');

                            // Redirect to home
                            window.location.hash = '#/home';
                            _context6.next = 23;
                            break;
                          case 18:
                            _context6.prev = 18;
                            _context6.t0 = _context6["catch"](8);
                            alert("Gagal menambahkan cerita: ".concat(_context6.t0.message));
                            submitBtn.disabled = false;
                            submitBtn.textContent = 'Simpan Cerita';
                          case 23:
                          case "end":
                            return _context6.stop();
                        }
                      }, _callee6, null, [[8, 18]]);
                    }));
                    return function (_x2) {
                      return _ref5.apply(this, arguments);
                    };
                  }(), 'image/jpeg', 0.8);
                } catch (error) {
                  alert("Terjadi kesalahan: ".concat(error.message));
                }
              case 10:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }]);
}();


/***/ }),

/***/ 719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var _models_story_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var MapPage = /*#__PURE__*/function () {
  function MapPage() {
    _classCallCheck(this, MapPage);
    this.map = null;
    this.marker = null;
    this.story = null;
    this.storyModel = new _models_story_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A();
  }
  return _createClass(MapPage, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <section class=\"map-page\">\n        <div class=\"map-container\" id=\"map\"></div>\n        <div class=\"story-info\" id=\"storyInfo\"></div>\n      </section>\n    ");
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
        var urlParams, storyId, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
              storyId = urlParams.get('id');
              if (!storyId) {
                _context2.next = 16;
                break;
              }
              _context2.prev = 3;
              _context2.next = 6;
              return this.storyModel.getStoryById(storyId);
            case 6:
              response = _context2.sent;
              this.story = response.story;
              this._setupMap();
              this._setupStoryInfo();
              _context2.next = 16;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](3);
              console.error('Error loading story:', _context2.t0);
              alert('Gagal memuat detail cerita');
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 12]]);
      }));
      function afterRender() {
        return _afterRender.apply(this, arguments);
      }
      return afterRender;
    }()
  }, {
    key: "_setupMap",
    value: function () {
      var _setupMap2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this = this;
        var mapContainer;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!this.story.lat || !this.story.lon)) {
                _context3.next = 4;
                break;
              }
              alert('Cerita ini tidak memiliki informasi lokasi');
              window.location.hash = '#/home';
              return _context3.abrupt("return");
            case 4:
              // Tunggu hingga container map tersedia
              mapContainer = document.getElementById('map');
              if (mapContainer) {
                _context3.next = 8;
                break;
              }
              console.error('Container map tidak ditemukan');
              return _context3.abrupt("return");
            case 8:
              // Pastikan container map memiliki dimensi
              mapContainer.style.height = '60vh';
              mapContainer.style.width = '100%';

              // Initialize map
              this.map = L.map('map').setView([this.story.lat, this.story.lon], 13);

              // Tambahkan tile layer
              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19
              }).addTo(this.map);

              // Add marker
              this.marker = L.marker([this.story.lat, this.story.lon]).addTo(this.map);

              // Add popup
              this.marker.bindPopup("\n      <div class=\"map-popup\">\n        <img src=\"".concat(this.story.photoUrl, "\" alt=\"").concat(this.story.name, "\">\n        <h3>").concat(this.story.name, "</h3>\n        <p>").concat(this.story.description, "</p>\n      </div>\n    ")).openPopup();

              // Trigger resize event untuk memastikan peta di-render dengan benar
              setTimeout(function () {
                _this.map.invalidateSize();
              }, 100);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _setupMap() {
        return _setupMap2.apply(this, arguments);
      }
      return _setupMap;
    }()
  }, {
    key: "_setupStoryInfo",
    value: function _setupStoryInfo() {
      var storyInfo = document.getElementById('storyInfo');
      if (!storyInfo) return;
      storyInfo.innerHTML = "\n      <div class=\"story-details\">\n        <img src=\"".concat(this.story.photoUrl, "\" alt=\"").concat(this.story.name, "\">\n        <div class=\"story-content\">\n          <h2>").concat(this.story.name, "</h2>\n          <p>").concat(this.story.description, "</p>\n          <div class=\"story-meta\">\n            <span class=\"date\">").concat(new Date(this.story.createdAt).toLocaleDateString('id-ID'), "</span>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=app~bc66489a.441e3f1475a80f69dfbd.js.map