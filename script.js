const puppet = require("puppeteer");

(async () => {
	//const browser = await puppet.launch("browser");
	const browser = await puppet.launch({ headless: false });
	const page = await browser.newPage();

	const navigationPromise = page.waitForNavigation({
		waitUntil: "networkidle2",
	});
	await page.goto(
		"http://gdp.mouts.info/ords/f?p=100:LOGIN_DESKTOP:11870639424472:::::",
	);
	await page.type("#P9999_USERNAME", "francisco");
	await page.type("#P9999_PASSWORD", "MOUTS0247");
	await page.click("#B4448393888099367");
	await navigationPromise;
	await page.waitForSelector("#t_MenuNav_2");
	await page.click("#t_MenuNav_2i");
	await page.click("#t_MenuNav_2_0i");
	await navigationPromise;

	await page.waitForTimeout(4000);
	await page.waitForSelector("#B38592991709747903");
	await page.click("#B38592991709747903");

	await page.waitForSelector(".ui-dialog");
	const elementHandle = await page.waitForSelector("div.ui-dialog iframe");
	await page.waitForTimeout(4000);
	// Aqui Chega no Modal
	const frame = await elementHandle.contentFrame();
	await frame.waitForSelector("#B36122282037704243");
	await frame.click("#B36122282037704243");
	///////////////////////////////////////
	await page.waitForTimeout(4000);
	await page.screenshot({ path: "google.png" });

	await browser.close();
})();
