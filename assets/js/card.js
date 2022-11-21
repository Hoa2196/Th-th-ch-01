// Mở và đóng card khi click vào xem

// card 1, card của phần company
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

// card 2, card của phần company
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



// card 3, card của phần company
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


// card 4, card của phần company
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

// card 5, card của phần timeline, TT đầu tiên
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

// card 6, card của phần timeline, TT số 1
const card6Show = document.querySelector('.card6-btn')
const card6 = document.querySelector('#card-6')
const card6Close = document.querySelector('.card-6close')
const cardSix = document.querySelector('.js-card__text6')

function showCard6() {
    card6.classList.add('open')
}
function hideCard6() {
    card6.classList.remove('open')
}

card6Show.addEventListener('click', showCard6)
card6Close.addEventListener('click', hideCard6)

card6.addEventListener('click', hideCard6)

cardSix.addEventListener('click', function (event) {
    event.stopPropagation()
})

// card 7, card của phần timeline,  TT số 2
const card7Show = document.querySelector('.card7-btn')
const card7 = document.querySelector('#card-7')
const card7Close = document.querySelector('.card-7close')
const cardSeven = document.querySelector('.js-card__text7')

function showCard7() {
    card7.classList.add('open')
}
function hideCard7() {
    card7.classList.remove('open')
}

card7Show.addEventListener('click', showCard7)
card7Close.addEventListener('click', hideCard7)

card7.addEventListener('click', hideCard7)

cardSeven.addEventListener('click', function (event) {
    event.stopPropagation()
})

// card 8, card của phần timeline,  TT số 3
const card8Show = document.querySelector('.card8-btn')
const card8 = document.querySelector('#card-8')
const card8Close = document.querySelector('.card-8close')
const cardEight = document.querySelector('.js-card__text8')

function showCard8() {
    card8.classList.add('open')
}
function hideCard8() {
    card8.classList.remove('open')
}

card8Show.addEventListener('click', showCard8)
card8Close.addEventListener('click', hideCard8)

card8.addEventListener('click', hideCard8)

cardEight.addEventListener('click', function (event) {
    event.stopPropagation()
})

// card 9, card của phần timeline,  TT số 4
const card9Show = document.querySelector('.card9-btn')
const card9 = document.querySelector('#card-9')
const card9Close = document.querySelector('.card-9close')
const cardNine = document.querySelector('.js-card__text9')

function showCard9() {
    card9.classList.add('open')
}
function hideCard9() {
    card9.classList.remove('open')
}

card9Show.addEventListener('click', showCard9)
card9Close.addEventListener('click', hideCard9)

card9.addEventListener('click', hideCard9)

cardNine.addEventListener('click', function (event) {
    event.stopPropagation()
})

// card 10, card của phần timeline,  TT số 5
const card10Show = document.querySelector('.card10-btn')
const card10 = document.querySelector('#card-10')
const card10Close = document.querySelector('.card-10close')
const cardTen = document.querySelector('.js-card__text10')

function showCard10() {
    card10.classList.add('open')
}
function hideCard10() {
    card10.classList.remove('open')
}

card10Show.addEventListener('click', showCard10)
card10Close.addEventListener('click', hideCard10)

card10.addEventListener('click', hideCard10)

cardTen.addEventListener('click', function (event) {
    event.stopPropagation()
})

// card 11, card của phần timeline,  TT số 6
const card11Show = document.querySelector('.card11-btn')
const card11 = document.querySelector('#card-11')
const card11Close = document.querySelector('.card-11close')
const cardEleven = document.querySelector('.js-card__text11')

function showCard11() {
    card11.classList.add('open')
}
function hideCard11() {
    card11.classList.remove('open')
}

card11Show.addEventListener('click', showCard11)
card11Close.addEventListener('click', hideCard11)

card11.addEventListener('click', hideCard11)

cardEleven.addEventListener('click', function (event) {
    event.stopPropagation()
})

// card 12, card của phần timeline,  TT số 7
const card12Show = document.querySelector('.card12-btn')
const card12 = document.querySelector('#card-12')
const card12Close = document.querySelector('.card-12close')
const cardTwelve = document.querySelector('.js-card__text12')

function showCard12() {
    card12.classList.add('open')
}
function hideCard12() {
    card12.classList.remove('open')
}

card12Show.addEventListener('click', showCard12)
card12Close.addEventListener('click', hideCard12)

card12.addEventListener('click', hideCard12)

cardTwelve.addEventListener('click', function (event) {
    event.stopPropagation()
})