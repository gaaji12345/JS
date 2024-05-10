
var items=[];
$('#btnsaveItem').click(function (){
   const iId=$('#txtitemId').val();
    const iIname=$('#txtitemName').val();
    const iIdesc=$('#txtitemDesc').val();
    const iIqty=$('#txtitemQty').val();

    itemOb={
        id:iId,
        name:iIname,
        desc:iIdesc,
        qty:iIqty
    }
    loaAllItems();
    items.push(itemOb);
   // console.log(itemOb);
});

$('#btnIgetAll').click(function (){
   //loaAllItems();
    //alert("gaaji")
});
function loaAllItems(){

    $('#tbItem').empty();
    for (var i of items){
        //console.log(i.id);

        var row="<tr><td>"+i.id+"</td><td>"+i.name+"</td><td>"+i.desc+"</td><td>"+i.qty+"</td></tr>";

        // var row=`<tr><td>$(i.id)</td><td>$(i.name)</td><td>$(i.address)</td><td>$(i.salary)</td></tr>`;
        $('#tbItem').append(row);
    }
}