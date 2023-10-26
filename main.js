let inputTitle=document.querySelector('#title-notes'),
add=document.querySelector('#Add-btn'),
inputText=document.querySelector('#content-note'),
output=document.querySelector('#output');
let item,btnDel,h2,p,content;
add.addEventListener('click',function(e){
    e.preventDefault();
    if(inputTitle.value==' '| inputTitle.value==''){
        alert('Please make sure to enter the note title');
    }
    else if (inputText.value==' '| inputText.value==''){
        alert('Please make sure to enter the details');
    }
    else{
        
        item=document.createElement('div');
        btnDel=document.createElement('button');
        content=document.createElement('div');
        h2=document.createElement('h2');
        p=document.createElement('p');
        
        h2.innerHTML=inputTitle.value;
        p.innerHTML=inputText.value;
        btnDel.innerHTML="Remove";
       
        item.classList.add('item');
        btnDel.classList.add('remove-btn');
        h2.classList.add('title-note');
        p.classList.add('content-note');
        p.classList.add('pe-5');
       
        content.appendChild(h2);
        content.appendChild(p);
        item.appendChild(content);
        item.appendChild(btnDel);
       
        output.appendChild(item);
       
        inputTitle.value='';
        inputText.value='';
        console.log('ok');
    }
    btnDel.addEventListener('click',function(){
        output.removeChild(this.parentElement);
    })
})
