/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");

let templeList = [];
/* async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach((temple) => {
       // Create the article element
       let article = document.createElement("article");

       // Create the h3 element and set its text content
       let h3 = document.createElement("h3");
       h3.textContent = temple.templeName;

       // Create the img element, set its src and alt attributes
       let img = document.createElement("img");
       img.src = temple.imageUrl;
       img.alt = temple.location;

       // Append the h3 and img elements to the article element
       article.appendChild(h3);
       article.appendChild(img);

       // Append the article element to the templesElement
       templesElement.appendChild(article);
    });
    };



/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(temples);
};

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* sortBy Function */
/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            break;
    }
};




/* Event Listener */
document.getElementById("sortBy").addEventListener("change",()=>{ sortBy(templeList)});

getTemples();