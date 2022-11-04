let state = {
	index: 2,
	min: 0,
	max: 4,
	pricing: [
		{
			pageviews: '10K',
			price: 8,
		},
		{
			pageviews: '50K',
			price: 12,
		},
		{
			pageviews: '100K',
			price: 16,
		},
		{
			pageviews: '500K',
			price: 24,
		},
		{
			pageviews: '1M',
			price: 36,
		},
	],
	yearlyBilling: false,
};

let pageviewNumber = document.getElementById('pageview-number');
let price = document.getElementById('price');
let range = document.getElementById('range');
let toggle = document.getElementById('toggle');

function updateIndex(value) {
	state.index = value;
	updateValues();
}

function updateValues() {
	if (!state.yearlyBilling) {
		pageviewNumber.innerText = state.pricing[state.index].pageviews;
		price.innerText = `$${state.pricing[state.index].price.toFixed(2)}`;
		updateTrack();
	} else {
		pageviewNumber.innerText = state.pricing[state.index].pageviews;
		price.innerText = `$${(state.pricing[state.index].price * 0.75).toFixed(
			2
		)}`;
		updateTrack();
	}
}

function toggleYearlyBilling() {
	state.yearlyBilling = !state.yearlyBilling;
	updateValues();
}

function turnOffYearlyBilling() {
	toggle.checked = false;
	if (state.yearlyBilling === false) return;
	toggleYearlyBilling();
}

function updateTrack() {
	let bgValue = ((state.index - state.min) / (state.max - state.min)) * 100;
	range.style.backgroundSize = `${bgValue}% 100%`;
}
