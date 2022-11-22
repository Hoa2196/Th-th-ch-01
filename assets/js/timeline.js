
let timeline = document.getElementById("timeline");

// ADD HTML phần timeline
function addHtmlInTimeline() {
    
    var mảng = [
        {
            tiêuĐề:"Tuần thử thách đầu tiên",
            tên:"Sử dụng HTML, CSS, Javascript để thiết kế giao diện website được cung cấp",
            link:"https://hoant.thuctap.inevn.com/WHC-training/index.html",            
        },
        {
            tiêuĐề:"Bài thử thách 01",
            tên:"Lập 01 website giới thiệu về bản thân và thông tin quá trình thực tập tại I&E Vietnam",
            link:"",
        },
        {
            tiêuĐề:"Bài thử thách 02",
            tên:"Sử dụng HTML, CSS, Javascript viết minigame theo chủ đề game bốc thăm",
            link:"",
        },
        {
            tiêuĐề:"Bài thử thách 03",
            tên:"Sử dụng quy chuẩn code của công ty được đào tạo để thiết kế 02 giao diện theo mẫu thiết kế được cung cấp",
            link:"",
        },
        {
            tiêuĐề:"Bài thử thách 04",
            tên:"Sử dụng INEVO để thiết kế 01 website động lấy dữ liệu thực tế từ hệ thống nội bộ ra website, theo bản thân thiết kế đã được cung cấp",
            link:"",
        },
        {
            tiêuĐề:"Bài thử thách 05",
            tên:"Sử dụng kiến thức đã được đào tạo, bổ sung các trang con và tính năng nâng cao cho website tại Thử thách 04. Tạo 01 website mới với đầy đủ tính năng hoàn chỉnh theo mẫu giao diện được cung cấp.",
            link:"",
        },
        {
            tiêuĐề:"Bài thử thách 06",
            tên:"Thiết kế giao diện phần mềm trên hệ thống nội bộ INEVO theo bản thiết kế được cung cấp",
            link:"",
        },
        {
            tiêuĐề:"Bài thử thách 07",
            tên:"Sử dụng Bảng quản trị trên hệ thống mạng nội bộ INEVO để thực hiện phần mềm quản lý bài viết của bản thân trên hệ thống INEVO",
            link:"",
        },
    ];

    timeline.innerHTML =`<h2 id="timeline-heading">Chi tiết, timeline quá trình thực tập tại I&E</h2>
                        <div class="timeline-line"></div>`;
    for (let i = 0; i < mảng.length; i++) {
        const O = mảng[i];
        timeline.innerHTML +=   `
                            <div class="timeline-card card-`+(i%2?"left":"right")+`">
                                <div onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">
                                        0`+i+`
                                    </div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>`+O.tiêuĐề+`</h2>
                                        </div>
                                        <div class="timeline-info__text card-`+i+`">
                                            <div class="timeline-info__text--name">
                                                <p><b>Tên thử thách: </b>`+O.tên+`
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="`+O.link+`" target="_blank">Link thử thách đã làm</a>
                                            </div>
                                            <div class="timeline-btn card`+(i+5)+`-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> `; 
    }   
timeline.style.width = '1200px';
timeline.style.position = 'relative';
timeline.style.maxWidth = '100%';
timeline.style.margin = 0;
timeline.style.marginLeft = 'auto';
timeline.style.marginRight = 'auto';
timeline.style.marginTop = '100px';  
timeline.style.fontSize = '1.2rem';
timeline.style.marginBottom = '40px';  

}
addHtmlInTimeline();
   


// css phần timeline-line, vạch ở giữa
function cssTimelineLine() {
    let timelineLine = document.querySelector('.timeline-line');
    timelineLine.style.position = 'absolute';
    timelineLine.style.height = '90%';
    timelineLine.style.width = '4px';
    timelineLine.style.left = '50%';
    timelineLine.style.top = '200px';
    timelineLine.style.backgroundColor = 'orangered';
    timelineLine.style.transform = 'translateX(-50%)';
}
cssTimelineLine();


// css phần timeline-info, phần thông tin thử thách
function cssTimelineInfo() {
    let timelineInfo = document.querySelectorAll('.timeline-info');
    for(let i = 0; i < timelineInfo.length; i++) {
        timelineInfo[i].style.color = "#fff";
        timelineInfo[i].style.lineHeight = "1.5";
    }
}
cssTimelineInfo();

// link thử thách
function cssTimelineInfoLink() {
    let timelineInfoLink = document.querySelectorAll('.timeline-info__text--link');
    for(let i = 0; i < timelineInfoLink.length; i++) {
        timelineInfoLink[i].style.marginTop = "20px";
    }
}
cssTimelineInfoLink();

