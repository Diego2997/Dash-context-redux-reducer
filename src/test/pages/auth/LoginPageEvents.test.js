const { render } = require("@testing-library/react");
const { LoginPage } = require("../../../pages/auth/LoginPage");

describe("Pruebas en LoginPage", () => {
    test("Validar si el input user tiene valor", () => {
        render(<LoginPage />);
    });
});
