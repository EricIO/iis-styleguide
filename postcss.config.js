const removeUnused = require('postcss-remove-unused');

module.exports = {
  plugins: [
	require('cssnano'),
    removeUnused({ html: '<div class="m-cookie-disclaimer js-cookie-disclaimer is-visible"> <div role="alert" class="m-cookie-disclaimer__wrapper m-alert m-alert--info m-alert--dismissable js-dismiss-alert"> <div class="m-cookie-disclaimer__inner"> <div class="m-cookie-disclaimer__inner-first"> <p class="m-cookie-disclaimer__text">På internetstiftelsen.se använder vi kakor (cookies) för att löpande förbättra webbplatsen. <a href="https://internetstiftelsen.se/om-webbplatsen/cookies/">Läs mer om hur Internetstiftelsen använder kakor</a>.</p></div><div class="m-cookie-disclaimer__inner-second"> <button id="js-accept-cookies" " class="a-button a-button--is-static " ><span class="a-button__text ">Jag förstår</span></button></div></div></div></div><div class="wrapper-fluid"><div class="o-footer--row o-footer" id="siteFooter"><div class="grid-xl-6 grid-lg-8 grid-18 o-footer__info"><div class="o-footer__info__inner"><p class="o-footer__paragraph"><a class="o-footer__link" href="https://internetstiftelsen.se">Internetstiftelsen</a> verkar för ett internet som bidrar positivt till människan och samhället. Vi är en oberoende organisation som säkerställer en stark och säker infrastruktur för internet i Sverige. Vårt mål är att alla ska våga och kunna använda internet. Vi finns i Sverige och ansvarar för den svenska toppdomänen .se och driften av toppdomänen .nu.</p><div class="o-footer--row"><div class="grid-xxl-9 grid-18 o-footer__contact"><ul class="u-list-clean o-footer__contact__address"><li class="o-footer__contact__address__li">Internetstiftelsen</li><li class="o-footer__contact__address__li">Hammarby Kaj 10D</li><li class="o-footer__contact__address__li">box 92073</li><li class="o-footer__contact__address__li">120 07 Stockholm</li></ul></div><div class="grid-xxl-9 grid-18 o-footer__contact"><ul class="u-list-clean o-footer__contact__address"><li class="o-footer__contact__address__li">E-post: <a class="o-footer__link" href="mailto:info@internetstiftelsen.se">info@internetstiftelsen.se</a></li><li class="o-footer__contact__address__li">Telefon: <a class="o-footer__link" href="tel:084523500">08 452 35 00</a></li><li class="o-footer__contact__address__li">Fax: 08 452 35 00</li><li class="o-footer__contact__address__li">Org.nr 802405-0190</li></ul></div></div><div class="o-footer--row u-m-t-2"><div class="o-footer-grid"><a href="https://internetstiftelsen.se/docs/Certifikat_27001_UKAS_sv.pdf" class="o-footer__link o-footer__ISO-link"><img src="https://internetstiftelsen.se/app/themes/internetstiftelsen/images/ISO_27001_2013_black_TM.svg" class="o-footer__ISO-logo" alt="Certifierade enligt ISO/IEC 27001:2013"><span>Certifierade enligt ISO/IEC<br>27001:2013</span></a></div></div></div></div><div class="grid-xl-12 grid-lg-10 grid-18 o-footer__logotypes"><div class="o-footer--row o-footer__grid-row u-m-r-0"><div class="o-footer__grid-row__item"><a href="https://svenskarnaochinternet.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Svenskarna och internet" src="https://static.iis.se/images/logotypes/svenskarna-och-internet.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://internetdagarna.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Internetdagarna" src="https://static.iis.se/images/logotypes/internetdagarna.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://goto10.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Goto10" src="https://static.iis.se/images/logotypes/goto-10.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://bredbandskollen.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Bredbandskollen" src="https://static.iis.se/images/logotypes/bredbandskollen.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://internetmuseum.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Internetmuseum" src="https://static.iis.se/images/logotypes/internetmuseum.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://digitalalektioner.iis.se/" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Digitala lektioner" src="https://static.iis.se/images/logotypes/digitala-lektioner.svg"></a></div></div></div><div class="u-p-y-1 o-footer__bottom-links"><nav><ul class="u-list-clean display-flex"><li class="u-p-x-1"><a href="https://internetstiftelsen.se/om-webbplatsen/" class="o-footer__link o-footer__about-link">Om webbplatsen</a></li><li class="u-p-x-1"><a href="https://internetstiftelsen.se/om-webbplatsen/cookies/" class="o-footer__link o-footer__about-link">Om cookies</a></li></ul></nav></div></div></div>'})
  ]
}
