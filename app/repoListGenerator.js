function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}



export function repoGenerator(data){

  var targetDiv = document.getElementById("contentUser");

  var tableDiv = createNode("div");
  tableDiv.setAttribute("id","repoList");
  tableDiv.style.cssText = "grid-row:2/4;  grid-column:2/4;overflow-y : scroll; font-family: arial, sans-serif;border-collapse: collapse;"
  var tableTag = createNode("table");

  var dataLength = data.length;

  var tableHeaderBlock = createNode("tr");
  var tableHeaderName = createNode("th");
  tableHeaderName.textContent = "Name";
  var tableHeaderDesc = createNode("th");
  tableHeaderDesc.textContent = "Description";
  var tableHeaderCreatedAt = createNode("th");
  tableHeaderCreatedAt.textContent = "Created On";
  var tableHeaderLanguage = createNode("th");
  tableHeaderLanguage.textContent = "Language";
  var tableHeaderIssues = createNode("th");
  tableHeaderIssues.textContent = "Issues";
  var tableHeaderFork = createNode("th");
  tableHeaderFork.textContent = "Forks";

  append(targetDiv,tableDiv);
  append(tableDiv,tableTag);
  append(tableTag,tableHeaderBlock);
  append(tableHeaderBlock,tableHeaderName);
  append(tableHeaderBlock,tableHeaderDesc);
  append(tableHeaderBlock,tableHeaderCreatedAt);
  append(tableHeaderBlock,tableHeaderLanguage);
  append(tableHeaderBlock,tableHeaderIssues);
  append(tableHeaderBlock,tableHeaderFork);



  for(let i=0; i<dataLength ;i++){

     var name = data[i].name;
     var repoDescription = data[i].description;
     var createdAt = data[i].created_at;
     var language = data[i].language;
     var issues = data[i].open_issues;
     var forks = data[i].forks;


  var tableContentBlock = createNode("tr");
  var tableNameBlock = createNode("td");
  var tableDescpBlock = createNode("td");
  var tableCreatedBlock = createNode("td");
  var tableLanguageBlock = createNode("td");
  var tableIssuesBlock = createNode("td");
  var tableForksBlock = createNode("td");

     /*
     Content-block
     */

     tableNameBlock.textContent = name;
     tableDescpBlock.textContent = repoDescription;
     tableCreatedBlock.textContent = createdAt;
     tableLanguageBlock.textContent = language;
     tableIssuesBlock.textContent = issues;
     tableForksBlock.textContent = forks;


      /*
      append all!
      */

        append(tableTag,tableContentBlock);
        append(tableContentBlock,tableNameBlock);
        append(tableContentBlock,tableDescpBlock);
        append(tableContentBlock,tableCreatedBlock);
        append(tableContentBlock,tableLanguageBlock);
        append(tableContentBlock,tableIssuesBlock);
        append(tableContentBlock,tableForksBlock);

  }


}
