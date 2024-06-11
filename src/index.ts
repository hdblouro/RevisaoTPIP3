import Cliente from "./Cliente";

const nasc = new Date("11 01 1965");;

const cliente = new Cliente("Fulano", "fulano@gmail.com", nasc, 500);

cliente.imprimir();