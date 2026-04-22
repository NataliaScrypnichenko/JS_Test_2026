
const input = document.getElementById("nameValue");
const buttonAdd = document.getElementById("buttonAdd");
const divInfo = document.getElementById("info");
const errorInfo = document.getElementById("error");

//активую кнопку додавання name=value divInfo
buttonAdd.onclick = function () {
    //дыстаю інформацію з input
    let info = input.value.trim();
    // за допомоги match прописую яка повинна бути інформація,можна писати любою мовою
    let infoMatch = info.match(/^([a-zA-Z]+)\s*=\s*([a-zA-Z0-9]+)$/);

    //провіряэмо чи правильно вели інформацію
    if (infoMatch) {
        // створю параграф де буде інформація з input
        let p = document.createElement("p");
        p.classList.add("info_p");
        p.innerText = info;

        // створюю checkbox для вибору інформації щоб її видалити
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox_info");

        // прописую форму  тексту для заповнення в divInfo
        p.innerText = infoMatch[1] +"=" + infoMatch[2] + '';
        p.appendChild(checkbox);

        //додаю інформацію divInfo
        divInfo.appendChild(p);

        // якщо все вірно інформація про помилку не видається
        errorInfo.classList.add("error_info");
        errorInfo.classList.add("error_text");
        errorInfo.innerText = "";
    } else {
        errorInfo.innerText = " The information written is incorrect!!! Name is letters and Value is numbers.";

        input.innerText = ""
    }
    ;
    // чиститься  поле input
    input.value = "";

};

// шукаю кнопки buttonSortName, buttonSortValue, buttonDelete
const buttonSortName= document.getElementById("buttonSortName");
const buttonSortValue = document.getElementById("buttonSortValue");
const buttonDelete= document.getElementById("buttonDelete");

//активую кнопку buttonSortName
buttonSortName.onclick = function () {
    //створюю масив потрябний для sort
     let arr=[];
    //створюю елмент який буде додаватися в масив
     let items = divInfo.children;
     // ітерую items тому що він складається з двох значень
     for (let i = 0; i < items.length; i++) {
         arr.push(items[i]);

     };
     // за допомого методу відсортую Name
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
    //очищаю дів для запису нової інформації
    divInfo.innerText = "";

    // ітерую масив вже новий і додаю в дів
    for (let i = 0; i < arr.length; i++){
        divInfo.appendChild(arr[i]);
    };

};

// активую кнопку  buttonSortValue
buttonSortValue.onclick = function () {
    //створюю масив потрябний для sort
    let arr=[];
    //створюю елмент який буде додаватися в масив
    let items = divInfo.children;
    // ітерую items тому що він складається з двох частин
    for (let i = 0; i < items.length; i++) {
        arr.push(items[i]);
    };
    // сортую по зростанню
    arr.sort(function (a, b) {
        let valueA = +(a.innerText.split('=')[1].trim());
        let valueB =+( b.innerText.split('=')[1].trim());

           return  valueA-valueB

    })
    //очищаю дів для запису нової інформації
    divInfo.innerText = "";

    // ітерую масив вже новий і додаю в дів
    for (let i = 0; i < arr.length; i++){
        divInfo.appendChild(arr[i]);
    };
};

// активую кнопку buttonDelete
buttonDelete.onclick = function () {
     // створення змінної для видалення
    let items = divInfo.children;

    // ітерую масив з кінця щоб непрушувати вже існуючий індекси
    for(let i = items.length - 1; i >= 0; i--){
        // створюю checkbox, а потім провіряю якщо рядок відмічений, видалити його
        let checkbox=items[i].querySelector('input');

        if (checkbox.checked){
            items[i].remove();
        };
    };

};
