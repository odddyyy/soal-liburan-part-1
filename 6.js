/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 SET "str" to lower case
 SET "partial" to lower case
 SET "counter" to 0
 
 for (i=0; i<LENGTH of str; i++){
   IF (str[i] + str[i+1] + str[i+2] === partial){
     SET "counter" EQUAL to "counter" + 1
   }
 }

 IF ("counter" NOT EQUAL 0){
   DISPLAY "Found (counter) times"
 }
 ELSE{
   DISPLAY "Not found"
 }
  

 - DILARANG MENGGUNAKAN REGEX
*/
function partialCheck(str, partial) {
  //your code here
  str = str.toLowerCase();
  partial = partial.toLowerCase();
  var counter = 0;

  for (i=0,j=1,k=2; k<str.length; i++,j++,k++){
    if (str[i]+str[j]+str[k] === partial){
      counter++;
    }
  }
  
  if(counter != 0){
    return `found ${counter} times`;
  }
  else{
    return `not found`;
  }
}
console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 times
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found