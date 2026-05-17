// Linha 550: Cria uma constante usada no funcionamento do site.
    const app = document.getElementById("app");
    // Linha 551: Cria uma constante usada no funcionamento do site.
    const btnHome = document.getElementById("btnHome");
    // Linha 552: Cria uma constante usada no funcionamento do site.
    const btnCatalogo = document.getElementById("btnCatalogo");
    // Linha 553: Cria uma constante usada no funcionamento do site.
    const btnFavoritos = document.getElementById("btnFavoritos");

    // Linha 555: Cria uma variável que pode mudar durante a execução.
    let filtroAtual = "todos";
    // Linha 556: Cria uma variável que pode mudar durante a execução.
    let listaAtual = [];

    // Linha 558: Cria uma constante usada no funcionamento do site.
    const catalogoAtual = [
      // Linha 559: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 560: Executa uma instrução do JavaScript para controlar o site.
        id: 1,
        // Linha 561: Executa uma instrução do JavaScript para controlar o site.
        name: "Duna: Parte Dois",
        // Linha 562: Executa uma instrução do JavaScript para controlar o site.
        type: "Filme",
        // Linha 563: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Ficção científica", "Aventura", "Drama"],
        // Linha 564: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.6 },
        // Linha 565: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg" },
        // Linha 566: Executa uma instrução do JavaScript para controlar o site.
        summary: "Paul Atreides une forças com Chani e os Fremen enquanto busca vingança contra aqueles que destruíram sua família.",
        // Linha 567: Executa uma instrução do JavaScript para controlar o site.
        status: "Lançado",
        // Linha 568: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 569: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2024-02-27"
      // Linha 570: Fecha o bloco de código atual.
      },
      // Linha 571: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 572: Executa uma instrução do JavaScript para controlar o site.
        id: 2,
        // Linha 573: Executa uma instrução do JavaScript para controlar o site.
        name: "Divertida Mente 2",
        // Linha 574: Executa uma instrução do JavaScript para controlar o site.
        type: "Filme",
        // Linha 575: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Animação", "Família", "Comédia"],
        // Linha 576: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.0 },
        // Linha 577: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" },
        // Linha 578: Executa uma instrução do JavaScript para controlar o site.
        summary: "Riley entra na adolescência e novas emoções passam a dividir espaço com Alegria, Tristeza, Raiva, Medo e Nojinho.",
        // Linha 579: Executa uma instrução do JavaScript para controlar o site.
        status: "Lançado",
        // Linha 580: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 581: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2024-06-12"
      // Linha 582: Fecha o bloco de código atual.
      },
      // Linha 583: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 584: Executa uma instrução do JavaScript para controlar o site.
        id: 3,
        // Linha 585: Executa uma instrução do JavaScript para controlar o site.
        name: "Oppenheimer",
        // Linha 586: Executa uma instrução do JavaScript para controlar o site.
        type: "Filme",
        // Linha 587: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Drama", "História", "Biografia"],
        // Linha 588: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.4 },
        // Linha 589: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
        // Linha 590: Executa uma instrução do JavaScript para controlar o site.
        summary: "A trajetória de J. Robert Oppenheimer e sua participação no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.",
        // Linha 591: Executa uma instrução do JavaScript para controlar o site.
        status: "Lançado",
        // Linha 592: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 593: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2023-07-19"
      // Linha 594: Fecha o bloco de código atual.
      },
      // Linha 595: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 596: Executa uma instrução do JavaScript para controlar o site.
        id: 4,
        // Linha 597: Executa uma instrução do JavaScript para controlar o site.
        name: "Barbie",
        // Linha 598: Executa uma instrução do JavaScript para controlar o site.
        type: "Filme",
        // Linha 599: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Comédia", "Fantasia", "Aventura"],
        // Linha 600: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 7.0 },
        // Linha 601: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg" },
        // Linha 602: Executa uma instrução do JavaScript para controlar o site.
        summary: "Barbie deixa a Barbielândia e parte para o mundo real em uma jornada de autoconhecimento.",
        // Linha 603: Executa uma instrução do JavaScript para controlar o site.
        status: "Lançado",
        // Linha 604: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 605: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2023-07-19"
      // Linha 606: Fecha o bloco de código atual.
      },
      // Linha 607: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 608: Executa uma instrução do JavaScript para controlar o site.
        id: 5,
        // Linha 609: Executa uma instrução do JavaScript para controlar o site.
        name: "The Last of Us",
        // Linha 610: Executa uma instrução do JavaScript para controlar o site.
        type: "Série",
        // Linha 611: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Drama", "Ação", "Pós-apocalíptico"],
        // Linha 612: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.7 },
        // Linha 613: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg" },
        // Linha 614: Executa uma instrução do JavaScript para controlar o site.
        summary: "Joel e Ellie atravessam os Estados Unidos após uma pandemia que destruiu a civilização.",
        // Linha 615: Executa uma instrução do JavaScript para controlar o site.
        status: "Em exibição",
        // Linha 616: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 617: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2023-01-15"
      // Linha 618: Fecha o bloco de código atual.
      },
      // Linha 619: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 620: Executa uma instrução do JavaScript para controlar o site.
        id: 6,
        // Linha 621: Executa uma instrução do JavaScript para controlar o site.
        name: "Wandinha",
        // Linha 622: Executa uma instrução do JavaScript para controlar o site.
        type: "Série",
        // Linha 623: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Fantasia", "Mistério", "Comédia"],
        // Linha 624: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.1 },
        // Linha 625: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg" },
        // Linha 626: Executa uma instrução do JavaScript para controlar o site.
        summary: "Wandinha Addams investiga mistérios sobrenaturais enquanto estuda na Escola Nunca Mais.",
        // Linha 627: Executa uma instrução do JavaScript para controlar o site.
        status: "Em exibição",
        // Linha 628: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 629: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2022-11-23"
      // Linha 630: Fecha o bloco de código atual.
      },
      // Linha 631: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 632: Executa uma instrução do JavaScript para controlar o site.
        id: 7,
        // Linha 633: Executa uma instrução do JavaScript para controlar o site.
        name: "Round 6",
        // Linha 634: Executa uma instrução do JavaScript para controlar o site.
        type: "Série",
        // Linha 635: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Drama", "Suspense", "Sobrevivência"],
        // Linha 636: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.0 },
        // Linha 637: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
        // Linha 638: Executa uma instrução do JavaScript para controlar o site.
        summary: "Pessoas endividadas participam de jogos mortais em busca de um grande prêmio em dinheiro.",
        // Linha 639: Executa uma instrução do JavaScript para controlar o site.
        status: "Em exibição",
        // Linha 640: Executa uma instrução do JavaScript para controlar o site.
        language: "Korean",
        // Linha 641: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2021-09-17"
      // Linha 642: Fecha o bloco de código atual.
      },
      // Linha 643: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 644: Executa uma instrução do JavaScript para controlar o site.
        id: 8,
        // Linha 645: Executa uma instrução do JavaScript para controlar o site.
        name: "House of the Dragon",
        // Linha 646: Executa uma instrução do JavaScript para controlar o site.
        type: "Série",
        // Linha 647: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Fantasia", "Drama", "Ação"],
        // Linha 648: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.4 },
        // Linha 649: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg" },
        // Linha 650: Executa uma instrução do JavaScript para controlar o site.
        summary: "A história da Casa Targaryen, ambientada anos antes dos acontecimentos de Game of Thrones.",
        // Linha 651: Executa uma instrução do JavaScript para controlar o site.
        status: "Em exibição",
        // Linha 652: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 653: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2022-08-21"
      // Linha 654: Fecha o bloco de código atual.
      },
      // Linha 655: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 656: Executa uma instrução do JavaScript para controlar o site.
        id: 9,
        // Linha 657: Executa uma instrução do JavaScript para controlar o site.
        name: "Avatar: O Caminho da Água",
        // Linha 658: Executa uma instrução do JavaScript para controlar o site.
        type: "Filme",
        // Linha 659: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Ficção científica", "Aventura", "Fantasia"],
        // Linha 660: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 7.6 },
        // Linha 661: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/mbYQLLluS651W89jO7MOZcLSCUw.jpg" },
        // Linha 662: Executa uma instrução do JavaScript para controlar o site.
        summary: "Jake Sully vive com sua nova família em Pandora e precisa enfrentar uma antiga ameaça.",
        // Linha 663: Executa uma instrução do JavaScript para controlar o site.
        status: "Lançado",
        // Linha 664: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 665: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2022-12-14"
      // Linha 666: Fecha o bloco de código atual.
      },
      // Linha 667: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 668: Executa uma instrução do JavaScript para controlar o site.
        id: 10,
        // Linha 669: Executa uma instrução do JavaScript para controlar o site.
        name: "Top Gun: Maverick",
        // Linha 670: Executa uma instrução do JavaScript para controlar o site.
        type: "Filme",
        // Linha 671: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Ação", "Drama"],
        // Linha 672: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.2 },
        // Linha 673: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" },
        // Linha 674: Executa uma instrução do JavaScript para controlar o site.
        summary: "Maverick retorna para treinar uma nova geração de pilotos em uma missão extremamente perigosa.",
        // Linha 675: Executa uma instrução do JavaScript para controlar o site.
        status: "Lançado",
        // Linha 676: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 677: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2022-05-24"
      // Linha 678: Fecha o bloco de código atual.
      },
      // Linha 679: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 680: Executa uma instrução do JavaScript para controlar o site.
        id: 11,
        // Linha 681: Executa uma instrução do JavaScript para controlar o site.
        name: "Tudo em Todo Lugar ao Mesmo Tempo",
        // Linha 682: Executa uma instrução do JavaScript para controlar o site.
        type: "Filme",
        // Linha 683: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Ficção científica", "Comédia", "Drama"],
        // Linha 684: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 7.8 },
        // Linha 685: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/2t9AbKzN1NQ9Ej5i6Kii48qVJmP.jpg" },
        // Linha 686: Executa uma instrução do JavaScript para controlar o site.
        summary: "Uma mulher comum se vê envolvida em uma aventura pelo multiverso para salvar sua família e a realidade.",
        // Linha 687: Executa uma instrução do JavaScript para controlar o site.
        status: "Lançado",
        // Linha 688: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 689: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2022-03-24"
      // Linha 690: Fecha o bloco de código atual.
      },
      // Linha 691: Organiza a abertura ou fechamento de uma estrutura do código.
      {
        // Linha 692: Executa uma instrução do JavaScript para controlar o site.
        id: 12,
        // Linha 693: Executa uma instrução do JavaScript para controlar o site.
        name: "Ruptura",
        // Linha 694: Executa uma instrução do JavaScript para controlar o site.
        type: "Série",
        // Linha 695: Executa uma instrução do JavaScript para controlar o site.
        genres: ["Drama", "Suspense", "Ficção científica"],
        // Linha 696: Executa uma instrução do JavaScript para controlar o site.
        rating: { average: 8.7 },
        // Linha 697: Executa uma instrução do JavaScript para controlar o site.
        image: { medium: "https://image.tmdb.org/t/p/w500/lFf6LLrQjYldcZItzOkGmMMigP7.jpg" },
        // Linha 698: Executa uma instrução do JavaScript para controlar o site.
        summary: "Funcionários de uma empresa passam por um procedimento que separa memórias pessoais e profissionais.",
        // Linha 699: Executa uma instrução do JavaScript para controlar o site.
        status: "Em exibição",
        // Linha 700: Executa uma instrução do JavaScript para controlar o site.
        language: "English",
        // Linha 701: Executa uma instrução do JavaScript para controlar o site.
        premiered: "2022-02-18"
      // Linha 702: Fecha o bloco de código atual.
      }
    // Linha 703: Organiza a abertura ou fechamento de uma estrutura do código.
    ];

    // Linha 705: Inicia uma classe para organizar os dados das obras.
    class Obra {
      // Linha 706: Inicia o método que cria um novo objeto da classe.
      constructor(dados) {
        // Linha 707: Executa uma instrução do JavaScript para controlar o site.
        this.id = dados.id;
        // Linha 708: Executa uma instrução do JavaScript para controlar o site.
        this.nome = dados.name || "Nome não informado";
        // Linha 709: Executa uma instrução do JavaScript para controlar o site.
        this.tipo = dados.type || "Série";
        // Linha 710: Executa uma instrução do JavaScript para controlar o site.
        this.generos = dados.genres || [];
        // Linha 711: Executa uma instrução do JavaScript para controlar o site.
        this.nota = dados.rating?.average || 0;
        // Linha 712: Executa uma instrução do JavaScript para controlar o site.
        this.imagem = dados.image?.medium || "https://via.placeholder.com/300x450/101b33/ffffff?text=Sem+Imagem";
        // Linha 713: Executa uma instrução do JavaScript para controlar o site.
        this.resumo = dados.summary || "Resumo não disponível.";
        // Linha 714: Executa uma instrução do JavaScript para controlar o site.
        this.status = dados.status || "Não informado";
        // Linha 715: Executa uma instrução do JavaScript para controlar o site.
        this.idioma = dados.language || "Não informado";
        // Linha 716: Executa uma instrução do JavaScript para controlar o site.
        this.estreia = dados.premiered || "Não informada";
      // Linha 717: Fecha o bloco de código atual.
      }

      // Linha 719: Executa uma instrução do JavaScript para controlar o site.
      resumoLimpo() {
        // Linha 720: Retorna o resultado processado pela função.
        return this.resumo.replace(/<[^>]*>/g, "");
      // Linha 721: Fecha o bloco de código atual.
      }

      // Linha 723: Executa uma instrução do JavaScript para controlar o site.
      generosFormatados() {
        // Linha 724: Retorna o resultado processado pela função.
        return this.generos.length > 0 ? this.generos.join(", ") : "Gênero não informado";
      // Linha 725: Fecha o bloco de código atual.
      }

      // Linha 727: Executa uma instrução do JavaScript para controlar o site.
      anoLancamento() {
        // Linha 728: Retorna o resultado processado pela função.
        return this.estreia && this.estreia !== "Não informada" ? this.estreia.slice(0, 4) : "Ano não informado";
      // Linha 729: Fecha o bloco de código atual.
      }
    // Linha 730: Fecha o bloco de código atual.
    }

    // Linha 732: Inicia uma função responsável por uma ação do site.
    function filtrarComNota(lista) {
      // Linha 733: Retorna o resultado processado pela função.
      return lista.filter((obra) => Number(obra.nota) > 0);
    // Linha 734: Fecha o bloco de código atual.
    }

    // Linha 736: Inicia uma função responsável por uma ação do site.
    function ordenarPorNota(lista) {
      // Linha 737: Retorna o resultado processado pela função.
      return [...lista].sort((a, b) => Number(b.nota) - Number(a.nota));
    // Linha 738: Fecha o bloco de código atual.
    }

    // Linha 740: Inicia uma função responsável por uma ação do site.
    function limitarLista(lista, limite) {
      // Linha 741: Retorna o resultado processado pela função.
      return lista.slice(0, limite);
    // Linha 742: Fecha o bloco de código atual.
    }

    // Linha 744: Inicia uma função responsável por uma ação do site.
    function salvarFavoritos(favoritos) {
      // Linha 745: Executa uma instrução do JavaScript para controlar o site.
      localStorage.setItem("cinecatalogo_favoritos_thayna", JSON.stringify(favoritos));
    // Linha 746: Fecha o bloco de código atual.
    }

    // Linha 748: Inicia uma função responsável por uma ação do site.
    function buscarFavoritos() {
      // Linha 749: Retorna o resultado processado pela função.
      return JSON.parse(localStorage.getItem("cinecatalogo_favoritos_thayna")) || [];
    // Linha 750: Fecha o bloco de código atual.
    }

    // Linha 752: Inicia uma função responsável por uma ação do site.
    function estaNosFavoritos(id) {
      // Linha 753: Retorna o resultado processado pela função.
      return buscarFavoritos().some((obra) => Number(obra.id) === Number(id));
    // Linha 754: Fecha o bloco de código atual.
    }

    // Linha 756: Inicia uma função responsável por uma ação do site.
    function aplicarFiltro(lista, filtro) {
      // Linha 757: Verifica uma condição antes de executar o próximo bloco.
      if (filtro === "filmes") {
        // Linha 758: Retorna o resultado processado pela função.
        return lista.filter((obra) => obra.tipo.toLowerCase() === "filme");
      // Linha 759: Fecha o bloco de código atual.
      }
      // Linha 760: Verifica uma condição antes de executar o próximo bloco.
      if (filtro === "series") {
        // Linha 761: Retorna o resultado processado pela função.
        return lista.filter((obra) => obra.tipo.toLowerCase() === "série" || obra.tipo.toLowerCase() === "serie");
      // Linha 762: Fecha o bloco de código atual.
      }
      // Linha 763: Verifica uma condição antes de executar o próximo bloco.
      if (filtro === "2020") {
        // Linha 764: Retorna o resultado processado pela função.
        return lista.filter((obra) => Number(obra.anoLancamento()) >= 2020);
      // Linha 765: Fecha o bloco de código atual.
      }
      // Linha 766: Verifica uma condição antes de executar o próximo bloco.
      if (filtro === "favoritos") {
        // Linha 767: Cria uma constante usada no funcionamento do site.
        const idsFavoritos = buscarFavoritos().map((obra) => Number(obra.id));
        // Linha 768: Retorna o resultado processado pela função.
        return lista.filter((obra) => idsFavoritos.includes(Number(obra.id)));
      // Linha 769: Fecha o bloco de código atual.
      }
      // Linha 770: Retorna o resultado processado pela função.
      return lista;
    // Linha 771: Fecha o bloco de código atual.
    }

    // Linha 773: Inicia uma função responsável por uma ação do site.
    async function buscarObras(termo) {
      // Linha 774: Tenta executar um código que pode gerar erro.
      try {
        // Linha 775: Cria uma constante usada no funcionamento do site.
        const resposta = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(termo)}`);
        // Linha 776: Cria uma constante usada no funcionamento do site.
        const dados = await resposta.json();
        // Linha 777: Cria uma constante usada no funcionamento do site.
        const resultadosApi = dados.map((item) => new Obra(item.show));
        // Linha 778: Cria uma constante usada no funcionamento do site.
        const resultadosFiltrados = resultadosApi.filter((obra) => Number(obra.anoLancamento()) >= 2020);

        // Linha 780: Verifica uma condição antes de executar o próximo bloco.
        if (resultadosFiltrados.length === 0) {
          // Linha 781: Retorna o resultado processado pela função.
          return catalogoAtual
            // Linha 782: Executa uma instrução do JavaScript para controlar o site.
            .map((item) => new Obra(item))
            // Linha 783: Executa uma instrução do JavaScript para controlar o site.
            .filter((obra) => obra.nome.toLowerCase().includes(termo.toLowerCase()));
        // Linha 784: Fecha o bloco de código atual.
        }
        // Linha 785: Retorna o resultado processado pela função.
        return resultadosFiltrados;
      // Linha 786: Executa uma instrução do JavaScript para controlar o site.
      } catch (erro) {
        // Linha 787: Executa uma instrução do JavaScript para controlar o site.
        console.error("Erro na API. Usando catálogo local.", erro);
        // Linha 788: Retorna o resultado processado pela função.
        return catalogoAtual
          // Linha 789: Executa uma instrução do JavaScript para controlar o site.
          .map((item) => new Obra(item))
          // Linha 790: Executa uma instrução do JavaScript para controlar o site.
          .filter((obra) => obra.nome.toLowerCase().includes(termo.toLowerCase()));
      // Linha 791: Fecha o bloco de código atual.
      }
    // Linha 792: Fecha o bloco de código atual.
    }

    // Linha 794: Inicia uma função responsável por uma ação do site.
    async function buscarCatalogoInicial() {
      // Linha 795: Retorna o resultado processado pela função.
      return catalogoAtual.map((item) => new Obra(item));
    // Linha 796: Fecha o bloco de código atual.
    }

    // Linha 798: Inicia uma função responsável por uma ação do site.
    async function buscarObraPorId(id) {
      // Linha 799: Cria uma constante usada no funcionamento do site.
      const local = catalogoAtual.find((item) => Number(item.id) === Number(id));
      // Linha 800: Verifica uma condição antes de executar o próximo bloco.
      if (local) return new Obra(local);

      // Linha 802: Tenta executar um código que pode gerar erro.
      try {
        // Linha 803: Cria uma constante usada no funcionamento do site.
        const resposta = await fetch(`https://api.tvmaze.com/shows/${id}`);
        // Linha 804: Cria uma constante usada no funcionamento do site.
        const dados = await resposta.json();
        // Linha 805: Retorna o resultado processado pela função.
        return new Obra(dados);
      // Linha 806: Executa uma instrução do JavaScript para controlar o site.
      } catch (erro) {
        // Linha 807: Retorna o resultado processado pela função.
        return null;
      // Linha 808: Fecha o bloco de código atual.
      }
    // Linha 809: Fecha o bloco de código atual.
    }

    // Linha 811: Inicia uma função responsável por uma ação do site.
    function marcarMenuAtivo(botaoAtivo) {
      // Linha 812: Percorre os itens de uma lista.
      [btnHome, btnCatalogo, btnFavoritos].forEach((botao) => botao.classList.remove("ativo"));
      // Linha 813: Executa uma instrução do JavaScript para controlar o site.
      botaoAtivo.classList.add("ativo");
    // Linha 814: Fecha o bloco de código atual.
    }

    // Linha 816: Inicia uma função responsável por uma ação do site.
    function renderizarHome() {
      // Linha 817: Executa uma instrução do JavaScript para controlar o site.
      marcarMenuAtivo(btnHome);
      // Linha 818: Insere conteúdo HTML dentro de um elemento.
      app.innerHTML = "";

      // Linha 820: Cria uma constante usada no funcionamento do site.
      const hero = document.createElement("section");
      // Linha 821: Define a classe CSS do elemento.
      hero.className = "hero";

      // Linha 823: Cria uma constante usada no funcionamento do site.
      const bloco1 = document.createElement("div");
      // Linha 824: Define a classe CSS do elemento.
      bloco1.className = "caixa hero-principal";

      // Linha 826: Cria uma constante usada no funcionamento do site.
      const tag = document.createElement("span");
      // Linha 827: Define a classe CSS do elemento.
      tag.className = "tag";
      // Linha 828: Define o texto visível de um elemento.
      tag.textContent = "Filmes e séries recentes";

      // Linha 830: Cria uma constante usada no funcionamento do site.
      const titulo = document.createElement("h2");
      // Linha 831: Define o texto visível de um elemento.
      titulo.textContent = "Seu catálogo moderno para descobrir novas histórias";

      // Linha 833: Cria uma constante usada no funcionamento do site.
      const texto = document.createElement("p");
      // Linha 834: Define o texto visível de um elemento.
      texto.textContent = "Explore produções lançadas a partir de 2020, veja detalhes, pesquise por título e salve seus favoritos em uma interface dinâmica.";

      // Linha 836: Cria uma constante usada no funcionamento do site.
      const acoes = document.createElement("div");
      // Linha 837: Define a classe CSS do elemento.
      acoes.className = "hero-acoes";

      // Linha 839: Cria uma constante usada no funcionamento do site.
      const botaoCatalogo = document.createElement("button");
      // Linha 840: Define a classe CSS do elemento.
      botaoCatalogo.className = "btn-vermelho";
      // Linha 841: Define o texto visível de um elemento.
      botaoCatalogo.textContent = "Explorar catálogo";
      // Linha 842: Define o que acontece quando o usuário clica no elemento.
      botaoCatalogo.onclick = renderizarCatalogo;

      // Linha 844: Cria uma constante usada no funcionamento do site.
      const botaoFavoritos = document.createElement("button");
      // Linha 845: Define a classe CSS do elemento.
      botaoFavoritos.className = "btn-neutro";
      // Linha 846: Define o texto visível de um elemento.
      botaoFavoritos.textContent = "Ver favoritos";
      // Linha 847: Define o que acontece quando o usuário clica no elemento.
      botaoFavoritos.onclick = renderizarFavoritos;

      // Linha 849: Adiciona um elemento dentro de outro elemento da página.
      acoes.appendChild(botaoCatalogo);
      // Linha 850: Adiciona um elemento dentro de outro elemento da página.
      acoes.appendChild(botaoFavoritos);

      // Linha 852: Adiciona um elemento dentro de outro elemento da página.
      bloco1.appendChild(tag);
      // Linha 853: Adiciona um elemento dentro de outro elemento da página.
      bloco1.appendChild(titulo);
      // Linha 854: Adiciona um elemento dentro de outro elemento da página.
      bloco1.appendChild(texto);
      // Linha 855: Adiciona um elemento dentro de outro elemento da página.
      bloco1.appendChild(acoes);

      // Linha 857: Cria uma constante usada no funcionamento do site.
      const vitrine = document.createElement("div");
      // Linha 858: Define a classe CSS do elemento.
      vitrine.className = "vitrine-home";

      // Linha 860: Cria uma constante usada no funcionamento do site.
      const destaquePrincipal = new Obra(catalogoAtual[0]);
      // Linha 861: Cria uma constante usada no funcionamento do site.
      const serieDestaque = new Obra(catalogoAtual[4]);
      // Linha 862: Cria uma constante usada no funcionamento do site.
      const animacaoDestaque = new Obra(catalogoAtual[1]);

      // Linha 864: Cria uma constante usada no funcionamento do site.
      const principal = document.createElement("article");
      // Linha 865: Define a classe CSS do elemento.
      principal.className = "vitrine-principal";
      // Linha 866: Define o que acontece quando o usuário clica no elemento.
      principal.onclick = () => renderizarDetalhes(destaquePrincipal.id);
      // Linha 867: Insere conteúdo HTML dentro de um elemento.
      principal.innerHTML = `
        <!-- Linha 868: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        <img src="${destaquePrincipal.imagem}" alt="${destaquePrincipal.nome}">
        <!-- Linha 869: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        <div class="vitrine-info">
          <!-- Linha 870: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <span class="selo">Destaque principal</span>
          <!-- Linha 871: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <strong>${destaquePrincipal.nome}</strong>
          <!-- Linha 872: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <span>${destaquePrincipal.tipo} • ${destaquePrincipal.anoLancamento()} • ★ ${destaquePrincipal.nota}</span>
        <!-- Linha 873: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        </div>
      <!-- Linha 874: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
      `;

      // Linha 876: Cria uma constante usada no funcionamento do site.
      const coluna = document.createElement("div");
      // Linha 877: Define a classe CSS do elemento.
      coluna.className = "vitrine-coluna";

      // Linha 879: Cria uma constante usada no funcionamento do site.
      const mini1 = document.createElement("article");
      // Linha 880: Define a classe CSS do elemento.
      mini1.className = "mini-poster";
      // Linha 881: Define o que acontece quando o usuário clica no elemento.
      mini1.onclick = () => renderizarDetalhes(serieDestaque.id);
      // Linha 882: Insere conteúdo HTML dentro de um elemento.
      mini1.innerHTML = `
        <!-- Linha 883: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        <img src="${serieDestaque.imagem}" alt="${serieDestaque.nome}">
        <!-- Linha 884: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        <div class="vitrine-info">
          <!-- Linha 885: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <span class="selo">Série em alta</span>
          <!-- Linha 886: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <strong>${serieDestaque.nome}</strong>
          <!-- Linha 887: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <span>${serieDestaque.tipo} • ${serieDestaque.anoLancamento()} • ★ ${serieDestaque.nota}</span>
        <!-- Linha 888: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        </div>
      <!-- Linha 889: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
      `;

      // Linha 891: Cria uma constante usada no funcionamento do site.
      const mini2 = document.createElement("article");
      // Linha 892: Define a classe CSS do elemento.
      mini2.className = "mini-poster";
      // Linha 893: Define o que acontece quando o usuário clica no elemento.
      mini2.onclick = () => renderizarDetalhes(animacaoDestaque.id);
      // Linha 894: Insere conteúdo HTML dentro de um elemento.
      mini2.innerHTML = `
        <!-- Linha 895: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        <img src="${animacaoDestaque.imagem}" alt="${animacaoDestaque.nome}">
        <!-- Linha 896: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        <div class="vitrine-info">
          <!-- Linha 897: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <span class="selo">Para toda família</span>
          <!-- Linha 898: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <strong>${animacaoDestaque.nome}</strong>
          <!-- Linha 899: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
          <span>${animacaoDestaque.tipo} • ${animacaoDestaque.anoLancamento()} • ★ ${animacaoDestaque.nota}</span>
        <!-- Linha 900: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
        </div>
      <!-- Linha 901: Linha de HTML que será inserida dinamicamente pelo JavaScript. -->
      `;

      // Linha 903: Adiciona um elemento dentro de outro elemento da página.
      coluna.appendChild(mini1);
      // Linha 904: Adiciona um elemento dentro de outro elemento da página.
      coluna.appendChild(mini2);

      // Linha 906: Adiciona um elemento dentro de outro elemento da página.
      vitrine.appendChild(principal);
      // Linha 907: Adiciona um elemento dentro de outro elemento da página.
      vitrine.appendChild(coluna);

      // Linha 909: Adiciona um elemento dentro de outro elemento da página.
      hero.appendChild(bloco1);
      // Linha 910: Adiciona um elemento dentro de outro elemento da página.
      hero.appendChild(vitrine);
      // Linha 911: Adiciona um elemento dentro de outro elemento da página.
      app.appendChild(hero);

      // Linha 913: Cria uma constante usada no funcionamento do site.
      const secaoAlta = document.createElement("section");
      // Linha 914: Define a classe CSS do elemento.
      secaoAlta.className = "caixa secao-em-alta";

      // Linha 916: Cria uma constante usada no funcionamento do site.
      const topo = document.createElement("div");
      // Linha 917: Define a classe CSS do elemento.
      topo.className = "topo-secao";

      // Linha 919: Cria uma constante usada no funcionamento do site.
      const tituloAlta = document.createElement("h2");
      // Linha 920: Define o texto visível de um elemento.
      tituloAlta.textContent = "Em destaque";

      // Linha 922: Cria uma constante usada no funcionamento do site.
      const botaoVerTudo = document.createElement("button");
      // Linha 923: Define a classe CSS do elemento.
      botaoVerTudo.className = "btn-azul";
      // Linha 924: Define o texto visível de um elemento.
      botaoVerTudo.textContent = "Ver catálogo completo";
      // Linha 925: Define o que acontece quando o usuário clica no elemento.
      botaoVerTudo.onclick = renderizarCatalogo;

      // Linha 927: Adiciona um elemento dentro de outro elemento da página.
      topo.appendChild(tituloAlta);
      // Linha 928: Adiciona um elemento dentro de outro elemento da página.
      topo.appendChild(botaoVerTudo);

      // Linha 930: Cria uma constante usada no funcionamento do site.
      const grade = document.createElement("div");
      // Linha 931: Define a classe CSS do elemento.
      grade.className = "grade grade-home";

      // Linha 933: Percorre os itens de uma lista.
      limitarLista(ordenarPorNota(catalogoAtual.map((item) => new Obra(item))), 4).forEach((obra) => {
        // Linha 934: Adiciona um elemento dentro de outro elemento da página.
        grade.appendChild(criarCard(obra));
      // Linha 935: Executa uma instrução do JavaScript para controlar o site.
      });

      // Linha 937: Adiciona um elemento dentro de outro elemento da página.
      secaoAlta.appendChild(topo);
      // Linha 938: Adiciona um elemento dentro de outro elemento da página.
      secaoAlta.appendChild(grade);
      // Linha 939: Adiciona um elemento dentro de outro elemento da página.
      app.appendChild(secaoAlta);
    // Linha 940: Fecha o bloco de código atual.
    }

    // Linha 942: Inicia uma função responsável por uma ação do site.
    async function renderizarCatalogo() {
      // Linha 943: Executa uma instrução do JavaScript para controlar o site.
      marcarMenuAtivo(btnCatalogo);
      // Linha 944: Executa uma instrução do JavaScript para controlar o site.
      filtroAtual = "todos";
      // Linha 945: Insere conteúdo HTML dentro de um elemento.
      app.innerHTML = "";

      // Linha 947: Cria uma constante usada no funcionamento do site.
      const secao = document.createElement("section");
      // Linha 948: Define a classe CSS do elemento.
      secao.className = "caixa";

      // Linha 950: Cria uma constante usada no funcionamento do site.
      const titulo = document.createElement("h2");
      // Linha 951: Define o texto visível de um elemento.
      titulo.textContent = "Catálogo atual";

      // Linha 953: Cria uma constante usada no funcionamento do site.
      const texto = document.createElement("p");
      // Linha 954: Define o texto visível de um elemento.
      texto.textContent = "Escolha uma produção recente, pesquise novos títulos ou filtre as opções abaixo.";

      // Linha 956: Cria uma constante usada no funcionamento do site.
      const form = document.createElement("form");
      // Linha 957: Define a classe CSS do elemento.
      form.className = "form-busca";

      // Linha 959: Cria uma constante usada no funcionamento do site.
      const input = document.createElement("input");
      // Linha 960: Executa uma instrução do JavaScript para controlar o site.
      input.type = "text";
      // Linha 961: Executa uma instrução do JavaScript para controlar o site.
      input.placeholder = "Pesquise séries recentes. Ex: The Last of Us, Wednesday, House...";
      // Linha 962: Executa uma instrução do JavaScript para controlar o site.
      input.required = true;

      // Linha 964: Cria uma constante usada no funcionamento do site.
      const botao = document.createElement("button");
      // Linha 965: Define a classe CSS do elemento.
      botao.className = "btn-azul";
      // Linha 966: Executa uma instrução do JavaScript para controlar o site.
      botao.type = "submit";
      // Linha 967: Define o texto visível de um elemento.
      botao.textContent = "Buscar";

      // Linha 969: Cria uma constante usada no funcionamento do site.
      const filtros = document.createElement("div");
      // Linha 970: Define a classe CSS do elemento.
      filtros.className = "filtros";

      // Linha 972: Cria uma constante usada no funcionamento do site.
      const opcoesFiltro = [
        // Linha 973: Executa uma instrução do JavaScript para controlar o site.
        { nome: "Filmes", valor: "filmes" },
        // Linha 974: Executa uma instrução do JavaScript para controlar o site.
        { nome: "Séries", valor: "series" },
        // Linha 975: Executa uma instrução do JavaScript para controlar o site.
        { nome: "2020+", valor: "2020" },
        // Linha 976: Executa uma instrução do JavaScript para controlar o site.
        { nome: "Favoritos locais", valor: "favoritos" },
        // Linha 977: Executa uma instrução do JavaScript para controlar o site.
        { nome: "API pública", valor: "api" }
      // Linha 978: Organiza a abertura ou fechamento de uma estrutura do código.
      ];

      // Linha 980: Cria uma constante usada no funcionamento do site.
      const grade = document.createElement("div");
      // Linha 981: Define a classe CSS do elemento.
      grade.className = "grade";

      // Linha 983: Percorre os itens de uma lista.
      opcoesFiltro.forEach((opcao) => {
        // Linha 984: Cria uma constante usada no funcionamento do site.
        const chip = document.createElement("button");
        // Linha 985: Executa uma instrução do JavaScript para controlar o site.
        chip.type = "button";
        // Linha 986: Define a classe CSS do elemento.
        chip.className = "filtro-chip";
        // Linha 987: Define o texto visível de um elemento.
        chip.textContent = opcao.nome;

        // Linha 989: Define o que acontece quando o usuário clica no elemento.
        chip.onclick = async function() {
          // Linha 990: Percorre os itens de uma lista.
          document.querySelectorAll(".filtro-chip").forEach((item) => item.classList.remove("ativo"));
          // Linha 991: Executa uma instrução do JavaScript para controlar o site.
          chip.classList.add("ativo");

          // Linha 993: Verifica uma condição antes de executar o próximo bloco.
          if (opcao.valor === "api") {
            // Linha 994: Executa uma instrução do JavaScript para controlar o site.
            input.value = "2024";
            // Linha 995: Cria uma constante usada no funcionamento do site.
            const resultadoApi = await buscarObras("2024");
            // Linha 996: Executa uma instrução do JavaScript para controlar o site.
            listaAtual = resultadoApi;
            // Linha 997: Executa uma instrução do JavaScript para controlar o site.
            exibirLista(listaAtual, grade, "todos");
            // Linha 998: Executa uma instrução do JavaScript para controlar o site.
            return;
          // Linha 999: Fecha o bloco de código atual.
          }

          // Linha 1001: Executa uma instrução do JavaScript para controlar o site.
          filtroAtual = opcao.valor;
          // Linha 1002: Executa uma instrução do JavaScript para controlar o site.
          exibirLista(listaAtual, grade, filtroAtual);
        // Linha 1003: Fecha o bloco de código atual.
        };

        // Linha 1005: Adiciona um elemento dentro de outro elemento da página.
        filtros.appendChild(chip);
      // Linha 1006: Executa uma instrução do JavaScript para controlar o site.
      });

      // Linha 1008: Adiciona um elemento dentro de outro elemento da página.
      form.appendChild(input);
      // Linha 1009: Adiciona um elemento dentro de outro elemento da página.
      form.appendChild(botao);

      // Linha 1011: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(titulo);
      // Linha 1012: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(texto);
      // Linha 1013: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(form);
      // Linha 1014: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(filtros);
      // Linha 1015: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(grade);
      // Linha 1016: Adiciona um elemento dentro de outro elemento da página.
      app.appendChild(secao);

      // Linha 1018: Executa uma instrução do JavaScript para controlar o site.
      listaAtual = await buscarCatalogoInicial();
      // Linha 1019: Executa uma instrução do JavaScript para controlar o site.
      exibirLista(listaAtual, grade, "todos");

      // Linha 1021: Executa uma instrução do JavaScript para controlar o site.
      form.onsubmit = async function(evento) {
        // Linha 1022: Executa uma instrução do JavaScript para controlar o site.
        evento.preventDefault();
        // Linha 1023: Insere conteúdo HTML dentro de um elemento.
        grade.innerHTML = "";
        // Linha 1024: Cria uma constante usada no funcionamento do site.
        const termo = input.value.trim();

        // Linha 1026: Executa uma instrução do JavaScript para controlar o site.
        listaAtual = await buscarObras(termo);
        // Linha 1027: Executa uma instrução do JavaScript para controlar o site.
        filtroAtual = "todos";
        // Linha 1028: Percorre os itens de uma lista.
        document.querySelectorAll(".filtro-chip").forEach((item) => item.classList.remove("ativo"));
        // Linha 1029: Executa uma instrução do JavaScript para controlar o site.
        exibirLista(listaAtual, grade, filtroAtual);
      // Linha 1030: Fecha o bloco de código atual.
      };
    // Linha 1031: Fecha o bloco de código atual.
    }

    // Linha 1033: Inicia uma função responsável por uma ação do site.
    function exibirLista(lista, grade, filtro) {
      // Linha 1034: Insere conteúdo HTML dentro de um elemento.
      grade.innerHTML = "";
      // Linha 1035: Cria uma constante usada no funcionamento do site.
      const filtradas = aplicarFiltro(lista, filtro);
      // Linha 1036: Cria uma constante usada no funcionamento do site.
      const obras = limitarLista(ordenarPorNota(filtradas), 16);

      // Linha 1038: Verifica uma condição antes de executar o próximo bloco.
      if (obras.length === 0) {
        // Linha 1039: Cria uma constante usada no funcionamento do site.
        const aviso = document.createElement("p");
        // Linha 1040: Define a classe CSS do elemento.
        aviso.className = "aviso";
        // Linha 1041: Define o texto visível de um elemento.
        aviso.textContent = "Nenhum resultado encontrado para esse filtro.";
        // Linha 1042: Adiciona um elemento dentro de outro elemento da página.
        grade.appendChild(aviso);
        // Linha 1043: Executa uma instrução do JavaScript para controlar o site.
        return;
      // Linha 1044: Fecha o bloco de código atual.
      }

      // Linha 1046: Percorre os itens de uma lista.
      obras.forEach((obra) => {
        // Linha 1047: Adiciona um elemento dentro de outro elemento da página.
        grade.appendChild(criarCard(obra));
      // Linha 1048: Executa uma instrução do JavaScript para controlar o site.
      });
    // Linha 1049: Fecha o bloco de código atual.
    }

    // Linha 1051: Inicia uma função responsável por uma ação do site.
    function criarCard(obra) {
      // Linha 1052: Cria uma constante usada no funcionamento do site.
      const card = document.createElement("article");
      // Linha 1053: Define a classe CSS do elemento.
      card.className = "card";

      // Linha 1055: Cria uma constante usada no funcionamento do site.
      const img = document.createElement("img");
      // Linha 1056: Executa uma instrução do JavaScript para controlar o site.
      img.src = obra.imagem;
      // Linha 1057: Executa uma instrução do JavaScript para controlar o site.
      img.alt = obra.nome;

      // Linha 1059: Cria uma constante usada no funcionamento do site.
      const ano = document.createElement("span");
      // Linha 1060: Define a classe CSS do elemento.
      ano.className = "ano-badge";
      // Linha 1061: Define o texto visível de um elemento.
      ano.textContent = `${obra.tipo} • ${obra.anoLancamento()}`;

      // Linha 1063: Cria uma constante usada no funcionamento do site.
      const conteudo = document.createElement("div");
      // Linha 1064: Define a classe CSS do elemento.
      conteudo.className = "card-conteudo";

      // Linha 1066: Cria uma constante usada no funcionamento do site.
      const titulo = document.createElement("h3");
      // Linha 1067: Define o texto visível de um elemento.
      titulo.textContent = obra.nome;

      // Linha 1069: Cria uma constante usada no funcionamento do site.
      const generos = document.createElement("p");
      // Linha 1070: Define a classe CSS do elemento.
      generos.className = "generos";
      // Linha 1071: Define o texto visível de um elemento.
      generos.textContent = obra.generosFormatados();

      // Linha 1073: Cria uma constante usada no funcionamento do site.
      const nota = document.createElement("p");
      // Linha 1074: Define a classe CSS do elemento.
      nota.className = "nota";
      // Linha 1075: Define o texto visível de um elemento.
      nota.textContent = `★ ${obra.nota || "sem nota"}`;

      // Linha 1077: Cria uma constante usada no funcionamento do site.
      const botoes = document.createElement("div");
      // Linha 1078: Define a classe CSS do elemento.
      botoes.className = "botoes-card";

      // Linha 1080: Cria uma constante usada no funcionamento do site.
      const btnDetalhes = document.createElement("button");
      // Linha 1081: Define a classe CSS do elemento.
      btnDetalhes.className = "btn-azul";
      // Linha 1082: Define o texto visível de um elemento.
      btnDetalhes.textContent = "Detalhes";
      // Linha 1083: Define o que acontece quando o usuário clica no elemento.
      btnDetalhes.onclick = () => renderizarDetalhes(obra.id);

      // Linha 1085: Cria uma constante usada no funcionamento do site.
      const btnFavorito = document.createElement("button");
      // Linha 1086: Define a classe CSS do elemento.
      btnFavorito.className = "btn-vermelho";
      // Linha 1087: Define o texto visível de um elemento.
      btnFavorito.textContent = estaNosFavoritos(obra.id) ? "Favoritado" : "Favoritar";
      // Linha 1088: Define o que acontece quando o usuário clica no elemento.
      btnFavorito.onclick = () => adicionarFavorito(obra);

      // Linha 1090: Adiciona um elemento dentro de outro elemento da página.
      botoes.appendChild(btnDetalhes);
      // Linha 1091: Adiciona um elemento dentro de outro elemento da página.
      botoes.appendChild(btnFavorito);

      // Linha 1093: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(titulo);
      // Linha 1094: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(generos);
      // Linha 1095: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(nota);
      // Linha 1096: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(botoes);

      // Linha 1098: Adiciona um elemento dentro de outro elemento da página.
      card.appendChild(img);
      // Linha 1099: Adiciona um elemento dentro de outro elemento da página.
      card.appendChild(ano);
      // Linha 1100: Adiciona um elemento dentro de outro elemento da página.
      card.appendChild(conteudo);

      // Linha 1102: Retorna o resultado processado pela função.
      return card;
    // Linha 1103: Fecha o bloco de código atual.
    }

    // Linha 1105: Inicia uma função responsável por uma ação do site.
    function adicionarFavorito(obra) {
      // Linha 1106: Verifica uma condição antes de executar o próximo bloco.
      if (estaNosFavoritos(obra.id)) {
        // Linha 1107: Executa uma instrução do JavaScript para controlar o site.
        alert("Essa obra já está nos favoritos.");
        // Linha 1108: Executa uma instrução do JavaScript para controlar o site.
        return;
      // Linha 1109: Fecha o bloco de código atual.
      }

      // Linha 1111: Cria uma constante usada no funcionamento do site.
      const favoritos = buscarFavoritos();
      // Linha 1112: Executa uma instrução do JavaScript para controlar o site.
      favoritos.push(obra);
      // Linha 1113: Executa uma instrução do JavaScript para controlar o site.
      salvarFavoritos(favoritos);
      // Linha 1114: Executa uma instrução do JavaScript para controlar o site.
      alert("Adicionado aos favoritos!");
    // Linha 1115: Fecha o bloco de código atual.
    }

    // Linha 1117: Inicia uma função responsável por uma ação do site.
    async function renderizarDetalhes(id) {
      // Linha 1118: Insere conteúdo HTML dentro de um elemento.
      app.innerHTML = "<p class='aviso'>Carregando detalhes...</p>";
      // Linha 1119: Cria uma constante usada no funcionamento do site.
      const obra = await buscarObraPorId(id);

      // Linha 1121: Verifica uma condição antes de executar o próximo bloco.
      if (!obra) {
        // Linha 1122: Insere conteúdo HTML dentro de um elemento.
        app.innerHTML = "<p class='aviso'>Não foi possível carregar os detalhes.</p>";
        // Linha 1123: Executa uma instrução do JavaScript para controlar o site.
        return;
      // Linha 1124: Fecha o bloco de código atual.
      }

      // Linha 1126: Insere conteúdo HTML dentro de um elemento.
      app.innerHTML = "";

      // Linha 1128: Cria uma constante usada no funcionamento do site.
      const secao = document.createElement("section");
      // Linha 1129: Define a classe CSS do elemento.
      secao.className = "detalhes";

      // Linha 1131: Cria uma constante usada no funcionamento do site.
      const img = document.createElement("img");
      // Linha 1132: Executa uma instrução do JavaScript para controlar o site.
      img.src = obra.imagem;
      // Linha 1133: Executa uma instrução do JavaScript para controlar o site.
      img.alt = obra.nome;

      // Linha 1135: Cria uma constante usada no funcionamento do site.
      const conteudo = document.createElement("div");

      // Linha 1137: Cria uma constante usada no funcionamento do site.
      const tag = document.createElement("span");
      // Linha 1138: Define a classe CSS do elemento.
      tag.className = "tag";
      // Linha 1139: Define o texto visível de um elemento.
      tag.textContent = `${obra.tipo} • ${obra.anoLancamento()}`;

      // Linha 1141: Cria uma constante usada no funcionamento do site.
      const titulo = document.createElement("h2");
      // Linha 1142: Define o texto visível de um elemento.
      titulo.textContent = obra.nome;

      // Linha 1144: Cria uma constante usada no funcionamento do site.
      const resumo = document.createElement("p");
      // Linha 1145: Define o texto visível de um elemento.
      resumo.textContent = obra.resumoLimpo();

      // Linha 1147: Cria uma constante usada no funcionamento do site.
      const generos = document.createElement("p");
      // Linha 1148: Insere conteúdo HTML dentro de um elemento.
      generos.innerHTML = `<strong>Gêneros:</strong> ${obra.generosFormatados()}`;

      // Linha 1150: Cria uma constante usada no funcionamento do site.
      const nota = document.createElement("p");
      // Linha 1151: Insere conteúdo HTML dentro de um elemento.
      nota.innerHTML = `<strong>Nota:</strong> ${obra.nota || "Sem nota"}`;

      // Linha 1153: Cria uma constante usada no funcionamento do site.
      const status = document.createElement("p");
      // Linha 1154: Insere conteúdo HTML dentro de um elemento.
      status.innerHTML = `<strong>Status:</strong> ${obra.status}`;

      // Linha 1156: Cria uma constante usada no funcionamento do site.
      const idioma = document.createElement("p");
      // Linha 1157: Insere conteúdo HTML dentro de um elemento.
      idioma.innerHTML = `<strong>Idioma:</strong> ${obra.idioma}`;

      // Linha 1159: Cria uma constante usada no funcionamento do site.
      const estreia = document.createElement("p");
      // Linha 1160: Insere conteúdo HTML dentro de um elemento.
      estreia.innerHTML = `<strong>Estreia:</strong> ${obra.estreia}`;

      // Linha 1162: Cria uma constante usada no funcionamento do site.
      const voltar = document.createElement("button");
      // Linha 1163: Define a classe CSS do elemento.
      voltar.className = "btn-vermelho";
      // Linha 1164: Define o texto visível de um elemento.
      voltar.textContent = "Voltar ao catálogo";
      // Linha 1165: Define o que acontece quando o usuário clica no elemento.
      voltar.onclick = renderizarCatalogo;

      // Linha 1167: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(tag);
      // Linha 1168: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(titulo);
      // Linha 1169: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(resumo);
      // Linha 1170: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(generos);
      // Linha 1171: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(nota);
      // Linha 1172: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(status);
      // Linha 1173: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(idioma);
      // Linha 1174: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(estreia);
      // Linha 1175: Adiciona um elemento dentro de outro elemento da página.
      conteudo.appendChild(voltar);

      // Linha 1177: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(img);
      // Linha 1178: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(conteudo);
      // Linha 1179: Adiciona um elemento dentro de outro elemento da página.
      app.appendChild(secao);
    // Linha 1180: Fecha o bloco de código atual.
    }

    // Linha 1182: Inicia uma função responsável por uma ação do site.
    function renderizarFavoritos() {
      // Linha 1183: Executa uma instrução do JavaScript para controlar o site.
      marcarMenuAtivo(btnFavoritos);
      // Linha 1184: Insere conteúdo HTML dentro de um elemento.
      app.innerHTML = "";

      // Linha 1186: Cria uma constante usada no funcionamento do site.
      const secao = document.createElement("section");
      // Linha 1187: Define a classe CSS do elemento.
      secao.className = "caixa";

      // Linha 1189: Cria uma constante usada no funcionamento do site.
      const titulo = document.createElement("h2");
      // Linha 1190: Define o texto visível de um elemento.
      titulo.textContent = "Minha lista de favoritos";

      // Linha 1192: Cria uma constante usada no funcionamento do site.
      const grade = document.createElement("div");
      // Linha 1193: Define a classe CSS do elemento.
      grade.className = "grade";

      // Linha 1195: Cria uma constante usada no funcionamento do site.
      const favoritos = buscarFavoritos().map((item) => new Obra(item));

      // Linha 1197: Verifica uma condição antes de executar o próximo bloco.
      if (favoritos.length === 0) {
        // Linha 1198: Cria uma constante usada no funcionamento do site.
        const aviso = document.createElement("p");
        // Linha 1199: Define a classe CSS do elemento.
        aviso.className = "aviso";
        // Linha 1200: Define o texto visível de um elemento.
        aviso.textContent = "Você ainda não adicionou nenhum favorito.";
        // Linha 1201: Adiciona um elemento dentro de outro elemento da página.
        grade.appendChild(aviso);
      // Linha 1202: Executa uma instrução do JavaScript para controlar o site.
      } else {
        // Linha 1203: Percorre os itens de uma lista.
        favoritos.forEach((obra) => {
          // Linha 1204: Cria uma constante usada no funcionamento do site.
          const card = criarCard(obra);

          // Linha 1206: Cria uma constante usada no funcionamento do site.
          const btnRemover = document.createElement("button");
          // Linha 1207: Define a classe CSS do elemento.
          btnRemover.className = "btn-neutro";
          // Linha 1208: Define o texto visível de um elemento.
          btnRemover.textContent = "Remover";
          // Linha 1209: Define o que acontece quando o usuário clica no elemento.
          btnRemover.onclick = () => removerFavorito(obra.id);

          // Linha 1211: Adiciona um elemento dentro de outro elemento da página.
          card.querySelector(".botoes-card").appendChild(btnRemover);
          // Linha 1212: Adiciona um elemento dentro de outro elemento da página.
          grade.appendChild(card);
        // Linha 1213: Executa uma instrução do JavaScript para controlar o site.
        });
      // Linha 1214: Fecha o bloco de código atual.
      }

      // Linha 1216: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(titulo);
      // Linha 1217: Adiciona um elemento dentro de outro elemento da página.
      secao.appendChild(grade);
      // Linha 1218: Adiciona um elemento dentro de outro elemento da página.
      app.appendChild(secao);
    // Linha 1219: Fecha o bloco de código atual.
    }

    // Linha 1221: Inicia uma função responsável por uma ação do site.
    function removerFavorito(id) {
      // Linha 1222: Cria uma constante usada no funcionamento do site.
      const favoritosAtualizados = buscarFavoritos().filter((obra) => Number(obra.id) !== Number(id));
      // Linha 1223: Executa uma instrução do JavaScript para controlar o site.
      salvarFavoritos(favoritosAtualizados);
      // Linha 1224: Executa uma instrução do JavaScript para controlar o site.
      renderizarFavoritos();
    // Linha 1225: Fecha o bloco de código atual.
    }

    // Linha 1227: Define o que acontece quando o usuário clica no elemento.
    btnHome.onclick = renderizarHome;
    // Linha 1228: Define o que acontece quando o usuário clica no elemento.
    btnCatalogo.onclick = renderizarCatalogo;
    // Linha 1229: Define o que acontece quando o usuário clica no elemento.
    btnFavoritos.onclick = renderizarFavoritos;

    // Linha 1231: Executa uma instrução do JavaScript para controlar o site.
    renderizarHome();
  // Linha 1232: Executa uma instrução do JavaScript para controlar o site.
