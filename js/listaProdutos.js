const listaProdutos = [

    // Modelo Produto/maisProcurados
    // {
    //     nome: "AMACIADOR DE CARNE INOX ABS-HD", 
    //     cod: "905",
    //     preco: "4.250,00",
    //     categoria: "açougue",
    //     subcategoria: "AMACIADORES DE BIFE",
    //     maisProcurados: "sim",
    //     vezes: "",
    //     promocao: "",
    // },


    // Modelo Promoção
    {
        nome: 'AUTO SERVIÇO 3 PORTAS ASFL 2000', 
        cod: "85",
        preco: "R$14.400,00 à vista",
        categoria: "Refrigeração",
        subcategoria: "Auto Serviço",
        maisProcurados: '',
        vezes: "12,990 x6",
        promocao: "10.990,00",
    },


    {
        nome: "AMACIADOR DE CARNE INOX ABS-HD",
        cod: "905",
        preco: "R$4.250,00 à vista",
        categoria: "açougue",
        subcategoria: "AMACIADORES DE BIFE",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "CHAIRA INOX LISA 5541-12 MUNDIAL",
        cod: "8298",
        preco: "R$75,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Chaira inox Estriada 7840-12 Mundial",
        cod: "398",
        preco: "R$85,00 à vista",
        categoria: "",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "",
        cod: "",
        preco: "",
        categoria: "",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },


    {
        nome: "",
        cod: "",
        preco: "",
        categoria: "",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

];

// Função para ordenar a lista alfabeticamente pelo nome
listaProdutos.sort((a, b) => {
    const nomeA = a.nome.toUpperCase(); // Converter para maiúsculas para evitar problemas com case sensitivity
    const nomeB = b.nome.toUpperCase();

    if (nomeA < nomeB) {
        return -1; // "a" vem antes de "b"
    }
    if (nomeA > nomeB) {
        return 1; // "b" vem antes de "a"
    }
    return 0; // Nomes iguais
});

const cardsPorPagina = 20;
let paginaAtual = 1;

function mostrarProdutos(pagina) {
    const secaoCardTitulo = document.querySelector('.secaoCard__titulo').textContent.trim().toLowerCase();
    const estaNaIndexOuMaisProcurados = secaoCardTitulo === 'mais procurados' || window.location.pathname.includes("index");

    let produtosFiltrados;

    if (secaoCardTitulo === 'promoções do mês') {
        // Filtra apenas produtos que estão em promoção
        produtosFiltrados = listaProdutos.filter(produto => produto.promocao.trim() !== '');
    } else if (secaoCardTitulo === 'mais procurados') {
        // Filtra apenas produtos mais vendidos
        produtosFiltrados = listaProdutos.filter(produto => produto.maisProcurados !== '');
    } else {
        // Filtra produtos por categoria ou subcategoria
        produtosFiltrados = listaProdutos.filter(produto =>
            produto.categoria.toLowerCase() === secaoCardTitulo ||
            produto.subcategoria.toLowerCase() === secaoCardTitulo
        );
    }

    const totalProdutos = produtosFiltrados.length;
    const inicio = (pagina - 1) * cardsPorPagina;
    const fim = inicio + cardsPorPagina;
    const produtosParaMostrar = produtosFiltrados.slice(inicio, fim);

    const secaoCard = document.querySelector('.secaoCard__main');
    secaoCard.innerHTML = ''; // Limpa a seção antes de adicionar novos produtos

    // Se não houver produtos, exibir uma mensagem
    if (produtosParaMostrar.length === 0) {
        secaoCard.innerHTML = `<p>Nenhum produto encontrado.</p>`;
        return;
    }

    produtosParaMostrar.forEach(produto => {
        const estaEmPromocao = produto.promocao.trim() !== ''; // Verifica se há promoção
        const precoClasse = estaEmPromocao ? "promotion__color" : ""; // Adiciona classe condicionalmente
        const caminhoBase = estaNaIndexOuMaisProcurados ? "./" : "../"; // Define o caminho correto

        secaoCard.innerHTML += `
            <div class="cardProduto">
                <img src="${caminhoBase}images_produtos/${produto.cod}.png" alt="${produto.nome}" class="cardProduto_img">
                <h1 class="cardProduto_descricao">${produto.nome}</h1>
                <p class="cardProduto_cod">Cod: ${produto.cod}</p>
                <p class="cardProduto_preco ${precoClasse}">
                    ${estaEmPromocao ? `
                        <span class="preco-antigo">R$${produto.vezes}</span> <br> 
                        <span class="preco-novo">R$${produto.promocao} à vista</span>
                    ` : `
                        R$${produto.preco} à vista
                    `}
                </p>
                <a href="${caminhoBase}pages_produtos/${produto.cod}.html" class="cardProduto_link">Saiba Mais</a>
            </div>
        `;
    });

    // Atualiza a paginação corretamente
    gerarPaginacao(pagina, totalProdutos);
}


function produtoPromocao() {
    const containerInfo = document.querySelector('.container__infos');
    const codigoElemento = document.querySelector('.p');

    // Verifica se o elemento existe para evitar erro
    if (!codigoElemento) {
        console.error("Elemento com a classe '.p' não encontrado.");
        return;
    }

    // Obtém o código do produto da página e remove espaços extras
    const codigoPageProduto = codigoElemento.textContent.split(':')[1]?.trim();

    // Verifica se o código foi extraído corretamente
    if (!codigoPageProduto) {
        console.error("Código do produto não encontrado no texto.");
        return;
    }

    // Encontra o produto correspondente
    const produto = listaProdutos.find(p => String(p.cod) === codigoPageProduto);

    // Se encontrou o produto, exibe as informações corretas
    if (produto) {
        if (produto.promocao) { // Se tiver promoção, mostra os preços promocionais
            containerInfo.innerHTML = `
                <h1 class="infos__h1">${produto.nome}</h1>
                <p class="p">Cod. do Produto: ${produto.cod}</p>
                <h2 class="infos__h3 promotion__color">R$${produto.vezes}</h2>
                <h2 class="infos__h2 promotion__color">R$${produto.promocao} à vista</h2>
            `;
        } else { // Caso contrário, exibe o preço normal
            containerInfo.innerHTML = `
                <h1 class="infos__h1">${produto.nome}</h1>
                <p class="p">Cod. do Produto: ${produto.cod}</p>
                <h2 class="infos__h2">R$${produto.preco}</h2>
            `;
        }
    } else {
        console.error("Produto não encontrado na lista.");
    }
}

produtoPromocao();






// Atualiza a paginação corretamente com base nos produtos filtrados
function gerarPaginacao(pagina, totalProdutos) {
    const totalPaginas = Math.ceil(totalProdutos / cardsPorPagina);
    const secaoPaginacao = document.querySelector('.paginacao');
    secaoPaginacao.innerHTML = '';

    if (totalPaginas <= 1) return;

    const botaoAnterior = document.createElement('button');
    botaoAnterior.classList.add('btn__pagination');
    botaoAnterior.innerHTML = '<i class="ri-arrow-left-double-line"></i>';
    botaoAnterior.disabled = pagina === 1;
    botaoAnterior.addEventListener('click', () => mostrarProdutos(pagina - 1));
    secaoPaginacao.appendChild(botaoAnterior);

    for (let i = 1; i <= totalPaginas; i++) {
        const botaoPagina = document.createElement('button');
        botaoPagina.classList.add('btn__pagination');
        botaoPagina.textContent = i;
        if (i === pagina) botaoPagina.classList.add('ativo');
        botaoPagina.addEventListener('click', () => mostrarProdutos(i));
        secaoPaginacao.appendChild(botaoPagina);
    }

    const botaoProximo = document.createElement('button');
    botaoProximo.classList.add('btn__pagination');
    botaoProximo.innerHTML = '<i class="ri-arrow-right-double-line"></i>';
    botaoProximo.disabled = pagina === totalPaginas;
    botaoProximo.addEventListener('click', () => mostrarProdutos(pagina + 1));
    secaoPaginacao.appendChild(botaoProximo);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Captura os elementos da barra de pesquisa
const inputPesquisa = document.querySelector('.input__barra__pesquisa');
const botaoPesquisa = document.querySelector('.button__barra__pesquisa');

// Verifica se a página atual é a index
const estaNaIndex = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/');

// Define o caminho correto para os links de imagens e páginas
const caminhoImagem = estaNaIndex ? "./images_produtos/" : "../images_produtos/";
const caminhoPagina = estaNaIndex ? "./pages_produtos/" : "../pages_produtos/";

// Função para pesquisar produtos na lista
function pesquisarProdutos() {
    const termoPesquisa = inputPesquisa.value.trim().toLowerCase();

    if (termoPesquisa === '') {
        return; // Não faz nada se a pesquisa estiver vazia
    }

    // Salva o termo de pesquisa no localStorage
    localStorage.setItem('termoPesquisa', termoPesquisa);

    // Redireciona para a página de pesquisa
    window.location.href = estaNaIndex ? './pages_navegation/pesquisa.html' : '../pages_navegation/pesquisa.html';
}

// Evento para ativar a pesquisa ao clicar no botão
botaoPesquisa.addEventListener('click', pesquisarProdutos);

// Evento para ativar a pesquisa ao pressionar "Enter" no campo de pesquisa
inputPesquisa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        pesquisarProdutos();
    }
});

