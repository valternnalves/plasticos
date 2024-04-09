var plasticHeaders = [
    "Politereftalato de etileno (PET)",
    "Polietileno de alta densidade (PEAD)",
    "Policloreto de vinilo (PVC)",
    "Polietileno de baixa densidade (PEBD)",
    "Polipropileno (PP)",
    "Poliestireno (PS)",
    "Outros (O)"
];
var plasticDensities = [
    "1,29 a 1,40 g/cm³",
    "0.94 a 0.96 g/cm³",
    "1,38 a 1,45 g/cm³", "0.92 a 0.94 g/cm³",
    "0,90 g/cm³",
    "1,05 g/cm³",
    ""
];
var plasticTexts = [
    'O PET, ou politereftalato de etileno, é um polímero termoplástico que é amplamente utilizado na produção de embalagens, como garrafas, potes e sacos. É um material leve, resistente e transparente, o que o torna ideal para o armazenamento de alimentos e bebidas.\nO PET é um polímero de condensação, o que significa que é formado pela reação entre dois monômeros, o ácido tereftálico (PTA) e o etilenoglicol (EG). A reação ocorre em duas etapas, com a formação de um intermediário, o bisfenol A (BPA).\nO PET pode ser reciclado, o que é importante para a redução da poluição ambiental. O processo de reciclagem do PET consiste em três etapas:\n- Separação: as embalagens de PET são separadas de outros tipos de plásticos e contaminantes.\n- Lavagem: as embalagens são lavadas para remover contaminantes.\n- Reprocessamento: as embalagens são reprocessadas para formar novos produtos, como garrafas, fios e tecidos.',

    'O Polietileno de alta densidade (PEAD) é mais resistente do que o PET mas também pode ser alvo de reciclagem. Inquebrável, leve e com elevada resistência química, é utilizado na produção de caixas de plástico, tubos para a construção, embalagens de detergentes, brinquedos, baldes ou sacos de supermercado.',

    'O Policloreto de vinilo (PVC) é um tipo de plástico com elevado impacto ambiental e na saúde humana (liberta toxinas perigosas ao longo de todo o seu ciclo de vida), está a ser cada vez menos utilizado e tem vindo a ser substituído pelo PET. No entanto, por ser resistente, rígido e barato de produzir, ainda é usado em embalagens de detergentes e produtos de higiene ou nos blisters (invólucros de medicamentos) da indústria farmacêutica.',

    'O Polietileno de baixa densidade (PEBD) é um material leve, flexível, transparente e impermeável, usado em sacos de supermercado, sacos de lixo, utensílios domésticos ou películas para embalar alimentos. É difícil reciclar, pelo que deve ser uma opção a evitar no seu dia-a-dia.',

    'O Polipropileno (PP) é um plástico que caracteriza-se pela durabilidade, brilho e resistência a mudanças de temperatura. Não é um plástico totalmente reciclável e alguns dos componentes podem ter um risco potencial para a saúde. O polipropileno é bastante usado na produção de frascos para alimentos, mas também em embalagens de comida para takeaway, fios, cabos, tampas de garrafas, fraldas descartáveis, garrafas reutilizáveis, fibras para tapetes e espreguiçadeiras.',

    'O Poliestireno (PS) é um material flexível, leve, impermeável e com capacidade de isolamento térmico. Este material era usado para produzir artigos de uso único como talheres, pratos ou palhinhas descartáveis, que foram, entretanto, retirados do mercado. A esferovite é, na verdade, poliestireno expandido, que também é usado em materiais para isolamento de edifícios. Nos dias de hoje é usado para por exemplo, em copos de iogurtes e de gelados, cestos de supermercado, aparelhos de barbear descartáveis ou brinquedos.',

    'Os plásticos tipo 7 são frequentemente utilizados na fabricação de produtos de uso doméstico, como utensílios de cozinha, brinquedos, eletrodomésticos e embalagens. Alguns podem conter substâncias químicas perigosas, como o bisfenol A (BPA), que pode ser liberado no meio ambiente e ter efeitos nocivos na saúde humana e na vida selvagem.\nPor esse motivo, é importante evitar o uso de plásticos tipo 7 quando possível. Se você precisar usar esses plásticos, é importante reciclá-los corretamente para evitar que eles acabem nos aterros sanitários ou nos oceanos.'
];


//Onclick em todos os tipos de plástico
Array.prototype.map.call(document.getElementsByClassName("plastic-type-item"), function (elem) {
    elem.addEventListener("click", changePlastic);
});

//O que acontence quando clica no plástico
function changePlastic() {
    //O ultimo caracter do id é o numero do tipo de plastico
    var nPlastico = this.id.slice(-1);
    document.getElementById("plastic-type-header").innerText = plasticHeaders[nPlastico - 1];
    document.getElementById("plastic-density-header").innerText = plasticDensities[nPlastico - 1];
    document.getElementById("plastic-text").innerText = plasticTexts[nPlastico - 1];
    allUnselected();
    document.getElementById(this.id).classList.remove("plastic-type-unselected");
    console.log(nPlastico);
    console.log(document.getElementById("options-" + nPlastico));
    document.getElementById("options-" + nPlastico).style.display = "flex";

    //não sei mas funciona para dar scroll e não ficar atrás da navbar :)
    var element = document.getElementById('plastic-types-container');
    var bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = element.getBoundingClientRect().top;
    var elementPosition = elementRect - bodyRect;

    window.scrollTo({ top: elementPosition });


}
function allUnselected() {
    for (var i = 1; i <= 7; i++) {
        document.getElementById("plastic-type-" + i).classList.add("plastic-type-unselected");
        document.getElementById("options-" + i).style.display = "none";
    }
}
