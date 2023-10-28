const inputEl = document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
const olEl = document.getElementsByTagName('ol')[0];
btn.addEventListener('click', function(){
    if(inputEl.value==''){
        alert('Hooson baij bolohgui');
    }else{
        const liEl = document.createElement('li');
        liEl.innerText = inputEl.value;
        console.log(liEl);
        olEl.appendChild(liEl);
		inputEl.value='';	
		const delBtn = document.createElement('button');
		console.log(delBtn);
		delBtn.innerHTML = '<i class="bi bi-trash"></i>'
		liEl.appendChild(delBtn)
		const chBtn = document.createElement('button');
		console.log(chBtn);
		chBtn.innerHTML = '<i class="bi bi-pen"></i>'
		liEl.appendChild(chBtn)
		delBtn.className = 'del';
		chBtn.className = 'ch';
    }
});
olEl.addEventListener('click',(e)=>{
	console.log(e.target)
	let target = e.target
	let parentEl = target.parentElement;
	let del = parentEl.parentElement;
	let check = parentEl.parentElement;
	if(target.className=='bi bi-trash'|| target.ClassName=='delete'){
	del.remove();	
	}
	else if(target.className=="bi bi-pen"){
	check.classList.toggle("checked");
	saveData();
	}
})
localStorage.setItem('name','erdeneocir')
function saveData(){
	localStorage.setItem('todo',olEl.innerHTML);
}
function getData(){
	get = localStorage.getItem('todo')
	olEl.innerHTML=get
}
getData();