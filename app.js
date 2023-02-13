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
// Edit The Width And Height For Blob Element 
width.addEventListener("change", function () {
    blob.style.width = `${width.value}px`;
});
height.addEventListener("change", function () {
    blob.style.height = `${height.value}px`;
});



// // Edit Border Radius For Blob Element 
// radTopLeft.addEventListener("change", function () {
//     blob.style.borderTopLeftRadius = `${radTopLeft.value}%`;
// });
// radTopRight.addEventListener("change", function () {
//     blob.style.borderTopRightRadius = `${radTopRight.value}%`;
// });
// radBottomLeft.addEventListener("change", function () {
//     blob.style.borderBottomLeftRadius = `${radBottomLeft.value}%`;
// });
// radBottomRight.addEventListener("change", function () {
//     blob.style.borderBottomRightRadius = `${radBottomRight.value}%`;
// });



let radiusInputs = document.querySelectorAll(".rad");
radiusInputs.forEach(function (inp) {
    inp.addEventListener("change", editRadius);
});
function editRadius() {
    let borderRadius = `${radTopLeft.value}% ${100 - radTopLeft.value}% ${radTopRight.value}% ${100 - radTopRight.value}% / ${radBottomLeft.value}% ${100 - radBottomLeft.value}% ${radBottomRight.value}% ${100 - radBottomRight.value}%;`;
    blob.style = `border-radius: ${borderRadius}`;
    copy.value = `border-radius: ${borderRadius}width: ${width.value};height: ${height.value};`;
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

