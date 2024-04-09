var verificacao = document.cookie;
if (verificacao == "" || verificacao == "primeiravez=true") {
    //openOverlay();
}


function flutua(i) {
    resetItems(i);
    changeDivider(i);
    changeToFlutua(i);
    if (i != 4) {
        changeNextItem(i);
    }


}

function afunda(i) {
    resetItems(i);
    changeDivider(i - 1);
    changeToAfunda(i);
}



function resetItems(i) {
    for (var j = 1; j <= 4; j++) {

        //Retira o texto
        document.getElementById("activity-item" + j).querySelector(".during-activity-item-content").style.display = "none";

        //Apenas aos elementos seguintes ao clicado
        if (j > i) {
            resetBotaoFlutua(j);
            resetBotaoAfunda(j);

            //Reset ao estilo
            document.getElementById("activity-item" + j).style.backgroundColor = "#ffffff";
            document.getElementById("activity-item" + j).querySelector(".during-activity-item-right").style.display = "none";
            document.getElementById("activity-item" + j).querySelector(".during-activity-item-right-lock").style.display = "flex";
            if (j == 4) {
                document.getElementById("item-content1").style.display = "none";
                document.getElementById("item-content2").style.display = "none";
            }
        }


    }
}

function changeToAfunda(i) {
    //Aparece o texto
    if (i == 4) {
        document.getElementById("item-content1").style.display = "block";
    }
    else {
        document.getElementById("activity-item" + i).querySelector(".during-activity-item-content").style.display = "block";
    }

    //Muda o estilo
    document.getElementById("activity-item" + i).style.backgroundColor = "#FFF8EA";
    //Muda o botão para não clicável
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.remove("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.add("during-activity-item-button-disabled");

    //Retira o onclick
    document.getElementById("activity-item" + i).querySelector(".afunda-button").onclick = null;

    //Reset ao botão do lado
    resetBotaoFlutua(i);
}

function changeToFlutua(i) {

    //Desparece o texto
    if (i == 4) {
        document.getElementById("item-content2").style.display = "block";
    }
    else {
        document.getElementById("activity-item" + i).querySelector(".during-activity-item-content").style.display = "none";
    }



    //Muda o estilo
    document.getElementById("activity-item" + i).style.backgroundColor = "#FFF8EA";
    //Muda o botão para não clicável
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.remove("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.add("during-activity-item-button-disabled");

    //Retira o onclick
    document.getElementById("activity-item" + i).querySelector(".flutua-button").onclick = null;
    //Reset ao botão do lado
    resetBotaoAfunda(i);
}

function resetBotaoFlutua(i) {
    //Redefine os estilos
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.add("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.remove("during-activity-item-button-disabled");
    //Redefine o onclick para ser clicável
    document.getElementById("activity-item" + i).querySelector(".flutua-button").onclick = function () { flutua(i) };


}


function resetBotaoAfunda(i) {
    //Redefine os estilos
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.add("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.remove("during-activity-item-button-disabled");
    //Redefine o onclick para ser clicável
    document.getElementById("activity-item" + i).querySelector(".afunda-button").onclick = function () { afunda(i) };
}

function changeNextItem(i) {
    //Faz com que os botões do próximo item apareçam
    document.getElementById("activity-item" + (i + 1)).querySelector(".during-activity-item-right").style.display = "flex";
    //E o cadeado desapareça
    document.getElementById("activity-item" + (i + 1)).querySelector(".during-activity-item-right-lock").style.display = "none";
}
function changeDivider(i) {
    //Todos invisíveis
    document.getElementById("during-activity-divider1").style.display = "none";
    document.getElementById("during-activity-divider2").style.display = "none";
    document.getElementById("during-activity-divider3").style.display = "none";

    //Apenas um visível
    //Os últimos itens (3 e 4) não alteram
    if (i != 4 && i != 3) {
        i += 1;
        document.getElementById("during-activity-divider" + i).style.display = "block";
    }

}
document.getElementById('mL-input').onchange = function () {
    document.getElementById("agua-1-value").innerText = this.value + "mL";
    document.getElementById("sal-1-value").innerText = (Math.round(((this.value * 89.5) / 250) * 10) / 10) + "g";
    document.getElementById("agua-2-value").innerText = this.value + "mL";
    document.getElementById("agua-3-value").innerText = (Math.round(((this.value * 122.5) / 250) * 10) / 10) + "mL";
    document.getElementById("alcool-1-value").innerText = (Math.round(((this.value * 127.5) / 250) * 10) / 10) + "mL";
    document.getElementById("agua-4-value").innerText = (Math.round(((this.value * 100) / 250) * 10) / 10) + "mL";
    document.getElementById("alcool-2-value").innerText = (Math.round(((this.value * 150) / 250) * 10) / 10) + "mL";
};



/*
function closeOverlay() {
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
    document.getElementsByClassName("video")[0].pause();
    document.getElementsByClassName("overlay-bg")[0].style.display = "none";
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByClassName("content-wrapper")[0].style.filter = "none";
};

function openOverlay() {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.getElementsByClassName("overlay-bg")[0].style.display = "block";
    document.getElementsByClassName("overlay")[0].style.display = "flex";
    document.getElementsByClassName("content-wrapper")[0].style.filter = "blur(2px)";
    if (verificacao == "" || verificacao == "primeiravez=true") {
        document.cookie = "primeiravez=false";
    }    
}*/

var graphs = ["pet", "pead", "pvc", "pebd", "pp", "ps"];
var names = [
    "Politereftalato de etileno",
    "Polietileno de alta densidade",
    "Policloreto de vinilo",
    "Polietileno de baixa densidade",
    "Polipropileno",
    "Poliestireno"
];
var count = 0;
var item = 0;
function openGraphics(i,j){
    count = j;
    item = i;
    document.getElementsByClassName("graphics-container")[item].style.display="flex";
    showGraph(count, item);
}
function nextGraph(){
    if(count!=5) count++;
    else count=0;
    showGraph(count,item);
}
function previousGraph(){
    if(count!=0) count--;
    else count=5;
    showGraph(count,item);

}
function showGraph(i, j){
    document.getElementsByClassName("graphic-image")[j].src = "./img/" + graphs[i] + "-graph.png";
    document.getElementsByClassName("graphic-plastic-name")[j].innerText = graphs[i].toUpperCase() + " - " + names[i] + " (Tipo "+ (i+1) + ")";
}
