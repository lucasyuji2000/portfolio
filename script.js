var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");// toggle = alteração, poderia usar o add, mas teria q fzr outra funcao para fechar o sidebar, usando remove
});

var menuItem = document.querySelectorAll(".menu-link")

menuItem.forEach(e => {
    e.addEventListener("click", () => {
        document.querySelector(".container").classList.remove("show-menu");
    })
});