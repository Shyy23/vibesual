/* ================= SHOW SCROLL UP ====================== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // akan muncul jika scroll lebih dari 350px height
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 1,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

/*============= EMAIL JS ==================*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // ServiceId - TemplateId - #form - publicKey
    emailjs
        .sendForm(
            'vibesualwrks1',
            'vibesualcontact',
            '#contact-form',
            '8KlLX-yFuwTn_FAa6'
        )
        .then(
            () => {
                //Show sent message
                contactMessage.textContent = 'Message sent succesfully ✔️'

                //Remove message after 5 sec
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)

                //Clear input fields
                contactForm.reset()
            },
            () => {
                //Show error message
                contactMessage.textContent =
                    'Message not sent (service error) ❌'
            }
        )
}

contactForm.addEventListener('submit', sendEmail)
