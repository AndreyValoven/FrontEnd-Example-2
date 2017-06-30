$(function() {
    
    $('.mob-icon').on('click', function() {
        
        $('.navbar').slideToggle(300, function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    })
})