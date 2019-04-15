const removeUnused = require('postcss-remove-unused');

module.exports = {
  plugins: [
	require('cssnano'),
    removeUnused({ html: '<div class="wrapper-fluid"><footer class="row o-footer" id="siteFooter"><div class="grid-xl-6 grid-lg-8 grid-18 o-footer__info"><div class="o-footer__info__inner"><p><a href="https://internetstiftelsen.se">Internetstiftelsen</a> är en oberoende, affärsdriven och allmännyttig organisation. Vi verkar för ett internet som bidrar positivt till människan och samhället. Vi ansvarar för internets svenska toppdomän .se och sköter drift och administration av toppdomänen .nu. Intäkterna från affärsverksamheten finansierar en rad satsningar i syfte att möjliggöra att människor kan nyttja internet på bästa sätt, och stimulera kunskapsdelning och innovation med inriktning på internet.</p><div class="row no-gutters"><div class="grid-xxl-9 grid-18 o-footer__contact"><address>Internetstiftelsen<br>Hammarby Kaj 10D<br>Box 92073<br>120 07 Stockholm</address></div><div class="grid-xxl-9 grid-18 o-footer__contact">E-post: <a href="mailto:info@internetstiftelsen.se">info@internetstiftelsen.se</a><br>Telefon: 08-452 35 00<br>Organisationsnummer: 802405-0190</div></div><div class="row u-m-t-2"><div class="grid"><a href="https://internetstiftelsen.se/app/uploads/2019/02/certifikat-27001-ukas-sv.pdf" class="display-flex align-items-center o-footer__ISO-link"><img src="https://internetstiftelsen.se/app/themes/internetstiftelsen/images/ISO_27001_2013_black_TM.svg" class="o-footer__ISO-logo " alt="Certifierade enligt ISO/IEC 27001:2013 "><span>Certifierade enligt ISO/IEC<br>27001:2013</span></a></div></div></div></div><div class="grid-xl-12 grid-lg-10 grid-18 o-footer__logotypes"><div class="row o-footer__grid-row u-m-r-0"><div class="o-footer__grid-row__item"><a href="https://www.internetmuseum.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Internetmuseum" src="https://internetstiftelsen.se/app/themes/internetstiftelsen/assets/img/internetmuseum.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://www.goto10.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Goto 10" src="https://internetstiftelsen.se/app/themes/internetstiftelsen/assets/img/goto-10.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://www.svenskarnaochinternet.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Svenskarna och internet" src="https://internetstiftelsen.se/app/themes/internetstiftelsen/assets/img/svenskarna-och-internet.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://www.bredbandskollen.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Bredbandskollen" src="https://internetstiftelsen.se/app/themes/internetstiftelsen/assets/img/bredbandskollen.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://digitalalektioner.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Digitala lektioner" src="https://internetstiftelsen.se/app/themes/internetstiftelsen/assets/img/digitala-lektioner.svg"></a></div><div class="o-footer__grid-row__item"><a href="https://internetdagarna.se" class="o-footer__logo-link"><img class="o-footer__logotype" alt="Internetdagarna" src="https://internetstiftelsen.se/app/themes/internetstiftelsen/assets/img/internetdagarna.svg"></a></div></div></div><div class="row no-gutters background-black justify-content-center u-p-y-1 o-footer__bottom-links"><nav><ul class="u-list-clean row"><li class="u-p-x-1"><a href="https://internetstiftelsen.se/om-webbplatsen/" class="footer-about-link">Om webbplatsen</a></li><li class="u-p-x-1"><a href="https://internetstiftelsen.se/om-webbplatsen/kakor/" class="footer-about-link">Kakor</a></li></ul></nav></div></footer></div>'})
  ]
}
