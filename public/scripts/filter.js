var loadbtn = document.getElementById("load-btn").addEventListener('click', listCar);

function listCar(){
    let capacity = document.getElementById('capacity').value
    let date = document.getElementById('date').value
    let time = document.getElementById('time').value
    let driver = document.getElementById('driver').value
    let currDate = new Date();
    
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8000/json";

    xmlhttp.open("GET", url, false);
    xmlhttp.send(null);
    const json = JSON.parse(xmlhttp.responseText)
    console.log(json)

    var newHTML = ""
    card = document.getElementById("cars-container")
    if(capacity ==='' || date==='' || time==='' || driver === ''){
        alert("Fill all the blank")
    } else if (date < currDate) {
        alert("Choose another day")
    } else {
        for (let i = 0; i < json.length; i++) {
            var car = json[i];
            if (JSON.stringify(json[i].capacity) === capacity && json[i].available === true){
                newHTML += `
                <div class="card m-3" style="width: 18rem;height: 35rem;">
                    <img src="${car.image}" class="card-img-top m-1" alt="${car.manufacture}" style="object-fit: scale-down; height: 150px; ">
                    <div class="card-body">
                        <h5 class="card-title">${car.manufacture} ${car.model}</h5>
                        <p class="card-text" style="font-size:14px">${car.rentPerDay} per-day</p>
                        <p class="card-text" style="font-size:14px">${car.description}</p>
                        <p class="card-text" style="font-size:14px">${car.transmission}</p>
                        <p class="card-text" style="font-size:14px">${car.year}</p>
                        <a href="#" class="btn btn-primary">Choose the car</a>
                    </div>
                </div>
                `;
            }
           
        }
        card.innerHTML = newHTML;
        if (card = ""){
            alert("Not Found")
        } 
    }
    
}

