const puppet = require("puppeteer");
const intro = require("./etapas/intro");
const modal = require("./etapas/modal");

(async () => {
	//constants
	const params = {
		data: 20 - 1,
		texto: "Xerox to Xerox Xerox",
		tempoInicio: "1000",
		tempoFim: "1500",
		empresa: "reuna",
	};

	const browser = await puppet.launch({ headless: true });
	const page = await browser.newPage();
	const elementHandle = await intro(page);
	await modal(elementHandle, params);

	///////////////////////////////////////
	await page.waitForTimeout(4000);
	await page.screenshot({ path: "google.png" });

	await browser.close();
})();
