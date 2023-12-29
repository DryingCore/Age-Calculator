export function is_valid_year(y) {
	const current_year = new Date().getFullYear();

	if (isNaN(y) || y < 1900 || y > current_year) {
		return false;
	}
	return true;
}

export function is_valid_month(m) {
	if (isNaN(m) || m < 1 || m > 12) {
		return false;
	}
	return true;
}

export function is_valid_day(d) {
	if (isNaN(d) || d < 1 || d > 31) {
		return false;
	}
	return true;
}