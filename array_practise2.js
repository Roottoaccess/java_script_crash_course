/*
For a given array with prices of 5 items -> 
[250,645,300,900,50] all items has an offer of 10%
on them. Change the array to store final price
after applying offer.
*/

let item = [250,645,300,900,50];
let disc = 0;
// for(let count of item){
//     // console.log(count);
//     disc += (count / 5)*100;
// }
// console.log(disc);

for(let i = 0; i < item.length; i++)
{
    disc = item[i] / 10;
    item[i] -= disc;
    console.log(`After discount the price is in index: ${i}`,item[i]);
}

