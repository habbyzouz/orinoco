/*
soit la tableau (mesOurs)représentant les données intégrale  GET / (retourne un tableau de tout les elements)

soit la variable nombre d'ours : recuperable avec length (c est le nombre d'item du tableau)

mise en place de la boucle => for 

        

        => en théorie ça devrais faire passer d'un ours a un autre 


 name, price, imageUrl, description       
*/

/* Initialisation sur les navigateurs recents et anciens*/
var getHttpRequest = function() {
        var httpRequest = false;

        if (window.XMLHttpRequest) { // Mozilla, Safari,...
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType('text/xml');
            }
        } else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }

        if (!httpRequest) {
            alert('Abandon :( Impossible de créer une instance XMLHTTP');
            return false;
        }

        return httpRequest
    }
    /* envoie de la requete au serveur via ajax */
var xhr = getHttpRequest()

xhr.open('GET', 'http://localhost:3000/api/teddies', true)
    // On envoit un header pour indiquer au serveur que la page est appellée en Ajax
xhr.responeType = "json"
    // On lance la requête
xhr.send()

/* 

=> premet de verifier l aboutissement du lien avec le serveur <=

xhr.onload = function() {
    //Si le statut HTTP n'est pas 200...
    if (xhr.status != 200) {
        //...On affiche le statut et le message correspondant
        alert("Erreur " + xhr.status + " : " + xhr.statusText);
        //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
    } else {
        alert(xhr.response.length + " octets  téléchargés\n" + JSON.stringify(xhr.response));
    }
};

//Si la requête n'a pas pu aboutir...
xhr.onerror = function() {
    alert("La requête a échoué");
};

//Pendant le téléchargement...
xhr.onprogress = function(event) {
    //lengthComputable = booléen; true si la requête a une length calculable
    if (event.lengthComputable) {
        //loaded = contient le nombre d'octets téléchargés
        //total = contient le nombre total d'octets à télécharger
        alert(event.loaded + " octets reçus sur un total de " + event.total);
    }
};
*/

fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error => alert("Erreur : " + error));