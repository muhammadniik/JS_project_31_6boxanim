const boxs = document.querySelector(".mainContat").children;
const mainbox = document.querySelector(".mainContat");

const ceartedBox = document.createElement("div");
setatt(0);
ceartedBox.style.backgroundColor = "white";
ceartedBox.style.position = "absolute";
ceartedBox.style.transition = "all 0.4s"
mainbox.appendChild(ceartedBox);


for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener("click", () => {
        setatt(i);
    })
}

function setatt(t) {
    ceartedBox.style.width = boxs[t].scrollWidth + "px";
    ceartedBox.style.height = boxs[t].scrollHeight + "px";
    ceartedBox.style.top = boxs[t].offsetTop + "px";
    ceartedBox.style.left = boxs[t].offsetLeft + "px";

}