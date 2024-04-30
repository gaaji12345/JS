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
    console.log(itemOb);
});