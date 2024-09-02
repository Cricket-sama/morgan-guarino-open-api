const apiKey = 'live_SPXyCCcDclVv4rXoivFn7QLVVu3h8FdtJYW9Ft2QaapMezS62ICTbVFgHNHCf2WW';
const imgUrl = 'https://api.thecatapi.com/v1/images/search';
const factUrl = 'https://api.thecatapi.com/v1/breeds';

// Get cat image
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
    const img = document.createElement('img');
    img.src = data[0].url;
    img.classList.add('cat-img');
    document.body.appendChild(img);
})
.catch(error => {
    console.log(error);
});

// Get random cat info
fetch(factUrl, {
    headers: {
        'x-api-key': apiKey
    }
})
.then(response => {
    if(!response.ok) {
        throw new Error('Oops! Network response failed for fact fetch');
    }
    return response.json();
})
.then(data => {
    console.log(data);
    const randomBreed = data[Math.floor(Math.random() * data.length)];
    const description = randomBreed.description;
    const descriptionText = document.createElement('div');
    descriptionText.classList.add('random-breed-description');
    descriptionText.innerText = `${description}`;
    document.body.appendChild(descriptionText);
})
.catch(error => {
    console.log(error);
});