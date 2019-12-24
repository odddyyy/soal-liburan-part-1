/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 3/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  //code below here
  var countA = 0;
  var countB = 0;
  var countC = 0;
  var countD = 0;
  var display = [];

  //counting how many specific cars
  for (i=0; i<cars.length; i++){
    if (cars[i] == `A`){
      countA ++;
    }
    else if (cars[i] == `B`){
      countB ++;
    }
    else if (cars[i] == `C`){
      countC ++;
    }
    else{
      countD ++;
    }
    
  }
  
  //calculating the percentage of each car
  var divider = cars.length;
  divA = (countA/divider)*100;
  divB = (countB/divider)*100;
  divC = (countC/divider)*100;
  divD = (countD/divider)*100;
  
  display = [`B`,divB,`D`,divD,`A`,divA,`C`,divC];
  return display;

};

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/