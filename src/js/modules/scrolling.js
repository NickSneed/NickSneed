function setScrolling() {
    const bgDiv = document.querySelector('.bg');
    if (window.scrollY > 200) {
        bgDiv.classList.add('scrolled');
    } else {
        bgDiv.classList.remove('scrolled');
    }
}

function init() {
    document.addEventListener('scroll', () => {
        setScrolling();
    });

    setScrolling();
}

export default init;