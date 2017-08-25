export function navigate(){


 var cont = document.getElementById('content');
 cont.innerHTML = location.hash;

 //create Elements

}

function locationHash(){
  return location.hash;
}

navigate();

if(!location.hash){
  location.hash = "#home";
}
