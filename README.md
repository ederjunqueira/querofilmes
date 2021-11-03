# querofilmes

## Apresentação 

Querofilmes - Movie24 é uma aplicação de teste com o intuito de demonstrar conhecimentos basicos em Front-End, embora não tenha sido utilizado a modificação e criação no componente HTML.
A proposta principal é a criação de uma pagina de filmes em lançamentos, capturados através de uma API, em especifico: api.themoviedb.org. Para isso foram utilizados framework ReactJS para o desenvolvimento geral e CSS para estilização.

## Autor

Projeto criado e modificado por **Eder Junqueira**
## Etapas do projeto

Framework: REACT.JS

Inicialmente foi implementado as informações capturadas através da API na página e estilizadas para User Experience
de acordo com cada gênero de filme, foram implementados também 2 cursores Left e Right para mover a lista de cada gênero.
Em seguida foi implementado imagem, titulo e informações de filme em destaque no topo da pagina, a aplicação permite que sempre ao atualizar o navegador ele traga aleatóriamente um novo poster de acordo com o retorno da API.
Implementado também funcionalidade no Header para ocultar fundo gradient no cabeçalho quando o mesmo estiver no topo obtendo melhor exibição do poster que estiver em destaque.
No rodapé possui a informação da fonte principal de onde foram retiradas as imagens e descrições de cada filme. 

## Utilização

Na página Querofilmes - Movie24 o usuário consegue inicialmente vizualizar os filmes que estão em destaque, atualizando a pagina do navegador ou clicando em um dos dois botões disponiveis Quero Assistir e Quero+ Favoritos.
Como versão teste os botões mencionados anteriormente terão a opção de Iniciar o filme desejado com (Quero Assitir) e levar a uma list de filmes favoritos com a opção (Quero+ Favoritos).
Ao rolar o Scroll vertical o usuário tem acesso a uma lista de filmes por gênero onde consegue navegar por ela horizontalmente para direita e para esquerda, a opção está disponivel também para Smartphone permitindo ao usuário uma navegação semelhante aos aplicativos convencionais. 
No canto superior direito da página está disponivel um icone para login de usuário, ainda não há funcionalidade ativa.
As informações que o usuário poderá obter de cada filme em destaque são: 
Título, pontuação, data de lançamento, (se for series) quantidade de temporadas, descrição e gênero.