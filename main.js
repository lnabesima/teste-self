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
        addDivFromArray(phonePlans, phoneValues, "phonePlans");
        updateCart()
        

    
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

function addDivFromArray(planArr, valueArr, id){
    for(let i=0; i<planArr.length; i++){
        let newDiv = document.createElement("div");
        let newPlan = document.createElement("p");
        let textNode = document.createTextNode(planArr[i]);
        newPlan.appendChild(textNode);
        newPlan.setAttribute("class", "plan");
        newDiv.appendChild(newPlan);
        let newValue = document.createElement("p");
        textNode = document.createTextNode(valueArr[i]);
        newValue.appendChild(textNode);
        newValue.setAttribute("class", "value");
        newDiv.appendChild(newValue);
        let button = document.createElement("button");
        button.innerHTML = "Selecionar"
        button.setAttribute("class", "btn")
        newDiv.appendChild(button);

        document.getElementById(id).appendChild(newDiv);
    }
}


function updateCart(){
    let dataCart = document.getElementById('dataSelected')


    let btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.addEventListener('click', (ev) => {
        console.log('click');
    }));
}





getCombo();