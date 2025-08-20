
let raqamlar=[2738, 938, 998, 865, 865, 765, 54, 743, 64 ]; 
// for(let i=0; i<raqamlar.length; i++){
//     console.log(raqamlar [i]);
// }
// for (const raqam of raqamlar) {
//     console.log(raqam);
    
// }


let ismlar=["mohirxon"," mohir", "firdavs", "mavlonbek", "abduraxmon", "ismoil", "jamshid", "behruz", "tohir", "abdulaziz"];
let nharfibor=[]
let nharfiyoq=[]

for (const ism of ismlar) {

    if(ism.toLowerCase().includes("n") ){
        nharfibor.push(ism);

    }else{
        nharfiyoq.push(ism)
    }
      
}
console.log(ismlar, "barcha ismlar");
console.log(nharfibor, " n harfi bor ismlar");
console.log(nharfiyoq, " n harfi yoq ismlar");
