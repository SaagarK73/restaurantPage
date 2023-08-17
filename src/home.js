export function home() {
    const content = document.querySelector('#content');

    const intro = document.createElement('div');
    intro.classList.add("intro");
    content.appendChild(intro);

    const line1= document.createElement('div');
    line1.textContent = "Best South Indian restaurant in the country";
    intro.appendChild(line1);

    const line3= document.createElement('div');
    line3.textContent = "Serving since start of time";
    intro.appendChild(line3);
    
    const line2 = document.createElement('div');
    const img = document.createElement('img');
    img.src = "./images/entranceRest.jpg";
    line2.appendChild(img);
    intro.appendChild(line2);

    const line4= document.createElement('div');
    line4.textContent = "Order online or dine-in our restaurant";
    intro.appendChild(line4);

}