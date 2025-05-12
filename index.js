alert("⚠️ Goofy Mode Engaged. Sanity will not be refunded.");
  
const memes = [
    '6exh1ov5r00f1', 'b12lg5ujqzze1', 'g6dsz16ygyze1',
    'rbsva1zp620f1', 'h1tlqmdqr10f1', '87e1hurig00f1',
]

const soundEffects = [
    'https://static.theatom06.hackclub.app/erika.mp3',
    'https://static.theatom06.hackclub.app/ahhh.mp3',
    'https://static.theatom06.hackclub.app/bruh.mp3',
    'https://static.theatom06.hackclub.app/getout.mp3',
    'https://static.theatom06.hackclub.app/rizz.mp3',
    'https://us-tuna-sounds-files.voicemod.net/4bc50678-dd8b-4b34-92d9-0bb75e9a7cc4-1744216180011.mp3' //Ruby Chan meme
]

document.body.style.backgroundColor = 'pink';
document.body.style.color = 'black';
document.body.style.transition = 'background-color 0.5s';
const randomStyle = Math.random() > 0.5 ? 'Shakespeare' : 'Waifu';
const role = randomStyle == 'Shakespeare' ? 'Servant talking to master' : 'Waifu talking to her senpai';

const shakeCSS = document.createElement('style');
shakeCSS.innerHTML = `
@keyframes shake {
    0% { transform: translate(1px, 1px); }
    25% { transform: translate(-1px, -2px); }
    50% { transform: translate(-3px, 0px); }
    75% { transform: translate(3px, 2px); }
    100% { transform: translate(1px, -1px); }
}
.goofy-shake {
    display: inline-block;
    animation: shake 0.5s ease-in-out;
    animation-iteration-count: 1;
}
`;

document.head.appendChild(shakeCSS);

document.body.querySelectorAll('*').forEach((a) => {
    setInterval(() => {
        a.classList.add('goofy-shake');
        setTimeout(() => {
            a.classList.remove('goofy-shake');
        }, 500);
    }, Math.random() * 10000 + 1000);

    a.style.color = 'black';
    a.style.backgroundColor = 'pink';
    a.style.transition = 'background-color 0.5s';

    if(a.tagName == 'IMG') {
        const img = a;
        img.src = `https://i.redd.it/${(memes[Math.floor(Math.random() * memes.length)])}.jpeg`
        img.style.maxWidth = '50vw';
        img.style.maxHeight = '50vh';
        img.style.objectFit = 'contain';
        
        return;
    }

    if(a.tagName == 'BUTTON') {
        const btn = a;
        btn.innerText = '🤡';
        btn.style.fontSize = '2rem';
        btn.style.border = '1px solid black';
        btn.style.borderRadius = '5px';
        btn.style.padding = '10px';
        btn.style.cursor = 'pointer';
    }

    const soundEffect = new Audio(soundEffects[Math.floor(Math.random() * soundEffects.length)]);

    a.addEventListener('mouseenter', () => {
        a.style.transform = `rotate(${Math.floor(Math.random() * 10) - 5}deg)`;
        soundEffect.play();
    });

    a.addEventListener('mouseleave', () => {
        a.style.transform = `rotate(0deg)`;
        soundEffect.pause();
        soundEffect.currentTime = 0;
    });

    //check for if the element has any sub elments if so then skip
    if (a.querySelectorAll('*').length > 0) {
        return;
    }

    let tagType = a.tagName.toLowerCase();


    if (a.tagName == 'h1' || a.tagName == 'h2' || a.tagName == 'h3' || a.tagName == 'h4' || a.tagName == 'h5' || a.tagName == 'h6') {
        tagType = 'This is a heading so only convert this with max one or two words extra';
    } else {
        tagType = 'This is a normal text so convert this with max 10 words extra';
    }

    fetch('https://ai.hackclub.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [{
                    role: 'user',
                    content: `Convert this into ${randomStyle} language. Don't md formating or anything only plain text. Don't change the words YSWS and any snippets of code and the emoji 🤡. Act like a ${role}. ${tagType}: ${a.innerText}`
                }]
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.choices[0].message) {
                a.innerText = data.choices[0].message.content;
            }
        })
})

const a = document.createElement('a');
a.innerText = 'Click me to fix the page';
a.style.position = 'fixed';
a.style.top = '10px';
a.style.right = '10px';
a.style.backgroundColor = 'white';
a.style.color = 'black';
a.style.padding = '10px';
a.style.borderRadius = '5px';
a.style.border = '1px solid black';
a.style.zIndex = '9999';
a.style.border = '1px solid black;'
document.body.appendChild(a);

document.querySelectorAll('a').forEach((a) => {
    a.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});