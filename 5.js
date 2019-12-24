/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  // code below here

  //function to reverse the numbers
  function palindrome(nomor){
    reverse = 0;
    while(nomor>0){
      let right = Math.floor(nomor%10);
      reverse = reverse * 10 + right;
      nomor = Math.floor(nomor/10);
    }
    return reverse;
  }

  var display = [];

  //Checking for the palindrome
  for(i=0; i<numbers.length; i++){
    for (j=0; j<numbers.length; j++){
      var x = palindrome(numbers[i]);
      if (numbers[i] === x){
        display.push(numbers[i]);
        break;
      }
      else{
        numbers[i] += 1;
      }
    }
  }
  
  return display;
}

console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]
