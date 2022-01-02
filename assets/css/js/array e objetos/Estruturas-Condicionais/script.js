
let jogador1 = 0;
let jogador2 = 0;
let placar;
 
// IF TERNARIO

jogador1 != -1 && jogador2 != -1 ? console.log('os jodadores são válidos'):
console.log('Jogadores Inválidos');
//usanso if

if (jogador1 > 0){
    console.log('jogador1 marcou ponto!');
    placar = jogador1 > jogador2;   
   
}  

 //usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador2 marcou um ponto!');
    placar = jogador2 > jogador1;
} 
//usando else

else {
    console.log('Ninguém marcou ponto!');
}


// Switch

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou');
        break;
    case placar = jogador2 > jogador1 :
        console.log('jogador2 ganhou');
        break;
        default:
            console.log('Ninguém ganhou');
}   
// Estruturas de repetição
/*
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// for- executa ua instrução até que ela seja false
for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}
// for/in - executa repetição a partir de uma propriedade
//com array

for (let i in array) {
    console.log(i);
}

// com objeto
for (i in object) {
  console.log(i);  
}

//for/of- executa repetição a partir de valor
//com array
for (i of array){
    console.log(i);
} */

//While
let a = 0;
while (a < 10){
    a++;
    console.log(a);
}
do {
    a++;
    console.log(a);
} while(a < 10)


    