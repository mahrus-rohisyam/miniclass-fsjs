// Variables
let a = 10;
a = 11;
// console.log(a);

// Object
let user = {
  name: 'John',
  age: '23'
}

// Mengganti value dari sebuah key object
user.name = 'Johnny'

// Pemanggilan Object
// console.log(user.name);

// Array
let array = ['Mango', 'Orange', 'Kiwi'];

// Pemanggilan Array
// console.log(array[1])

// Array Multidimesional
let arraObject = [
  { name: "Johny", age: '23', status: 'single' },
  { name: "Doe", age: '24', status: 'married' },
  { name: "Jack", age: '25', status: 'married' },
]

// console.log(arraObject[1].name)

// Function tanpa parameter
function menghitungLuasKubus () {
  let sisi = 5
  let hasil = sisi * sisi
  return hasil
}

// Function dengan parameter
function menghitungLuasPersegiPanjang (panjang, tinggi) {
  console.log(panjang, 'Ini panjangnya');
  console.log(tinggi, 'Ini tingginya');

  let hasil = panjang * tinggi;
  return hasil
}

// console.log(menghitungLuasPersegiPanjang(10, 5));
// console.log(menghitungLuasKubus());
// Expected result = 25

// Looping
function looping (){
  console.log("I am from looping");
}
looping()

console.log("Hello World! Ini dari JavaScript");