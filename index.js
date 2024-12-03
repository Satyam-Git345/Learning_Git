document.getElementById('child').addEventListener('click', (e) => {
  console.log(`Child clicked from ${e.target.id}`);
},true);

document.getElementById('parent').addEventListener("click", (e) => {
    console.log(`parent clicked from ${e.target.id}`);
},true);

document.getElementById('grantparent').addEventListener("click", (e) => {
    console.log(`grantparent clicked from ${e.target.id}`);
    e.stopPropagation();
},true);
