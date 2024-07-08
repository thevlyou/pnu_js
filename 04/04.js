
document.addEventListener('DOMContentLoaded', ()=>{
    const imgCom = document.querySelector('#com')
    const imgUser = document.querySelector('#user')
    const bts = document.querySelectorAll('#divContent button')
    const msg = document.querySelector('#msg') ;
  
    console.log(bts);
  
    for(let bt of bts) {
      bt.addEventListener('click', ()=>{
        const nCom = Math.floor(Math.random() * 6) + 1 ; 
        const nUser = parseInt(bt.textContent.charAt(0));

        imgCom.setAttribute('src', `./img/${nCom}.png`) ;
        imgUser.setAttribute('src', `./img/${nUser}.png`) ;
  
        if (nCom === nUser) {
          msg.innerHTML = '<h1 id="msgBlue">맞음</h1>';
        }
        else {
          msg.innerHTML = '<h1 id="msgRed">틀림</h1>';
        }
      }) ;
    }
  
  });