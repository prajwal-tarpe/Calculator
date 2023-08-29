let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let digits = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (ele)=>{
        if(ele.target.innerHTML == '='){
            digits = eval(digits);
            input.value = digits;
        }
        else if(ele.target.innerHTML == 'AC'){
            digits = "";
            input.value = digits;
        }
        else if(ele.target.innerHTML == 'DEL'){
            digits = digits.substring(0,digits.length-1);
            input.value = digits;
        }
        else{
        digits += ele.target.innerHTML;
        input.value = digits;
        }
    })
})