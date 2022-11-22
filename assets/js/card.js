// Mở và đóng card khi click vào xem
for (let i = 1; i < 13; i++) {
    let card1Show = document.querySelector('.card'+i+'-btn');
    let card1 = document.querySelector('#card-'+i);
    let card1Close = document.querySelector('.card-'+i+'close');
    let cardOne = document.querySelector('.js-card__text'+i);
    function showCard1() {
        card1.classList.add('open')
    }
    function hideCard1() {
        card1.classList.remove('open')
    }
    
    card1Show.addEventListener('click', showCard1)
    card1Close.addEventListener('click', hideCard1)
    
    card1.addEventListener('click', hideCard1)
    
    cardOne.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}