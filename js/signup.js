var xs = document.getElementById("xsName");
var xe = document.getElementById("xsEmail");
var xp = document.getElementById("xsPassword");
 
if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
} else {
    user = [];
}


function uppp() {
    
    if ( xs.value == '' || xe.value == '' || xp.value == '') {
        document.getElementById('req').innerHTML = `<p class = 'text-center'>All inputs is required</p>`
    } else {
        var pro = {
            name: xs.value,
            email: xe.value,
            password: xp.value
        }
        user.push(pro);
        window.location= 'index (3).html'
        localStorage.setItem('user', JSON.stringify(user));
    }
}
























//  var arr = [];
//  if(localStorage.getItem("loog") != null){
//     arr = JSON.parse(localStorage.getItem("loog"))
//  } else {
//     arr = [];
// }
 

// function uppp(){
//     if( xs.value == "".length || xe.value =="".length || xp.value=="".length ){
//         sacc.classList.add("d-none")
//         req.classList.remove("d-none")
//         }
//         else{
//             sacc.classList.remove("d-none")
//             req.classList.add("d-none")
//             var pro = {
//                 name: xs.value,
//                 email: xe.value,
//                 pass: xp.value
//         }
//         arr.push(pro)
//         window.location= 'index (3).html'
//         localStorage.setItem("loog",JSON.stringify(arr) )
//     };
// }
    
  





