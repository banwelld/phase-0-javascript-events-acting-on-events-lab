const findLeftPos = () => parseInt(dodger.style.left.replace('px', ''), 10);

const moveDodgerLeft = () => {if (findLeftPos() > 0) dodger.style.left = `${findLeftPos() - 1}px`}
const moveDodgerRight = () => {if (findLeftPos() < 360) dodger.style.left = `${findLeftPos() + 1}px`}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') moveDodgerLeft();
    if (e.key === 'ArrowRight') moveDodgerRight();
})