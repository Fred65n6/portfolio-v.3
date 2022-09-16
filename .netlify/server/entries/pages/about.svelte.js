var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => About,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_410e04a3 = require("../../chunks/Header_2-410e04a3.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
const hydrate = import_Header_2_410e04a3.d;
const router = import_Header_2_410e04a3.b;
const prerender = true;
const About = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_e03aaaec.v)(import_Header_2_410e04a3.H, "Header").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
