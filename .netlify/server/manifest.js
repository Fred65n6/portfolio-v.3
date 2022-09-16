var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["android-chrome-192x192.png", "android-chrome-512x512.png", "apple-touch-icon.png", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "favicon.png", "favicon.svg", "fm.png", "FM.svg", "Group 13.png", "Group 58.png", "Group 58.svg", "Group 59.png", "Group 63.svg", "Group 64.svg", "Group 66.svg", "Group 67.png", "Group 68.png", "Group 69.svg", "hero_logo_2.png", "iMac-psd-mockup-template-1.png", "iMac-psd-mockup-template-2.png", "iMac-psd-mockup-template-3.png", "iMac-psd-mockup-template-4.png", "iPhone-12-Isometric-Stand-Up-All-Colors-Mockup.png", "kelly-sikkema-0iKjge_aOVo-unsplash.jpg", "kelly-sikkema-0iKjge_aOVo-unsplash.png", "kelly-sikkema-0iKjge_aOVo-unsplash.svg", "Mask Group 1.png", "Mask Group 10.png", "Mask Group 11.png", "Mask Group 25.png", "Mask Group 26.png", "Mask Group 27.png", "Mask Group 28.png", "Mask Group 29.png", "Mask Group 9.png", "Matches - matching companies.png", "Picture1.png", "robots.txt", "SDG.png", "SPORTS TOAST.svg", "stk_3.png", "stk_3.svg", "svelte-welcome.png", "svelte-welcome.webp", "tp238-pf-s73-05-mockup.2.png", "tp238-pf-s73-05-mockup.png", "vildskud-logo-2022-350x350-1.png"]),
  _: {
    mime: { ".png": "image/png", ".ico": "image/vnd.microsoft.icon", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".txt": "text/plain", ".webp": "image/webp" },
    entry: { "file": "start-37a32702.js", "js": ["start-37a32702.js", "chunks/vendor-17f4edd3.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js")))
    ],
    routes: [
      {
        type: "page",
        key: "",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        key: "makeimpact",
        pattern: /^\/makeimpact\/?$/,
        params: null,
        path: "/makeimpact",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        key: "Vildskud",
        pattern: /^\/Vildskud\/?$/,
        params: null,
        path: "/Vildskud",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        key: "Footer",
        pattern: /^\/Footer\/?$/,
        params: null,
        path: "/Footer",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        key: "Toast",
        pattern: /^\/Toast\/?$/,
        params: null,
        path: "/Toast",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        key: "about",
        pattern: /^\/about\/?$/,
        params: null,
        path: "/about",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        key: "nb",
        pattern: /^\/nb\/?$/,
        params: null,
        path: "/nb",
        shadow: null,
        a: [0, 8],
        b: [1]
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
