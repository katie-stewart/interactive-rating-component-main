document.querySelectorAll(".rating").forEach(function(button) {
    button.addEventListener('click', function(event) {
        document.getElementById("result-number").innerText = event.currentTarget.innerText
        document.getElementById("submit-rating").removeAttribute("disabled")
    })
})


document.getElementById("submit-rating").addEventListener('click', function(event) {
    document.getElementById("rating").classList.add("is-hidden")
    document.getElementById("result").classList.remove("is-hidden")
})