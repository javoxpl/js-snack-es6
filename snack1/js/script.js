/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/


var bici =
[
        {
            "nome": "saetta",
            "peso": 5,
        },

        {
            "nome": "saetta mc",
            "peso": 4,
        },

        {
            "nome": "saetta mc queen",
            "peso": 6,
        },

        {
            "nome": "fulmine",
            "peso": 7,
        },

        {
            "nome": "superfulmine",
            "peso": 3,
        },
];


//area di stampa e bottone
const stampa = document.getElementById("stampa");
const bottone = document.getElementById("invia");
const stampa1 = document.getElementById("stampa1")
console.log(Number("yt"))

// stampiamo la lista iniziale sulla pagina
for (i = 0; i < bici.length; i++) {
    stampa.innerHTML += `<p>N°${i + 1}</p><p>Nome: ${bici[i]["nome"]}</p><p>Peso: ${bici[i]["peso"]}</p><p>------</p>`
}

stampa1.innerHTML += `<p>Nome: ${bici[4]["nome"]}</p><p>Peso: ${bici[4]["peso"]}</p>`
// iniziamo l'evento click
bottone.addEventListener("click",
function(){


    
    
    //azzeriamo l'area stampa ad aogni click per ririempirla
    stampa.innerHTML =``
    stampa1.innerHTML = ``
    //aggiungiamo nuova bici
        let nuovaBici = {
            "nome" : `${document.getElementById("in1").value}`,
            "peso": Number(document.getElementById("in2").value),
        };

    //controlliamo l'esattezza dei dati, niente valore vuoti, niente numeri nella casella peso e numeri negativi

    if ((document.getElementById("in1").value != ``) && (document.getElementById("in2").value != ``) && ((isNaN(Number(document.getElementById("in2").value))) == false) && ((Number(document.getElementById("in2").value)) > 0)){
        bici.push(nuovaBici)
    } else {
        alert("dati inseriti non validi")
    }


    //TEST ARRAY BICI = LE BICI VENGONO INSERITE CORRETAMENTE AL CLICK
    console.log(bici)

    //stampiamo la lista aggiornata
    for (i = 0; i < bici.length; i++) {
        stampa.innerHTML += `<p>N°${i + 1}</p><p>Nome: ${bici[i]["nome"]}</p><p>Peso: ${bici[i]["peso"]}</p><p>------</p>`
    }

    let pesoMinimo = bici[0]["peso"];
    let bicicletteLeggere = [bici[0]]
    for (i = 0; i < bici.length; i++) {
        if (pesoMinimo > bici[i]["peso"]){
            bicicletteLeggere = []
            pesoMinimo = bici[i]["peso"]
            bicicletteLeggere.push(bici[i])
        } else if (pesoMinimo == bici[i]["peso"]){
            bicicletteLeggere.push(bici[i])
        }
            
        
    }
    for (i = 0; i < bicicletteLeggere.length; i++) {
        stampa1.innerHTML += `<p>Nome: ${bicicletteLeggere[i]["nome"]}</p><p>Peso: ${bicicletteLeggere[i]["peso"]}</p>`
    }
    console.log(bicicletteLeggere)
})