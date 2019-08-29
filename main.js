console.log("main.js")

const addressArray = [];

function masterBuilder(personObj){
    return `
        <div>
            <h2>Name: ${personObj.name}</h2>
            <p>Address: ${personObj.address}</p>
        </div>
    `
}

const person = {
    name:"Brenda"
}

// document.querySelector("#saveEntry").addEventListener("click", handleEvent);
document.querySelector("#saveEntry").addEventListener("click", (event) => {

    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    const person = {
        name: personName,
        address: personAddress
    }

    addressArray.push(person);
    document.querySelector("#addressList").innerHTML += masterBuilder(person);

})


function handleEvent(event){

}