var g = G$('Tony','Liang');
// console.log(g);
g.greet().setLang('es').greet(true);

$('#login').click(function(){
    var loginGrtr = G$('Tony','Liang');
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
});