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
  H: () => Header_2,
  b: () => browser,
  d: () => dev
});
var import_index_e03aaaec = require("./index-e03aaaec.js");
var import_stores_5fe3ad3b = require("./stores-5fe3ad3b.js");
const browser = false;
const dev = false;
var Header_2_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1t0zqqw.svelte-1t0zqqw{max-width:97vw;position:fixed;display:flex;justify-content:space-between;top:0;z-index:3;width:100%;border:solid 2px #42506b;padding:5px;align-items:center;background:#fefefe}nav.svelte-1t0zqqw.svelte-1t0zqqw{display:flex;justify-content:space-between}.corner.svelte-1t0zqqw img.svelte-1t0zqqw{filter:invert(1);height:1.5rem}a.svelte-1t0zqqw.svelte-1t0zqqw:hover{text-decoration:underline}nav.svelte-1t0zqqw.svelte-1t0zqqw{position:sticky;width:100%;display:flex}ul.svelte-1t0zqqw.svelte-1t0zqqw{position:relative;padding:0;margin:0;height:3em;display:flex;align-items:center;list-style:none;background-size:contain}nav.svelte-1t0zqqw a.svelte-1t0zqqw{display:flex;height:100%;align-items:center;padding:0 1em;font-weight:400;font-size:0.7rem;font-family:'Inter', sans-serif;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}",
  map: null
};
const Header_2 = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"svelte-1t0zqqw"}"><nav class="${"svelte-1t0zqqw"}"><div class="${"corner svelte-1t0zqqw"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1t0zqqw"}"><img class="${"hover:pulsate-fwd svelte-1t0zqqw"}" src="${"./FM.svg"}" alt="${"SvelteKit"}"></a></div>

		<div class="${"desktop-menu"}"><ul class="${"svelte-1t0zqqw"}"><li${(0, import_index_e03aaaec.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-1t0zqqw"}">HOME</a></li>
				<li${(0, import_index_e03aaaec.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-1t0zqqw"}">Portfolio</a></li>
				<li${(0, import_index_e03aaaec.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-1t0zqqw"}">ABOUT ME</a></li></ul></div></nav>
</header>`;
});
module.exports = __toCommonJS(stdin_exports);
