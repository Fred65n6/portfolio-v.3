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
  default: () => Makeimpact,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_bca29771 = require("../../chunks/Header_2-bca29771.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var makeimpact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-15l7fen.svelte-15l7fen{width:97vw;padding-top:6rem;display:grid;place-items:center;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b}.header.svelte-15l7fen img.svelte-15l7fen{padding:4rem}.content.svelte-15l7fen.svelte-15l7fen{padding:2rem;width:97vw;display:grid;justify-items:center;place-items:center;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b}.content.svelte-15l7fen img.svelte-15l7fen{padding-block:4rem;max-width:350px}@media(min-width: 600px){.content.svelte-15l7fen.svelte-15l7fen{grid-template-columns:1fr 1fr;gap:10rem}.header.svelte-15l7fen img.svelte-15l7fen{max-width:750px}.content.svelte-15l7fen img.svelte-15l7fen{max-width:450px;padding-block:0rem}}",
  map: null
};
const hydrate = import_Header_2_bca29771.d;
const router = import_Header_2_bca29771.b;
const prerender = true;
const Makeimpact = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"header svelte-15l7fen"}"><h4>Fall 2022</h4>
	<h2>The make!mpact app</h2>
	<img src="${"Mask Group 26.png"}" alt="${"m! app"}" class="${"svelte-15l7fen"}"></section>
<section class="${"content svelte-15l7fen"}"><div class="${""}"><h2>Where we started</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p></div>
	<img src="${"Group 58.png"}" alt="${"m! app"}" class="${"svelte-15l7fen"}"></section>
<section class="${"content svelte-15l7fen"}"><img src="${"Group 13.png"}" alt="${"m! app"}" class="${"svelte-15l7fen"}">
	<div class="${""}"><h2>Keeping track</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p></div></section>
<section class="${"content svelte-15l7fen"}"><div class="${""}"><h2>The make!mpact app</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p></div>
	<img src="${"Mask Group 25.png"}" alt="${"m! app"}" class="${"svelte-15l7fen"}"></section>

${(0, import_index_e03aaaec.v)(import_Header_2_bca29771.H, "Header").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
