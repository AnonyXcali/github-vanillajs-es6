import { userListCreator } from './userListGenerator';
import { navigate } from './routing';
import { repoGenerator } from './repoListGenerator';


export function renderUserList(text){



  const request = new Request("https://api.github.com/users/"+text,
  {
  headers: new Headers({
   'Content-Type': 'text/plain',
    'Accept': 'application/vnd.github.v3+json',
    'Authorization' :'token '
  })
  });
  //location.hash = navigate()+"/searchUser/"+`${text}`;

  fetch(request)
  .then(request => request.json())
  .then(function(data){
  userListCreator(data);

  });
}


export function renderRepoList(text){



  const request = new Request("https://api.github.com/users/"+text+"/repos",
  {
  headers: new Headers({
   'Content-Type': 'text/plain',
    'Accept': 'application/vnd.github.v3+json',
  })
  });
  //location.hash = navigate()+"/searchUser/"+`${text}`;

  fetch(request)
  .then(request => request.json())
  .then(function(data){
  repoGenerator(data);

  });
}
