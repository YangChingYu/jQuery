$(document).ready(function() {
    $('h1').click(function(event) {
        $('p').slideUp(1000).slideDown(3000);
        $('div').hide();
        $('p2').toggleClass('orange');
    })
    $('h2').html('<h2>From jQuery import to html</h2>')
});