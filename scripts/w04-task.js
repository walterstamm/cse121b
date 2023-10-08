/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    "name": "Walter Stamm",
    "photo" : "images/walterstamm.png",
    "favoriteFoods" : ["Pizza", "Pasta", "Steak"],
    "hobbies" : ["Golf", "Fishing", "Hunting"],
    "placesLived" : []
};

myProfile.placesLived.push({
    "place": "Buenos Aires",
    "length": "1 year"
    }
);



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    "place": "Cordoba",
    "length": "1 year"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);


/* Favorite Foods List*/


myProfile.favoriteFoods.forEach(function(food) {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});



/* Hobbies List */

myProfile.hobbies.forEach(function(hobby) {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */


myProfile.placesLived.forEach(function(place) {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);
});
