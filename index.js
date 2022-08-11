const form = document.getElementById('formi');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fname = form.elements[0].value
    if(fname === "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855") {
        console.log("Yes")
    } else {
        console.log("Nah")
    }
})