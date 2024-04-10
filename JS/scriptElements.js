const form = document.querySelector('.form-btn')
const painel = document.querySelector('#painel')
const optionsMine = document.querySelector('#optionsMine')
const myHidden = document.querySelectorAll('.myHidden')

/*The mouseover event of painel */
painel.addEventListener('mouseover',()=>{
    optionsMine.classList = 'options'
    for(let i = 0;i <= 4;i++){
        myHidden[i].style.visibility = 'visible'
    }
    form.id = ''
})
/*The mouseout event of painel */
painel.addEventListener('mouseout',()=>{
    optionsMine.classList = ''
    for(let i = 0;i <= 4;i++){
        myHidden[i].style.visibility = 'hidden'
    }
    form.id = 'index'
})
