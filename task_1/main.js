
 const input = document.getElementById("nameValue");
 const buttonAdd = document.getElementById("buttonAdd");
 const errorInfo = document.getElementById("error");
 const divInfo = document.getElementById("info");


 buttonAdd.onclick =function ()  {
        //дыстаю інформацію з input
         let info=input.value.trim();
         // за допомоги match прописую яка повинна бути інформація,можна писати любою мовою
         let infoMatch=info.match(/^([\p{L}]+)\s*=\s*([0-9]+)$/u);

          //провіряэмо чи правильно вели інформацію
         if (infoMatch){
             // створю параграф де буде інформація з input
             let p=document.createElement("p");
             p.innerText =info;

             // створюю checkbox для вибору інформації щоб її видалити
             let checkbox = document.createElement("input");
             checkbox.type = "checkbox";
             checkbox.classList.add("checkbox_info");

             // прописую форму  тексту для заповнення в divInfo
             p.innerText = infoMatch[1] + infoMatch[2] + '';
             p.appendChild(checkbox);

             //додаю інформацію divInfo
             divInfo.appendChild(p);

             // якщо все вірно інформація про помилку не видається
             errorInfo.classList.add("error_info");
             errorInfo.innerText="";
         }else {
             errorInfo.innerText=" The information written is incorrect!!! Name is letters and Value is numbers.";

            input.innerText = ""
         };
         // чиститься  поле input
         input.value = "";

 };
