// Luodaan taulukko missä on muutamia mietelausetta.

let aphorisms = 
    ['I know you believe that you comprehend what you thought I meant, but I don’t think you realize that I don’t understand what I thought I said.',
    'She’s about as private as phone booth.',
    'If everything were true, life wouldn’t be any fun. If nothing were true, life wouldn’t be worth living.',
    'When they can’t take it anymore, that’s when they get taken in.',
]

// Sitten, tehdään module.exports-funktio missä valitaan satunnaista mietelausen

module.exports = fortuneCookies = () => {
    
        // let random = Math.floor(Math.random() * aphorisms.length);

        // ensin, luodaan satunnainen numero
        let random = Math.random();
        // Sitten tehdään numero aphorisms:in pituus
        let tulo = random * aphorisms.length 
        // sitten saadaan kokonumeron
        let floor = Math.floor(tulo);
        console.log(random)
        console.log(tulo)
        console.log(floor)
        return aphorisms[floor]
    
}
