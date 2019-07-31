# Edx-Final-Project-Capstone-2019

﻿Thursday 25th of July 2019 / Microsoft Entry Level Software Development: Capstone Project / Readme file by Annemarleen Bosma/ Netherlands

# README
 ## PREFACE

a] The desired application
The idea of the app is that a user can type in the side effect he/she is experiencing and by a click of a button can find out if his/her medication could be responsible for the side effect.

User comes to index page and sees a huge input area; he/she is encouraged to enter the side effect right away. The result would be a confirmation or decline, AND the particular medication that could cause the entered side effect.

The app answers the question: “Is this side effect I am experiencing caused by medication -x-?” And shows the medication responsible.

This was the idea….

b] application 2.0
Along the way I had to make a change in the application. What did I change?

The first page. The user now comes to the homepage and has to choose the medication he/she wants to check whether it can cause the side effect he/she is experiencing.

When clicking on the medication-button, he/she will be sent to the particular page of that medication and on THAT page he/she has to fill in the side effect. The result will be a confirmation or a decline.

## GOOD TO KNOW
Chosen Technologies & libraries: 	HTML5, CSS, JavaScript, JSON
Server: 							Node.js, Express
Language:							JavaScript
IDE:								Visual Studio Code


## INSTRUCTION: walkthrough
**STRUCTURE OF FOLDER:  Edx-Final-Project-Capstone-2019**

### MAIN folder: Edx-Final-Project-Capstone-2019.  

This folder contains:

1. index.js file
2. package.json file
3. readme file
4. AnnemarleenBosmaDesignDocument.pdf
5. AnnemarleenBosmaProjectDocument.pdf
6. node_modules folder
7. public folder

**Launching project**
– Open the Edx-Final-Project-Capstone-2019 folder in your IDE. I used Visual Studio Code for this.
– open package.json and in the terminal:
> Run: npm install  
> Run: node index.js
If everything goes well, the terminal will show the following: 
Express app listening on port 3000

### PUBLIC folder

This folder contains the following files:

1. index.html (title: MediCall)
This is the index/main page(first page you’ll land on). On this page you can:

– toggle between the Dutch Flag and the Flag of Great Brittain.[requirement 2] Do so and the bold text in the middle will change language. [requirement 7] 
– see the date and time. I used jquery to create an ajax call. [requirement 6]
– click on the blue buttons in the middle with the names of some medication on them. By clicking you will be redirected to another page. [requirement 1]

2. pageMed1.html (title: Medicatie 1)
When you choose one of the ‘medication’ buttons, you will be send to the homepage of that medication.
On the page you can:

- enter the side effect you are suffering from. When you click on the ‘ok’ button, a confirmation will appear and tell you which side effect you chose AND will tell you if the medication could be responsible for this side effect.
– deny entering anything in the input area. A popup will appear to command you to DO enter a value.[requirement 2]
– go to the homepage by clicking on the ‘Home’ button.

3. pageMed2.html title: Medicatie 2)
Same as point 2.

4. pageMed 3.html title: Medicatie 3)
Same as point 2.

5. wijzigingsformulier.html (title: wijzigingsformulier)
When you are sent here by the home page after clicking on the button Medicatie wijzigen. On this page you can:

– choose if you want to add (Toevoegen) or delete (Verwijderen) a medication.
– enter the name of the medication [requirement 1] [string]
– enter an amount off pills [requirement 1] [number]
– enter the date when you started/will start with the new medication [requirement 1] [date]

6. main.js
This file holds all the methods, code and event handlers that are used in the pages.

7. styles.css
This file contains all the styling of all the pages the user can use.

8. images: EngelseVlag.jpeg & NlVlag.jpeg

//
MAIN PROJECT REQUIREMENTS

1. At least 2 different UI pages and at least 3 different user input elements. 
2. At least 1 UI element is affected by the user’s input. 
3. After the user submits their input a decision is made on that input that can cause at least 2 different results. 
4. A user’s information is collected together in a single code structure. 
5. Support for UNICODE characters in all user text input. 
6. Date and time formats reflect the user’s local settings. 
7. At least one string is localisable. 
//

##SCENARIOS of my design documentation
###- Scenario 1 - 
Anne is checking online if her side effects are caused by her medication.

Introduction, situation and outcome
Anne, a young woman in her midtwenties, studies Physics. She has a parttime job at a diner to help her pay for her studies. She loves having a college life and going out with friends. 

She does have frequent headaches and trouble sleeping. She already takes medication because of her depressing in her earlier years. Next to this she takes some to help her sleep. Sometimes she worries about disorders and would like to find out in a quick way if her medication can cause the discomfort. She doesn’t want to dwell on it too long.

<magic happens>

The best way to find out quickly if some of the disorders come from the medication is looking on the internet. A downfall is that Anne sees so much, and it isn’t all that pretty. She decides to check the leaflets and with a yellow marker markes the side effects she is experiencing. This way, if she undergoes any of the side effects again she can check rather quickly if it’s caused from one of her medication.

###- Scenario 2 -  
Jan wants to be able to read his leaflets easily.

Introduction, situation, outcome
Jan is a middleaged man in his late 50’s. He takes care of himself pretty well. Making sure he eats healthy, stays fit and puzzles a lot to keep his brain healty too.

Although Jan is fit, when he experiences discomfort he eventually will check his leaflets first, before going to any doctor. He does not want to bother his doctor for every little thing.
Unfortenatly the leaflets are hard to read, because of the tiny letters. Because of this it is hard and tiresome to read the leaflets. Jan uses a variety of prescription pills for his bloodpressure, skincondition and kidneys, but his eyesight is just fine for a man his age.

<magic happens>

Jan now uses a magnifying glass to scan the leaflets. Sometimes he asks his dear neighbour to read the leaflets for him, but he does feels a bit burdend doing so.


END OF DOCUMENT
