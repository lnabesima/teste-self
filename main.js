let dataPlans = [];
let dataValues = [];
let phonePlans = [];
let phoneValues = [];
async function getCombo(){
    try {
        const response = await fetch("http://localhost:3000/combo");
        const data = await response.json();
        showDataPlans(data);
        addDivFromArray(dataPlans, dataValues, "dataPlans");
        // appendText("dataPlans", dataPlans);
        // appendText("dataValues", dataValues);
        addDivFromArray(phonePlans, phoneValues, "phonePlans");
        // appendText("phonePlans", phonePlans);
        // appendText("phoneValues", phoneValues);
        
    
    } catch (error) {
    console.error(error);
    }
}



function showDataPlans(data) {
    for(let key in data.data){
        
        let categories = data.data[key];
        for(let category in categories){

            let cat = categories[category];
            if(cat.description === "Internet"){
                
                    for(let i = 0; i < cat.plans.length; i++){
                        dataPlans.push(cat.plans[i].description);
                    }
                    for(let j = 0; j < cat.plans.length; j++){
                        dataValues.push(cat.plans[j].value);
                    }
            }
            
            if(cat.description === "Telefone"){
                for(let i = 0; i < cat.plans.length; i++){
                    phonePlans.push(cat.plans[i].description);
                }
                for(let j = 0; j < cat.plans.length; j++){
                    phoneValues.push(cat.plans[j].value);
                }
            }
        }
    }
}
function appendText(id, text){
    let div = document.getElementById(id);
    div.innerHTML = text;
}

function addDivFromArray(arr1, arr2, id){
    for(let i=0; i<arr1.length; i++){
        let newDiv = document.createElement("div");
        let newPlan = document.createElement("p");
        let textNode = document.createTextNode(arr1[i]);
        newPlan.appendChild(textNode);
        newDiv.appendChild(newPlan);
        let newValue = document.createElement("p");
        textNode = document.createTextNode(arr2[i]);
        newValue.appendChild(textNode);
        newDiv.appendChild(newValue);
        document.getElementById(id).appendChild(newDiv);
    }
}

getCombo();