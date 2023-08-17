export function foodmenu() {
    const content = document.querySelector('#content');

    const foodmenu = document.createElement("div");
    foodmenu.classList.add("foodmenu");
    content.appendChild(foodmenu);

    const tea = document.createElement('div');
    const teaImage = document.createElement('img');
    teaImage.src = "./images/teaRest.jpg";
    teaImage.alt = "Tea"
    const teaName = document.createElement('div');
    teaName.textContent = "Tea";
    tea.appendChild(teaImage);
    tea.appendChild(teaName);
    foodmenu.appendChild(tea);

    const idli = document.createElement('div');
    const idliImage = document.createElement('img');
    idliImage.src = "./images/idliRest.jpg";
    idliImage.alt = "tea"
    const idliName = document.createElement('div');
    idliName.textContent = "Idli";
    idli.appendChild(idliImage);
    idli.appendChild(idliName);
    foodmenu.appendChild(idli);

    const dosa = document.createElement('div');
    const dosaImage = document.createElement('img');
    dosaImage.src = "./images/dosaRest.jpg";
    dosaImage.alt = "dosa"
    const dosaName = document.createElement('div');
    dosaName.textContent = "Dosa";
    dosa.appendChild(dosaImage);
    dosa.appendChild(dosaName);
    foodmenu.appendChild(dosa);

    const rice = document.createElement('div');
    const riceImage = document.createElement('img');
    riceImage.src = "./images/riceRest.jpg";
    riceImage.alt = "rice"
    const riceName = document.createElement('div');
    riceName.textContent = "Rice";
    rice.appendChild(riceImage);
    rice.appendChild(riceName);
    foodmenu.appendChild(rice);
}