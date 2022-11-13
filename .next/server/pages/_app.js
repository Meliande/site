(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(9605);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Header.tsx




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#546A76] font-bold flex justify-between py-2 px-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                className: "flex overflow-hidden hover:text-[#B4CEB3] focus:text-[#B4CEB3] transition duration-500 invisible md:visible",
                href: "/",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "rounded-full",
                        src: "https://github.com/meliande.png",
                        alt: "",
                        width: 50,
                        height: 50
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pt-1.5 pl-5 text-2xl",
                        children: "Rodrigo Meliande"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-1.5 flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "px-5 text-2xl hover:text-[#B4CEB3] focus:text-[#B4CEB3] transition duration-500",
                        href: "/",
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "px-5 text-2xl hover:text-[#B4CEB3] focus:text-[#B4CEB3] transition duration-500",
                        href: "/about",
                        children: "Sobre"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "px-5 text-2xl hover:text-[#B4CEB3] focus:text-[#B4CEB3] transition duration-500",
                        href: "/projects",
                        children: "Projetos"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./public/github.png
var github = __webpack_require__(6540);
// EXTERNAL MODULE: ./public/linkedin.png
var linkedin = __webpack_require__(5144);
// EXTERNAL MODULE: ./public/twitter.png
var twitter = __webpack_require__(4855);
// EXTERNAL MODULE: ./public/email.png
var email = __webpack_require__(3871);
// EXTERNAL MODULE: ./public/whatsapp.png
var whatsapp = __webpack_require__(5558);
;// CONCATENATED MODULE: ./src/components/Footer.tsx








function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex bg-[#546A76] font-mono text-sm text-black w-screen h-10 overflow-hidden justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-3",
                children: [
                    "\xa9 Copyright 2022. Made by",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "pl-2",
                        href: "/",
                        children: "Rodrigo Meliande"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex pt-2 pl-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "px-2 hover:scale-110",
                        href: "https://github.com/Meliande",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: github/* default */.Z,
                            alt: "",
                            width: 25,
                            height: 25
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "px-2 hover:scale-110",
                        href: "https://www.linkedin.com/in/rodrigo-meliande-081433128",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: linkedin/* default */.Z,
                            alt: "",
                            width: 25,
                            height: 25
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "px-2 hover:scale-110",
                        href: "https://twitter.com/MeliandeRodrigo",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: twitter/* default */.Z,
                            alt: "",
                            width: 25,
                            height: 25
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "px-2 hover:scale-110",
                        href: "mailto: rodrigomeliande@msn.com",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: email/* default */.Z,
                            alt: "",
                            width: 25,
                            height: 25
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "px-2 hover:scale-110",
                        href: "https://api.whatsapp.com/send?phone=5571992201640",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: whatsapp/* default */.Z,
                            alt: "",
                            width: 25,
                            height: 25
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#DBD3C9] h-screen scroll-smooth",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute bottom-0 invisible lg:visible",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            })
        ]
    });
}


/***/ }),

/***/ 9605:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,878], () => (__webpack_exec__(5692)));
module.exports = __webpack_exports__;

})();