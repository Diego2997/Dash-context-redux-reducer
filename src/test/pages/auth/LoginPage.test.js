// const { render } = require("@testing-library/react");
// const { LoginPage } = require("../../../pages/auth/LoginPage");

describe("PRUEBA EN LOGINPAGE", () => {
    //test de componentes
    test("Hacer un match con snapshot test", () => {
        //un snapshot es una propiedad que da jest, una fotografia,captura del componente en cuanto a html
        // const { container } = render(<LoginPage />); //manera antigua
        // expect(container).toMatchSnapshot();
        //si alguien modifica el componente tira error
        // si se apreta la "u" cambia el snapshot que estaba guardado y pasa el test
        //se prueba al inicio y al final no en el medio
    });

    test("Mostrar el titulo del Login en un h1", () => {
        const title = "DashDummy";

        // si se utiliza getByTestId en el html se usa data-testid
        // const { container,getByText,getByTestId } = render(<LoginPage />);

        //primero se deberia verificar que exista el title
        //expect(getByText(title)).toBeTruthy()

        //===== La manera correcta de hacerlo
        //expect(getByTestId('titleLogin').innerHTML).toBe(title)

        //==================NO=========================0
        //const h1 = container.querySelector('h1').innerHTML
        //expect(title).toBe(h1)
        //======================================
    });
});
