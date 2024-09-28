const apiKey = 'your-API-key'; // Replace with your real API key

const imgUrl = 'https://api.thecatapi.com/v1/images/search';
const factUrl = 'https://api.thecatapi.com/v1/breeds';

const host = document.querySelector('.host-image')
const speechBubble = document.querySelector('.speech-bubble');
const speechBubbleWrapper = document.querySelector('.speech-bubble-wrapper');
const angel = document.querySelector('.angel-image');
const television = document.querySelector('.television-image');

let firstClick = true; // Detects first angel click

// Animate speech bubble each time angel is clicked
angel.addEventListener('click', () => {
    speechBubbleWrapper.classList.add('speech-animate');
    setTimeout(() => {
        speechBubbleWrapper.classList.remove('speech-animate');
    }, 400);
});

// Get cat image and random info once angel is clicked
angel.addEventListener('click', () => {
    Promise.all([
        fetch(imgUrl, { headers: { 'x-api-key': apiKey } }),
        fetch(factUrl, { headers: { 'x-api-key': apiKey } })
    ])
    .then(responses => {
        // Check that both requests were successful
        return Promise.all(responses.map(response => {
            if(!response.ok) {
                throw new Error('Oops! Failed to retrieve data');
            }
            return response.json();
        }));
    })
    .then(([imgData, factData]) => {
        // Cat image handling
        console.log(imgData);
        const img = document.querySelector('.cat-image');
        img.src = imgData[0].url;
        img.classList.add('stop-rotating'); // Stops the rotation of inner portal
        
        // Update host images
        host.src = 'images/host-new.png'; // Mobile only
        television.src = 'images/tv-host-new.png'; // Large screens only

        // Handle cat info and change host's text
        console.log(factData);
        const randomBreed = factData[Math.floor(Math.random() * factData.length)];
        let breedInfo = randomBreed.description;    
        const formattedBreedInfo = breedInfo.slice(0, 15).toLowerCase() + breedInfo.slice(15);
        
        if(firstClick) {
            speechBubble.innerText = `Look at this cat! It's like, the coolest most stinkiest cat ever. This is just a random cat, but did you know that ${formattedBreedInfo.slice(0, -1).replace(/[.]/g, '?')}??? Dope right? Click the angel again if you're dying to receive another blessing.`;
            firstClick = false;
        } else {
            speechBubble.innerText = `Here's another random cat for your eyeballs, and another random tidbit for your brain! Did you know that ${formattedBreedInfo.slice(0, -1).replace(/[.]/g, '?')}??? Dope right? Click the angel again if you're dying to receive another blessing.`;
        }

        speechBubble.scrollTop = 0; // Ensures scroll resets to top in speech bubble
    })
    .catch(error => {
        console.log(error);
        speechBubble.innerHTML = '<p>Aw, man. Something went wrong... Check back later?</p>'
    });
});