const dropdownbtn = document.getElementById("dropdownbtn");
const dropdownmenu = document.getElementById("dropdownbckgrnd");

dropdownbtn.onclick = function () {
    if (dropdownmenu.style.opacity === "0" || dropdownmenu.style.opacity === "") {
        dropdownmenu.style.opacity = "1";
        dropdownmenu.style.pointerEvents = "auto"; 
    } else {
        dropdownmenu.style.opacity = "0";
        dropdownmenu.style.pointerEvents = "none"; 
    }
};

