var user = [];
var arr =[];
user = JSON.parse(localStorage.getItem('user'))

var xan = document.getElementById('xsEmail');
var xap = document.getElementById('xsPassword');




document.getElementById('opppop').addEventListener('click', function () {
    if (xan.value == '' || xap.value == '') {
        document.getElementById('req').innerHTML = `<p class ='text-center'>All inputs is required</p>`;
    } else {
        localStorage.setItem('loog', JSON.stringify(arr));
        checkUser();
    }
})


function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (xan.value == user[i].email && xap.value == user[i].password) {
            var y = user[i].name;
            localStorage.setItem('new', y);
            window.location=  './index (2).html'
            break;
        }
    }
}










// var arr = [];
// arr = JSON.parse(localStorage.getItem("loog"))


// var xan = document.getElementById("xsEmail");
// var xap = document.getElementById("xsPassword");



// document.getElementById('opppop').addEventListener('click', function () {
//     if (xan.value == '' || xap.value == '') {
//         req.classList.remove("d-none")
//     } else {
//         chUsd();
//     }
// })


// function chUsd() {
//     for (var i = 0; i < arr.length; i++) {
//         if (xan.value == arr[i].email && xap.value == arr[i].password) {
//             var z = arr[i].name;
//             localStorage.setItem('new', z);
//             window.location= './index (2).html'
//             break;
//         }
//     }
// }

















