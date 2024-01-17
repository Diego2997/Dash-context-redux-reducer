describe("PRUEBA EN <demoTest/>", () => {
    test("Comprobar que los MSG sean iguales", () => {
        //Primer parte --- INICIALIZACION/OBJETO DE PRUEBA
        const msgA = "Hola Mundo ";

        //Segunda parte --- ESTIMULO/PRUEBA
        const msgB = msgA.trim();

        //Tercera parte --- RESPUESTA/VALIDACION
        expect(msgA).toBe(msgB);
    });
});
