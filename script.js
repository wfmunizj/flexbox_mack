
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        stateChangeRemove()
        panel.classList.add('active')
    })
});

function stateChangeRemove() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
