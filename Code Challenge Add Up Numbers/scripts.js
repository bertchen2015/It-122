function addUp(number) {
	var current = 0;
	var total = 1000;
	var count = 1;
	while (count <= number && current <= total) {
		current += count;
		count++;
		if (current > total) break;
		console.log(current);
	}
}
addUp(100);