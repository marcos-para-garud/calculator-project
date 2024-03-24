




let string="";
let buttons=document.querySelectorAll('.buttons');
// const buttons = document.querySelectorAll('button'); // Assuming buttons is a NodeList of buttons

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        // console.log(e.target);
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='AC')
        {
            string="";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='C')
        {
            
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
       
    });
}


