
//keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) =>{
    key.textContent = e.key;

    if (e.key === "j") {
        keypressContainer.style.background = "pink"; // si en appuyant sur la touche "j" la div deviend rose
    } else if (e.key === "f"){
        keypressContainer.style.background = "cyan"; // sinon si en appuyant sur la touche "f" la div deviend cyan
    }else {
        keypressContainer.style.background = "#555352"; // si autre que "j" ou "f" la div deviends de la couleur donnée
    }
});