// Se estiver na página de pesquisa, executar a busca automaticamente
if (window.location.pathname.includes('pesquisa.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const termoPesquisa = localStorage.getItem('termoPesquisa') || '';
        if (termoPesquisa) {
            inputPesquisa.value = termoPesquisa; // Atualiza o campo de pesquisa
            executarPesquisa(termoPesquisa);
        }
    });
}

// Função para carregar os produtos filtrados na página de pesquisa
function executarPesquisa(termoPesquisa) {
    const produtosFiltrados = listaProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(termoPesquisa) ||
        produto.cod.toLowerCase().includes(termoPesquisa) ||
        produto.categoria.toLowerCase().includes(termoPesquisa) ||
        produto.subcategoria.toLowerCase().includes(termoPesquisa)
    );

    const secaoCard = document.querySelector('.secaoCard__main');
    secaoCard.innerHTML = ''; // Limpa os produtos antes de exibir novos resultados

    // Atualiza o título da seção
    document.querySelector('.secaoCard__titulo').textContent = termoPesquisa || 'Pesquisa';

    if (produtosFiltrados.length === 0) {
        secaoCard.innerHTML = `<p>Nenhum produto encontrado.</p>`;
        document.querySelector('.paginacao').innerHTML = '';
        return;
    }

    produtosFiltrados.forEach(produto => {
        const estaEmPromocao = produto.promocao.trim() !== '';
        const precoClasse = estaEmPromocao ? "promotion__color" : "";

        secaoCard.innerHTML += `
            <div class="cardProduto">
                <img src="${caminhoImagem}${produto.cod}.png" alt="${produto.nome}" class="cardProduto_img">
                <h1 class="cardProduto_descricao">${produto.nome}</h1>
                <p class="cardProduto_cod">Cod: ${produto.cod}</p>
                <p class="cardProduto_preco ${precoClasse}">
                    ${estaEmPromocao ? `
                        <span class="preco-antigo">R$${produto.vezes}</span> <br> 
                        <span class="preco-novo">R$${produto.promocao} à vista</span>
                    ` : `
                        R$${produto.preco} à vista
                    `}
                </p>
                <a href="${caminhoPagina}${produto.cod}.html" class="cardProduto_link">Saiba Mais</a>
            </div>
        `;
    });

    // Remove a paginação, pois a pesquisa exibe todos os resultados de uma vez
    document.querySelector('.paginacao').innerHTML = '';
}


// Evento para ativar a pesquisa ao clicar no botão
botaoPesquisa.addEventListener('click', pesquisarProdutos);

// Evento para ativar a pesquisa ao pressionar "Enter" no campo de pesquisa
inputPesquisa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        pesquisarProdutos();
    }
});


mostrarProdutos(1);
