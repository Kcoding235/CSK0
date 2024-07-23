function calculDeLimc(){
    let masse = inputMasse.value;
    let taille = inputTaille.value;
    let imc= Math.round(masse/(taille*taille));
    resultats.innerHTML = "L'IMC calcule est égal à "+imc+" kg/m2";
    if(imc > 30){
        interpretation.innerHTML = "D'aprés l'OMS l'individu souffre d'obésité.";
    }else   if(imc > 25){
        interpretation.innerHTML = "D'aprés l'OMS l'individu souffre surpoids.";
    }else{
        interpretation.innerHTML = "";
    }
}