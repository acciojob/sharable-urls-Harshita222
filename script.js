// your code here
const btn = document.getElementById('button')
btn.addEventListener("click", function (event)=>{

	let name = document.getElementById('name').value;
	let year = document.getElementById('year').value;

	let urlEle = document.getElementById('url');
	urlEle.textContent = `https://localhost:8080/? name=${name}&year=${year}`;
	
})