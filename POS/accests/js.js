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

    loadAll();
    // console.log(customer);


    customers.push(customerOb);
    console.log(customers)
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
        console.log(i.id);

        var row="<tr><td>"+i.id+"</td><td>"+i.name+"</td><td>"+i.address+"</td><td>"+i.salary+"</td></tr>";

       // var row=`<tr><td>$(i.id)</td><td>$(i.name)</td><td>$(i.address)</td><td>$(i.salary)</td></tr>`;
        $('#tb').append(row);
    }
}