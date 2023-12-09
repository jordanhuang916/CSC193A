function myFunction() {
    alert("Hello, world!");
}
function biggerText() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";

}
function fancyFunction() {
    
    var textArea = document.getElementById("textArea");
    var fancybutton = document.getElementById("fancybutton");
    var boringbutton = document.getElementById("boringbutton")
    if(fancybutton.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue"
        textArea.style.textDecoration = "underline"
    }
    if(boringbutton.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black"
        textArea.style.textDecoration = "none"
    }
}
function mooFunction() {
    var textArea = document.getElementById("textArea")
    textArea.value = textArea.value.toUpperCase();
    var input = textArea.value.split(".");
    for (var i = 0; i < input.length; i++) {
        var token = input[i].trim().split(" ");
        if (token.length > 0) {
            token[token.length - 1] += "-Moo";
        }
        input[i] = token.join(" ");
    }
    textArea.value = input.join(". ");
}