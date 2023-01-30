let form = document.querySelector('form')
let ar = []
form.onsubmit = (event) => {
    event.preventDefault()
    let obj = {
        name : event.target['name'].value,
        Surname : event.target["Surname"].value,
        Email : event.target["Email"].value,
        Gender: event.target["Gender"].value,
        Password:event.target["Password"].value
    }
    ar.push(obj)
    let list = document.querySelector(".list")
    let li = document.createElement("li");
    ar.forEach((element)=>{
        li.innerHTML = '';
        li.innerHTML  += element["name"]+" ";
        li.innerHTML  += element["Surname"]+" ";
        li.innerHTML  += element["Email"]+" ";
        li.innerHTML  += element["Password"]+" ";
        li.innerHTML  += element["Gender"]+" ";
        list.appendChild(li)
        console.log(list);
    })
    form.reset()
}   