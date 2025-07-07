let valorTotal = 0;
function adicionar() {
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;
  let nomeProduto = produto.split("-")[0];
  let valorProduto = produto.split("R$")[1];

  if (quantidade < 1) {
    alert("Selecione a quantidade à adicionar!");
  } else {
    let listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML =
      listaProdutos.innerHTML +
      ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
    let precoProduto = valorProduto * quantidade;
    valorTotal = valorTotal + precoProduto;

    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$${valorTotal}`;
    document.getElementById("quantidade").value = " ";
  }
}

function limpar() {
  valorTotal = 0;
  document.getElementById("lista-produtos").innerHTML = " ";
  document.getElementById("valor-total").innerHTML = "R$0 ";
}
