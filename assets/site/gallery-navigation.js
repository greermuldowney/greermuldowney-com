function onDocumentLoaded () {
    document.body.addEventListener("keydown", onKeyDown);
    document.querySelector("#gallery-navigation button.gallery").addEventListener("click", () => { document.body.classList.toggle("show-gallery") });
    document.querySelector("#gallery-navigation button.prev").addEventListener("click", () => { scrollOver(-1) });
    document.querySelector("#gallery-navigation button.next").addEventListener("click", () => { scrollOver(1) });
    document.getElementById("slideshow").addEventListener("click", itemClicked);
    document.getElementById("gallery").addEventListener("click", goToImage);
    setTimeout(() => { document.body.classList.add("page-loaded"); }, 100);
}

function itemClicked(e) {
    if (e.target.tagName != "VIDEO")
        scrollOver(1);
}

function goToImage(e) {
    document.body.classList.remove("show-gallery");
    document.querySelector(`#slideshow .${e.target.dataset.index}`).scrollIntoView();
}

function scrollOver(direction) {
    if (window.matchMedia('(max-width: 670px)').matches)
        return;
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
        var imageEndDiff = (child.offsetLeft + child.offsetWidth) - (scrollOffset + slideshow.offsetWidth);
        // seems like the math can be off by 1.
        imageEndDiff = Math.sign(imageEndDiff) * (Math.abs(imageEndDiff) - 1);
        if (Math.sign(child.offsetLeft - scrollOffset) == direction &&
            Math.sign(imageEndDiff) == direction) {
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
    // Based on breakpoint
    if (window.matchMedia('(max-width: 670px)').matches)
        return;

    if (e.keyCode == 37) {
        // ArrowLeft
        scrollOver(-1);
        e.preventDefault();
    } else if (e.keyCode == 39 || e.keyCode == 32) {
        // ArrowRight, Space
        scrollOver(1);
        e.preventDefault();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onDocumentLoaded);
} else {
    onDocumentLoaded();
}