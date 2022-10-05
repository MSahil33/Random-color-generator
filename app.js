const color_pallete = document.querySelector('.color-content'),
color_name = document.querySelector('.color-name'),
btn = document.querySelector('button'),
color_box = document.querySelector('.color-box');


const generateColor = ()=>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomvalue = '#'+ randomNumber.toString(16);
    color_box.value=randomvalue;
    color_name.innerText=randomvalue;
    
    //getting the value from color-picker
    color_box.addEventListener('input',()=>{
        color_name.innerText=color_box.value;
    })

    //Saving the text into the clipboard
    color_name.addEventListener('click',()=>{
        navigator.clipboard.writeText(color_box.value);
    });
    
}

btn.addEventListener('click',generateColor);
generateColor();