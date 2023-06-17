
	let button = document.querySelector("#button");
	button.addEventListener("click", calculate);


function calculate() {
	let height = parseInt(document
			.querySelector("#height").value);
	let weight = parseInt(document
			.querySelector("#weight").value);
	let result = document.querySelector("#result");
	if (height === "" || isNaN(height))
		result.innerHTML = "Give a proper height!";
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Give a proper weight!";
	else {
		let bmi = (weight / ((height * height)
							/ 10000));
		if (bmi < 18.6) result.innerHTML =
			`<b> You are Under Weight : <span>${bmi}</span> </b>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`<b> You are Normal : <span>${bmi}</span> </b>`;

		else result.innerHTML =
			`<b> You are Over Weight : <span>${bmi}</span> </b>`;
	}
}
