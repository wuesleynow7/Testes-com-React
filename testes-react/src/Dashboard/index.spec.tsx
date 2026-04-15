import {render, screen} from "@testing-library/react";
import Dashboard from ".";

describe("testa o componente Dashboard",()=>{

    test("Deve haver um titulo na pagina", async ()=>{
        render(<Dashboard/>);
        const title = await screen.findByRole("heading");
        expect(title).toHaveTextContent("Dashboard");
    });

});