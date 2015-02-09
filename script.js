/*
* Exercício 1
* Dado um número inteiro positivo n, imprimir os n primeiros naturais ímpares.
* Exemplo: Para n=4 a saída deverá ser 1,3,5,7.
*/

var n,
	aux,
	naturaisImpares = [];

n = 4;
aux = 1;

for (var i = 0; i < n; i++) {
	naturaisImpares.push(aux);
	aux += 2;
};

console.log('Os ' + n + ' primeiros naturais impares são: ' + naturaisImpares);


/*
* Exercício 2
* Dados um inteiro x e um inteiro não-negativo n, calcular x n. 
*/

var x,
	n,
	aux;

x = 10;
n = 3;

aux = x;

for (var i = 1; i < n; i++) {
	x = aux * x;
};

console.log(aux + ' elevado à ' + n + ' é igual à ' + x );


/*
* Exercício 3
* Dados n e dois números inteiros positivos i e j diferentes de 0, imprimir em ordem crescente os n primeiros naturais que são múltiplos de i ou de j e ou de ambos.
* Exemplo: Para n = 6 , i = 2 e j = 3 a saída deverá ser : 0,2,3,4,6,8
*/

var n,
	x,
	auxI,
	j,
	auxJ,
	naturaisMultiplos = [];

n = 6;
x = 2;
j = 3;
auxI = 0;
auxJ = 0;

for (var i = 0; i < n; i++) {
	if (auxI < auxJ) {
		naturaisMultiplos.push(auxI);
		auxI += x;
	} else if (auxI == auxJ){
		naturaisMultiplos.push(auxI);
		auxI += x;
		auxJ += j; 
	} else if (auxI > auxJ){
		naturaisMultiplos.push(auxJ);
		auxJ += j; 
	}	
};

console.log('Os ' + n + ' primeiros multiplos de ' + x + ' e ' + j + ' são: ' + naturaisMultiplos);

/*
* Exercício 4
* Dizemos que um número natural é triangular se ele é produto de três números naturais consecutivos.
* Exemplo: 120 é triangular, pois 4.5.6 = 120.
* Dado um inteiro não-negativo n, verificar se n é triangular. 
*/

var n,
	i;

n = 10;
i = 1;

// For com comando vazio - apenas para registrar o i mais próximo
for (i = 1; i * (i+1) * (i+2) < n; i++) {
};

if( i * (i+1) * (i+2) == n){
	console.log('Esse número é triangular');
} else {
	console.log('Esse número NÃO é triangular');
}


/*
* Exercício 5
* Dado um inteiro positivo n, verificar se n é primo. 
*/

var n,
	aux = true;

n = 9;

if (n != 1 && n % 2 != 0) {
	for (var i = 3; i < (n/2); i++) {
		if (n % i == 0) {
			aux = false;
			break;
		};
	};

	if (aux) {
		console.log('Esse número é primo');
	} else {
		console.log('Esse número NÃO é primo');
	}
} else if(n == 2) {
	console.log('Esse número é primo');
} else {
	console.log('Esse número NÃO é primo');
}

/*
* Exercício 6
* Dados dois números inteiros positivos, determinar o máximo divisor comum entre eles usando o algoritmo de Euclides
*/

var int1,
	int2,
	aux1,
	aux2,
	resto = 1;

int1 = 24;
int2 = 15;

if (int1 > int2) {
	aux1 = int1;
	aux2 = int2;
}else{
	aux1 = int2;
	aux2 = int1;
}

while(resto != 0) {
	resto = aux1 % aux2;
	aux1 = aux2;
	aux2 = resto;
}

console.log('O MDC de ' + int1 + ' e ' + int2 + ' é: ' + aux1);