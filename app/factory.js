export function renderUserList(){
  const request = new Request("https://api.github.com/users/"+text+"/repos",
  {
  headers: new Headers({
   'Content-Type': 'text/plain',
    'Accept': 'application/vnd.github.v3+json',
    'Authorization' :'token'
  })
  });

  fetch(request)
  .then(request => request.json())
  .then(function(data){
  console.log(data)

  });
}
