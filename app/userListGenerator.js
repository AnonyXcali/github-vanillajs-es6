import {navigate} from './routing';

function getCurrentSearch(){

  var getCurrentLoc = navigate();
  var getCurrentLocSearch = getCurrentLoc.substr(13,getCurrentLoc.length-1);

 return getCurrentLocSearch;

}

function replaceHash(recvSearch){
 var searchItem =  getCurrentSearch();
 var currentHashNow = navigate();
 currentHashNow = currentHashNow.replace(searchItem,recvSearch);
 return currentHashNow;
}

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}


export function userListCreator(data){

 var targetDiv = document.getElementById('contentUser');
 var targetDivUrl = document.getElementById('targetResults');

 let userName = data.login;
 let userPic = data.avatar_url;
 let userBio = data.bio;
 let count = data.public_repos;
 let email = data.email;
 let blog = data.blog;
 let urlgh = data.html_url;



if(targetDiv.children.length > 0)
{
window.history.pushState(null,null,replaceHash(userName));
}else{
  window.history.pushState(null,null,`${navigate()}/result/${userName}`);
}


 if(targetDiv.children.length > 0){
   while (targetDiv.firstChild) {
    targetDiv.removeChild(targetDiv.firstChild);
    }
 }

//lol

const otherDiv = createNode("div");
otherDiv.setAttribute("id","extraContent");



const emailHref = createNode("a");
emailHref.setAttribute("href",email);
emailHref.setAttribute("id","email");

const blogHref = createNode("a");
blogHref.setAttribute("href",blog);
blogHref.setAttribute("id","blog");


const gitHubHRef = createNode("a");
gitHubHRef.setAttribute("href",urlgh);
gitHubHRef.setAttribute("id","github");





  const picTag = createNode("div");
  picTag.setAttribute("id","pictureUser");
  const innerPicDiv = createNode("div");
  innerPicDiv.setAttribute("id","pic");
  innerPicDiv.style.cssText = `background : url(${userPic}) center no-repeat ; background-size:236px;`;
  const userDetails  = createNode("div");
  userDetails.setAttribute("id","userInitDetails");
  const userNameDet = createNode("H1");
  userNameDet.setAttribute("id","userName");
  userNameDet.textContent = userName;
  const repoContTag = createNode("p");
  repoContTag.setAttribute("id" , "repoCount");
  repoContTag.textContent = `Repos : ${count}`;
  const bioTag = createNode("p");
  bioTag.setAttribute("id" , "bio");
  bioTag.textContent = userBio;

  append(userDetails,userNameDet);
  append(userDetails,repoContTag);
  append(userDetails,bioTag);
  append(picTag,innerPicDiv);
  append(targetDiv,picTag);
  append(targetDiv,userDetails);
  append(targetDiv,otherDiv);
  append(otherDiv,emailHref);
  append(otherDiv,blogHref);
  append(otherDiv,gitHubHRef);


 }
