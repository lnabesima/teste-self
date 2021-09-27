let combo;
let internet;
let phone;
let internetSelected;
let phoneSelected;
let internetValue = 0;
let phoneValue = 0;
let selection;

async function getCombo(){
    /* This function retrieves the data from the API and stores in three variables:
    - combo, which contains all the data;
    - internet, which contains the information related to data plans and
    - phone, which contains the information related to phone plans.
    After that, it distributes the data into divs, to be displayed on the screen. */
    try {
        const response = await fetch("https://6128e8660e3482001777b216.mockapi.io/selftec/combo");
        const data = await response.json();
        combo = data.data;
        getPlans(data);
        internet.forEach((currentValue) => {addDiv(currentValue, "dataPlans")});
        phone.forEach((currentValue) => {addDiv(currentValue, "phonePlans")});
        
    } catch (error) {
    console.error(error);
    }
}

function getPlans(data) {
    /*This is the function that actually does the storing work. It delves into the
    nested data structure and retrieves the information. */
    for(let key in data.data){
        
        let categories = data.data[key];
        for(let category in categories){

            let cat = categories[category];
            if(cat.description === "Internet"){
                internet = cat.plans;
            }
            
            if(cat.description === "Telefone"){
                phone = cat.plans;
            }
        }
    }
}

function addDiv(element, id){
    /* Here we create some divs and append the plans information to be displayed. */
    let newDiv = document.createElement("div");
    let newPlan = document.createElement("p"); //adding the plan name
    let textNode = document.createTextNode(element.description);

    newPlan.appendChild(textNode);
    newPlan.setAttribute("class", "plan");
    newDiv.appendChild(newPlan);
    
    let newValue = document.createElement("p"); //adding the plan price
    textNode = document.createTextNode(`R$ ${element.value.toFixed(2)}`);
    newValue.appendChild(textNode);
    newValue.setAttribute("class", "value");
    newDiv.appendChild(newValue);

    /* This part creates a button that call a function when clicked. This function
    will select a plan and compare it against all plans. When matched, the selected
    plan will be stored in a variable. */
    let button = document.createElement("button");
    button.innerHTML = "Selecionar";
    button.setAttribute("class", "btn");
    button.addEventListener('click', () =>{compare(element.description, element.id)});
    newDiv.appendChild(button);

    newDiv.setAttribute("class", "swiper-slide")
    document.getElementById(id).appendChild(newDiv);
}

function compare(description, id){
    /* This function compares the selected plan with all plans. After the match is found,
    the selected plan is stored in a variable, along with it's price. After this
    another function is invoked, updating the shopping cart. */
    let iteratorArr;
    let actualPlan = `${description} ${id}`;
    internet.forEach((currentValue) => {
        iteratorArr = `${currentValue.description} ${currentValue.id}`
        if(iteratorArr == actualPlan){
            return internetSelected = description;
        }
    })
    internet.forEach((currentValue) =>{
        iteratorArr = `${currentValue.description} ${currentValue.id}`
        if(iteratorArr == actualPlan){
            return internetValue = currentValue.value;
        }
    })

    phone.forEach((currentValue) => {
        iteratorArr = `${currentValue.description} ${currentValue.id}`
        if(iteratorArr == actualPlan){
            return phoneSelected = description;
        }
    })

    phone.forEach((currentValue) =>{
        iteratorArr = `${currentValue.description} ${currentValue.id}`
        if(iteratorArr == actualPlan){
            return phoneValue = currentValue.value;
        }
    })
    /* A better, more elegant, efficient and cleaner way to do this should exist
    but my 5-year-old brain doesn't know how to do it yet. Sorry about that. */
    updateCart()
}


function updateCart(){
    /* The cart is updated with the selected plans and prices with this function. */
    let internet = document.getElementById("selectedInternetPlan");
    let phone = document.getElementById("selectedPhonePlan");
    let sum = document.getElementById("selectedTotal")
    let internetPrice = parseFloat(internetValue); //it kept getting stored as a string, so I needed to parse as float.
    let phonePrice = parseFloat(phoneValue);
    

    if(internetSelected == undefined || internetSelected == ""){
        /* I tried to show this placeholder before the plan selection, but it won't work properly.
        Maybe in the future I'll try to fix this, but right now I don't care about it. */
        internet.innerHTML = "Selecione um plano."
    } else {
        internet.innerHTML = ""; //Needed to clear the p as the plan name kept getting concatenated and not replaced as it should
        internet.innerHTML = `${internetSelected} - R$ ${internetPrice.toFixed(2)}`;
        sum.innerHTML = "";
        sum.innerHTML = `R$ ${(internetPrice + phonePrice).toFixed(2)}`;

    }
    
    if(phoneSelected == undefined || phoneSelected == ""){
        phone.innerHTML = "Selecione um plano";
    } else {
        phone.innerHTML = "";
        phone.innerHTML = `${phoneSelected} - R$ ${phonePrice.toFixed(2)}`;
        sum.innerHTML = "";
        sum.innerHTML = `R$ ${(internetPrice + phonePrice).toFixed(2)}`;
    }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    mousewheel: true,
    grabCursor: true,
    // loop: true,
    slidesPerView: 'auto',
    // slidesPerPage: 6,
    slidesPerGroup: 1,
    centeredSlides: true,
    // centeredSlidesBounds: true,
    observer: true, 
    observeParents: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});



getCombo();



