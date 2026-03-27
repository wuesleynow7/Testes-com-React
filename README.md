# Testes-com-React

Este repositório contém exemplos de testes utilizando a biblioteca React Testing Library. Os testes são escritos para componentes React e visam garantir que a aplicação funcione corretamente, verificando a renderização, interações e comportamento dos componentes.

# Comando usado para criar um projeto básico com Vite e React para treinar os testes

```bash
npm create vite@latest meu-projeto --template react
```


## Tecnologias Utilizadas
- React
- React Testing Library
- Jest
- Cypress

## Como Rodar os Testes
1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
```

## tipos de testes
- Testes unitários: Focam em testar componentes isoladamente, garantindo que cada parte do componente funcione corretamente.
- Testes de integração: Verificam a interação entre diferentes componentes, garantindo que eles funcionem juntos como esperado.
- Testes end-to-end (E2E): Simulam o comportamento do usuário, testando a aplicação como um todo para garantir que todas as partes funcionem corretamente em conjunto.

![tipos de teste](./testes-react/src/img/PiramidesDeTestes.png)

## Criando os primeiro testes
1. Instale as dependências necessárias:
```bashnpm install @testing-library/react @testing-library/jest-dom jest
```     
2. Crie um arquivo de teste para o componente que deseja testar, por exemplo `MeuComponente.test.js`. o nome do arquivo deve seguir o padrão `*.test.js` para que o Jest possa reconhecê-lo como um arquivo de teste. o arquivo de teste deve ser o nome arquivo do componente que deseja testar, seguido de `.test.js`. por exemplo, se o componente se chama `MeuComponente.js`, o arquivo de teste deve ser nomeado como `MeuComponente.test.js`.
3. Escreva os testes utilizando a React Testing Library e Jest, por exemplo:

```javascript
import {render, screen} from "@testing-library/react";
import App from "./App";
describe("testa o componente App", ()=>{

    //deve haver uma título
    test("there must be two titles", async ()=>{
        render(<App/>);

        const titles = await screen.findAllByRole("heading");//procura um titulo

        expect(titles).toHaveLength(2);// espero que ele esteja no documento 
    });

    //deve haver uma título escrito 'hello world'
    test("there must be a title", async ()=>{
        render(<App/>);

        const title = await screen.findByRole("heading",{name:"hello world",});//procura um titulo

        expect(title).toBeInTheDocument();// espero que ele esteja no documento
    });


})
```
4. Execute os testes utilizando o comando:
```bash
npm test
```
## Importante
 O describe ou test são blocos de teste, ou um conjunto de testes é como se criassemos uma caixa com testes menores, onde o describe é usado para agrupar testes relacionados e o test é usado para definir um teste específico. O describe pode conter vários testes, enquanto o test é usado para definir um teste individual. O describe ajuda a organizar os testes e torna mais fácil entender o que está sendo testado, enquanto o test é onde você escreve a lógica do teste em si.
