// Get Element From Page 
let blob = document.querySelector(".blob");
let copy = document.querySelector("#copy");
let copyBtn = document.querySelector(".copy-btn");
let width = document.querySelector("#width");
let height = document.querySelector("#height");
let radTopLeft = document.querySelector("#rad-top-left");
let radTopRight = document.querySelector("#rad-top-right");
let radBottomLeft = document.querySelector("#rad-bottom-left");
let radBottomRight = document.querySelector("#rad-bottom-right");

let inputs = [width, height, radTopLeft, radTopRight, radBottomLeft, radBottomRight];

inputs.forEach(function (inp) {
    inp.addEventListener("change", createBlob);
});
function createBlob() {
    let borderRadius = `${radTopLeft.value}% ${100 - radTopLeft.value}% ${radTopRight.value}% ${100 - radTopRight.value}% / ${radBottomLeft.value}% ${100 - radBottomLeft.value}% ${radBottomRight.value}% ${100 - radBottomRight.value}%;`;
    blob.style.cssText = `border-radius: ${borderRadius}; height: ${height.value}px; width: ${width.value}px`;
    copy.value = `border-radius: ${borderRadius}; height: ${height.value}px; width: ${width.value}px`;
}

// Copy Border Radius 
copyBtn.addEventListener("click", copyFunction);
copy.addEventListener("click", copyFunction);
function copyFunction() {
    copy.select();
    document.execCommand("copy");
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
        copyBtn.innerText = "copy";
    }, 2000);
}

