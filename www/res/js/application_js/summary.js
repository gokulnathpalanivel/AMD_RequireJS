define(["jquery", "liveData"], function($, json){
    var summary = {
        
        //Show countrywise summary for 2015
        showDetails: function () {
            //get Countries
            $.each(json.xAxis.categories, function(idx, country) {
                $(".ctry").append("<span>"+country+"</span>");
            });
            
            //get time in online
            $.each(json.series[1].data, function(idx, time) {
                $(".hrs").append("<span>"+time+" hrs</span>");
            });
        }
    }
    
    return summary;
    
});
