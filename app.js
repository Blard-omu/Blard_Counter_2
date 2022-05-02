const result = document.querySelector('.result');
const decrease = document.querySelector('.btn_dec');
const reset = document.querySelector('.btn_res');
const increase = document.querySelector('.btn_inc');

//For decrease
decrease.addEventListener('click', ()=>{
    result.innerHTML --;
    color();
});

//For reset
reset.addEventListener('click', ()=>{
    result.innerHTML = 00;
    color();
});

//For increase
increase.addEventListener('click', ()=>{
    result.innerHTML ++;
    color();
})

//For color change
function color() {
    //less than 0
    if(result.innerHTML < 0){
        result.style.color = '#f03e3e';
    }
    //Greater than 0
    else if(result.innerHTML > 0){
        result.style.color = '#37b24d';
    }
    //For eqaul to zero
    else{
        result.style.color = '#ffffff'
    }
}