document.getElementById("pot").style.color='red'

// document.getElementsByClassName('yoo')[0].remove();

document.getElementsByTagName("h1")
document.querySelector(".yoo")

document.querySelector('img').getAttribute("src")

// document.querySelector("input").value="C001";-->set values input files

// document.querySelector("input").value--.get values input fields

document.querySelector("#btn1").addEventListener('click',function () {

   document.querySelector("img").setAttribute("src",  document.querySelector("input").value);
    //document.getElementById("#im1").style.display='none';
})

document.querySelector("#bb").addEventListener('keyup',function () {

    document.querySelector("#main").innerText=  document.querySelector("#bb").value;
})

//photo hide

document.getElementById("img1").addEventListener('click',function () {

    document.getElementById("im1").style.display='none';
    document.getElementById("im2").style.display='inline-block';
    document.getElementById("im3").style.display='inline-block';

});

document.getElementById("img2").addEventListener('click',function () {

    document.getElementById("im1").style.display='inline-block';
    document.getElementById("im2").style.display='none';
    document.getElementById("im3").style.display='inline-block';

});
document.getElementById("img3").addEventListener('click',function () {

    document.getElementById("im1").style.display='inline-block';
    document.getElementById("im2").style.display='inline-block';
    document.getElementById("im3").style.display='none';

});


