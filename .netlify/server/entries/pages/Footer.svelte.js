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
  default: () => Footer
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-dq8jtw.svelte-dq8jtw{overflow-x:hidden;margin:0 auto;display:grid;place-items:center;max-width:97vw;padding-block:5rem;width:100%;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b;display:grid;text-align:center}.buttons.svelte-dq8jtw.svelte-dq8jtw{margin-top:5rem;display:grid;gap:3rem;padding-bottom:3rem}.knap.svelte-dq8jtw.svelte-dq8jtw{color:#42506b;border:solid 3px #42506b;padding-block:1rem;font-weight:900;padding-inline:2rem}.knap.svelte-dq8jtw svg.svelte-dq8jtw{fill:#42506b}.knap.svelte-dq8jtw.svelte-dq8jtw:hover{background-color:#e45a5a;color:white;border:solid 3px white;transition:ease-in(1s)}.knap.svelte-dq8jtw:hover svg.svelte-dq8jtw{fill:white}@media(min-width: 600px){.buttons.svelte-dq8jtw.svelte-dq8jtw{grid-template-columns:1fr 1fr}}",
  map: null
};
const Footer = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-dq8jtw"}"><div class="${"text-center"}"><h2>Don&#39;t be a stranger \u{1F917}</h2>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br> Voluptate ipsam commodi, saepe
			dolores natus velit.
		</p></div>

	<div class="${"buttons svelte-dq8jtw"}"><div class="${""}"><a href="${"mailto:webmaster@example.com"}"><div class="${"flex gap-4 knap svelte-dq8jtw"}"><svg width="${"25"}" height="${"25"}" viewBox="${"0 0 24 24"}" class="${"svelte-dq8jtw"}"><path d="${"m15.95 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4ZM12 11l8-5H4Zm0 2L4 8v10h5.15l2 2H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4.35l-2 2V8Zm0 0Zm0-2Zm0 2Z"}"></path></svg>Frederik-milland@hotmail.com
				</div></a></div>
		<div class="${""}"><a target="${"blank"}" href="${"https://www.linkedin.com/in/frederik-milland-a2b671205/"}"><div class="${"flex gap-4 knap svelte-dq8jtw"}"><svg width="${"25"}" height="${"25"}" viewBox="${"0 0 512 512"}" class="${"svelte-dq8jtw"}"><path d="${"M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"}"></path></svg>
					Connect with me on LinkedIn
				</div></a></div></div>
</footer>`;
});
module.exports = __toCommonJS(stdin_exports);
