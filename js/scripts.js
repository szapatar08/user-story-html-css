const button = document.getElementById("more");

function hide(){
    const x = document.getElementsByClassName("hide");
    if (button.textContent === "Show more ..."){
        for (let i = 0; i < x.length; i++) {
        x[i].style.display = "grid";
        button.textContent = "Show less ...";
        }
    } else if (button.textContent === "Show less ..."){
        for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        button.textContent = "Show more ...";
        }
    }
}