const btn = document.getElementById("btn");
const dateElement = document.getElementById("date");
const monthsElement = document.getElementById("months");
const yearElement = document.getElementById("year");
const input = document.getElementById("input");

btn.addEventListener('click', () => {
    let inputDate = new Date(input.value);
    let currentDate = new Date();

    let ageYears = currentDate.getFullYear() - inputDate.getFullYear();
    let ageMonths = currentDate.getMonth() - inputDate.getMonth();
    let ageDays = currentDate.getDate() - inputDate.getDate();

    
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    yearElement.textContent = ageYears;
    monthsElement.textContent = ageMonths;
    dateElement.textContent = ageDays;

    console.log(`Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`);
});
