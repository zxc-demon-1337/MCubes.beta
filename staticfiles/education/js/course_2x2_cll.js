buttons = document.getElementsByClassName('formula_button')
vidWrapper = document.getElementById('vid_wrapper')

buttons.forEach(p => {
    p.addEventListener('mouseover', () => {
        const rect = this.getBoundingClientRect();
        const x = rect.left;
        const y = rect.top;
        vidWrapper.style.left = x
        vidWrapper.style.top = y
    })
});