// rollup.config.js
//import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';


export default {
  input: './src/index.js', // O ponto de entrada da sua biblioteca
  output: {
    file: 'dist/minha-biblioteca.js', // O arquivo de saída da biblioteca
    format: 'umd', // Ou outro formato desejado
    name: 'MinhaBiblioteca', // O nome global da sua biblioteca
  },
  plugins: [typescript()], // Opcional: minificar o código
};
