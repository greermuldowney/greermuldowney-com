function onDocumentLoaded () {
    document.body.addEventListener("keydown", onKeyDown);
    document.querySelector("#gallery-navigation button:nth-of-type(1)").addEventListener("mousedown", () => { scrollOver(-1) });
    document.querySelector("#gallery-navigation button:nth-of-type(2)").addEventListener("mousedown", () => { scrollOver(1) });
}

function scrollOver(direction) {
    let slideshow = document.getElementById("slideshow");
    let scrollOffset = slideshow.scrollLeft + slideshow.offsetLeft;

    let childNodes = Array.from(slideshow.childNodes);
    if (direction == -1)
        childNodes = childNodes.reverse();
    let wrapAroundNode = undefined;
    let scrolledToChild = childNodes.some((child) => {
        if (child.nodeType == Node.TEXT_NODE)
            return;
        if (!wrapAroundNode)
            wrapAroundNode = child;
        if (Math.sign(child.offsetLeft - scrollOffset) == direction) {
            child.scrollIntoView({ behavior: "smooth" });
            return true;
        }
    });
    if (!scrolledToChild)
        wrapAroundNode.scrollIntoView({ behavior: "smooth" });
}

function onKeyDown(e) {
    if (e.repeat)
        return;

    if (e.keyCode == 37 || e.keyCode == 32) {
        // ArrowLeft
        console.log("left")
        console.log(e.cancelable);
        e.preventDefault();
    } else if (e.keyCode == 39) {
        // ArrowRight
        console.log("right")

        e.preventDefault();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onDocumentLoaded);
} else {
    onDocumentLoaded();
}