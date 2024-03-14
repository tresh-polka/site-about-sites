let blockImgMusic = document.querySelector('.block-img-music');
let aboutRadioGarden = document.querySelector('.about-radio-garden');
let radioGarden = document.querySelector('.radio-garden');
let aboutMusicgenretree = document.querySelector('.about-musicgenretree');
let musicgenretree = document.querySelector('.musicgenretree');
let aboutEverynoise = document.querySelector('.about-everynoise');
let everynoise = document.querySelector('.everynoise');
let aboutMusicmap = document.querySelector('.about-musicmap');
let musicmap = document.querySelector('.musicmap');
let aboutRadiooooo = document.querySelector('.about-radiooooo');
let radiooooo = document.querySelector('.radiooooo');
let aboutBlobOpera = document.querySelector('.about-blob-opera');
let blobOpera = document.querySelector('.blob-opera');
let aboutLofi = document.querySelector('.about-lofi');
let lofi = document.querySelector('.lofi');
let aboutMynoise = document.querySelector('.about-mynoise');
let mynoise = document.querySelector('.mynoise');
let aboutMusicroamer = document.querySelector('.about-musicroamer');
let musicroamer = document.querySelector('.musicroamer');

radioGarden.onclick = function() {
    aboutRadioGarden.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutRadioGarden.classList.contains('none'));
    aboutMusicgenretree.classList.add('none');
    aboutEverynoise.classList.add('none');
    aboutMusicmap.classList.add('none');
    aboutRadiooooo.classList.add('none');
    aboutBlobOpera.classList.add('none');
    aboutLofi.classList.add('none');
    aboutMynoise.classList.add('none');
    aboutMusicroamer.classList.add('none');
};

musicgenretree.onclick = function() {
    aboutMusicgenretree.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutMusicgenretree.classList.contains('none'));
    aboutRadioGarden.classList.add('none');
    aboutEverynoise.classList.add('none');
    aboutMusicmap.classList.add('none');
    aboutRadiooooo.classList.add('none');
    aboutBlobOpera.classList.add('none');
    aboutLofi.classList.add('none');
    aboutMynoise.classList.add('none');
    aboutMusicroamer.classList.add('none');
};

everynoise.onclick = function() {
    aboutEverynoise.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutEverynoise.classList.contains('none'));
    aboutRadioGarden.classList.add('none');
    aboutMusicgenretree.classList.add('none');
    aboutMusicmap.classList.add('none');
    aboutRadiooooo.classList.add('none');
    aboutBlobOpera.classList.add('none');
    aboutLofi.classList.add('none');
    aboutMynoise.classList.add('none');
    aboutMusicroamer.classList.add('none');
};

musicmap.onclick = function() {
    aboutMusicmap.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutMusicmap.classList.contains('none'));
    aboutRadioGarden.classList.add('none');
    aboutMusicgenretree.classList.add('none');
    aboutEverynoise.classList.add('none');
    aboutRadiooooo.classList.add('none');
    aboutBlobOpera.classList.add('none');
    aboutLofi.classList.add('none');
    aboutMynoise.classList.add('none');
    aboutMusicroamer.classList.add('none');
};

radiooooo.onclick = function() {
    aboutRadiooooo.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutRadiooooo.classList.contains('none'));
    aboutRadioGarden.classList.add('none');
    aboutMusicgenretree.classList.add('none');
    aboutEverynoise.classList.add('none');
    aboutMusicmap.classList.add('none');
    aboutBlobOpera.classList.add('none');
    aboutLofi.classList.add('none');
    aboutMynoise.classList.add('none');
    aboutMusicroamer.classList.add('none');
};

blobOpera.onclick = function() {
    aboutBlobOpera.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutBlobOpera.classList.contains('none'));
    aboutRadioGarden.classList.add('none');
    aboutMusicgenretree.classList.add('none');
    aboutEverynoise.classList.add('none');
    aboutMusicmap.classList.add('none');
    aboutRadiooooo.classList.add('none');
    aboutLofi.classList.add('none');
    aboutMynoise.classList.add('none');
    aboutMusicroamer.classList.add('none');
};

lofi.onclick = function() {
    aboutLofi.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutLofi.classList.contains('none'));
    aboutRadioGarden.classList.add('none');
    aboutMusicgenretree.classList.add('none');
    aboutEverynoise.classList.add('none');
    aboutMusicmap.classList.add('none');
    aboutRadiooooo.classList.add('none');
    aboutBlobOpera.classList.add('none');
    aboutMynoise.classList.add('none');
    aboutMusicroamer.classList.add('none');
};

