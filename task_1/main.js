const input = document.getElementById("nameValue");
const buttonAdd = document.getElementById("buttonAdd");
const divInfo = document.getElementById("info");
const errorInfo = document.getElementById("error");

//activate the add button name=value divInfo
buttonAdd.onclick = function () {
    //I get information from input
    let info = input.value.trim();
    // using match I specify what information should be
    let infoMatch = info.match(/^([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)$/);

    //I check if the information is entered correctly.
    if (infoMatch) {
        //I will create a paragraph where there will be information from input.
        let p = document.createElement("p");
        p.classList.add("info_p");
        p.innerText = info;

        // I create a checkbox to select information to delete.
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox_info");

        // I write the text form to fill in divInfo
        p.innerText = infoMatch[1] +"=" + infoMatch[2] + '';
        p.appendChild(checkbox);

        //add information divInfo
        divInfo.appendChild(p);

        // If all the information is correct, no error is displayed.
        errorInfo.classList.add("error_info");
        errorInfo.classList.add("error_text");
        errorInfo.innerText = "";
    } else {
        errorInfo.innerText = " The information written is incorrect!!! Name is letters and Value is numbers.";
        input.innerText = ""
    };
    // the input field is cleared
    input.value = "";
};

// looking for buttons buttonSortName, buttonSortValue, buttonDelete
const buttonSortName= document.getElementById("buttonSortName");
const buttonSortValue = document.getElementById("buttonSortValue");
const buttonDelete= document.getElementById("buttonDelete");

//I activate the buttonSortName
buttonSortName.onclick = function () {
    //I create an array that is needed for sort
     let arr=[];
    //I will create an element that will be added to the array.
     let items = divInfo.children;
     // I'm iterating over items because it consists of two values.
     for (let i = 0; i < items.length; i++) {
         arr.push(items[i]);
     };
     // using the method Name I will sort
     arr.sort(function (a, b) {
         let nameA = a.innerText.split('=')[0].trim();
         let nameB = b.innerText.split('=')[0].trim();

         if (nameA > nameB) {
             return 1;
         };
         if( nameA < nameB ) {
             return -1;
         };
         if( nameA === nameB ) {
             return 0;
         };
     });
    //I clear the divs to record new information.
    divInfo.innerText = "";

    // I iterate over the new array and add it to the divs.
    for (let i = 0; i < arr.length; i++){
        divInfo.appendChild(arr[i]);
    };
};

//I activate the buttonSortValue button
buttonSortValue.onclick = function () {
    //I will create the array needed for sort.
    let arr=[];
    //I create an element that will be added to the array.
    let items = divInfo.children;
    // I iterate over items because it consists of two parts.
    for (let i = 0; i < items.length; i++) {
        arr.push(items[i]);
    };
    // I sort by height.
    arr.sort(function (a, b) {
        let valueA = +(a.innerText.split('=')[1].trim());
        let valueB =+( b.innerText.split('=')[1].trim());

           return  valueA-valueB

    });
    //I clear the divs to record new information.
    divInfo.innerText = "";

    // I iterate over the new array and add it to the divs.
    for (let i = 0; i < arr.length; i++){
        divInfo.appendChild(arr[i]);
    };
};

// I activate the buttonDelete button
buttonDelete.onclick = function () {
     // creating a variable to delete
    let items = divInfo.children;

    // I iterate the array from the end so as not to overwrite existing indexes.
    for(let i = items.length - 1; i >= 0; i--){
        // I create a checkbox, and then check if the row is checked, delete it
        let checkbox=items[i].querySelector('input');

        if (checkbox.checked){
            items[i].remove();
        };
    };
};
