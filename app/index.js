import {searchBoxAnim} from './animations';
import {navigate} from './routing';
import { renderUserList , renderRepoList } from './factory';
import { checkCurrentUrl , manipulateLocation } from './routing';
import { hideHome , showHome , hideUserDetails ,showUserDetails} from './pageManip';

let userVal = false;
let repoVal = false
export var prevHash = [];

window.myRepoFunction = function(){

  navigate();
  hideUserDetails();
  repoVal = true;
  falsifierUser();
  return repoVal;

}

window.myUserFunction = function(){



  //alert(location.hash);
  if( prevHash.length > 0 && location.hash === "#home"){
 window.history.back();
  }

  var userUI = document.getElementById("contentUser");
  if(userUI.style.display === "none"){
    showUserDetails();
  }
  hideHome();
  userVal = true;
  falsifierRepo();
  return userVal;

}

window.returnToHome = function(){
  prevHash.push(location.hash);
hideUserDetails();
  var homeUI = document.getElementById("homeArea");
 if(homeUI.style.display === "none"){
//
  showHome();
 }
  falsifierUser();
  falsifierRepo();
}

let falsifierUser = function(){
  userVal = false;

  return userVal;
}
let falsifierRepo = function(){
  repoVal = false;
  return repoVal;
}



window.textSend = function(){

  let CurrentHash = location.hash;
  CurrentHash = CurrentHash.substr(0,5);

  let text = document.getElementById('recvInput').value;
  if(!repoVal && userVal && location.hash === "#user" || CurrentHash === "#user" ){
    falsifierRepo();
    renderUserList(text);
    renderRepoList(text);
  }else if(!userVal && repoVal){
    falsifierUser();
  }

  if(!repoVal && !userVal){
    alert('Please choose either Repository or User');
  }

}

searchBoxAnim();
window.addEventListener("hashchange", navigate);