// link thử thách
function cssTimelineInfoLinka() {
    let timelineInfoLinka = document.querySelectorAll('.timeline-info__text--link a');
    for(let i = 0; i < timelineInfoLinka.length; i++) {
        timelineInfoLinka[i].style.color = "#fff";
    }
}
cssTimelineInfoLinka();

// timeline-btn
function cssTimelineInfoBtn() {
    let timelineInfoBtn = document.querySelectorAll('.timeline-btn');
    for(let i = 0; i < timelineInfoBtn.length; i++) {
        timelineInfoBtn[i].style.backgroundColor = "#fff";
        timelineInfoBtn[i].style.color = "#333";
        timelineInfoBtn[i].style.marginTop = "20px";
        timelineInfoBtn[i].style.textAlign = "center";
        timelineInfoBtn[i].style.fontSize = "20px";
        timelineInfoBtn[i].style.borderRadius = "25px";
        timelineInfoBtn[i].style.cursor = "pointer";
        timelineInfoBtn[i].style.display = "inline-block";
        timelineInfoBtn[i].style.padding = "4px 16px";
    }
}
cssTimelineInfoBtn();



// css phần timeline-card, phần khung card
function cssTimelineCard() {
    let timelineCard = document.querySelectorAll('.timeline-card');
    for(let i = 0; i < timelineCard.length; i++) {
        timelineCard[i].style.display = 'flex';
    }
}
cssTimelineCard();


// css hover phần timeline-card, phần khung card
function hoverInTimeCardArea(a) {
    a.style.backgroundImage = "linear-gradient(to top,#ff6968,#cf2128)";
}
function hoverOutTimeCardArea(a) {
    a.style.background = "rgb(51, 51, 51)";
}


// css phần card về bên phải
function cssTimelineCardLeft() {
    let timelineCardLeft = document.querySelectorAll('.card-right');
    for(let i = 0; i < timelineCardLeft.length; i++) {
        timelineCardLeft[i].style.display = "flex";
        timelineCardLeft[i].style.justifyContent = 'flex-end';
    }
}
cssTimelineCardLeft();

// css phần card về bên phải
function cssTimelineCardRight() {
    let timelineCardRight = document.querySelectorAll('.card-left');
    for(let i = 0; i < timelineCardRight.length; i++) {
        timelineCardRight[i].style.justifyContent = 'flex-start';
        timelineCardRight[i].style.display = "flex";
    }
}
cssTimelineCardRight();

// css phần nền của card
let styleCssTimelineCardBack = new StyleCss();
styleCssTimelineCardBack.setBackground('#333');
styleCssTimelineCardBack.setBorderRadius('16px');
styleCssTimelineCardBack.setWidth('calc(50% - 70px)');
styleCssTimelineCardBack.setPadding('20px')
styleCssTimelineCardBack.setPosition('relative');
styleCssTimelineCardBack.setMargin('0');
cssForAll('.time-card__area', styleCssTimelineCardBack);


// css phần mũi tên tam giác nhỏ bên trái
function cssTimelineCardLeftBefore() {
    let timelineCardLeftBefore = document.querySelectorAll('.card-left .time-card__area::before');
    for(let i = 0; i < timelineCardLeftBefore.length; i++) {
        timelineCardLeftBefore[i].style.right = '-7px';
    }
}
cssTimelineCardLeftBefore();

 // css phần hình tròn đánh số ở giữa
 function cssTimelineIcon() {
    let timelineIcon = document.querySelectorAll('.timeline-icon');
    for(let i = 0; i < timelineIcon.length; i++) {
        timelineIcon[i].style.position = 'absolute';
        timelineIcon[i].style.backgroundColor = '#ec2322';
        timelineIcon[i].style.height = '70px';
        timelineIcon[i].style.width = '70px';
        timelineIcon[i].style.textAlign = 'center';
        timelineIcon[i].style.lineHeight = '70px';
        timelineIcon[i].style.borderRadius = '50%';
        timelineIcon[i].style.color = '#fff';
        timelineIcon[i].style.fontSize = '23px';
    }
}
cssTimelineIcon();

// css phần hình tròn đánh số ở giữa bên phải
function cssTimelineIconRight() {
    let timelineIconRight = document.querySelectorAll('.card-right .time-card__area .timeline-icon');
    for(let i = 0; i < timelineIconRight.length; i++) {
        timelineIconRight[i].style.top = '64px';
        timelineIconRight[i].style.left = '-104px';
        // timelineIconRight[i].style.left = '526px';
    }
}
cssTimelineIconRight();

// css phần hình tròn đánh số ở giữa bên trái
function cssTimelineIconLeft() {
    let timelineIconLeft = document.querySelectorAll('.card-left .time-card__area .timeline-icon');
    for(let i = 0; i < timelineIconLeft.length; i++) {
        timelineIconLeft[i].style.top = '64px';
        timelineIconLeft[i].style.right = '-104px';
    }
}
cssTimelineIconLeft();