mynoise.onclick = function() {
    aboutMynoise.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutMynoise.classList.contains('none'));
    aboutRadioGarden.classList.add('none');
    aboutMusicgenretree.classList.add('none');
    aboutEverynoise.classList.add('none');
    aboutMusicmap.classList.add('none');
    aboutRadiooooo.classList.add('none');
    aboutBlobOpera.classList.add('none');
    aboutLofi.classList.add('none');
    aboutMusicroamer.classList.add('none');
};

musicroamer.onclick = function() {
    aboutMusicroamer.classList.toggle('none');
    blockImgMusic.classList.toggle('none', !aboutMusicroamer.classList.contains('none'));
    aboutRadioGarden.classList.add('none');
    aboutMusicgenretree.classList.add('none');
    aboutEverynoise.classList.add('none');
    aboutMusicmap.classList.add('none');
    aboutRadiooooo.classList.add('none');
    aboutBlobOpera.classList.add('none');
    aboutLofi.classList.add('none');
    aboutMynoise.classList.add('none');
};



let blockImgCulture = document.querySelector('.block-img-culture');
let aboutAbw = document.querySelector('.about-abw');
let abw = document.querySelector('.abw');
let aboutPlayphrase = document.querySelector('.about-playphrase');
let playphrase = document.querySelector('.playphrase');
let aboutBooks = document.querySelector('.about-books-google');
let books = document.querySelector('.books-google');
let aboutRandomgeeks = document.querySelector('.about-randomgeeks');
let randomgeeks = document.querySelector('.randomgeeks');
let aboutReadly = document.querySelector('.about-readly');
let readly = document.querySelector('.readly');
let aboutCardboardboxoffice = document.querySelector('.about-cardboardboxoffice');
let cardboardboxoffice = document.querySelector('.cardboardboxoffice');
let aboutBowie = document.querySelector('.about-bowie');
let bowie = document.querySelector('.bowie');

abw.onclick = function() {
    aboutAbw.classList.toggle('none');
    blockImgCulture.classList.toggle('none', !aboutAbw.classList.contains('none'));
    aboutPlayphrase.classList.add('none');
    aboutBooks.classList.add('none');
    aboutRandomgeeks.classList.add('none');
    aboutReadly.classList.add('none');
    aboutCardboardboxoffice.classList.add('none');
    aboutBowie.classList.add('none');
};

playphrase.onclick = function() {
    aboutPlayphrase.classList.toggle('none');
    blockImgCulture.classList.toggle('none', !aboutPlayphrase.classList.contains('none'));
    aboutAbw.classList.add('none');
    aboutBooks.classList.add('none');
    aboutRandomgeeks.classList.add('none');
    aboutReadly.classList.add('none');
    aboutCardboardboxoffice.classList.add('none');
    aboutBowie.classList.add('none');
};

books.onclick = function() {
    aboutBooks.classList.toggle('none');
    blockImgCulture.classList.toggle('none', !aboutBooks.classList.contains('none'));
    aboutAbw.classList.add('none');
    aboutPlayphrase.classList.add('none');
    aboutRandomgeeks.classList.add('none');
    aboutReadly.classList.add('none');
    aboutCardboardboxoffice.classList.add('none');
    aboutBowie.classList.add('none');
};

randomgeeks.onclick = function() {
    aboutRandomgeeks.classList.toggle('none');
    blockImgCulture.classList.toggle('none', !aboutRandomgeeks.classList.contains('none'));
    aboutAbw.classList.add('none');
    aboutPlayphrase.classList.add('none');
    aboutBooks.classList.add('none');
    aboutReadly.classList.add('none');
    aboutCardboardboxoffice.classList.add('none');
    aboutBowie.classList.add('none');
};

readly.onclick = function() {
    aboutReadly.classList.toggle('none');
    blockImgCulture.classList.toggle('none', !aboutReadly.classList.contains('none'));
    aboutAbw.classList.add('none');
    aboutPlayphrase.classList.add('none');
    aboutBooks.classList.add('none');
    aboutRandomgeeks.classList.add('none');
    aboutCardboardboxoffice.classList.add('none');
    aboutBowie.classList.add('none');
};

