import {searchBoxAnim} from './animations';
import {navigate} from './routing';
import { renderUserList } from './factory';


let userVal = false;
let repoVal = false

window.myRepoFunction = function(){


  navigate();
  repoVal = true;
  falsifierUser();
  return repoVal;

}

window.myUserFunction = function(){

  navigate();
  userVal = true;
  falsifierRepo();
  return userVal;

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

  let text = document.getElementById('recvInput').value;
 console.log(text);



  if(!repoVal && userVal && location.hash === "#user"){
    alert('user');
    falsifierRepo();
    renderUserList();

  }else if(!userVal && repoVal){
    alert('repo');
    falsifierUser();

  }


  if(!repoVal && !userVal){
    alert('Please choose either Repository or User');
  }

}

searchBoxAnim();

window.addEventListener("hashchange", navigate)
