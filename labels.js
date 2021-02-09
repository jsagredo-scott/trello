const config = {
	'platform': [
		{
			'name': 'Frontend',
			'color': '#f2d600'
		},
		{
			'name': 'Backend',
			'color': '#ff9f1a'
		},
		{
			'name': 'Native',
			'color': '#344563'
		}
	],
	'platform-native': [
		{
			'name': 'iOS',
			'color': '#97a0af'
		},
		{
			'name': 'Android',
			'color': '#519839'
		}
	],
	'labels': [
		{
			'name': 'Bug',
			'color': '#b04632'
		}
	],
	'initiatives': [
		{
			'name': 'IFPE',
			'color': '#eb5a46'
		},{
			'name': 'HUB',
			'color': '#AED6F1'
		},{
			'name': 'Challenges',
			'color': '#3498DB'
		},{
			'name': 'Cross',
			'color': '#eb5a46'
		}
	]
};

const configList = Object.keys(config).reduce(function(out, key) {
  return out.concat(config[key]);
}, []).reduce(function(out, value) {
	var new_out = out;
	new_out[value.name] = value.color;
	return new_out;
}, {});


function updateLabels() {
	var labels = document.getElementsByClassName("card-label");

	for (var labelObj of labels) {
		var key = labelObj.getAttribute("title");

		if (key in configList) {
			labelObj.classList.remove("card-label-green");
			labelObj.classList.remove("card-label-yellow");
			labelObj.classList.remove("card-label-orange");
			labelObj.classList.remove("card-label-red");
			labelObj.classList.remove("card-label-purple");
			labelObj.classList.remove("card-label-blue");
			labelObj.classList.remove("card-label-sky");
			labelObj.classList.remove("card-label-lime");
			labelObj.classList.remove("card-label-black");
			labelObj.classList.remove("card-label-null");

			labelObj.style.backgroundColor = configList[key];
		}
	}
}

updateLabels();
window.setInterval(function(){ updateLabels(); }, 100);