const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","favicon.svg","fm.png","FM.svg","Group 13.png","Group 58.png","Group 58.svg","Group 59.png","Group 63.svg","Group 64.svg","Group 66.svg","Group 67.png","Group 68.png","Group 69.svg","hero_logo_2.png","iMac-psd-mockup-template-1.png","iMac-psd-mockup-template-2.png","iMac-psd-mockup-template-3.png","iMac-psd-mockup-template-4.png","iPhone-12-Isometric-Stand-Up-All-Colors-Mockup.png","kelly-sikkema-0iKjge_aOVo-unsplash.jpg","kelly-sikkema-0iKjge_aOVo-unsplash.png","kelly-sikkema-0iKjge_aOVo-unsplash.svg","Mask Group 1.png","Mask Group 10.png","Mask Group 11.png","Mask Group 25.png","Mask Group 26.png","Mask Group 27.png","Mask Group 28.png","Mask Group 29.png","Mask Group 9.png","Matches - matching companies.png","Picture1.png","robots.txt","SDG.png","SPORTS TOAST.svg","stk_3.png","stk_3.svg","svelte-welcome.png","svelte-welcome.webp","tp238-pf-s73-05-mockup.2.png","tp238-pf-s73-05-mockup.png","vildskud-logo-2022-350x350-1.png"]),
	_: {
		mime: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".jpg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-9fc3ebb5.js","js":["start-9fc3ebb5.js","chunks/vendor-17f4edd3.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				key: "Footer",
				pattern: /^\/Footer\/?$/,
				params: null,
				path: "/Footer",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
});
