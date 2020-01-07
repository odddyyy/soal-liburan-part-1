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
 
 BEGIN Partial check

  SET value inside "str" to lower case
  SET value inside "partial" to lower case
  SET "counter" to 0
  
  FOR (i=0; i<LENGTH of str; i++)
    SET "temp" to 0
    FOR (j=0; j<LENGTH of partial;j++)
      IF (str[i+j] is EQUAL to partial[j])
        "temp" increment by 1
      END IF
    END FOR
    IF (temp is EQUAL to LENGTH of partial)
      "counter" increment by 1
    END IF
  END FOR

  IF ("counter" NOT EQUAL 0)
    DISPLAY Found + "counter" + times
  ELSE
    DISPLAY "Not found"
  END IF

END Partial check

 - DILARANG MENGGUNAKAN REGEX
*/
function partialCheck(str, partial) {
  //your code here
  str = str.toLowerCase();
  partial = partial.toLowerCase();
  var counter = 0;

  for (i=0; i<str.length; i++){
    var temp = 0
    for (j=0;j<partial.length;j++){
      if (str[i+j] === partial[j]){
        temp++;
      }
    }
    if(temp === partial.length){
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