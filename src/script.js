const puppet = require("puppeteer");
const intro = require("./etapas/intro");
const modal = require("./etapas/modal");

const script = async (params, senha) => {
	try {
		const browser = await puppet.launch({ headless: false });
		const page = await browser.newPage();
		await intro(page, senha);
		for (param of params) {
			await modal(page, param);
		}
		///////////////////////////////////////

		await page.screenshot({ path: "google.png" });

		await browser.close();

		return { status: 200, msg: "OK" };
	} catch {
		return { status: 500, msg: "fail..." };
	}
};

module.exports = script;
