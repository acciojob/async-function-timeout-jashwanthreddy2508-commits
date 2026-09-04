//your JS code here. If required.
function validate() {

let text=document.getElementById("text").value;
let delay=document.getElementById("delay").value;
let output=document.getElementById("output");

let promise=new Promise((resolve,reject)=>{

	setTimeout(()=>{
		resolve(text)
	},delay)
})
async function result() {
	let data=await promise;
	output.innerHTML+=`
	<p>${data}</p>
	`
}
	result();
}