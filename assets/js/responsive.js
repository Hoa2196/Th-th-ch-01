
// Phần responsive timeline, các phần còn lại responsive bằng css

// mobile
let mb = window.matchMedia("(max-width: 739px)");
// table
let tb = window.matchMedia("(min-width: 740px) and (max-width: 1023px)");

function myFunction(x) {
    if (mb.matches) { // If moblie
        cssTimelineCardRight('flex-start');

        // kích thước card timeline thành 100%
        let styleCssTimelineCardBack = new StyleCss();
        styleCssTimelineCardBack.setWidth('100%');
        cssForAll('.time-card__area', styleCssTimelineCardBack);


        // Cho hình tròn ở giữa về bên trái
        let timelineIconLeft = document.querySelectorAll('.card-left .time-card__area .timeline-icon');
        for (let i = 0; i < timelineIconLeft.length; i++) {
            timelineIconLeft[i].style.display = 'none';
        }

        // Cho hình tròn bên phải ở giữa 
        let timelineIconRight = document.querySelectorAll('.card-right .time-card__area .timeline-icon');
        for (let i = 0; i < timelineIconRight.length; i++) {
            timelineIconRight[i].style.display = 'none';
        }


    } else if (tb.matches) { // if table
        cssTimelineCardRight('flex-start');

        // kích thước card timeline thành 100%
        let styleCssTimelineCardBack = new StyleCss();
        styleCssTimelineCardBack.setWidth('100%');
        cssForAll('.time-card__area', styleCssTimelineCardBack);

        // Cho hình tròn ở giữa về bên trái
        let timelineIconLeft = document.querySelectorAll('.card-left .time-card__area .timeline-icon');
        for (let i = 0; i < timelineIconLeft.length; i++) {
            timelineIconLeft[i].style.display = 'none';

        }

        // Cho hình tròn bên phải ở giữa 
        let timelineIconRight = document.querySelectorAll('.card-right .time-card__area .timeline-icon');
        for (let i = 0; i < timelineIconRight.length; i++) {
            timelineIconRight[i].style.display = 'none';
        }

    } else { // if pc
        cssTimelineCardRight('flex-end');

        // kích thước card timeline chia đều 2 cột
        let styleCssTimelineCardBack = new StyleCss();
        styleCssTimelineCardBack.setWidth('calc(50% - 140px)');
        cssForAll('.time-card__area', styleCssTimelineCardBack);

        // Phần line đỏ ở giữa
        let timelineLine = document.querySelector('.timeline-line');
        timelineLine.style.left = '50%';
        timelineLine.style.display = 'block';

        // Cho hình tròn bên trái ở giữa 
        let timelineIconLeft = document.querySelectorAll('.card-left .time-card__area .timeline-icon');
        for (let i = 0; i < timelineIconLeft.length; i++) {
            timelineIconLeft[i].style.left = '-135px';
            timelineIconLeft[i].style.display = 'block';

        }

        // Cho hình tròn bên phải ở giữa 
        let timelineIconRight = document.querySelectorAll('.card-right .time-card__area .timeline-icon');
        for (let i = 0; i < timelineIconRight.length; i++) {
            timelineIconRight[i].style.display = 'block';
            timelineIconRight[i].style.top = '15px';
            timelineIconRight[i].style.right = '-135px';
            timelineIconRight[i].style.left = 'unset';
        }
    }
}



myFunction(mb) // Call listener function at run time
mb.addListener(myFunction) // Attach listener function on state changes


myFunction(tb) // Call listener function at run time
tb.addListener(myFunction) // Attach listener function on state changes

// myFunction(pc) // Call listener function at run time
// pc.addListener(myFunction) // Attach listener function on state changes



// responsive thanh header
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// đóng mở mobile menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('.header-menu__item--link[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function() {
        header.style.height = null;
    }
}