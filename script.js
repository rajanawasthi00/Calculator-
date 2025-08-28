var out = document.querySelector(".result")
let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        if (e.target.textContent == "=") {
            string = eval(string)
            out.textContent = string
        } else if (e.target.textContent == "AC") {
            string = ""
            out.textContent = string
        } else if (e.target.textContent == "DEL") {
            string = string.slice(0, -1);
            out.textContent = string

        }
        else {
            string = string + e.target.textContent
            out.textContent = string
        }



    })
})
