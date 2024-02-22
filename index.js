const hamburger =  document.getElementById('hamburger')
const navList =  document.getElementById('nav')

const arrow1 =  document.getElementById('arrow1')
const footer1 =  document.getElementById('footer-1')

const arrow2 =  document.getElementById('arrow2')
const footer2 =  document.getElementById('footer-2')

const arrow3 =  document.getElementById('arrow3')
const footer3 =  document.getElementById('footer-3')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change");
    navList.classList.toggle('change')
})

arrow1.addEventListener('click', () => {
    arrow1.classList.toggle('change')
    arrow2.classList.remove('change')
    arrow3.classList.remove('change')

    footer1.classList.toggle('change')
    footer2.classList.remove('change')
    footer3.classList.remove('change')
})

arrow2.addEventListener('click', () => {
    arrow2.classList.toggle('change')
    arrow1.classList.remove('change')
    arrow3.classList.remove('change')

    footer2.classList.toggle('change')
    footer1.classList.remove('change')
    footer3.classList.remove('change')
})

arrow3.addEventListener('click', () => {
    arrow3.classList.toggle('change')
    arrow2.classList.remove('change')
    arrow1.classList.remove('change')

    footer3.classList.toggle('change')
    footer2.classList.remove('change')
    footer1.classList.remove('change')
})