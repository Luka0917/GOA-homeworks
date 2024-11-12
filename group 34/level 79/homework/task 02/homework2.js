const body = document.querySelector("body");

let answer = prompt("enter figure: ");

if (answer === "rectangle"){
    let width = prompt("Enter width of rectangle:");
    let height = prompt("Enter height of rectangle:");
    let resultRectangle = document.createElement("h1");
    resultRectangle.textContent = "The area of rectangle is: " + width * height;
    body.appendChild(resultRectangle);
}
else if (answer === "circle"){
    let radius = prompt("Enter radius of circle:");
    let resultCircle = document.createElement("h1");
    resultCircle.textContent = "The area of circle is: " + Math.PI * (Math.pow(radius, 2));
    body.appendChild(resultCircle);
}
else if (answer === "triangle"){
    let a = prompt("Enter the length of one side of the triangle:");
    let b = prompt("Enter the length of second side of the triangle:");
    let c = prompt("Enter the length of third side of the triangle:");
    let s = (a + b + c) / 2
    let result = s * (s - a) * (s - b) * (s - c);
    let resultTriangle = document.createElement("h1");
    resultTriangle.textContent = "The area of triangle is: " + Math.sqrt(result);
    body.appendChild(resultTriangle);
}