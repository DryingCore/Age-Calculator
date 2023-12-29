export function calcularIdade(birthday) {
	const today = new Date();

	// Converta a string da data de nascimento para um objeto Date
	const birthdat_obj = new Date(birthday);

	// Calcule a diferença em milissegundos
	let difference = today - birthdat_obj;

	// Converta a diferença de milissegundos para anos, meses e dias
	const years = Math.floor(difference / (365.25 * 24 * 60 * 60 * 1000));

	const months = Math.floor((difference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

	const days = Math.floor((difference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

	return { years: years, months: months, days: days };
}
