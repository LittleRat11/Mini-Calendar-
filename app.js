let month = document.querySelector("#month-name");
let day = document.querySelector("#day-name");
let dayNum = document.querySelector("#day-number");
let year = document.querySelector("#year");
let date = new Date();
console.log(date);
month.innerHTML = date.toLocaleString("en", {
    month: "long"
});
day.innerHTML = date.toLocaleString("en", {
    weekday: "long"
});
dayNum.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();