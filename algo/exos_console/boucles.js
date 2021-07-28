// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");
for( let i = 0; i <50; i++){
    console.log("Bonjour" + i);
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2");
for (let i=0; i < 5;i++){
    console.log("A");
    console.log("B");
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
for (let j = 0; j < 3; j++){
    for (let i=0; i < 5;i++){
        console.log("A");
    }
    console.log("B");
}
// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
for (let i=0; i < 10;i++){
    console.log(i);
}
// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
console.log("Exercice 5");
for (let i=3; i < 12;i++){
    console.log(i);
}
// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");
for(let j = 0; j<2;j++){
    for (let i=0; i < 4;i++){
        console.log(i);
    }
}
for (let k=0; k < 2;k++){
    console.log(k);
}
// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
for (let i=0; i < 10;i++){
    if(i>=0 && i<=4){
        console.log(i);
    }
    else if(i>4 && i<8){
        console.log("A");
    }
    else {
        console.log(i);
    }
}
// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
for (let i=0; i < 10;i++){
    if(i==0 || i==3 || i==6 || i == 9){
        console.log(100+i);
    }
    else {
        console.log(i);
    }
}
// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
for (let i=0; i < 10;i++){
    if(i==1 || i==4 || i==7){
        console.log(100+i);
    }
    else if (i==2 || i==5 || i==8){
        console.log(200+i);
    }
    else {
        console.log(i);
    }
}
// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dé :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
for (let i=1; i < 7;i++){
    for (let j = 1; j<7; j++){
        console.log(i + " " + j);
    }
}
// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
for (let i=1; i < 7;i++){
    for (let j = i; j<7; j++){
        console.log(i + " " + j);
    }
}
// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
let result=0;
for (let i=1; i < 21;i++){
    for (let j = i; j<21; j++){
        result++;
    }
    
}
console.log(result);
// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
for (let i = 1; i<10;i++){
console.log("2*" + i + "= " + i);
}
// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");

for (let i = 1; i<10;i++){
console.log("2*" + i + "= " + i*2);
}

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
for (let i = 1; i<10;i++){    
    for (let j = 1; j<10;j++){
        console.log( i +"*" + j + "= " + i*j);
    }
}
// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
let resultat = 0;
for (let i = 1; i<101;i++){    
    resultat += i;
}
console.log(resultat);

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
/*let resultat17 = 0;
for(i=1;i<=302253;i++){
    resultat17 += i;
    if(resultat17==302253){
        console.log("le nombre n est : " + i)
    }
}
*/
let res17=0;
i=0;
while(res17 != 302253){
    i++;
    res17+=i;
    
}
console.log(i);
// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
   let a = 1;
   let b = 1;
while(b<56){
    for(i=0;i<1;i++){
        console.log(a);
        for(j=0;j<1;j++){
            console.log(b);
        }
        //console.log(a+b);
    }
    a=a+b;
    b=b+a;
}
// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
let mult3 = 0;
let mult7 = 0;
for(i=1234;i<5678;i++){
    if(i%3==0){
        mult3 ++;
    }
    if(i%7==0){
        mult7 ++;
    }
}
console.log("nombre de multiples de 3 : " + mult3);
console.log("nombre de multiples de 7 : " + mult7);
// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
let a1 = "*";
for(let i=1; i<6;i++){
    console.log(a1.repeat(i));
}

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");


// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");


// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
