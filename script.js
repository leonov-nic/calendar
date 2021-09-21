"use strict";
(function () {

  let MONTH = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];
  let date = new Date();

  let monthName = MONTH[date.getMonth()];
  let currentDate = date.getDate();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();
  let monthText = document.querySelector(".calendar__item--center p:first-child");
  let yearText = document.querySelector(".calendar__item--center p:last-child");
  let daysText = document.querySelectorAll(".calendar__day-item")[0];
  let daysList = document.querySelector(".calendar__day-list");
  let prev = document.querySelector(".calendar__item:first-child");
  let next = document.querySelector(".calendar__item:last-child");

  function setMonthCalendar(year,month) {
  let daysOfCurrentMonth = new Date(year, month + 1, 0).getDate();
  let lastDaysOfMonth = new Date(year, month, 0).getDate();
  let daysBeforeCurrentMonth = new Date(year, month, 0).getDay();
  
  let fragment = document.createDocumentFragment();

  monthText.textContent = MONTH[month];
  yearText.textContent = year;

  if (daysBeforeCurrentMonth > 0){
      for (let i = 1  ; i <= daysBeforeCurrentMonth; i++) {
      let emptyElement = document.createElement("li");
      emptyElement.className = "calendar__day-item calendar__day-item--other";
      emptyElement.textContent = lastDaysOfMonth - daysBeforeCurrentMonth + i;   
      fragment.appendChild(emptyElement);
      }
  }  
  
  for (let i = 1; i <= daysOfCurrentMonth; i++) {  
      let newDay = document.createElement("li");
      newDay.className = "calendar__day-item";
      newDay.textContent = i;       
      fragment.appendChild(newDay);
  }
  daysList.appendChild(fragment);

  let allDays = document.querySelectorAll(".calendar__day-item");

  if (allDays) {
      allDays[daysBeforeCurrentMonth + currentDate - 1].classList.add("calendar__day-item--active");
  }
  }

  setMonthCalendar(currentYear, currentMonth);

  prev.addEventListener("click", function () {   
  let allDays = document.querySelectorAll(".calendar__day-item");     
  let newDate = new Date(yearText.textContent, MONTH.indexOf(monthText.textContent));

  for (let i = 0; i < allDays.length; i++) {
      allDays[i].remove();
  }
  
  currentMonth = currentMonth - 1;
  newDate.setMonth(currentMonth);
  currentYear = newDate.getFullYear();
  currentMonth = newDate.getMonth();
  setMonthCalendar(currentYear, currentMonth);
  });

  next.addEventListener("click", function () {   
  let allDays = document.querySelectorAll(".calendar__day-item");     
  let newDate = new Date(yearText.textContent, MONTH.indexOf(monthText.textContent));

  for (let i = 0; i < allDays.length; i++) {
      allDays[i].remove();
  }
  
  currentMonth = currentMonth + 1;
  newDate.setMonth(currentMonth);
  currentYear = newDate.getFullYear();
  currentMonth = newDate.getMonth();
  setMonthCalendar(currentYear, currentMonth);
  });   

})();