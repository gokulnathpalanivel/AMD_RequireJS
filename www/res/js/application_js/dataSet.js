define(function(){
    
    // Real time dataset
    var data = {
        chart: {
            type: 'bar',
            renderTo: 'dataChart'
        },
        title: {
            text: 'Time Online on Mobile'
        },
        xAxis: {
            categories: ['North America', 'Europe', 'India']
        },
        yAxis: {
            title: {
                text: 'Time Online (hrs)'
            }
        },
        series: [{
                name: '2013',
                data: [1.76, 1.36, 1.92]
            }, 
            {
                name: '2015',
                data: [2.04, 1.77, 2.31]
            }]
        }
    
    return data;
});