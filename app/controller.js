//
// export function lol(textT){
//
// console.log(textT);
// const request = new Request("https://api.github.com/users/"+textT+"/repos", {
// 	headers: new Headers({
// 		'Content-Type': 'text/plain',
//     'Accept': 'application/vnd.github.v3+json',
//     'Authorization' :'token ea1edead3dadb7292dc6bd6353405d09c3f32ebe'
// 	})
// });
//
//
// function createNode(element) {
// 	return document.createElement(element); // Create the type of element you pass in the parameters
// }
//
// function append(parent, el) {
// 	return parent.appendChild(el); // Append the second parameter(element) to the first one
// }
//
//
//
// const storeMap = new Map();
// const storeMap2 = new Map();
// fetch(request)
// .then(request => request.json())
// .then(function(data){
// const ul = document.getElementById('authors');
// for(let i = 0 ; i< data.length;i++){
//
//   let name = data[i].name;
//   let full_name = data[i].full_name;
//   let avatar_id = data[i]['owner']['avatar_url'];
//
// 	storeMap.set(name : name, {
// 		full_name : full_name,
// 		avatar_id : avatar_id
// 	})
//
// 	let li = createNode('li'),
// 			 img = createNode('img'),
// 			 span = createNode('span')
// 			 img.src = avatar_id;
// span.innerHTML = `${name} ${full_name}`;
// append(li, img); // Append all our elements
// 		append(li, span);
// 		append(ul, li);
//  }
// });
//
// //console.log(storeMap);
//
//
//
//
// return storeMap;
//
//
// }
