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
  default: () => Routes,
  prerender: () => prerender
});
var import_index_e03aaaec = require("../../chunks/index-e03aaaec.js");
var import_stores_5fe3ad3b = require("../../chunks/stores-5fe3ad3b.js");
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-11uaaoq.svelte-11uaaoq{max-width:97vw;position:fixed;z-index:1;display:flex;justify-content:space-between;top:0;z-index:3;width:100%;border:solid 2px #42506b;padding-inline:30px;align-items:center;background:#fefefe}nav.svelte-11uaaoq.svelte-11uaaoq{display:flex;justify-content:space-between}.corner.svelte-11uaaoq img.svelte-11uaaoq{filter:invert(1);height:1.4rem}a.svelte-11uaaoq.svelte-11uaaoq:hover{text-decoration:underline}nav.svelte-11uaaoq.svelte-11uaaoq{position:sticky;width:100%;display:flex}ul.svelte-11uaaoq.svelte-11uaaoq{position:relative;padding:0;margin:0;height:3em;display:flex;align-items:center;list-style:none;background-size:contain}nav.svelte-11uaaoq a.svelte-11uaaoq{display:flex;height:100%;align-items:center;padding:0 1em;font-weight:400;font-size:0.7rem;font-family:'Inter', sans-serif;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}",
  map: null
};
const Header = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e03aaaec.a)(import_stores_5fe3ad3b.p, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-11uaaoq"}"><nav class="${"svelte-11uaaoq"}"><div class="${"corner svelte-11uaaoq"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-11uaaoq"}"><img class="${"hover:pulsate-fwd svelte-11uaaoq"}" src="${"./FM.svg"}" alt="${"SvelteKit"}"></a></div>

		<div class="${"desktop-menu"}"><ul class="${"svelte-11uaaoq"}"><li${(0, import_index_e03aaaec.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-11uaaoq"}">HOME</a></li>
				<li><a href="${"#portfolio"}" class="${"svelte-11uaaoq"}">Portfolio</a></li>
				<li><a href="${"#about-me"}" class="${"svelte-11uaaoq"}">ABOUT ME</a></li></ul></div></nav>
</header>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-1lmn4t9.svelte-1lmn4t9{padding-top:3rem;width:100%;display:grid;place-items:center;text-align:center;border:solid 2px #42506b}.hero.svelte-1lmn4t9 img.svelte-1lmn4t9{max-width:110%}.hero-text.svelte-1lmn4t9.svelte-1lmn4t9{padding-block:6rem;margin-top:-4rem}img.svelte-1lmn4t9.svelte-1lmn4t9{max-width:350px}.makeimpact.svelte-1lmn4t9.svelte-1lmn4t9{padding-block:2rem;width:100%;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b;display:grid;place-items:center}.makeimpact.svelte-1lmn4t9.svelte-1lmn4t9:hover{background-color:#e45a5a}.makeimpact.svelte-1lmn4t9:hover h2.svelte-1lmn4t9{color:#f6f5f3}.makeimpact.svelte-1lmn4t9:hover p.svelte-1lmn4t9{color:#f6f5f3}.makeimpact.svelte-1lmn4t9:hover h4.svelte-1lmn4t9{color:#f6f5f3}.double-section.svelte-1lmn4t9.svelte-1lmn4t9{display:grid}.nb.svelte-1lmn4t9.svelte-1lmn4t9{display:grid;padding-block:2rem;place-items:center;width:100%;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b}.vildskud.svelte-1lmn4t9.svelte-1lmn4t9{display:grid;padding-block:2rem;place-items:center;width:100%;border-bottom:solid 2px #42506b;border-right:solid 2px #42506b;border-left:solid 2px #42506b}.double-section.svelte-1lmn4t9 img.svelte-1lmn4t9{max-width:350px}.nb.svelte-1lmn4t9.svelte-1lmn4t9:hover{background-color:#5f739b}.nb.svelte-1lmn4t9:hover h2.svelte-1lmn4t9{color:#f6f5f3}.nb.svelte-1lmn4t9:hover p.svelte-1lmn4t9{color:#f6f5f3}.nb.svelte-1lmn4t9:hover h4.svelte-1lmn4t9{color:#f6f5f3}.vildskud.svelte-1lmn4t9.svelte-1lmn4t9:hover{background-color:#4bbea7}.vildskud.svelte-1lmn4t9:hover h2.svelte-1lmn4t9{color:#f6f5f3}.vildskud.svelte-1lmn4t9:hover p.svelte-1lmn4t9{color:#f6f5f3}.vildskud.svelte-1lmn4t9:hover h4.svelte-1lmn4t9{color:#f6f5f3}.toast.svelte-1lmn4t9.svelte-1lmn4t9{padding-block:2rem;width:100%;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b;display:grid;place-items:center}.toast.svelte-1lmn4t9.svelte-1lmn4t9:hover{background-color:#e9ac44}.toast.svelte-1lmn4t9:hover h2.svelte-1lmn4t9{color:#f6f5f3}.toast.svelte-1lmn4t9:hover p.svelte-1lmn4t9{color:#f6f5f3}.toast.svelte-1lmn4t9:hover h4.svelte-1lmn4t9{color:#f6f5f3}.about.svelte-1lmn4t9.svelte-1lmn4t9{padding-block:2rem;width:100%;border-bottom:solid 2px #42506b;border-left:solid 2px #42506b;border-right:solid 2px #42506b;display:grid;place-items:center}.about.svelte-1lmn4t9.svelte-1lmn4t9:hover{background-color:#42506b}.about.svelte-1lmn4t9:hover h2.svelte-1lmn4t9{color:#f6f5f3}.about.svelte-1lmn4t9:hover p.svelte-1lmn4t9{color:#f6f5f3}@media(min-width: 600px){.hero.svelte-1lmn4t9.svelte-1lmn4t9{padding-top:0rem}.hero-text.svelte-1lmn4t9.svelte-1lmn4t9{padding-block:1.2rem;margin-top:-11rem;margin-bottom:1.5rem}img.svelte-1lmn4t9.svelte-1lmn4t9{max-width:450px}.makeimpact.svelte-1lmn4t9.svelte-1lmn4t9{grid-template-columns:1fr 1fr}.double-section.svelte-1lmn4t9.svelte-1lmn4t9{grid-template-columns:1fr 1fr}.nb.svelte-1lmn4t9.svelte-1lmn4t9{height:450px;grid-template-columns:1fr 1fr}.vildskud.svelte-1lmn4t9.svelte-1lmn4t9{height:450px;border-left:none;grid-template-columns:1fr 1fr}.toast.svelte-1lmn4t9.svelte-1lmn4t9{grid-template-columns:1fr 1fr}.about.svelte-1lmn4t9.svelte-1lmn4t9{grid-template-columns:1fr 1fr}}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_e03aaaec.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Frederik Milland</title>`, ""}`, ""}

${(0, import_index_e03aaaec.v)(Header, "Header").$$render($$result, {}, {}, {})}

<section class="${"hero svelte-1lmn4t9"}"><img src="${"Group 58.svg"}" alt="${"hero"}" class="${"svelte-1lmn4t9"}">
	<div class="${"hero-text svelte-1lmn4t9"}"><h3>Hi i&#39;m</h3>
		<h1 class="${""}">FREDERIK <br>
			MILLAND
		</h1>
		<h3>a UX / UI designer and problem solver \u{1F527} <br>
			who&#39;s creating user friendly design solutions \u{1F3F5}\uFE0F<br>
			from beautiful Copenhagen\u{1F307}
		</h3></div></section>

<section id="${"portfolio"}"><a sveltekit:prefetch href="${"/makeimpact"}"><section class="${"makeimpact  svelte-1lmn4t9"}"><div class="${"m-10 "}"><h4 class="${"svelte-1lmn4t9"}">Fall 2022</h4>
				<h2 class="${"svelte-1lmn4t9"}">The make!mpact app</h2>
				<p class="${"svelte-1lmn4t9"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus saepe qui ex facilis
					ipsa dolorem eum, maiores quas maxime? Adipisci cumque magnam fugit ratione excepturi
					ipsum reiciendis nulla beatae soluta exercitationem praesentium dolorum sapiente ea alias
					perferendis a, nemo quas. Architecto aliquid nobis repellat cum mollitia quidem nostrum
					veritatis!
				</p></div>
			<div class="${""}"><img src="${"Mask Group 25.png"}" alt="${"m! app"}" class="${"svelte-1lmn4t9"}"></div></section></a>

	<section class="${"double-section svelte-1lmn4t9"}"><a sveltekit:prefetch href="${"/nb"}"><div class="${"nb svelte-1lmn4t9"}"><div class="${"m-10 "}"><h4 class="${"svelte-1lmn4t9"}">Summer 2022</h4>
					<h2 class="${"svelte-1lmn4t9"}">N\xF8rrebro bryghus</h2>
					<p class="${"svelte-1lmn4t9"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus saepe qui ex facilis
						ipsa dolorem eum, maiores quas maxime?
					</p></div>
				<div class="${""}"><img src="${"Mask Group 9.png"}" alt="${"n\xF8rrebro bryhus \xF8l"}" class="${"svelte-1lmn4t9"}"></div></div></a>

		<a sveltekit:prefetch href="${"/Vildskud"}"><div class="${"vildskud svelte-1lmn4t9"}"><div class="${"m-10 "}"><h4 class="${"svelte-1lmn4t9"}">Spring 2022</h4>
					<h2 class="${"svelte-1lmn4t9"}">Vildskud festival</h2>
					<p class="${"svelte-1lmn4t9"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus saepe qui ex facilis
						ipsa dolorem eum, maiores quas maxime?
					</p></div>
				<div class="${""}"><img class="${"w-56 svelte-1lmn4t9"}" src="${"Group 63.svg"}" alt="${"vildskud logo"}"></div></div></a></section>

	<a sveltekit:prefetch href="${"/Toast"}"><section class="${"toast  svelte-1lmn4t9"}"><div class="${"m-10 "}"><h4 class="${"svelte-1lmn4t9"}">Winter 2021</h4>
				<h2 class="${"svelte-1lmn4t9"}">TOAST no.9</h2>
				<p class="${"svelte-1lmn4t9"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus saepe qui ex facilis
					ipsa dolorem eum, maiores quas maxime? Adipisci cumque magnam fugit ratione excepturi
					ipsum reiciendis nulla beatae soluta exercitationem praesentium dolorum sapiente ea alias
					perferendis a, nemo quas. Architecto aliquid nobis repellat cum mollitia quidem nostrum
					veritatis!
				</p></div>
			<div><img src="${"Group 64.svg"}" alt="${"Toast logo"}" class="${"svelte-1lmn4t9"}"></div></section></a></section>

<a sveltekit:prefetch href="${"/about"}"><section id="${"about-me"}" class="${"about svelte-1lmn4t9"}"><div class="${"m-10 "}"><h2 class="${"svelte-1lmn4t9"}">About me</h2>
			<p class="${"svelte-1lmn4t9"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus saepe qui ex facilis
				ipsa dolorem eum, maiores quas maxime? Adipisci cumque magnam fugit ratione excepturi ipsum
				reiciendis nulla beatae soluta exercitationem praesentium dolorum sapiente ea alias
				perferendis a, nemo quas. Architecto aliquid nobis repellat cum mollitia quidem nostrum
				veritatis!
			</p></div>
		<div class="${""}"><img src="${"Mask Group 11.png"}" alt="${"Billede af Frederik Milland"}" class="${"svelte-1lmn4t9"}"></div></section>
</a>`;
});
module.exports = __toCommonJS(stdin_exports);
