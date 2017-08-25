//searchBox

$('.js-clearSearchBox').css('opacity', '0');

$('.js-searchBox-input').keyup(function() {
  if ($(this).val() !='' ) {
    $('.js-clearSearchBox').css('opacity', '1');
  } else {
    $('.js-clearSearchBox').css('opacity', '0');
  };

  $(window).bind('keydown', function(e)  {
    if(e.keyCode === 27) {
      $('.js-searchBox-input').val('');
    };
  });
});
// click the button
$('.js-clearSearchBox').click(function() {
  $('.js-searchBox-input').val('');
  $('.js-searchBox-input').focus();
  $('.js-clearSearchBox').css('opacity', '0');
});


let userVal = false;
let repoVal = false

window.myRepoFunction = function(){

  repoVal = true;
  falsifierUser();
  return repoVal;

}

window.myUserFunction = function(){

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

  if(!repoVal && userVal){
    alert('user');
    falsifierRepo();

  const request = new Request("https://api.github.com/users/"+text+"/repos", {
	headers: new Headers({
		'Content-Type': 'text/plain',
    'Accept': 'application/vnd.github.v3+json',
    'Authorization' :'token '
	})
});

 fetch(request)
.then(request => request.json())
.then(function(data){
//const ul = document.getElementById('authors');
console.log(data)
for(let i = 0 ; i< data.length;i++){

  let name = data[i].name;
  let full_name = data[i].full_name;
  let avatar_id = data[i]['owner']['avatar_url'];


// 	let li = createNode('li'),
// 			 img = createNode('img'),
// 			 span = createNode('span')
// 			 img.src = avatar_id;
// span.innerHTML = `${name} ${full_name}`;
// append(li, img); // Append all our elements
// 		append(li, span);
// 		append(ul, li);
  ;
 }
});


  }else if(!userVal && repoVal){
    alert('repo');
    falsifierUser();





  }


  if(!repoVal && !userVal){
    alert('Please choose either Repository or User');
  }

}
