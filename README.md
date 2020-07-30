# HW05-WorkDayScheduler

In this project I was tasked with creating a work day scheduler. A regular work day starts at 9:00 am and goes until 5:00 pm so that is what I based me planner on. The planner allows the user to add events to each hour of the work day and save the text by clicking the save icon located to the right of the textarea. As time goes by events will change color depending on the time if day. The current time will be displayed in red, past events will be displayed in gray, and future events will be displayed in green. The current date is displayed at the top of the screen. 

This project was great for practicing jQuery. I used jQuery selectors and event listeners throughout the project for saving text to local storage, click events, and selecting elements of the DOM. The most challenging part of the project was having the textareas change colors depending on the time of day; to solve the problem I ended up using an is statement and comparing the current hour of the day with the hour of the textarea and that would decide the color displayed. 

Features:
* Dynamically changing date and time
* Dynamically changing color coding system
* Save content to come back to at a later time

