document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.dark-section')) {

        let darkSections = document.querySelectorAll('.dark-section');
        for (let i = 0; i < darkSections.length; i++) {
            let boxElem = darkSections[i];
            let pointerElem = darkSections[i].querySelector('.dark-section__overlay');

            function onMouseMove(event) {
                let mouseX = event.pageX;
                let mouseY = event.pageY;
                let crd = boxElem.getBoundingClientRect();
                let activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

                requestAnimationFrame(function movePointer() {
                    pointerElem.style.left = Math.floor(mouseX) + 'px';
                    pointerElem.style.top = (Math.floor(mouseY) - document.querySelector('body').scrollTop - boxElem.getBoundingClientRect().top) + 'px';
                });
            }

            boxElem.addEventListener('mousemove', onMouseMove, false);
        }
    }


});