let bill = 0;
let person = 0;

let tipPer = 0;
let amountPer = 0;

let tipPerPerson = document.getElementById("tip-amount");
let amountPerPerson = document.getElementById("total-amount");

const reset = document.getElementById("reset");
const billAmount = document.getElementById("bill-amount");
const totalPerson = document.getElementById("person");
const percentage = document.querySelectorAll(".btn");
const error = document.getElementById("error");
const custom = document.getElementById("custom-tip");

billAmount.addEventListener("change", (e) => {
	bill = parseInt(e.target.value);
});

totalPerson.addEventListener("change", (e) => {
	person = parseInt(e.target.value);
});

const percentageCalc = (val) => {
	if (person == 0) {
		error.style.display = "inherit";
		totalPerson.style.outline = "2px solid red";
	} else if (person != 0) {
		error.style.display = "none";
		totalPerson.style.outline = "none";

		tipPer = parseFloat((bill * (val / 100)) / person).toFixed(2);
		tip = bill * (val / 100);
		totalAmount = bill + tip;

		tipPerPerson.textContent = tipPer;
		amountPerPerson.textContent = parseFloat(totalAmount / person).toFixed(2);
	}
};

percentage.forEach((element) => {
	element.addEventListener("click", (e) => {
		console.log(e);
		let selected = e.target.innerText;
		let selectedPercent = selected.split("%");
		let selectedValue = selectedPercent[0];
		percentageCalc(selectedValue);
	});
});

percentage;

custom.addEventListener("input", (e) => {
	const customPer = e.target.value;
	percentageCalc(customPer);
});

reset.addEventListener("click", () => {
	tipPerPerson.textContent = 0.0;
	amountPerPerson.textContent = 0.0;
	billAmount.value = "";
	totalPerson.value = "";
	custom.value = "";
});
