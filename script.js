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

document.querySelector('#prazo').value = 10

document.querySelector('#qtd').addEventListener('change', atualizarPreco)
document.querySelector('#js').addEventListener('change', atualizarPreco)
document.querySelector('#layout-sim').addEventListener('change', atualizarPreco)
document.querySelector('#layout-nao').addEventListener('change', atualizarPreco)
document.querySelector('#prazo').addEventListener('change', function() {
    const prazo = document.querySelector('#prazo').value
    if (prazo==1) {
        document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semana`
    } else {
        document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semanas`
    }
    atualizarPreco()
});

function atualizarPreco() {
    const qtd = document.querySelector('#qtd').value
    const temJS = document.querySelector('#js').checked // verdadeiro ou falso(isso q faz o checked)
    const incluiLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value

    let preco = qtd*100

    if (temJS) {
        preco += (preco*0.1)
    }
    if (incluiLayout) {
        preco += 500
    }
    let taxaUrgencia = 1-prazo*0.1
    preco *= 1 + taxaUrgencia


    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`
}
