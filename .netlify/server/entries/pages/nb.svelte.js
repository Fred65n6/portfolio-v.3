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
  default: () => Nb,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_Header_2_bca29771 = require("../../chunks/Header_2-bca29771.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var nb_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-17h29e0.svelte-17h29e0{width:97vw;padding-top:6rem;display:grid;place-items:center;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b}.header.svelte-17h29e0 img.svelte-17h29e0{padding:4rem}.content.svelte-17h29e0.svelte-17h29e0{padding:5rem;width:97vw;display:grid;justify-items:center;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b}.content.svelte-17h29e0 img.svelte-17h29e0{padding-block:4rem}@media(min-width: 600px){.content.svelte-17h29e0.svelte-17h29e0{grid-template-columns:1fr 1fr;gap:10rem}.header.svelte-17h29e0 img.svelte-17h29e0{max-width:750px}.content.svelte-17h29e0 img.svelte-17h29e0{max-width:450px;padding-block:0rem}}",
  map: null
};
const hydrate = import_Header_2_bca29771.d;
const router = import_Header_2_bca29771.b;
const prerender = true;
const Nb = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"header svelte-17h29e0"}"><h4>Summer 2022</h4>
	<h2>N\xF8rrebro bryghus</h2>
	<img src="${"Mask Group 27.png"}" alt="${"m! app"}" class="${"svelte-17h29e0"}"></section>
<section class="${"content svelte-17h29e0"}"><div class="${""}"><h2>Visual identity</h2>

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p></div>
	<img src="${"Group 66.svg"}" alt="${"m! app"}" class="${"svelte-17h29e0"}"></section>
<section class="${"content svelte-17h29e0"}"><img src="${"kelly-sikkema-0iKjge_aOVo-unsplash.png"}" alt="${"m! app"}" class="${"svelte-17h29e0"}">
	<div class="${""}"><h2>Information architecture</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p></div></section>
<section class="${"content svelte-17h29e0"}"><div class="${""}"><h2>Product display</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p></div>
	<img src="${"Mask Group 9.png"}" alt="${"m! app"}" class="${"svelte-17h29e0"}"></section>

${(0, import_index_e03aaaec.v)(import_Header_2_bca29771.H, "Header").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
