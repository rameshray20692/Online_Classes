$('#success-button').click(function () {
    $('#success-card').fadeToggle();
    var text = $(this).attr('value').trim();
    if(text === 'HIDE'){
        $(this).attr('value','SHOW');
    }
    else{
        $(this).attr('value','HIDE');
    }
});