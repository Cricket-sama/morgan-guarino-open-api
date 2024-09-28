# morgan-guarino-open-api
Open API Project for Intro to Programming course with Code the Dream

[My Open API Project](https://github.com/cricket-sama/morgan-guarino-open-api)

## Project Description

This project is a simple web application that fetches:
- Randomized cat images
- Information about different breeds
from [The Cat API](https://thecatapi.com/).

## Previews

### Mobile Version

![Mobile Preview](gifs/mobile-preview.gif)

### Tablet/Desktop Version

![Tablet/Desktop Preview](gifs/large-screen-preview.gif)

## Installation

- Clone this repository to your local machine using the following command:
```bash
$ git clone https://github.com/cricket-sama/morgan-guarino-open-api.git
```

## How to Use

1. **Open the Project**
    - Navigate to the project directory.

2.  **Start Local Server**
    -  For those using VSCode with the Live Server   extension, right-click `index.html` then "Open with Live Server" or click "Go Live" at the bottom of your screen.
    - You can alternatively open `index.html` to be viewed in a web browser.

3. **Initial Page**
    - When the page first loads, the Host will be displayed with a default message instructing the user to click on the Angel. The Angel is displayed underneath the portal, which displays its default image—a swirling orange whorl.

4. **Interact**
    - Click on the hovering Angel to receive a "blessing" in the form of a fun, random cat image and a fun fact about a random cat breed.

5. **Enjoy!**
    - Keep clicking to receive more blessings!

## Features

- **Adorable Cat Images**: Clicking the Angel retrieves a random cat image from The Cat API.

- **Entertaining Cat Facts**: The Host shares a new bit of information about a random breed each time the Angel is clicked.

- **Host Character Interaction**: The "Host" character guides user interaction with changing speech text. The pose updates on the first Angel click, and dialogue changes based on the number of Angel clicks.

- **Fun Animated Elements**: The Angel hovers up and down continuously, the portal rotates if the Angel hasn't been clicked, and the speech bubble animates to highlight updated text with each Angel click.

- **Single-Page Design**: All content is updated dynamically without needing to reload the page.

- **Responsive Layout**: The design adjusts for both large and small screens.

## API Key

> [!IMPORTANT]
> This project utilizes The Cat API. Be sure to replace the placeholder API key in the `index.js` file with your own!

[ TheCat API](https://thecatapi.com/)

```javascript
const apiKey = 'your-API-key'; // Replace with your real API key
```

## Built With

- HTML
- CSS
- JavaScript
- The Cat API

## Credits

- This project was made using The Cat API for fetching cat images and breed information.