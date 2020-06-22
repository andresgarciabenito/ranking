var stars=document.getElementsByClassName('star');


function on(){
  for (var i=0; i<stars.length; i++){
    stars[4].classList.remove('unchecked');
    stars[4].classList.add('checked');
  }
}

// function off(){
//   for (var i=0; i<stars.length; i++){
//       stars[i].classList.remove('checked');
//       stars[i].classList.add('unchecked');
// }
// }
