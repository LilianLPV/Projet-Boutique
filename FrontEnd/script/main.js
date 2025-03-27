const url = "http://localhost:3000/";
const btn = document.querySelector('button');

btn.addEventListener('click', getSneakers);

function getSneakers(){
    fetch(url + 'sneakers')
    .then(reponse => {
        return reponse.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("erreur : " + error);
    });
}
