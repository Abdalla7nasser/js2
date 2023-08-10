var z = localStorage.getItem('new')
console.log(z)
document.getElementById('weloo').innerHTML = "welcom  " +  z ;


document.getElementById('out').addEventListener('click', function () {
     localStorage.removeItem('new');
  
})