//RequireJS configurations
requirejs.config({
    baseUrl: "../res/js",
    paths: {
        jquery: [
            "http://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min",
            //If CDN failed to load, load below local file
            "thirdparty/jquery-1.12.2.min"
        ],
        bootstrap: "thirdparty/bootstrap.min",
        highcharts: "thirdparty/highcharts",
        drawChart: "application_js/drawChart",
        liveData: "application_js/dataSet",
        summary: "application_js/summary",
        likes: 'application_js/likes'
    }
});

//Add required modules of the page
require(['drawChart', 'summary', "likes"], function(chart, summary){
    chart.drawChart();
    summary.showDetails();
});