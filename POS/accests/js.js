var customers=[];

$('#btnSaveustomer').click(function () {
    let customerID = $('#txtCid').val();
    let customerName = $('#txtcName').val();
    let customerAddress = $('#txtAddress').val();
    let customerSalary = $('#txtSalry').val();

    // alert($('#txtAddress').val());

    var customerOb = {
        id :customerID,
        name : customerName,
        address : customerAddress,
        salary : customerSalary

    }

    customers.push(customerOb);


    loadAll();

    btnRowClick();



    // console.log(customer);



   // console.log(customers)
});

$('#btnupdate').click(function (){
    // for (let i = 0; i < customers.length; i++) {
    //     console.log(customers[i].id);
    // }

  loadAll();



});

function loadAll(){

    $('#tb').empty();
    for (var i of customers){
        //console.log(i.id);

        var row="<tr><td>"+i.id+"</td><td>"+i.name+"</td><td>"+i.address+"</td><td>"+i.salary+"</td></tr>";

       // var row=`<tr><td>$(i.id)</td><td>$(i.name)</td><td>$(i.address)</td><td>$(i.salary)</td></tr>`;
        $('#tb').append(row);
    }
}


function btnRowClick (){
    $('#tb>tr').click(function (){
        let id=$(this).children(":eq(0)").text();
        let name=$(this).children(":eq(1)").text();
        let address=$(this).children(":eq(2)").text();
        let salary=$(this).children(":eq(3)").text();

        console.log(id,name,address,salary);

        $('#txtCid').val(id);
        $('#txtcName').val(name);
        $('#txtAddress').val(address);
        $('#txtSalry').val(salary);

    });

}

function doubleClick(){

}