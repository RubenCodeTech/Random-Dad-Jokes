let config = {headers:{Accept: "application/json"}}

async function theApi(){
    let url = "https://icanhazdadjoke.com"
    let response = await fetch(url,config);
    let data = await response.json();
    document.querySelector('#joke').innerHTML = data.joke
}

document.querySelector('#jokeBtn').addEventListener('click', theApi)
