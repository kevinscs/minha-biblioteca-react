export function somar(numeroUm: string, numeroDois: string): string {
  let parcelaUm = 0;
  let ParcelaDois = 0;
  let soma;

  if (
    numeroUm &&
    typeof numeroUm !== "boolean" &&
    typeof numeroUm !== "number"
  ) {
    if (numeroUm.includes(",") && typeof numeroUm === "string") {
      parcelaUm = Number(numeroUm.replace(",", "."));
    } else {
      parcelaUm = Number(numeroUm);
    }
  }

  if (
    numeroDois &&
    typeof numeroDois !== "boolean" &&
    typeof numeroDois !== "number"
  ) {
    if (numeroDois.includes(",") && typeof numeroDois === "string") {
      ParcelaDois = Number(numeroDois.replace(",", "."));
    } else {
      ParcelaDois = Number(numeroDois);
    }
  }
  soma = parcelaUm + ParcelaDois;

  return `${soma}`;
}

export function subtracao(numeroUm: string, numeroDois: string): string {
  let minuendo = 0;
  let subtraendo = 0;
  let diferenca;

  if (
    numeroUm &&
    typeof numeroUm !== "boolean" &&
    typeof numeroUm !== "number"
  ) {
    if (numeroUm.includes(",") && typeof numeroUm === "string") {
      minuendo = Number(numeroUm.replace(",", "."));
    } else {
      minuendo = Number(numeroUm);
    }
  }

  if (
    numeroDois &&
    typeof numeroDois !== "boolean" &&
    typeof numeroDois !== "number"
  ) {
    if (numeroDois.includes(",") && typeof numeroDois === "string") {
      subtraendo = Number(numeroDois.replace(",", "."));
    } else {
      subtraendo = Number(numeroDois);
    }
  }
  diferenca = minuendo - subtraendo;

  return `${diferenca}`;
}