cardboardboxoffice.onclick = function() {
    aboutCardboardboxoffice.classList.toggle('none');
    blockImgCulture.classList.toggle('none', !aboutCardboardboxoffice.classList.contains('none'));
    aboutAbw.classList.add('none');
    aboutPlayphrase.classList.add('none');
    aboutBooks.classList.add('none');
    aboutRandomgeeks.classList.add('none');
    aboutReadly.classList.add('none');
    aboutBowie.classList.add('none');
};

bowie.onclick = function() {
    aboutBowie.classList.toggle('none');
    blockImgCulture.classList.toggle('none', !aboutBowie.classList.contains('none'));
    aboutAbw.classList.add('none');
    aboutPlayphrase.classList.add('none');
    aboutBooks.classList.add('none');
    aboutRandomgeeks.classList.add('none');
    aboutReadly.classList.add('none');
    aboutCardboardboxoffice.classList.add('none');
};

let blockImgUseful = document.querySelector('.block-img-useful');

let aboutLearnathome = document.querySelector('.about-learnathome');
let learnathome = document.querySelector('.learnathome');

let aboutLumosity = document.querySelector('.about-lumosity');
let lumosity = document.querySelector('.lumosity');

let aboutPomofocus = document.querySelector('.about-pomofocus');
let pomofocus = document.querySelector('.pomofocus');

let aboutDonothingfor2minutes = document.querySelector('.about-donothingfor2minutes');
let donothingfor2minutes = document.querySelector('.donothingfor2minutes');

let aboutExcuse = document.querySelector('.about-excuse');
let excuse = document.querySelector('.excuse');

let aboutDownforeveryoneorjustme = document.querySelector('.about-downforeveryoneorjustme');
let downforeveryoneorjustme = document.querySelector('.downforeveryoneorjustme');

learnathome.onclick = function() {
    aboutLearnathome.classList.toggle('none');
    blockImgUseful.classList.toggle('none', !aboutLearnathome.classList.contains('none'));
    aboutLumosity.classList.add('none');
    aboutPomofocus.classList.add('none');
    aboutDonothingfor2minutes.classList.add('none');
    aboutExcuse.classList.add('none');
    aboutDownforeveryoneorjustme.classList.add('none');
};

lumosity.onclick = function() {
    aboutLumosity.classList.toggle('none');
    blockImgUseful.classList.toggle('none', !aboutLumosity.classList.contains('none'));
    aboutLearnathome.classList.add('none');
    aboutPomofocus.classList.add('none');
    aboutDonothingfor2minutes.classList.add('none');
    aboutExcuse.classList.add('none');
    aboutDownforeveryoneorjustme.classList.add('none');
};

pomofocus.onclick = function() {
    aboutPomofocus.classList.toggle('none');
    blockImgUseful.classList.toggle('none', !aboutPomofocus.classList.contains('none'));
    aboutLearnathome.classList.add('none');
    aboutLumosity.classList.add('none');
    aboutDonothingfor2minutes.classList.add('none');
    aboutExcuse.classList.add('none');
    aboutDownforeveryoneorjustme.classList.add('none');
};

donothingfor2minutes.onclick = function() {
    aboutDonothingfor2minutes.classList.toggle('none');
    blockImgUseful.classList.toggle('none', !aboutDonothingfor2minutes.classList.contains('none'));
    aboutLearnathome.classList.add('none');
    aboutLumosity.classList.add('none');
    aboutPomofocus.classList.add('none');
    aboutExcuse.classList.add('none');
    aboutDownforeveryoneorjustme.classList.add('none');
};

excuse.onclick = function() {
    aboutExcuse.classList.toggle('none');
    blockImgUseful.classList.toggle('none', !aboutExcuse.classList.contains('none'));
    aboutLearnathome.classList.add('none');
    aboutLumosity.classList.add('none');
    aboutPomofocus.classList.add('none');
    aboutDonothingfor2minutes.classList.add('none');
    aboutDownforeveryoneorjustme.classList.add('none');
};

downforeveryoneorjustme.onclick = function() {
    aboutDownforeveryoneorjustme.classList.toggle('none');
    blockImgUseful.classList.toggle('none', !aboutDownforeveryoneorjustme.classList.contains('none'));
    aboutLearnathome.classList.add('none');
    aboutLumosity.classList.add('none');
    aboutPomofocus.classList.add('none');
    aboutDonothingfor2minutes.classList.add('none');
    aboutExcuse.classList.add('none');
};