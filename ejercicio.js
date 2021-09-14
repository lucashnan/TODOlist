const clickOnMe = document.querySelector(".btn-send");
const space = document.querySelector(".todo-entry-box");
const listU = document.querySelector("ol");
const elementList = document.querySelector("li");
const elementHour = document.querySelector(".horario");

const elementosMarcados = [];
let arrayList = [];
let dataBase=new Array;









function deleteAll(){
    
    do{
        const listA = document.querySelector('li');
    if(listU.hasChildNodes){
        listU.removeChild(listA);
        arrayList.pop();
    }

    }while(listU.hasChildNodes)


    // listU.remove

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
        
    // }


}

const guardar = document.getElementById('save-button')

guardar.addEventListener('click',(e)=>{
    e.preventDefault;
    dataBase.push(arrayList);
    console.log(dataBase);
    deleteAll();
})


clickOnMe.addEventListener("click",(e)=>{
    e.preventDefault();
    let element = space.value; //obtengo el valor de la tarea a realizar
    let elementoHora = elementHour.value;
    if(element != "" && elementoHora!="" ){
        element = element.toUpperCase(); //paso el String a Mayusculas
    const li = document.createElement("li");
    const p = document.createElement("p");
    // p.textContent = element +" - "+ "<b>"+ elementoHora+"</b>";
    p.textContent = `${element} -   ${elementoHora}`;
    var elementoLista = p.textContent;
    arrayList.push(elementoLista);
    console.log(arrayList);
    mostrarArray(arrayList);
    p.setAttribute("class", "parrafo")
    li.appendChild(p);
    listU.append(li);
    li.setAttribute("id","dataSet")
    li.setAttribute("class", "f");
    elementHour.value =""
    space.value="";
    
    }else{
        alert("Es necesario rellenar el formulario para ingresar un dato")
    }
    
    function mostrarArray(arrayList) {
        for (let i = 0; i < arrayList.length; i++) {
            const element = arrayList[i];
            console.log(`elemento ${i+1} ` +element);
            
        }
    }

 

})