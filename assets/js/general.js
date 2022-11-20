
// css for all class
function cssForAll(className, style) {
    let classList = document.querySelectorAll(className);
    
    for(let i = 0; i < classList.length; i++) {
        classList[i].style.background = style.getBackground();
        classList[i].style.borderRadius = style.getBorderRadius();
        classList[i].style.width = style.getWidth();
        classList[i].style.padding = style.getPadding();
        classList[i].style.position = style.getPosition();
        classList[i].style.margin = style.getMargin();

        classList[i].style.content = style.getContent();
        classList[i].style.height = style.getHeight();
        classList[i].style.top = style.getTop();
        classList[i].style.zIndex = style.getZIndex();
        classList[i].style.transform = style.getTransform();
    }
}