const arakiDoodles = [
    'img/diego.png',
    'img/giorno.png',
    'img/jolyne.png',
    'img/jolyne2.png',
    'img/yasuho.png',
    'img/yasuho2.png',
    'img/yukako.png',
    'img/lucy.png',
    'img/weather.png',
    'img/bruno.png',
    'img/kira.png',
    'img/johnny.png',
    'img/josuke.png',
    'img/pucci.png',
    'img/rohan.png',
];

function sortSideBarBG() {
    const i = Math.floor(Math.random() * arakiDoodles.length);
    document.getElementById('sidebar').style.backgroundImage = `url(${arakiDoodles[i]})`;
}

