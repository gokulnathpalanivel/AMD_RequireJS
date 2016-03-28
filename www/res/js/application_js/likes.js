define(['jquery'], function(){
    var counter = (function() {
        var likes = 0;
        var disLikes = 0;
        
        //increment likes
        function changeLikes(val) {
            likes += val;
        }
        
        //increment dis-likes
        function changeDisLikes(val) {
            disLikes += val;
        }
        
        //closure return
        return {
            increment: function() {
                changeLikes(1);
                return likes;
            },
            decrement: function() {
                changeDisLikes(1);
                return disLikes;
            }
        };   
    })();
    
    //manage like
    $('.like').on('click', function(){
        $('.totalLk').html(counter.increment(1));
    });
    
    //manage dislike
    $('.disLike').on('click', function(){
        $('.totalDlk').html(counter.decrement(1));
    });
});