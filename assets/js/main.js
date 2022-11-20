
let timeline = document.getElementById("timeline");

// ADD HTML phần timeline
function addHtmlInTimeline() {
    timeline.innerHTML =   `
                            <h2 id="timeline-heading">Chi tiết, timeline quá trình thực tập tại I&E</h2>
                            <div class="timeline-line"></div>
                            <div class="timeline-card card-left">
                                <div onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">
                                        00
                                    </div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>Tuần thử thách đầu tiên</h2>
                                        </div>
                                        <div class="timeline-info__text card-5">
                                            <div class="timeline-info__text--name">
                                                <p><strong>Tên thử thách: </strong>Sử dụng HTML, CSS, Javascript để thiết kế giao diện
                                                website được cung cấp
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="https://thuctap.inevn.com/nguyenthihoa/WHC-training/index.html" target="_blank">Link thử thách đã làm</a>
                                            </div>
                                            <div class="timeline-btn card5-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-card card-right">
                                <div  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">01</div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>Bài thử thách 01</h2>
                                        </div>
                                        <div class="timeline-info__text">
                                            <div class="timeline-info__text--name">
                                                <p><strong>Tên thử thách: </strong>
                                                Lập 01 website giới thiệu về bản thân và thông tin quá trình thực tập tại I&E Vietnam
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="#">Link thử thách</a>
                                            </div>
                                            <div class="timeline-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-card card-left">
                                <div  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">02</div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>Bài thử thách 02</h2>
                                        </div>
                                        <div class="timeline-info__text">
                                            <div class="timeline-info__text--name">
                                                <p><strong>Tên thử thách: </strong>Sử dụng HTML, CSS, Javascript viết
                                                minigame theo chủ đề game bốc thăm
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="#">Link thử thách</a>
                                            </div>
                                            <div class="timeline-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-card card-right">
                                <div  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">03</div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>Bài thử thách 03</h2>
                                        </div>
                                        <div class="timeline-info__text">
                                            <div class="timeline-info__text--name">
                                                <p><strong>Tên thử thách: </strong>Sử dụng quy chuẩn code của công ty được đào tạo để 
                                                thiết kế 02 giao diện theo mẫu thiết kế được cung cấp.
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="#">Link thử thách</a>
                                            </div>
                                            <div class="timeline-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-card card-left">
                                <div  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">04</div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>Bài thử thách 04</h2>
                                        </div>
                                        <div class="timeline-info__text">
                                            <div class="timeline-info__text--name">
                                                <p><strong>Tên thử thách: </strong>Sử dụng INEVO để thiết kế 01 website động
                                                lấy dữ liệu thực tế từ hệ thống nội bộ ra website, theo bản thân thiết kế đã được cung cấp
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="#">Link thử thách</a>
                                            </div>
                                            <div class="timeline-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-card card-right">
                                <div  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">05</div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>Bài thử thách 05</h2>
                                        </div>
                                        <div class="timeline-info__text">
                                            <div class="timeline-info__text--name">
                                                <p><strong>Tên thử thách: </strong>Sử dụng kiến thức đã được đào tạo, bổ sung các trang con 
                                                và tính năng nâng cao cho website tại Thử thách 04. Tạo 01 website mới với đầy đủ tính
                                                năng hoàn chỉnh theo mẫu giao diện được cung cấp.
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="#">Link thử thách</a>
                                            </div>
                                            <div class="timeline-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-card card-left">
                                <div  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">06</div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>Bài thử thách 06</h2>
                                        </div>
                                        <div class="timeline-info__text">
                                            <div class="timeline-info__text--name">
                                                <p><strong>Tên thử thách: </strong>Thiết kế giao diện phần mềm trên hệ thống nội bộ INEVO
                                                theo bản thiết kế được cung cấp
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="#">Link thử thách</a>
                                            </div>
                                            <div class="timeline-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-card card-right">
                                <div  onmouseover="hoverInTimeCardArea(this)" onmouseout="hoverOutTimeCardArea(this)"  class="time-card__area">
                                    <div class="timeline-icon">07</div>
                                    <div class="timeline-info">
                                        <div class="timeline-info__title">
                                            <h2>Bài thử thách 07</h2>
                                        </div>
                                        <div class="timeline-info__text">
                                            <div class="timeline-info__text--name">
                                                <p><strong>Tên thử thách: </strong>Sử dụng Bảng quản trị trên hệ thống mạng nội bộ INEVO
                                                để thực hiện phần mềm quản lý bài viết của bản thân trên hệ thống INEVO
                                                </p>
                                            </div>
                                            <div class="timeline-info__text--link" title="click vào đây">
                                                <a href="#">Link thử thách</a>
                                            </div>
                                            <div class="timeline-btn">
                                                <p>Xem chi tiết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> `; 
timeline.style.width = '1200px';
timeline.style.position = 'relative';
timeline.style.maxWidth = '100%';
timeline.style.margin = 0;
timeline.style.marginLeft = 'auto';
timeline.style.marginRight = 'auto';
timeline.style.marginTop = '40px';  
timeline.style.fontSize = '1.2rem';  
}
addHtmlInTimeline();


