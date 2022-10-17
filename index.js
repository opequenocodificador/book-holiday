//Convert today to input format
//Pour entrer dans un input la date doit être au format aaaa mm jj
const today = new Date().toISOString().split("T")[0];
start_date.value = today;

//Empêcher l'utilisateur de prendre une date antèrieure à la date du jour
start_date.min = today;

//Tomorrow date calc ajouter une date +1
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
//convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
//valeur de l'input
end_date.value = tomorrowFormat;
//IDEM Empêcher l'utilisateur de prendre une date antèrieure à la date du jour
end_date.min = tomorrowFormat;

//changer la date de fin quand celle du début lui est supérieure
//on crée un évent on peut soit change ou input

start_date.addEventListener("change", (e) => {
  let day = new Date(start_date.value);
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

//*****//Changer la date de départ si la date d'arrivée est infèrieure à celle-ci *//
end_date.addEventListener("change", (e) => {
  let dayBefore = new Date(end_date.value);
  dayBefore = new Date(end_date.value).toISOString().split("T")[0];
  if (end_date.value < start_date.value) {
    start_date.value = dayBefore;
  }
});

//Calculer le nombre de jour entre l'arrivée et le départ
const bookingCalc = () => {
  var day1 = new Date(start_date.value);
  var day2 = new Date(end_date.value);

  let difference = Math.abs(day2 - day1) / (1000 * 3600 * 24);
};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();
