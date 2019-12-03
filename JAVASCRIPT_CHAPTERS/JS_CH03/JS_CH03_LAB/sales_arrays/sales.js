let region1 = [1540, 1130, 1580, 1105];
let region2 = [2010, 1168, 2305, 4102];
let region3 = [2450, 1847, 2710, 2391];
let region4 = [1845, 1491, 1284, 1575];
let region5 = [2120, 1767, 1599, 3888];
// Sales By Quaters Variabless
let quarterOne = 0;
let quarterTwo = 0;
let quarterThree = 0;
let quarterFour = 0;
// Sales by Region Variables
let region1Total = 0;
let region2Total = 0;
let region3Total = 0;
let region4Total = 0;
let region5Total = 0;
let allSales = 0;
for (let i = 0; i < 4; i++) {
  quarterOne = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
  quarterTwo = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
  quarterThree = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
  quarterFour = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

  region1Total += region1[i];
  region2Total += region2[i];
  region3Total += region3[i];
  region4Total += region4[i];
  region5Total += region5[i];
  allSales = region1Total + region2Total + region3Total + region4Total + region5Total;

}

alert("Sales By Quarter" +
  "\n\nQ1: " + quarterOne +
  "\n\nQ2: " + quarterTwo +
  "\n\nQ3: " + quarterThree +
  "\n\nQ4: " + quarterFour);
alert("Sales By Region" +
  "\n Region 1 total: " + region1Total +
  "\n Region 2 total: " + region2Total +
  "\n Region 3 total: " + region3Total +
  "\n Region 4 total: " + region4Total +
  "\n Region 5 total: " + region5Total);

  alert("Total Sales: " + allSales)
