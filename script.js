loveAnsweresIndex = 0
loveAnsweres = [
    'Ja Ciebie też 💖',
    'Uwielbiam jak tak mówisz',
    'Na zawsze?',
    'To dla mnie ważne 💖'
]

notLoveAnsweresIndex = 0
notLoveAnsweres = [
    'Ale ja Ciebie tak 💖',
    'Zrobić Ci jeść?',
    'Porozmawiajmy o tym',
    'Przepraszam Cię...',
    'Ja Ciebie też nie lubię',
    'Zołza 😛',
    'Co się stało?'
]

let kochamCard = document.getElementById('kocham-card');
kochamCard.addEventListener('mouseenter', (event) => {
    let loveAnswerSpan = document.getElementById('kocham-odp');
    loveAnswerSpan.innerText = loveAnsweres[loveAnsweresIndex];
    loveAnsweresIndex = ++loveAnsweresIndex % loveAnsweres.length;
});

let niekochamCard = document.getElementById('niekocham-card');
niekochamCard.addEventListener('mouseenter', (event) => {
    let notloveAnswerSpan = document.getElementById('niekocham-odp');
    notloveAnswerSpan.innerText = notLoveAnsweres[notLoveAnsweresIndex];
    notLoveAnsweresIndex = ++notLoveAnsweresIndex % notLoveAnsweres.length;
});