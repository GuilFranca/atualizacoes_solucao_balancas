const listaProdutos = [
    {
        nome: "BALANÇA BA37-C URANO",
        preco: "7.200,00",
        cod: "6968",
        categoria: "balancas"
    },
    {
        nome: "Impressora Elgin L42PRO",
        preco: "2.050,00",
        cod: "188",
        categoria: "automacao",
        subcategoria: "impressora"
    },
    {
        nome: "ETIQUETA OPEN",
        preco: "3,50",
        cod: "897",
        categoria: "etiqueta"
    },

];
let filtroProdutos = [...listaProdutos];
const cardsPorPagina = 20;
let paginaInicial = 1;


function mostrarProdutos(pagina) {
    const inicio = (pagina - 1) * cardsPorPagina;
    const fim = inicio + cardsPorPagina;

    // Usar filtroProdutos em vez de listaProdutos
    const produtosParaMostrar = filtroProdutos.slice(inicio, fim);

    const secaoCard = document.querySelector('.secaoCard__main');
    secaoCard.innerHTML = ''; // Limpar o conteúdo atual antes de adicionar novos produtos

    produtosParaMostrar.forEach(produto => {
        const nome = produto.nome;
        const cod = produto.cod;
        const preco = produto.preco;

        // Adicionar o card do produto
        secaoCard.innerHTML += `
            <!-- Card starts -->
            <div class="cardProduto">
                <img src="../images_produtos/${cod}.png" alt="${nome}" class="cardProduto_img">
                <h1 class="cardProduto_descricao">${nome}</h1>
                <p class="cardProduto_cod">Cod: ${cod}</p>
                <p class="cardProduto_preco">R$${preco} à vista</p>
                <a href="../pages_produtos/${cod}.html" class="cardProduto_link">Saiba Mais</a>
            </div>
            <!-- Card ends -->
        `;
    });

    // Atualizar a paginação
    gerarPaginacao(pagina);
}

// Função para gerar a paginação
function gerarPaginacao(pagina) {
    const totalProdutos = filtroProdutos.length;
    const totalPaginas = Math.ceil(totalProdutos / cardsPorPagina);

    if (totalPaginas === 1) {
        return
    } else {
        const secaoPaginacao = document.querySelector('.paginacao');
        secaoPaginacao.innerHTML = ''; // Limpar a seção de paginação antes de adicionar novos botões

        // Botão "Anterior"
        const prevButton = document.createElement('button');
        prevButton.classList.add('btn__pagination');
        prevButton.innerHTML = `<i class="ri-arrow-left-double-line"></i>`;
        prevButton.disabled = pagina === 1; // Desabilitar o botão "Anterior" se estiver na primeira página
        prevButton.addEventListener('click', () => mostrarProdutos(pagina - 1));
        secaoPaginacao.appendChild(prevButton);

        // Botões de número de páginas
        for (let i = 1; i <= totalPaginas; i++) {
            const pageButton = document.createElement('button');
            pageButton.classList.add('btn__pagination');
            pageButton.textContent = i;
            pageButton.classList.toggle('ativo', i === pagina); // Destacar a página atual
            pageButton.addEventListener('click', () => mostrarProdutos(i));
            secaoPaginacao.appendChild(pageButton);
        }

        // Botão "Próximo"
        const nextButton = document.createElement('button');
        nextButton.classList.add('btn__pagination');
        nextButton.innerHTML = '<i class="ri-arrow-right-double-fill"></i>';
        nextButton.disabled = pagina === totalPaginas; // Desabilitar o botão "Próximo" se estiver na última página
        nextButton.addEventListener('click', () => mostrarProdutos(pagina + 1));
        secaoPaginacao.appendChild(nextButton);

        // Função para rolar suavemente ao topo
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        scrollToTop();
    }


}

// Função pesquisa
const inputPesquisa = document.querySelector('.input__barra__pesquisa');
const btnPesquisa = document.querySelector('.button__barra__pesquisa');
const inputPesquisaMobile = document.querySelector('.input__barra__pesquisa__mobile');
const btnPesquisaMobile = document.querySelector('.button__barra__pesquisa__mobile');
const secaoMaisProcurados = document.querySelector('.secaoMaisProcurados');

// Verificar se há um termo de pesquisa salvo ao carregar a página
window.addEventListener('load', () => {
    const termoSalvo = localStorage.getItem('termoPesquisa');

    if (termoSalvo) {
        // Preencher o campo de pesquisa com o termo salvo
        inputPesquisa.value = termoSalvo;

        // Aplicar a pesquisa automaticamente
        pesquisa();
    } else {
        // Se não houver termo salvo, mostrar todos os produtos
        filtroProdutos = [...listaProdutos];
        mostrarProdutos(paginaInicial);
        gerarPaginacao(paginaInicial);
    }
});

btnPesquisa.addEventListener('click', function () {
    pesquisa();
});

btnPesquisaMobile.addEventListener('click', function () {
    pesquisa();
});

inputPesquisa.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        pesquisa();
    }
});

inputPesquisaMobile.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        pesquisa();
    }
});

function pesquisa() {
    const valorFiltro = inputPesquisa.value.toLowerCase();

    // Salvar o termo de pesquisa no localStorage
    localStorage.setItem('termoPesquisa', valorFiltro);

    if (valorFiltro === '') {
        secaoMaisProcurados.innerHTML = `
        <h1 class="secaoCard__titulo">Pesquisa</h1>
        <hr class="secaoCard__hr" />

        <!-- Container de cards -->
        <div class="secaoCard__main"></div>

        <!-- Paginação -->
        <ul id="paginacao" class="paginacao"></ul>
    `
    } else {
        // Atualizar o título da seção de pesquisa
        secaoMaisProcurados.innerHTML = `
        <h1 class="secaoCard__titulo">${valorFiltro}</h1>
        <hr class="secaoCard__hr" />

        <!-- Container de cards -->
        <div class="secaoCard__main"></div>

        <!-- Paginação -->
        <ul id="paginacao" class="paginacao"></ul>
    `
    }

    // Filtrar produtos com base no nome ou código
    filtroProdutos = listaProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(valorFiltro) ||
        produto.cod.toLowerCase().includes(valorFiltro)
    );

    // Mostrar os produtos filtrados
    mostrarProdutos(paginaInicial);
    gerarPaginacao(pagina);
}

mostrarProdutos(paginaInicial);