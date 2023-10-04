import { somar, subtracao } from "../Components/functions";

test("Function somar", () => {
  let resultado;

  resultado = somar("2", "2");
  expect(resultado).toEqual("4");

  resultado = somar("10,3", "50.0");
  expect(resultado).toEqual("60.3");

  resultado = somar("", "70.0");
  expect(resultado).toEqual("70");

  resultado = somar("55,5", "");
  expect(resultado).toEqual("55.5");
});

test("Function subtracao", () => {
  let resultado;

  resultado = subtracao("2", "2");
  expect(resultado).toEqual("0");

  resultado = subtracao("10", "6");
  expect(resultado).toEqual("4");

  resultado = subtracao('22', '2.5');
  expect(resultado).toEqual('19.5');

  resultado = subtracao('10', '12');
  expect(resultado).toEqual('-2');
  
  resultado = subtracao('', '12');
  expect(resultado).toEqual('-12');

  resultado = subtracao('20', '');
  expect(resultado).toEqual('20');
});
