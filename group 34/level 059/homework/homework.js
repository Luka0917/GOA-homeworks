// 1
const p1 = document.getElementById("p-1").textContent = "world!";
// alert(p1);

// 2
const p2 = document.getElementById("p-2");

const paragraph = {
    color: "blue",
    bgColor: "pink",
    fontWeight: 500,
    fontSize: "20px",
}

document.getElementById("p-2").style.color = paragraph.color;
document.getElementById("p-2").style.backgroundColor = paragraph.bgColor;
document.getElementById("p-2").style.fontWeight = paragraph.fontWeight;
document.getElementById("p-2").style.fontSize = paragraph.fontSize;

// 3
const div1 = document.getElementById("div-1");

div1.style.textAlign = "center";
div1.style.width = "115px";
div1.style.height = "87px";
div1.style.backgroundColor = "red";