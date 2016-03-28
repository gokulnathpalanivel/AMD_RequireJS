define(["jquery", "highcharts", "liveData"], function($, highcharts, data){
    
    var graph = {
        //Initialize highcharts with data
        drawChart: function () { 
            var chart = new Highcharts.Chart(data);
        }   
    }
    
    return graph;
    
});