
let dogage = document.getElementById("title");
let output = document.getElementById('output');

document.getElementById('btn').addEventListener('click',() => {
    console.log(dogage.value)
    output.innerHTML = ((dogage.value - 2) * 4) +33
})

let reload = () => {
    location.reload();
}