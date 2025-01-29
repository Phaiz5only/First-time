const count = document.getElementById('count');

const tapBtn = document.getElementById('increment');

const decreaseBtn = document.getElementById('decrement')

const resetBtn = document.getElementById('reset');

let counter = 0;

tapBtn.addEventListener('click',increase)

function increase(){
    counter = counter + 1;
    count.innerText = counter;
}

decreaseBtn.addEventListener('click', decrease)

function decrease(){
    if(counter == 0){
        counter = counter
    }else{
        counter = counter - 1
    }
    count.innerText = counter;
}

resetBtn.addEventListener('click', reset)

function reset(){
    counter = 0
    count.innerText = counter
}
