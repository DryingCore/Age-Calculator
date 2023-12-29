import { calcularIdade } from "./math.js";
import { is_valid_day, is_valid_month, is_valid_year } from "./validation_module.js";

document.getElementById("submit").addEventListener("click", (ev) => {
	ev.preventDefault();

	const day_input = document.getElementById("day").value;
	const month_input = document.getElementById("month").value;
	const year_input = document.getElementById("year").value;

	// Validate the year input
	if (!is_valid_year(parseInt(year_input, 10))) {
		document.getElementById("year__error").innerText = "Error! check the input value!";
		return;
	} else {
		document.getElementById("year__error").innerText = "";
	}

	// Validate the month input
	if (!is_valid_month(parseInt(month_input, 10))) {
		document.getElementById("month__error").innerText = "Error! check the input value!";
		return;
	} else {
		document.getElementById("month__error").innerText = "";
	}

	// Validate the day input
	if (!is_valid_day(parseInt(day_input, 10))) {
		document.getElementById("day__error").innerText = "Error! check the input value!";
		return;
	} else {
		document.getElementById("day__error").innerText = "";
	}

	const birth = `${year_input}-${month_input}-${day_input}`;
	const age = calcularIdade(birth);

	// AppendChild
	const append_years = document.getElementById("years");
	const append_months = document.getElementById("months");
	const append_days = document.getElementById("days");
	append_years.textContent = age.years.toString();
	append_months.textContent = age.months.toString();
	append_days.textContent = age.days.toString();
});
