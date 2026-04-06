//  <div id="info" class="info"></div>
//
//         <div id="buttonInfo" class="button_info">
//             <button id="buttonSortName">Sort by Name </button>
//             <button id="buttonSortValue">Sort by Value</button>
//             <button id="buttonDelete">Delete</button>
const input = document.getElementById("nameValue");
const buttonAdd = document.getElementById("buttonAdd");
const errorInfo = document.getElementById("error");
const divInfo = document.getElementById("info");


buttonAdd.onclick = function () {
    //дыстаю інформацію з input
    let info = input.value.trim();
    // за допомоги match прописую яка повинна бути інформація,можна писати любою мовою
    let infoMatch = info.match(/^([\p{L}]+)\s*=\s*([0-9]+)$/u);

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

const buttonSortName= document.getElementById("buttonSortName");
const buttonSortValue = document.getElementById("buttonSortValue");
const buttonDelete= document.getElementById("buttonDelete");

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

buttonSortValue.onclick = function () {
    // let arr=[];
    //
    // let items = divInfo.children;
    //
    // for (let i = 0; i < items.length; i++) {
    //     arr.push(items[i]);
    // };
    // arr.sort(function (a, b) {
    //     let nameA = a.innerText.split('=')[1].trim();
    //     let nameB = b.innerText.split('=')[1].trim();
    //
    //     if
    // })
}
