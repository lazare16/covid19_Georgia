const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-193.p.rapidapi.com/statistics?country=GEORGIA",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bc0019aac3msh86f039dbf1157b6p1b7843jsn2aaad402201d",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
};


$.ajax(settings).done(function (response) {
	console.log(response);


	




	$("#date").text(response.response[0].day);
    $("#infected").text(Number(response.response[0].cases.new).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	$("#death").text( Number(response.response[0].deaths.new).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	$("#tests").text(Number(response.response[0].tests.total).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	$("#country").text(response.parameters.country);
	$("#recovered").text(Number(response.response[0].cases.recovered).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	$("#active").text(
		Number(response.response[0].cases.active).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	$("#deathT").text(Number(response.response[0].deaths.total).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	$("#activeT").text(Number(response.response[0].cases.total).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	
});



