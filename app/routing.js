import { renderUserList } from './factory';
// function currHash(){
//   let CurrentHashRouter = location.hash;
//   CurrentHashRouter = CurrentHashRouter.substr(0,5);
//    return CurrentHashRouter;
//
//  }

function hrefSplitter(){
  var currentHref = window.location.href;
  var storeHref = currentHref.split("?");
  return storeHref[2];
}

export function checkCurrentTag(){
   var currentUrl = window.location.href;
   var splitCurrUrl = currentUrl.split("/");
   var slashTag = splitCurrUrl[splitCurrUrl.length-1];
   renderUserList(slashTag);

}



export function navigate(){
 return locationHash();
}

function locationHash(){
  return window.location.hash;
}


if(!window.location.hash){
  window.location.hash = "#home";
}

window.addEventListener("hashchange", navigate);
