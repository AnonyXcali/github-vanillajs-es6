export let getList = function (){

const request = new Request('https://api.github.com/users/technoweenie/repos', {
	headers: new Headers({
		'Content-Type': 'text/plain',
    'Accept': 'application/vnd.github.v3+json',
    'Authorization' :'token 2830e50e86ef61e1b14f0f31837e14846bf14dbd'
	})
});

const storeMap = new Map();
const storeMap2 = new Map();
fetch(request)
.then(request => request.json())
.then(function(data){

for(let i = 0 ; i< data.length;i++){

  let name = data[i].name;
  let full_name = data[i].full_name;
  let avatar_id = data[i]['owner']['avatar_url'];

   storeMap.set( full_name : full_name,
     {
       name : name,
       avatar_id : avatar_id
     }

   )


 }

})


return storeMap;
}
