const arakiDoodles = [
    'img/diego.png',
    'img/giorno.png',
    'img/jolyne.png',
    'img/yasuho.png',
    'img/yukako.png',
    'img/lucy.png',
    'img/weather.png',
    'img/bruno.png'
];

function sortSideBarBG() {
    const i = Math.floor(Math.random() * arakiDoodles.length);
    document.getElementById('sidebar').style.backgroundImage = `url(${arakiDoodles[i]})`;
}

