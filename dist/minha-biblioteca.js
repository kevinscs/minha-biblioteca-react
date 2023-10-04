(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MinhaBiblioteca = {}));
})(this, (function (exports) { 'use strict';

  function somar(numeroUm, numeroDois) {
      let parcelaUm = 0;
      let ParcelaDois = 0;
      let soma;
      if (numeroUm &&
          typeof numeroUm !== "boolean" &&
          typeof numeroUm !== "number") {
          if (numeroUm.includes(",") && typeof numeroUm === "string") {
              parcelaUm = Number(numeroUm.replace(",", "."));
          }
          else {
              parcelaUm = Number(numeroUm);
          }
      }
      if (numeroDois &&
          typeof numeroDois !== "boolean" &&
          typeof numeroDois !== "number") {
          if (numeroDois.includes(",") && typeof numeroDois === "string") {
              ParcelaDois = Number(numeroDois.replace(",", "."));
          }
          else {
              ParcelaDois = Number(numeroDois);
          }
      }
      soma = parcelaUm + ParcelaDois;
      return `${soma}`;
  }
  function subtracao(numeroUm, numeroDois) {
      let minuendo = 0;
      let subtraendo = 0;
      let diferenca;
      if (numeroUm &&
          typeof numeroUm !== "boolean" &&
          typeof numeroUm !== "number") {
          if (numeroUm.includes(",") && typeof numeroUm === "string") {
              minuendo = Number(numeroUm.replace(",", "."));
          }
          else {
              minuendo = Number(numeroUm);
          }
      }
      if (numeroDois &&
          typeof numeroDois !== "boolean" &&
          typeof numeroDois !== "number") {
          if (numeroDois.includes(",") && typeof numeroDois === "string") {
              subtraendo = Number(numeroDois.replace(",", "."));
          }
          else {
              subtraendo = Number(numeroDois);
          }
      }
      diferenca = minuendo - subtraendo;
      return `${diferenca}`;
  }

  exports.somar = somar;
  exports.subtracao = subtracao;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
