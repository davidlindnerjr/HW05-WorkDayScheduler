# HW05-WorkDayScheduler

In this project I was tasked with creating a work day scheduler. A regular work day starts at 9:00 am and goes until 5:00 pm so that is what I based me planner on. The planner allows the user to add events to each hour of the work day and save the text by clicking the save icon located to the right of the textarea. As time goes by events will change color depending on the time if day. The current time will be displayed in red, past events will be displayed in gray, and future events will be displayed in green. The current date is displayed at the top of the screen. 

This project was great for practicing jQuery. I used jQuery selectors and event listeners throughout the project for saving text to local storage, click events, and selecting elements of the DOM. The most challenging part of the project was having the textareas change colors depending on the time of day; to solve the problem I ended up using an is statement and comparing the current hour of the day with the hour of the textarea and that would decide the color displayed. 

Features:
* Dynamically changing date and time
* Dynamically changing color coding system
* Save content to come back to at a later time

![Work Day Scheduler - Google Chrome 7_30_2020 11_25_29 AM](https://user-images.githubusercontent.com/65383133/88961411-d96dde80-d259-11ea-8735-f996dfcb1810.png)
![Work Day Scheduler - Google Chrome 7_30_2020 11_26_02 AM](https://user-images.githubusercontent.com/65383133/88961416-da067500-d259-11ea-98bb-256be49d3430.png)
![Work Day Scheduler - Google Chrome 7_30_2020 11_26_17 AM](https://user-images.githubusercontent.com/65383133/88961417-da9f0b80-d259-11ea-9163-08c8add01446.png)

Copyright (c) 2020 David Lindner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
