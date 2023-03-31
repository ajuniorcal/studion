$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'

    };
    $('.slider').slick(slickOptions);
    $('.footer__form-button').on('click', () => {
        const value $('#email').value();
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "username",
                Password : "password",
                To : 'them@website.com',
                From : "you@isp.com",
                Subject : "Por favor me adicione na sua Newslatter",
                Body : `shabaralaica candelabnaxuria
                é Isso ai brow`
        }).then(
          message => alert(message)
        );

    });
});
