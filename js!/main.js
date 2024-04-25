document.getElementById("pot").style.color='red'

// document.getElementsByClassName('yoo')[0].remove();

document.getElementsByTagName("h1")
document.querySelector(".yoo")

document.querySelector('img').getAttribute("src")

// document.querySelector("input").value="C001";-->set values input files

// document.querySelector("input").value--.get values input fields

document.querySelector("#btn1").addEventListener('click',function () {

    document.querySelector("img").setAttribute("src",  document.querySelector("input").value);
})