// css phần tiêu đề chữ timeline
function cssTimelineHeading() {
    let TimelineHeading = document.getElementById('timeline-heading');
    TimelineHeading.style.padding = '0 40px 40px 40px';
}
cssTimelineHeading();

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



// css phần card về bên trái
function cssTimelineCardLeft(justifyContent) {
    let timelineCardLeft = document.querySelectorAll('.card-right');
    for(let i = 0; i < timelineCardLeft.length; i++) {
        timelineCardLeft[i].style.justifyContent = justifyContent;
    }
}
cssTimelineCardLeft('flex-star');

// css phần card về bên phải
function cssTimelineCardRight(justifyContent) {
    let timelineCardRight = document.querySelectorAll('.card-left');
    for(let i = 0; i < timelineCardRight.length; i++) {
        timelineCardRight[i].style.justifyContent = justifyContent;
    }
}
cssTimelineCardRight('flex-end');

// css phần nền của card
let styleCssTimelineCardBack = new StyleCss();
styleCssTimelineCardBack.setBackground('#333');
styleCssTimelineCardBack.setBorderRadius('16px');
styleCssTimelineCardBack.setWidth('calc(50% - 140px)');
styleCssTimelineCardBack.setPadding('20px')
styleCssTimelineCardBack.setPosition('relative');
styleCssTimelineCardBack.setMargin('40px');
cssForAll('.time-card__area', styleCssTimelineCardBack);


// css phần mũi tên tam giác nhỏ
let styleCssTimelineCardBefore = new StyleCss();
styleCssTimelineCardBefore.setContent("''");
styleCssTimelineCardBefore.setPosition("absolute");
styleCssTimelineCardBefore.setHeight('15px');
styleCssTimelineCardBefore.setWidth("15px");
styleCssTimelineCardBefore.setBackground("red");
styleCssTimelineCardBefore.setTop("28px");
styleCssTimelineCardBefore.setZIndex("-1");
styleCssTimelineCardBefore.setTransform('rotate(45deg)');
cssForAll('.time-card__area::before', styleCssTimelineCardBefore);

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
        timelineIconRight[i].style.top = '15px';
        timelineIconRight[i].style.right = '-135px';
        // timelineIconRight[i].style.left = '526px';
    }
}
cssTimelineIconRight();

// css phần hình tròn đánh số ở giữa bên trái
function cssTimelineIconLeft() {
    let timelineIconLeft = document.querySelectorAll('.card-left .time-card__area .timeline-icon');
    for(let i = 0; i < timelineIconLeft.length; i++) {
        timelineIconLeft[i].style.top = '15px';
        timelineIconLeft[i].style.left = '-135px';
    }
}
cssTimelineIconLeft();





