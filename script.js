// your code here
const btn = document.getElementById('button')
btn.addEventListner("click", (event)=>{

	let name = document.getElementById('name').value;
	let year = document.getElementById('year').value;

	let url = document.getElementById('url').value;
	url.textContent = `https://localhost:8080/? name=${name}&year=${year}`;
	
})