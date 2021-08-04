
// line chart


new Chart(document.getElementById("line-chart"), {
	type: 'line',
	data: {
		labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
		datasets: [{
			data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
			label: "83646",
			borderColor: "#3e95cd",
			fill: false
		}, {
			data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
			label: "75850",
			borderColor: "#8e5ea2",
			fill: false
		}, {
			data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
			label: "38576",
			borderColor: "#3cba9f",
			fill: false
		}, {
			data: [4000, 2000, 1001, 1060, 2040, 3800, 4004, 2507, 5008, 7845],
			label: "28567",
			borderColor: "#e8c3b9",
			fill: false
		}
		]
	},
	options: {
		title: {
			display: true
		}
	}
});

$(document).ready(function(){
$(':checkbox:checked').prop('checked',false);
});
