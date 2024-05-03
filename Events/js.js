// $('#hh').onmousedown(function (){
//     alert('gaaji');
// })

$('#btnSaveustomer').click(function (){
   // alert('gaaji');
})

$('#tb>tr').on('dblclick',function (){
    $(this).remove();
});

$('#txtCid').on('focus',function (){
    //alert('gaaji');
    console.log("gaaji")
});


$('#txtcName').on('blur',function (){
    //alert('gaaji');
    console.log("gaajizzz")
});

$('#txtAddress').on('keydown',function (event){
    //alert('gaaji');
    console.log(event)
});
$('#txtSalry').on('keydown',function (){
    //alert('gaaji');
    console.log("down")
});

$('#txtSalry').on('keyup',function (){
    //alert('gaaji');
    console.log("up")
});
$('#txtSalry').on('keypress',function (){
    //alert('gaaji');
    console.log("press")
});


$('#txtAddress').on('keydown',function (event){
    //alert('gaaji');
    $('#hhh').text( event.key);
});