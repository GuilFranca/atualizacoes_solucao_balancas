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
    // {
    //     nome: 'AUTO SERVIÇO 3 PORTAS ASFL 2000', 
    //     cod: "85",
    //     preco: "R$14.400,00 à vista",
    //     categoria: "Refrigeração",
    //     subcategoria: "Auto Serviço",
    //     maisProcurados: '',
    //     vezes: "R$12,990 x6",
    //     promocao: "R$10.990,00 à vista",
    // },


    // Categoria Açougue
    // subcategoria Amaciador de carne
    {
        nome: "AMACIADOR DE CARNE INOX ABS-HD",
        cod: "905",
        preco: "R$4.250,00 à vista",
        categoria: "açougue",
        subcategoria: "Amaciadores de Bife",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },

    // subcategoria Facas
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
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: 'FACA INOX DESOSSA 6" BKW106-6 CURVADA STARRETT',
        cod: "7330",
        preco: "R$44,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: 'faca inox desossa 6" 5515-06 5500 mundial',
        cod: "443",
        preco: "R$52,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: 'FACA INOX DESOSSA 6" 7815-6 MASTERLINE MUNDIAL',
        cod: "7973",
        preco: "R$30,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: 'Faca inox P/carnes 10" Bkw301-10 Triangular Larga Starrett',
        cod: "7325",
        preco: "R$85,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Faca inox p/carnes Mod 5520-10 Mundial",
        cod: "445",
        preco: "R$115,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Faca inox p/carnes Mod 5520-12 Mundial",
        cod: "446",
        preco: "R$140,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: 'Faca inox P/carnes 12" 7820-12 masterline mundial',
        cod: "7972",
        preco: "R$55,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: 'Faca inox P/carnes 12" Bkw203-12 Larga Starrett',
        cod: "4077",
        preco: "R$80,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: 'Faca inox P/carnes 14" BKW203-14 Larga Starrett',
        cod: "4078",
        preco: "R$112,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PEDRA DE AFIAÇÃO MUNDIAL P200-050",
        cod: "7974",
        preco: "R$30,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Pedra DE AFIAÇÃO Starrett",
        cod: "4081",
        preco: "R$25,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: 'Pedra DE AFIAÇÃO 8" SIGMA',
        cod: "9481",
        preco: "R$45,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "SUPORTE P/PEDRA 108/118 POLIETILENO",
        cod: "3122",
        preco: "R$45,00 à vista",
        categoria: "açougue",
        subcategoria: "facas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria Ganchos
    {
        nome: "GANCHO ESTANHADO",
        cod: "588",
        preco: "Faça Orçamento",
        categoria: "açougue",
        subcategoria: "ganchos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "GANCHO FRANGO DUPLO",
        cod: "7321",
        preco: "R$15,00 à vista",
        categoria: "açougue",
        subcategoria: "ganchos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "GANCHO FRANGO SIMPLES",
        cod: "617",
        preco: "R$12,00 à vista",
        categoria: "açougue",
        subcategoria: "ganchos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "GANCHO GIRATORIO ESTANHADO",
        cod: "592",
        preco: "R$30,00 à vista",
        categoria: "açougue",
        subcategoria: "ganchos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "GANCHO PARA DESOSSA",
        cod: "7331",
        preco: "R$30,00 à vista",
        categoria: "açougue",
        subcategoria: "ganchos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria Máquinas de Serrar Ossos
    {
        nome: "SERRA FITA SPOLU SPL-552",
        cod: "10064",
        preco: "R$2.600,00 à vista",
        categoria: "açougue",
        subcategoria: "máquinas de serrar ossos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "SERRA FITA GURAL BRT40",
        cod: "68",
        preco: "R$11.300,00 à vista",
        categoria: "açougue",
        subcategoria: "máquinas de serrar ossos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "SERRA FITA SKYMSEN SFL-282",
        cod: "30166",
        preco: "R$18.500,00 à vista",
        categoria: "açougue",
        subcategoria: "máquinas de serrar ossos",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Serra Fita Botini B-152",
        cod: "4818",
        preco: "R$2.270,00 à vista",
        categoria: "açougue",
        subcategoria: "máquinas de serrar ossos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Serra Fita Bermar Bm-38 Nr 12",
        cod: "3814",
        preco: "R$9.600,00 à vista",
        categoria: "açougue",
        subcategoria: "máquinas de serrar ossos",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria picadores de carne
    {
        nome: "CONJUNTO CRUZETA/DISCO INOX NR 22-5MM",
        cod: "2709",
        preco: "R$130,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "CONJUNTO CRUZETA/DISCO Inox NR 98 C/PRE CORTE 3 PCS",
        cod: "2923",
        preco: "R$375,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PICADOR DE CARNE Arbel Mcr-8",
        cod: "234",
        preco: "R$1.500,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PICADOR DE CARNE BOTINI B10",
        cod: "9167",
        preco: "R$390,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PICADOR DE CARNES GURAL MGI-10",
        cod: "9530",
        preco: "R$3.690,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PICADOR DE CARNE GURAL MGI-22",
        cod: "5563",
        preco: "R$5.200,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PICADOR DE CARNE GURAL MGI-98",
        cod: "6552",
        preco: "R$8.500,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PICADOR DE CARNE SKYMSEN PS-10",
        cod: "3561",
        preco: "R$4.500,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PICADOR DE CARNE SKYMSEN PS-22",
        cod: "3560",
        preco: "R$4.960,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PICADOR DE CARNE SKYMSEN PSP-98T",
        cod: "4721",
        preco: "R$8.400,00 à vista",
        categoria: "açougue",
        subcategoria: "picadores de carne",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria Máquinas de Serrar Ossos
    {
        nome: "BANDEJA DE PEAD MOD 178",
        cod: "7334",
        preco: "R$60,00 à vista",
        categoria: "açougue",
        subcategoria: "placas ped",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PLACA DE PEAD PRETA C/CANALETA",
        cod: "7950",
        preco: "R$80,00 à vista",
        categoria: "açougue",
        subcategoria: "placas ped",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "PLACA DE PEAD BRANCA",
        cod: "562",
        preco: "Faça Orçamento",
        categoria: "açougue",
        subcategoria: "placas ped",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria serras fita
    {
        nome: "LÂMINA EDGETOOLS",
        cod: "7368",
        preco: "R$70,00 à vista",
        categoria: "açougue",
        subcategoria: "serras fita",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "LÂMINA MILL SERRAS",
        cod: "7303",
        preco: "R$45,00 à vista",
        categoria: "açougue",
        subcategoria: "serras fita",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "LÂMINA MUNDIAL",
        cod: "8645",
        preco: "R$70,00 à vista",
        categoria: "açougue",
        subcategoria: "serras fita",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "LÂMINA STARRETT",
        cod: "404",
        preco: "R$60,00 à vista",
        categoria: "açougue",
        subcategoria: "serras fita",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // Categoria Automação
    // Subcategoria checkout
    {
        nome: "ACABAMENTO CHECKOUT",
        cod: "6409",
        preco: "Confira Nosso Orçamento",
        categoria: "automação",
        subcategoria: "checkout",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "CADEIRA CAIXA CHECKOUT AZUL",
        cod: "6815",
        preco: "R$380,00 à vista",
        categoria: "automação",
        subcategoria: "checkout",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "CADEIRA CAIXA CHECKOUT PRETO",
        cod: "10019",
        preco: "R$495,00 à vista",
        categoria: "automação",
        subcategoria: "checkout",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Check Out Amapa Sem Acabamento",
        cod: "5429",
        preco: "R$2.700,00 à vista",
        categoria: "automação",
        subcategoria: "checkout",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },

    // Subcategoria gaveteiros
    {
        nome: "GAVETEIRO GD-56 BEMATECH ELGIN",
        cod: "6683",
        preco: "R$560,00 à vista",
        categoria: "automação",
        subcategoria: "gaveteiros",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Gaveteiro Manual C/Pino Impulsao Grafite",
        cod: "24",
        preco: "R$365,00 à vista",
        categoria: "automação",
        subcategoria: "gaveteiros",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Porta dinheiro (Niqueleira) C/Fioxador",
        cod: "35",
        preco: "R$75,00 à vista",
        categoria: "automação",
        subcategoria: "gaveteiros",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Porta Dinheiro Amapa",
        cod: "5178",
        preco: "R$125,00 à vista",
        categoria: "automação",
        subcategoria: "gaveteiros",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria gondolas
    {
        nome: "BALCAO ATENDIMENTO AMAPA",
        cod: "7226",
        preco: "R$520,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "BALCAO CAIXA AMAPA",
        cod: "7227",
        preco: "R$520,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "BALCAO CANTO AMAPA",
        cod: "5313",
        preco: "R$520,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Balcão Encartelados Sem Vidro Amapa",
        cod: "4947",
        preco: "R$1.550,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "BALCÃO EXPOSITOR SEM PORTA COM BANDA DE VIDRO",
        cod: "6432",
        preco: "R$990,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "BALCÃO TERMINAL",
        cod: "6812",
        preco: "R$1.200,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "GÔNDOLA FIT 40 FARMA CANTO",
        cod: "3697",
        preco: "R$750,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "GÔNDOLA FIT 40 FARMA CENTRO",
        cod: "9805",
        preco: "R$840,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "GÔNDOLA FIT 40 FARMA PAREDE",
        cod: "6981",
        preco: "R$820,00 à vista",
        categoria: "automação",
        subcategoria: "gôndolas gondolas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },



    // subcategoria pdv
    {
        nome: "Impressora Elgin L42PRO",
        cod: "188",
        preco: "R$2.050,00 à vista",
        categoria: "automação",
        subcategoria: "pdv",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "IMPRESSORA ELGIN L42DT",
        cod: "7170",
        preco: "R$1.400,00 à vista",
        categoria: "automação",
        subcategoria: "pdv",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Impressora Elgin I8",
        cod: "7730",
        preco: "R$790,00 à vista",
        categoria: "automação",
        subcategoria: "pdv",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "LEITOR CÓDIGO DE BARRAS BR520 BEMATECH",
        cod: "9463",
        preco: "R$545,00 à vista",
        categoria: "automação",
        subcategoria: "pdv",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "LEITOR CÓDIGO DE BARRAS EL250 ELGIN",
        cod: "6615",
        preco: "R$610,00 à vista",
        categoria: "automação",
        subcategoria: "pdv",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "LEITOR FIXO 2D EL8600 ELGIN/BEMATECH",
        cod: "6410",
        preco: "R$1.500,00 à vista",
        categoria: "automação",
        subcategoria: "pdv",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria ribon
    {
        nome: "RIBBON",
        cod: "7724",
        preco: "Confira Nosso Orçamento",
        categoria: "automação",
        subcategoria: "ribbon",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "tinteiro",
        cod: "4126",
        preco: "R$15,00 à vista",
        categoria: "automação",
        subcategoria: "ribbon",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // Categoria balanças
    {
        nome: "Balança BK 300 Balmak",
        cod: "10667",
        preco: "R$1.550,00 à vista",
        categoria: "balanças",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "BALANÇA CHECKOUT 8217 32KG toledo",
        cod: "8284",
        preco: "R$2.350,00 à vista",
        categoria: "balanças",
        subcategoria: "",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Balança checkout DP30kg Elgin",
        cod: "6392",
        preco: "R$1.750,00 à vista",
        categoria: "balanças",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Balança Prix 4 Due",
        cod: "1819",
        preco: "R$10.500,00 à vista",
        categoria: "balanças",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "BALANÇA PRIX 5 PLUS",
        cod: "6069",
        preco: "R$11.690,00 à vista",
        categoria: "balanças",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "BALANÇA BA37-C URANO",
        cod: "6968",
        preco: "R$7.200,00 à vista",
        categoria: "balanças",
        subcategoria: "",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Balança US 31/2 POP-S",
        cod: "7090",
        preco: "R$920,00 à vista",
        categoria: "balanças",
        subcategoria: "",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Balança W-300 Welmy",
        cod: "3313",
        preco: "R$2.450,00 à vista",
        categoria: "balanças",
        subcategoria: "",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },

    // Categoria diversos
    // Subcategoria caixas plasticas
    {
        nome: "BANDEJA S-300 FAST-FOOD POLIPROPILENO",
        cod: "5280",
        preco: "R$20,00 à vista",
        categoria: "diversos",
        subcategoria: "caixas plásticas caixas plasticas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "CAIXA C/ TAMPA S.500 11 LITROS",
        cod: "2698",
        preco: "R$53,00 à vista",
        categoria: "diversos",
        subcategoria: "caixas plásticas caixas plasticas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Caixa C/ Tampa S.350 4,5 Litros",
        cod: "4429",
        preco: "R$28,00 à vista",
        categoria: "diversos",
        subcategoria: "caixas plásticas caixas plasticas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "CAIXA NC 280 NATURAL",
        cod: "9777",
        preco: "R$75,00 à vista",
        categoria: "diversos",
        subcategoria: "caixas plásticas caixas plasticas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "CESTA S.1200 ALÇA/RODA PLASTICA 30 LITROS",
        cod: "6097",
        preco: "R$125,00 à vista",
        categoria: "diversos",
        subcategoria: "caixas plásticas caixas plasticas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },

    // Subcategoria exaustores
    {
        nome: "Ventilador Axial Exaustor Ind 25Cm 220 Premium",
        cod: "5279",
        preco: "R$215,00 à vista",
        categoria: "diversos",
        subcategoria: "exaustores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Ventilador Axial Exaustor Ind 30Cm 220 Premium",
        cod: "4750",
        preco: "R$280,00 à vista",
        categoria: "diversos",
        subcategoria: "exaustores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Ventilador Axial Exaustor Ind 40Cm 220 Premium",
        cod: "4751",
        preco: "R$299,00 à vista",
        categoria: "diversos",
        subcategoria: "exaustores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Ventilador Axial Exaustor Ind 50Cm 220 Premium",
        cod: "4752",
        preco: "R$345,00 à vista",
        categoria: "diversos",
        subcategoria: "exaustores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },

    // Subcategoria mesas
    {
        nome: "CADEIRA BISTRO MISTA PLASTICO",
        cod: "8887",
        preco: "R$50,00 à vista",
        categoria: "diversos",
        subcategoria: "mesas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Cadeira Bistro Dobravel Madeira Madesil",
        cod: "50028",
        preco: "R$175,00 à vista",
        categoria: "diversos",
        subcategoria: "mesas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "MESA DOBRAVEL DE MADEIRA MADESIL",
        cod: "6617",
        preco: "R$395,00 à vista",
        categoria: "diversos",
        subcategoria: "mesas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "MESA QUADRADA MISTA PLASTICO",
        cod: "8318",
        preco: "R$91,00 à vista",
        categoria: "diversos",
        subcategoria: "mesas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Mesa Bistro Dobravel Madeira Madesil",
        cod: "50029",
        preco: "R$265,00 à vista",
        categoria: "diversos",
        subcategoria: "mesas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Mesa Inox 430",
        cod: "7731",
        preco: "R$1.300,00 à vista",
        categoria: "diversos",
        subcategoria: "mesas",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },

    // Subcategoria mesas
    {
        nome: "Ventilador de Mesa Turbo Eco 30cm Preto 52W Ventisol",
        cod: "6660",
        preco: "R$170,00 à vista",
        categoria: "diversos",
        subcategoria: "Ventiladores",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Ventilador Parede 60cm New GrPr Premium",
        cod: "5593",
        preco: "R$330,00 à vista",
        categoria: "diversos",
        subcategoria: "Ventiladores",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // Categoria etiquetas
    {
        nome: "ETIQUETA CORAÇÃO 64X80",
        cod: "7910",
        preco: "R$80,00 à vista",
        categoria: "etiquetas",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "ETIQUETA REDONDA",
        cod: "6690",
        preco: "Faça Orçamento",
        categoria: "etiquetas",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "ETIQUETA DE GONDOLA",
        cod: "891",
        preco: "R$35,00 à vista",
        categoria: "etiquetas",
        subcategoria: "",
        maisProcurados: "sim",
        vezes: "",
        promocao: ""
    },
    {
        nome: "ETIQUETA OPEN",
        cod: "897",
        preco: "R$3,50 à vista",
        categoria: "etiquetas",
        subcategoria: "",
        maisProcurados: "sim",
        vezes: "",
        promocao: ""
    },
    {
        nome: "ETIQUETA PERSONALIZADA",
        cod: "000",
        preco: "Faça Orçamento",
        categoria: "etiquetas",
        subcategoria: "",
        maisProcurados: "sim",
        vezes: "",
        promocao: ""
    },
    {
        nome: "ETIQUETA TERMICA",
        cod: "880",
        preco: "Faça Orçamento",
        categoria: "etiquetas",
        subcategoria: "",
        maisProcurados: "sim",
        vezes: "",
        promocao: ""
    },

    // Categoria gastronomia
    // Subcategoria chapa
    {
        nome: "Chapa Bifeteira Gas Metalcubas Cbg-600",
        cod: "4245",
        preco: "R$999,00 à vista",
        categoria: "gastronomia",
        subcategoria: "chapas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Chapa Venâncio PR 800E Stlyle",
        cod: "10940",
        preco: "R$1.999,00 à vista",
        categoria: "gastronomia",
        subcategoria: "chapas",
        maisProcurados: "sim",
        vezes: "",
        promocao: "",
    },

    // subcategoria cortadores de frios
    {
        nome: "Cortador de Frios Automático Inox FA-300 Skymsen",
        cod: "10275",
        preco: "R$11.400,00 à vista",
        categoria: "gastronomia",
        subcategoria: "cortadores de frios",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "CORTADOR DE FRIOS GURAL MODELO JXT-30 127V/220V/60Hz",
        cod: "7510",
        preco: "R$5.200,00 à vista",
        categoria: "gastronomia",
        subcategoria: "cortadores de frios",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "FATIADOR DE FRIOS TOLEDO PRIX 9300G SEMINOVO",
        cod: "7694",
        preco: "R$12.000,00 à vista",
        categoria: "gastronomia",
        subcategoria: "cortadores de frios",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "FATIADOR DE FRIOS GURAL AUTOMATICO AXT 33I 1/2 CV",
        cod: "3438",
        preco: "R$9.900,00 à vista",
        categoria: "gastronomia",
        subcategoria: "cortadores de frios",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Fatiador De Frios Arbel 170 S 220v",
        cod: "231",
        preco: "R$1.560,00 à vista",
        categoria: "gastronomia",
        subcategoria: "cortadores de frios",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },

    // subcategorias fogões
    {
        nome: "Fogão Industrial 8 Bocas P7 tradicional light.MR",
        cod: "6658",
        preco: "R$2.500,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fogões",
        maisProcurados: "",
        vezes: "R$2.290 x6",
        promocao: "R$1.900,00 à vista"
    },

    // subcategorias fornos
    {
        nome: "Forno Eletrico Roma Pintado Fer 110 C/ Pedra 220v",
        cod: "284",
        preco: "R$3.950,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fornos",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "FORNO ROMA FIRI 60 45/60 VENANCIO GAS",
        cod: "6095",
        preco: "R$1.650,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fornos",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Forno Turbo Digitop Gas 10 Esteira 220v FTDG-10 Venancio",
        cod: "4858",
        preco: "R$11.900,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fornos",
        maisProcurados: "sim",
        vezes: "",
        promocao: ""
    },
    {
        nome: "FORNO TURBO ELETRICO VERMELHO PRP-004 PLUS",
        cod: "6539",
        preco: "R$2.900,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fornos",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Forno Gás Industrial FIRIV 110 PINTADO",
        cod: "5549",
        preco: "",
        categoria: "gastronomia",
        subcategoria: "fornos",
        maisProcurados: "",
        vezes: "R$3.990 x6",
        promocao: "R$3.290,00 à vista"
    },

    // subcategoria fritadeiras
    {
        nome: "Fritador Cuba Eletrico Metalcubas Frce-6 2 Cb",
        cod: "3541",
        preco: "R$1.550,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fritadeiras",
        maisProcurados: "sim",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Fritador elétrico zona fria metal cubas FOE-15 MESA 8000W",
        cod: "7850",
        preco: "R$2.250,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fritadeiras",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Fritadeira Elétrica Agua E Oleo Siensem 220v Fc-N",
        cod: "313",
        preco: "R$2.750,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fritadeiras",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "FRITADEIRA ELÉTRICA ZONA FRIA FZP8, 15 LITROS, INOX, DE PISO - 8.000 W 220 V",
        cod: "9183",
        preco: "R$3.230,00 à vista",
        categoria: "gastronomia",
        subcategoria: "fritadeiras",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },

    // subcaegoria liquidificadores
    {
        nome: "LIQUIDIFICADOR COMERCIAL SKYMSEM LS-02 MBR-N",
        cod: "1079",
        preco: "R$1.400,00 à vista",
        categoria: "gastronomia",
        subcategoria: "liquidificadores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Liquidificador Industrial Skymsem Inox T A-04 MB",
        cod: "3471",
        preco: "R$1.360,00 à vista",
        categoria: "gastronomia",
        subcategoria: "liquidificadores",
        maisProcurados: "sim",
        vezes: "",
        promocao: ""
    },
    {
        nome: "LIQUIDIFICADOR INDUSTRIAL SKYMSEM LB-25 MBR-N",
        cod: "319",
        preco: "R$3.200,00 à vista",
        categoria: "gastronomia",
        subcategoria: "liquidificadores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Liquidificador Industrial Skymsem LS-08 Mbr-N",
        cod: "323",
        preco: "R$1.650,00 à vista",
        categoria: "gastronomia",
        subcategoria: "liquidificadores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Liquidificador Industrial Skymsem T A-02 N",
        cod: "324",
        preco: "R$900,00 à vista",
        categoria: "gastronomia",
        subcategoria: "liquidificadores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Liquidificador Industrial Skymsem L B-15 Mbr-N",
        cod: "318",
        preco: "R$3.150,00 à vista",
        categoria: "gastronomia",
        subcategoria: "liquidificadores",
        maisProcurados: "",
        vezes: "",
        promocao: ""
    },
    {
        nome: "Misturador coocktop 10L PRMQ-10 Progás",
        cod: "8313",
        preco: "R$1.890,00 à vista",
        categoria: "gastronomia",
        subcategoria: "liquidificadores",
        maisProcurados: "",
        vezes: "R$2.190 6x",
        promocao: "R$1.890,00 à vista"
    },

    // subcategoria panelas
    {
        nome: "Panela Pressao Pol. Casa 12 Litros Abc Aluminio",
        cod: "4578",
        preco: "R$610,00 à vista",
        categoria: "gastronomia",
        subcategoria: "panelas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Panela Pressao Pol. Casa 15 Litros Abc Aluminio",
        cod: "4579",
        preco: "R$640,00 à vista",
        categoria: "gastronomia",
        subcategoria: "panelas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Panela Pressao Polida Casa 20 Litros Abc Aluminio",
        cod: "4580",
        preco: "R$685,00 à vista",
        categoria: "gastronomia",
        subcategoria: "panelas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria panificação
    {
        nome: "Amassadeira Semi Rapida M B I-25 1/2 Cv Gastromaq",
        cod: "3271",
        preco: "R$7.450,00 à vista",
        categoria: "panificação",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Armario Pao Frances 40x60 Completo Baronesa",
        cod: "3303",
        preco: "R$2.500,00 à vista",
        categoria: "panificação",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Bandeija Pão Frances Baronesa 40x60",
        cod: "4172",
        preco: "R$65,00 à vista",
        categoria: "panificação",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Bandeija Pão Doce Aluminio Baronesa 40x60",
        cod: "4527",
        preco: "R$55,00 à vista",
        categoria: "panificação",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Cilindro CLI-300 Mini 220v Gastromaq",
        cod: "4844",
        preco: "R$5.250,00 à vista",
        categoria: "panificação",
        subcategoria: "",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // categoria refrigeração
    // subcategoria auto serviço
    {
        nome: "POLAR AUTO SERVIÇO 3 PORTAS",
        cod: "9616",
        preco: "R$11.200,00 à vista",
        categoria: "refrigeração",
        subcategoria: "auto serviço",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "POLAR AUTO SERVIÇO 4 PORTAS preto",
        cod: "10278",
        preco: "R$13.700,00 à vista",
        categoria: "refrigeração",
        subcategoria: "auto serviço",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "AUTO SERVIÇO 3 PORTAS ASFL 2000",
        cod: "85",
        preco: "R$10.990,00 à vista",
        categoria: "refrigeração",
        subcategoria: "auto serviço",
        maisProcurados: "",
        vezes: "R$ 12.990 x6",
        promocao: "R$10.990,00 à vista",
    },
    {
        nome: "AUTO SERVIÇO 5 PORTAS VANGUARD ECONOMY ASVR5P",
        cod: "9865",
        preco: "R$18.990,00 à vista",
        categoria: "refrigeração",
        subcategoria: "auto serviço",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria cervejeiras 
    {
        nome: "Cervejeira Vertical VCF C/284-Porta Vidro 4cx Fricon",
        cod: "3761",
        preco: "R$6.100,00 à vista",
        categoria: "refrigeração",
        subcategoria: "cervejeiras",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "Cervejeira CCV-315 Porta De Vidro Capacidade 454 L Imbera Preta",
        cod: "4801",
        preco: "R$6.450,00 à vista",
        categoria: "refrigeração",
        subcategoria: "cervejeiras",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria freezers
    {
        nome: "CONSERVADOR DE PROTEINAS 4 BANDEJAS MARCHESONI",
        cod: "8461",
        preco: "R$2.750,00 à vista",
        categoria: "refrigeração",
        subcategoria: "freezers",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "FREEZER HORIZONTAL PFH205B 220V",
        cod: "9951",
        preco: "R$2.600,00 à vista",
        categoria: "refrigeração",
        subcategoria: "freezers",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "FREEZER HORIZONTAL PFH260B",
        cod: "10960",
        preco: "R$2.950,00 à vista",
        categoria: "refrigeração",
        subcategoria: "freezers",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "FREEZER HORIZONTAL FRICON 503L HCED-503",
        cod: "8754",
        preco: "R$5.200,00 à vista",
        categoria: "refrigeração",
        subcategoria: "freezers",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria ilhas
    {
        nome: "ILHA DUPLA AÇÃO 2MT PRETA POLAR LIGHT",
        cod: "10713",
        preco: "R$6.900,00 à vista",
        categoria: "refrigeração",
        subcategoria: "ilhas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "ILHA DUPLA AÇÃO 3MT PRETA POLAR LIGHT",
        cod: "10594",
        preco: "R$10.900,00 à vista",
        categoria: "refrigeração",
        subcategoria: "ilhas",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },

    // subcategoria visa cooler
    {
        nome: "REFRIGERADOR EXPOSITOR VERTICAL VRS16",
        cod: "5565",
        preco: "R$6.200,00 à vista",
        categoria: "refrigeração",
        subcategoria: "visa cooler",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "VISA COOLER IMBERA VR-08 BMAE LL PRT TGAL FSBRAEST",
        cod: "7285",
        preco: "R$4.990,00 à vista",
        categoria: "refrigeração",
        subcategoria: "visa cooler",
        maisProcurados: "",
        vezes: "",
        promocao: "",
    },
    {
        nome: "VISA COOLER MULTIUSO ECONOMY 4 PORTAS",
        cod: "9916",
        preco: "R$16.500,00 à vista",
        categoria: "refrigeração",
        subcategoria: "visa cooler",
        maisProcurados: "",
        vezes: "R$13.990 x6",
        promocao: "R$12.990,00 à vista",
    },

    // subcategoria vitrine refrigerada
    {
        nome: "Conservador Vertical VCFM/Vcv-402 Fricon",
        cod: "3759",
        preco: "R$5.800,00 à vista",
        categoria: "refrigeração",
        subcategoria: "vitrine refrigerada",
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
            produto.categoria.toLowerCase().includes(secaoCardTitulo) ||
            produto.subcategoria.toLowerCase().includes(secaoCardTitulo)
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
                        <span class="preco-antigo">${produto.vezes}</span> <br> 
                        <span class="preco-novo">${produto.promocao}</span>
                    ` : `
                        ${produto.preco}
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
                <h2 class="infos__h3 promotion__color">${produto.vezes}</h2>
                <h2 class="infos__h2 promotion__color">${produto.promocao}</h2>
            `;
        } else { // Caso contrário, exibe o preço normal
            containerInfo.innerHTML = `
                <h1 class="infos__h1">${produto.nome}</h1>
                <p class="p">Cod. do Produto: ${produto.cod}</p>
                <h2 class="infos__h2">${produto.preco}</h2>
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
                        <span class="preco-antigo">${produto.vezes}</span> <br> 
                        <span class="preco-novo">${produto.promocao}</span>
                    ` : `
                        ${produto.preco}
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
