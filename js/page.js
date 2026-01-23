const bouton = document.querySelector('button');
const liste = document.querySelector('#liste-lignes');

bouton.addEventListener('click', function() {
    
    fetch('https://data.toulouse-metropole.fr/api/explore/v2.1/catalog/datasets/ligne/records?limit=20')
        .then(function(reponse) {
            return reponse.json();
        })
        .then(function(donnees) {
            // Pour chaque ligne, on crée un élément <li>
            donnees.results.forEach(function(ligne) {
                const li = document.createElement('li');
                li.textContent = ligne.nom_ligne;
                li.classList.add('box'); 
                liste.appendChild(li);
            });
        });
});