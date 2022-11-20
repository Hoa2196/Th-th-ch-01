// Mở và đóng card khi click vào xem

// card 1
const card1Show = document.querySelector('.card1-btn')
const card1 = document.querySelector('#card-1')
const card1Close = document.querySelector('.card-1close')
const cardOne = document.querySelector('.js-card__text1')

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

// card 2
const card2Show = document.querySelector('.card2-btn')
const card2 = document.querySelector('#card-2')
const card2Close = document.querySelector('.card-2close')
const cardTwo = document.querySelector('.js-card__text2')

function showCard2() {
    card2.classList.add('open')
}
function hideCard2() {
    card2.classList.remove('open')
}

card2Show.addEventListener('click', showCard2)
card2Close.addEventListener('click', hideCard2)

card2.addEventListener('click', hideCard2)

cardTwo.addEventListener('click', function (event) {
    event.stopPropagation()

})



// card 3
const card3Show = document.querySelector('.card3-btn')
const card3 = document.querySelector('#card-3')
const card3Close = document.querySelector('.card-3close')
const cardThree = document.querySelector('.js-card__text3')

//  Hàm hiển thị card
function showCard3() {
    card3.classList.add('open')
}
//  Hàm ẩn card
function hideCard3() {
    card3.classList.remove('open')
}

//  Nghe hành vi click để ẩn hoặc hiển card
card3Show.addEventListener('click', showCard3)
card3Close.addEventListener('click', hideCard3)

//  click ra ngoài thì card ẩn đi
card3.addEventListener('click', hideCard3)


//  Ngăn chặn hành vi click vào card là card ẩn đi
cardThree.addEventListener('click', function (event) {
    event.stopPropagation()

})


// card 4
const card4Show = document.querySelector('.card4-btn')
const card4 = document.querySelector('#card-4')
const card4Close = document.querySelector('.card-4close')
const cardFour = document.querySelector('.js-card__text4')

function showCard4() {
    card4.classList.add('open')
}
function hideCard4() {
    card4.classList.remove('open')
}

card4Show.addEventListener('click', showCard4)
card4Close.addEventListener('click', hideCard4)

card4.addEventListener('click', hideCard4)

cardFour.addEventListener('click', function (event) {
    event.stopPropagation()

}) 


// card 5
const card5Show = document.querySelector('.card5-btn')
const card5 = document.querySelector('#card-5')
const card5Close = document.querySelector('.card-5close')
const cardFive = document.querySelector('.js-card__text5')

function showCard5() {
    card5.classList.add('open')
}
function hideCard5() {
    card5.classList.remove('open')
}

card5Show.addEventListener('click', showCard5)
card5Close.addEventListener('click', hideCard5)

card5.addEventListener('click', hideCard5)

cardFive.addEventListener('click', function (event) {
    event.stopPropagation()

})

