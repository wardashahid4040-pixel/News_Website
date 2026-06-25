let x = () =>{
    alert('Your request is being processed.')

    setTimeout(()=>{
        alert('Form submited succsefully')
        console.log('fghs')
        window.location='thankyou.html';
    },1200)
    
}

let c = document.body.getElementsByClassName('button')[0];

c.addEventListener('click', x );
