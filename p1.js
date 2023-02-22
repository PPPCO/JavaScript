
  const numeros = '9,8,1,6,7,6';
function ordenarNumeros(numeros){
    const lista = numeros.split(',').map(num => parseInt(num));
    lista.sort((a, b) => b - a);
    return lista.join(','); 
}

console.log(ordenarNumeros('9,8,1,6,7,6'));
console.log(ordenarNumeros('3,6,1,8'));
