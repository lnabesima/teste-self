
    async function getCombo(){
        try {
            const response = await fetch("http://localhost:3000/combo");
            const data = await response.json();
            console.log(data);
        // showDataPlans(data);
        } catch (error) {
        console.error(error);
    }
}

getCombo();


// function showDataPlans(data) {
//     for(let key in data.data){

//         let categories = data.data[key];
//         for(let category in categories){

//             let cat = categories[category];
//             if(cat.description === "Internet"){

//                 for(let plans in cat.plans){
//                     console.log(plans[0]);
//                     }
//                 }
//             }

            // for(let plans in cat){
            //     if(!cat.hasOwnProperty(plans)) continue;

            //     if(cat[plans][description] === "Internet"){
            //         console.log("deu certo");
            //     }
            // }


// function showDataPlans(data){
//     let output = "";
//     let outputArr = [];
//     try {
//         for(let plan in data.data.categories[0].plans[0].description){
//             console.log(Object.values(plan));
//             // for(let plans = 0; category[plans] <= category.length; plans++){
//             //     for (let description in category[plans]){
//             //         console.log(category[plans][description])
//             //     }
//             // }
//             output += `<li>${plan}</li>`;
//             document.querySelector('body').innerHTML = output;
//             outputArr.push(plan);
//             console.log(outputArr);
//         }
//     } catch (error) {
//         console.error(error)
//     }
// };
//     // for(let i in data){
//     //     while(i <= data.data.categories[0].plans[0].description.length){
//     //         output += `<li>${data.data.categories[0].plans[0].description}</li>`;
//     //         output += `<li>${data.data.categories[0].plans[0].value.toFixed(2)}</li>`;
//     //         i++;
//     //     }
//     // }

//     // for(let i = 0; i <= data.data.categories[0].plans[i].description.length; i++){
//     //     output += `<li>${data.data.categories[0].plans[i].description}</li>`;
//     // }
//     document.querySelector('body').innerHTML = output;
// }

