export function hideHome(){
   var home = document.getElementById("homeArea");
   home.style.display = "none";
}

export function showHome(){
  var showHome = document.getElementById("homeArea");
  showHome.style.display = "grid";
}

export function hideUserDetails(){
  var hideUserDet = document.getElementById("contentUser");
  hideUserDet.style.display = "none";
}

export function showUserDetails(){
  var hideUserDetInit =document.getElementById("contentUser");
  hideUserDetInit.style.display = "grid";
}

//hideUserDetails would run once.
hideUserDetails();
