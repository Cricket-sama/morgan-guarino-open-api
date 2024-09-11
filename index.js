// Image of "host" standing/talking
// Host has speech bubble saying:
//     "Oh hey, welcome. Wanna see something sick af? Click on the angel over there
//     and get absolutely blessed."
// User clicks biblically accurate angel:
//      Host image changes to excited face
//      Host text bubble says:
//         "Look at this cat! It's like, the coolest cat ever. 
//         This is just a random cat, but did you know that 
//         {random info}??? Dope right?
//         Click the angel again if you're dying to receive another blessing."
//      Host's text is slightly different after the first click
//      Image and fact within text bubble update whenever angel is clicked
// 
// One page:
//      Host, speech bubble, angel, portal, television(larger screens only)
// Angel:
//      Hovers up and down slightly
//      Refreshes cat image, updates speech bubble and cat info when clicked
// Host with speech bubble:
//      Default pose + caption, located within television
//      Pose + caption change after angel is clicked
//      Only one pose change from default
// Portal:
//      Default swirling inner portal
//      Contains random cat image when angel is clicked

const apiKey = 'live_SPXyCCcDclVv4rXoivFn7QLVVu3h8FdtJYW9Ft2QaapMezS62ICTbVFgHNHCf2WW';
const imgUrl = 'https://api.thecatapi.com/v1/images/search';
const factUrl = 'https://api.thecatapi.com/v1/breeds';

const speechBubble = document.querySelector('.speech-bubble');
const angel = document.querySelector('.angel-image');

let firstClick = true; // Detects first angel click

// Get cat image once angel is clicked
angel.addEventListener('click', () => {
    fetch(imgUrl, {
    headers: {
        'x-api-key': apiKey
    }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Oops! Network response failed for image fetch');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const img = document.querySelector(".cat-image");
        img.src = data[0].url;
        img.classList.add('stop-rotating'); // Stops the rotation applied to inner portal

        return fetch(factUrl, {
            headers: {
                'x-api-key': apiKey
            }
        });
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Oops! Network response failed for fact fetch');
        }
        return response.json();
    })
    // Also get cat info and change host's text
    .then(data => {
        console.log(data);
        const randomBreed = data[Math.floor(Math.random() * data.length)];
        let breedInfo = randomBreed.description;    
        const formattedBreedInfo = breedInfo.charAt(0).toLowerCase() + breedInfo.slice(1);
        const text = document.querySelector(".speech-bubble");
        if(firstClick) {
        text.innerText = `Look at this cat! It's like, the coolest cat ever. This is just a random cat, but did you know that ${formattedBreedInfo.slice(0, -1).replace(/[.]/g, '?')}??? Dope right? Click the angel again if you're dying to receive another blessing.`;
        firstClick = false;
        } else {
            text.innerText = `So, did you also know that ${formattedBreedInfo.slice(0, -1).replace(/[.]/g, '?')}??? Dope right? Click the angel again if you're dying to receive another blessing.`;
        }

        text.scrollTop = 0; // Ensures scroll resets to top in speech bubble
    })
    .catch(error => {
        console.log(error);
    });
});