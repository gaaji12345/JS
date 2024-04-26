$('button').click(function (){
   $('#in1').val();
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

