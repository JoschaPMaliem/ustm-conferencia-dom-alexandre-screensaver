/*
  HINOS — letras mostradas no ecrã para o público acompanhar
  ===========================================================

  Como preencher:
  1. Abra este ficheiro no Bloco de Notas (clique direito > Abrir com > Bloco de Notas).
  2. Apague a linha "COLE AQUI ..." de cada hino e cole a letra no lugar dela,
     entre os dois acentos graves ( ` ).
  3. Guarde (Ctrl + S). Todas as versões do screensaver usam este ficheiro.

  Formato da letra:
  - Cada verso numa linha.
  - Deixe uma linha em branco entre estrofes.
  - Pode começar uma estrofe com "Refrão:" ou com o número ("1.", "1° Estrofe:", ...).
  - repetirRefrao: true  -> o refrão é mostrado outra vez depois de cada estrofe.
                   false -> mostra as estrofes exactamente pela ordem em que as escreveu.
  - Se colar tudo sem linhas em branco, o texto é dividido automaticamente em blocos
    de 4 versos. Para mudar, acrescente por exemplo  versosPorEcra: 4,  ao hino.
  - Uma estrofe que aparece mais de uma vez é marcada como "Refrão" automaticamente.

  Durante a apresentação:
  - Tecla N / T (ou a letra que puser em "tecla") abre o hino.
  - Todas as estrofes aparecem juntas num só ecrã, cada uma no seu bloco.
    Uma estrofe repetida logo a seguir (ex.: refrão cantado duas vezes) aparece só uma vez.
  - Esc (ou a mesma tecla outra vez): voltar ao screensaver.
*/

window.HINOS = [
  {
    tecla: "N",
    titulo: "Hino Nacional de Moçambique",
    subtitulo: "Pátria Amada",
    repetirRefrao: false,
    letra: `
Na memória de África e do mundo
Pátria bela dos que ousaram lutar
Moçambique, o teu nome é liberdade
O sol de junho para sempre brilhará

Moçambique, nossa terra gloriosa
Pedra a pedra construindo um novo dia
Milhões de braços, uma só força
Oh, Pátria amada, vamos vencer (2x)


Povo unido do Rovuma ao Maputo
Colhe os frutos do combate pela paz
Cresce o sonho ondulando na bandeira
E vai lavrando na certeza do amanhã

Moçambique, nossa terra gloriosa
Pedra a pedra construindo um novo dia
Milhões de braços, uma só força
Oh, Pátria amada, vamos vencer (2x)

Flores brotando do chão do teu suor
Pelos montes, pelos rios, pelo mar
Nós juramos por ti, oh Moçambique
Nenhum tirano nos irá escravizar

Moçambique, nossa terra gloriosa
Pedra a pedra construindo um novo dia
Milhões de braços, uma só força
Oh, Pátria amada, vamos vencer (2x)
`
  },
  {
    tecla: "T",
    titulo: "Hino à São Tomás",
    subtitulo: "Universidade São Tomás de Moçambique",
    repetirRefrao: false,
    letra: `
Líderes no país seremos
Na pesquisa, no ensino e no serviço
Formamos a pessoa integral e integrada
O sucesso do estudante é o nosso sucesso.

Tal como fez no passado
Conciliando a fé e a razão
Juntemos o saber ao nosso fazer
Preparando o amanhã de nós todos.

O sucesso do estudante
Estimula-nos para o bem
Procurando servir e não ser servido
Servindo inspirados no amor de São Tomás.

USTM é uma Universidade nova
Que procura ser diferente
Na maneira de ensinar e de educar
Realizando o sucesso do nosso país.

Tenhamos o orgulho de estudar
O sacrifício pelos livros privilegiemos
Eliminemos toda a pobreza absoluta
Procurando educar todos os homens.
`
  }
];
