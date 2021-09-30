const form=document.querySelector('form');
const item=document.querySelector('#item');
const list=document.querySelector('#list');

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    list.innerHTML+=`<li>${item.value}</li>`
    item.value="";

});

list.addEventListener('click',function(e)
{
    if(e.target.classList.contains('checked'))
    {
        e.target.remove();
    }
    else{
        e.target.classList.add('checked');
    }

});