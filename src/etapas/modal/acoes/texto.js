const escreveTexto = async (frame, texto) => {
	await frame.evaluate(
		() => (document.getElementById("P46_DS_OBSERVACAO").value = ""),
	);
	const textArea = await frame.$("#P46_DS_OBSERVACAO");
	await textArea.type(texto);
};

module.exports = escreveTexto;
