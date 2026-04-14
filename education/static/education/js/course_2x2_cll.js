buttons = document.querySelectorAll('.formula_button')
vidWrapper = document.getElementById('vid_wrapper')
video = document.getElementById('video')
const gap = 10
console.log(buttons)
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        var x = rect.left;
        var y = rect.top;
        const height = rect.height;
        const width = rect.width;

        console.log('x y added:', 'x -', x, 'y -', y)
        console.log('width=', width, 'height=', height)
        y = y - 200 -  height - gap - 20
        console.log('---', (width - 200) / 2)
        x = x + (width - 200) / 2

        vidWrapper.style.left = `${x}px`;
        vidWrapper.style.top  = `${y}px`;
        vidWrapper.style.display = 'flex';
        console.log('finsl position: x=', x, 'y=', y)
        
        const fileName = e.currentTarget.dataset.src;
        video.src = "/static/education/videos/cll/" + fileName + ".webm";
        console.log(fileName)
        e.currentTarget.style.color = '#C04848'
    })
});

document.addEventListener('click', (e) => {
    const isInsideWrapper = vidWrapper.contains(e.target);
    const isInsideButton  = e.target.closest('.formula_button');
    if (!isInsideWrapper && !isInsideButton) {
        vidWrapper.style.display = 'none';
        buttons.forEach(btn => btn.style.color = '#fff');

    }
});