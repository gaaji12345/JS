$('#b1').click(function (){

   // $('h1').text();
   // $('#in1').val();
   $("h1").text($('#in1').val());
});

$('.i1').click(function (){
   $('#img1').css('display','none');
   $('#img2').css('display','inline-block');
   $('#img3').css('display','inline-block');

});

$('.i2').click(function (){
   $('#img1').css('display','inline-block');
   $('#img2').css('display','none');
   $('#img3').css('display','inline-block');

});
$('.i3').click(function (){
   $('#img1').css('display','inline-block');
   $('#img2').css('display','inline-block');
   $('#img3').css('display','none');

});

$('#btnup').click(function (){

   $('ul').prepend('<li>'+$('#input1').val()+'</li>');
});

$('#btndown').click(function (){
   $('ul').append('<li>'+$('#input2').val()+'</li>');
});

