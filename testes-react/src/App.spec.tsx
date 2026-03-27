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