const ages = [31, 23, 32, 17, 22, 20, 25];
const ages1 = [12, 15, 24, 17, 19, 31];
const ages2 = [34, 23, 54, 8, 28, 35];
const allAges = ages.concat(ages1).concat(ages2);
const allAges2 = [...ages, ...ages1, ...ages2];
console.log(allAges2);


const business = 450;
const minister = 350;
const actor = 700;
const takaPoisa =[455, 66, 900];
// const total = Math.max(business, minister, actor);
const maximum = Math.max(...takaPoisa);
console.log(maximum);