let p1btn=document.querySelector('#p1btn');
let p2btn=document.querySelector('#p2btn');
let reset=document.querySelector('#reset');
let k=document.querySelector('#p1Score');
let l=document.querySelector('#p2Score');
let playto=document.querySelector('#playto');
let p1scr=0,p2scr=0,winscr=3;
let gameover=false;
playto.addEventListener('change',function(e){
    winscr=parseInt(this.value);
    set();
})
p1btn.addEventListener('click',(e)=>{
    if(!gameover)
    {
        parseInt('p1scr');
        p1scr++;
        if(p1scr===winscr)
        {
            gameover=true;  
            k.classList.add('has-text-success');
            l.classList.add('has-text-danger');
            p1btn.disabled=true;
            p2btn.disabled=true;
        }
        k.textContent=p1scr;
    }
})
p2btn.addEventListener('click',(e)=>{
    if(!gameover)
    {
        parseInt('p2scr');
        p2scr++;
        if(p2scr===winscr)
        {
            gameover=true;  
            l.classList.add('has-text-success');
            k.classList.add('has-text-danger');
            p1btn.disabled=true;
            p2btn.disabled=true;
        }
        l.textContent=p2scr;
    }
})
reset.addEventListener('click',set);
function set(){
    k.innerText=`0`;
    l.innerText='0';
    gameover=false;
    p1scr=0;
    p2scr=0;
    k.classList.remove('has-text-success','has-text-danger');
    l.classList.remove('has-text-success','has-text-danger');
    p1btn.disabled=false;
    p2btn.disabled=false;
}