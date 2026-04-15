import {render, screen} from "@testing-library/react";
import SignUp from "./index";

describe("testa o componente SingUp",()=>{

    test("Deve haver 3 inputs na minha tela", async ()=>{
        render(<SignUp/>);
        const inputs = await screen.findAllByRole("textbox");
        expect(inputs).toHaveLength(3);
    });

    test("Deve haver 1 inputs para nome, email e senha", async ()=>{
        render(<SignUp/>);

        const inputsNome = await screen.findByPlaceholderText("Insira seu nome");
        const inputsEmail = await screen.findByPlaceholderText("Insira seu e-mail");
        const inputsSenha = await screen.findByPlaceholderText("Insira seu senha");

        expect(inputsNome).toBeInTheDocument();
        expect(inputsEmail).toBeInTheDocument();
        expect(inputsSenha).toBeInTheDocument();
    });

    test("Deve haver um botao na tela", async ()=>{
        render(<SignUp/>);

        const button = await screen.findByRole("button");
        expect(button).toHaveTextContent("Sing Up");
    });

    test("Deve haver um titulo 'Cadastre-se'", async ()=>{
        render(<SignUp/>);

        const title = await screen.findByRole("heading", {
            level: 2,
        });
        expect(title).toHaveTextContent("Cadastre-se");
    });
});