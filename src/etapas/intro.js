const intro = async (page, senha) => {
	const navigationPromise = page.waitForNavigation();
	await page.goto(
		"http://gdp.mouts.info/ords/f?p=100:LOGIN_DESKTOP:11870639424472:::::",
	);
	await page.type("#P9999_USERNAME", senha.usuario);
	await page.type("#P9999_PASSWORD", senha.senha);
	await page.click("#B4448393888099367");
	await navigationPromise;
	await page.waitForSelector("#t_MenuNav_2");
	await page.click("#t_MenuNav_2i");
	await page.click("#t_MenuNav_2_0i");

	await page.waitForTimeout(2000);
};

module.exports = intro;
