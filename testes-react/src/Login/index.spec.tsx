import { fireEvent, render, screen } from "@testing-library/react"
import Login from "."
import { useNavigate } from "react-router-dom";

const navigateMock = vi.fn();


describe("Testa o componente de login",() => {


    vi.mock("react-router-dom", () => ({
        useNavigate(){
            return navigateMock;
        }
    }));



    test("deve haver um titulo escrito 'Sign In'", async ()=>{
        render(<Login/>);
        const title = await screen.findByRole("heading",{
            name: "Sign In",
        });
        expect(title).toBeInTheDocument();
    })  

    test("deve haver dois inputs na minha tela'", async ()=>{
        render(<Login/>);
        const inputs = await screen.findAllByRole("textbox");
        expect(inputs).toHaveLength(2);
    })  


    test("deve haver um botao na minha tela", async ()=>{
        render(<Login/>);
        const button = await screen.findByRole("button");
        expect(button.textContent).toBe("Login");
    })
    
    test("deve haver um input para email", async ()=>{
        render(<Login/>);
        const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");
        expect(inputEmail).toBeInTheDocument();
    })  


    test("deve haver uma senha", async ()=>{
        render(<Login/>);
        const inputSenha = await screen.findByPlaceholderText("Insira sua senha");
        expect(inputSenha).toBeInTheDocument();
    })  

    test("deve haver um input para email", async ()=>{
        render(<Login/>);
        const button = await screen.findByRole("button");
        fireEvent.click(button);

        expect(navigateMock).toHaveBeenCalledTimes(1);
    })  
})


