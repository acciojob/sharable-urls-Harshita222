// // your code here
// const btn = document.getElementById('button')
// btn.addEventListener("click", function (event)=>{

// 	let name = document.getElementById('name').value;
// 	let year = document.getElementById('year').value;

// 	let urlEle = document.getElementById('url');
// 	urlEle.textContent = `https://localhost:8080/? name=${name}&year=${year}`;
	
// })

const btn = document.getElementById('button');
btn.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const year = document.getElementById('year').value;

  const urlEle = document.getElementById('url');
  
  let newUrl = 'https://localhost:8080/';
  const params = [];
  
  if (name) {
    params.push(`name=${encodeURIComponent(name)}`);
  }
  
  if (year) {
    params.push(`year=${encodeURIComponent(year)}`);
  }
  
  if (params.length > 0) {
    newUrl += `?${params.join('&')}`;
  }
  
  urlEle.textContent = newUrl;
});
