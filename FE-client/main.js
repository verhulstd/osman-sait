import axios from "axios";

import "./style.css";

const appRef = document.getElementById('app')
appRef.insertAdjacentHTML('beforeEnd', '<button>get data</button>');
const buttonRef = appRef.querySelector('button')
appRef.insertAdjacentHTML('beforeEnd', '<ul></ul>');
const ulRef = appRef.querySelector('ul')
buttonRef.addEventListener('click', function (e) {
    axios.get('http://localhost:5678/api/movies')
        .then(function (response) {
            ulRef.innerHTML = response.data.map(movie => `<li>${movie.title}</li>`).join('')
        })
        .catch(function (err) {
            console.log(err)
        })
})


http://localhost/api/movies/bulk/1231231,545646543,48545644,12132123