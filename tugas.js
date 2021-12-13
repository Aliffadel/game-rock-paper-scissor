let numbers = [20, 30, 40, 50, 60, 70];
// console.log(numbers[0]);
// console.log(numbers[5]);

numbers.sort(function(a, b){return b - a});
// console.log(numbers)

let tanggal = new Date()
let tanggalKemarin = new Date("2021-12-02")
let tanggalBesok = new Date("2021-12-04")

let tanggalStringHariIni = tanggal.toLocaleDateString("id-ID")
console.log(tanggalStringHariIni);

let tanggalStringKemarin = tanggalKemarin.toLocaleDateString("id-ID")
console.log(tanggalStringKemarin);

let tanggalStringBesok = tanggalBesok.toLocaleDateString("id-ID")
console.log(tanggalStringBesok);

let numberBaru = [20, 30, 40, 50, 60, 70];
let hasil = [];
for (i = 0; i < numberBaru.length; i++) {
    hasil.push(numberBaru[i] + (numberBaru[i] -1))
}
let text = hasil.toString();
console.log(text)

var me;
console.log(me)