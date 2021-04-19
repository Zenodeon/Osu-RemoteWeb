
var obj = document.getElementById('id');

var count = 0;

obj.addEventListener('touchstart', function(event) 
{
  count++;
  
}, false);

document.body.innerHTML = "Touch Count : " + count;

