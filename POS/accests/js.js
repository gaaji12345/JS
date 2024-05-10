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

    doubleClick();



    // console.log(customer);



   // console.log(customers)
});

$('#btnupdate').click(function (){
    // for (let i = 0; i < customers.length; i++) {
    //     console.log(customers[i].id);
    // }

  //loadAll();
    let cusid=$('#txtCid').val();
    let respo=updateCustomer(cusid);
    if (respo){
        alert("Update success");
    }else {
        alert("update fail..!");
    }



});


$('#btndelete').click(function (){
   let deleteId= $('#txtCid').val();
    deletecustomer(deleteId);
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
    $('#tb>tr').dblclick(function (){
    let id=$(this).children(":eq(0)").text();
    let name=$(this).children(":eq(1)").text();
    let address=$(this).children(":eq(2)").text();
    let salary=$(this).children(":eq(3)").text();

    ///console.log(id,name,address,salary);

    $('#txtCid').remove(id);
    $('#txtcName').remove(name);
    $('#txtAddress').remove(address);
    $('#txtSalry').remove(salary);

});
}
$('#txtCid').on('keyup',function (event){
    if (event.code=="Enter"){
        let typeId=$('#txtCid').val();
      let customer= search(typeId);
      if (customer!=null){
          $('#txtCid').val(customer.id);
          $('#txtcName').val(customer.name);
          $('#txtAddress').val(customer.address);
          $('#txtSalry').val(customer.salary);
      }else {
          alert("There is no Customer....!"+typeId);
      }
    }
});

function search(cudId){
    for (let customer of customers) {
        if (customer.id == cudId) {
            return customer;
        }
    }
    return null;
}

function deletecustomer(cId){
    let customer=search(cId);
    if (customer!=null){
       let indexof=customers.indexOf(customer);
       customers.splice(indexof,1);
       loadAll();
    }
}

function updateCustomer(cId){
    let customer=search(cId);
    if (customer!=null){
        customer.id=$('#txtCid').val();
        customer.name=$('#txtcName').val();
        customer.address=$('#txtAddress').val();
        customer.salary=$('#txtSalry').val();
        loadAll();
        return true;
    }else {
        return false;
    }


}