#  Create React App

[Criando o App] npx create-react-roll-dice
cd roll-dice

## Available Scripts

Utilizado para rodar 

### `npm start`

Rodar o APP
Abrir [http://localhost:3000](http://localhost:3000) 




### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!


### App.js 

App.js: o componente do aplicativo renderiza apenas um único componente RollDice

### Criação de componente Die

Componente Die é responsável por mostrar um dado individual. É um componente sem estado. Ele usa a biblioteca  para mostrar os pontos padrão na face superior dos dados.

FontAwesomeIcon  instalado para inserir o icone dos dados dentro do  componente  Die.js 

`npm i --save @fortawesome/fontawesome-svg-core`
`npm install --save @fortawesome/free-solid-svg-icons`
`npm install --save @fortawesome/react-fontawesome`

#### Reinderização

Componente Die.js rendeirização no App para  localhost.

### RollDice

O componente RollDice contém toda a lógica para gerar números aleatórios para mostrar na face superior dos dados, rolar cada dado ao clicar no botão rolar. 
Existe um estado envolvido no componente RollDice denominados 'die1'. Onde foi inicializado com o valor um, ou seja, o dado mostra um (um ponto) quando o aplicativo é iniciado pela primeira vez. 
Definimos o manipulador de eventos click para o botão roll dice e quando alguém clica no botão, alteramos o estado de die1 para algum número aleatório usando setState de um a seis (usamos um número como uma palavra desde font- incrível biblioteca lida com o número da palavra para mostrar o número exato de pontos). 
Também nos certificamos de que, quando o dado estiver rolando, o usuário não possa clicar no botão novamente. Para este propósito, usamos um estado 'rolando' inicialmente definido como falso e quando os dados estão rolando, rolando para verdadeiro e iniciamos um cronômetro de um segundo. Após um segundo, defina novamente o estado de rolamento para false'. Desative o botão quando um estado de rolagem for definido como verdadeiro.











