SPOTIFY_CLIENT_ID = "8e1781d096804201b4688932dde7e873";

// See if we have a token stored
let token = localStorage.getItem('spotify_token');
if (token !== null) {
    console.log("verified");
    // Test the token
}

// See if there is a token in the URL

// Get User Access Token
const callback_url = encodeURIComponent('https://serene-curran-915888.netlify.com');
const url = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${callback_url}&scope=user-library-read&response_type=token`;
document.getElementById('spotify-link').href = url;

// Display Result
let resultDiv = document.getElementById('result');
if (window.location.href.includes('#access_token')) {
    console.log('token in url');
    resultDiv.innerText = "token";
} else {
    console.log('no token in url');
    resultDiv.innerText = window.location.href;
}

console.log(window.location.href);