/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.63 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function winner (cars, totalKM) {
  //code below here
  var display = [];
  var result = [];
  for (i=0 ; i<cars.length; i++){
    var j = 1;
    var k = 2;
    cars[i][j] = Number((450-cars[i][k])/cars[i][j]).toFixed(2);
  }

  for (i=0; i< cars.length; i++){
    var j = 1;
    var k = 0
    display[i] = [cars[i][k], cars[i][j]];
  }

  //function for swapping element in an array
  function swap(input, index_A, index_B) {
    let temp = input[index_A];
 
    input[index_A] = input[index_B];
    input[index_B] = temp
  }
  
  for (i=0; i<display.length+1; i++){
    if (display[0][1] > display [1][1]){
      swap(display,0,1);
    }
    else if(display[1][1] > display[2][1]){
      swap(display,1,2);
    }
    else if (display[2][1] > display[3][1]){
      swap(display,2,3);
    }
    else{
      swap(display,1,3);
    }
  }

  for (i=0; i<display.length; i++){
    var j = 0;
    result.push(display[i][j]);
  }
  return result;
};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400], ], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/