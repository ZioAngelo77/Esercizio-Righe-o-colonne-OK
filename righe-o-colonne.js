/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

let N = 2 /* righe */
let M = 3 /* colonne */
let matrice = []

// Creo matrice

for (i = 0; i < N; i++) {
  matrice[i] = []
}


// Popolo matrice

for (i = 0; i < N; i++) { /* righe */

  for (j = 0; j < M; j++) { /* colonne */


    matrice[i][j] = Math.floor(Math.random() * 100 + 1)
    mat = matrice

  }

}
console.log("Matrice = ", matrice)



// Sommo le righe
let sr = [N] /* somma righe */
let R = [N]

for (i = 0; i < N; i++) {
  somma = 0.0 //resetto somma a ogni ciclo
  for (j = 0; j < M; j++)
    somma = somma + mat[i][j]
  sr[i] = somma
  R = sr


}

console.log("array R =", R)



// Sommo le colonne
let sc = [M] /* somma colonne */
let C = [M]

for (j = 0; j < M; j++) {
  somma = 0.0 //resetto somma a ogni ciclo
  for (i = 0; i < N; i++)
    somma = somma + mat[i][j]
  sc[j] = somma
  C = sc
}

console.log("array C =", C)




