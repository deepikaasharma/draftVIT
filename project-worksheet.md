# Project Overview

## Project Schedule

| Day        | Deliverable                                          | Status      |
| ---------- | ---------------------------------------------------- | ----------- |
| May 26 | Wireframes                                                | Complete |
| May 27 | Feature List                                               | Complete |
| May 28 | Priority Matrix                                            | In Progress |
| May 28 | Project Worksheet                                     | In Progress |
| May 28 | Deploy                                                       | In Progress |
| May 28 | Present                                                      | In Progress |
| May 28 | Project Submission                                   | In Progress |



## Project Description

"Your Kitchen": A Kitchen application, where users can store recipes, kitchen inventory/pantry, grocery list, and order supplies all in one place. Users will see the list of recipes with items currently in their current inventory/pantry, to help decide what to cook.

## Wireframes

Home Page 
https://res.cloudinary.com/dqkahfuz5/image/upload/v1590647790/VetsInTech%20Final%20Project%20Mockups/Home_Page_zwiuo2.png 

Sign In Page 
https://res.cloudinary.com/dqkahfuz5/image/upload/v1590647803/VetsInTech%20Final%20Project%20Mockups/Sign_in_Page_xjpwlf.png


Inventory Page
https://res.cloudinary.com/dqkahfuz5/image/upload/v1590647824/VetsInTech%20Final%20Project%20Mockups/Inventory_Page_nj3s9u.png


Recipe Page
https://res.cloudinary.com/dqkahfuz5/image/upload/v1590647831/VetsInTech%20Final%20Project%20Mockups/Recipe_Page_mqnjah.png


Cook Page 
https://res.cloudinary.com/dqkahfuz5/image/upload/v1590647836/VetsInTech%20Final%20Project%20Mockups/Cook_Page_ofy98n.png



## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

Matrix - https://drive.google.com/open?id=1tGW8Yn2GTbeflBPdiqmE8oMLHAqymsWD




### MVP/PostMVP - 5min


#### MVP 

- Create static page with Inventory list 
- Create static page with Recipes
- Write algorithm for comparing inventory list with Recipe ingredients
- Output result for cooking options 

#### PostMVP 

- Create database for inventory and recipes
-  Allow users to add/delete items in the inventory
- Allow users to add/delete recipes 
- Add images to data
- Update Homepage with carousel
-Allow users to create/edit Profile Page 
- Allow users to create/edit grocery list
-Allow users to search for grocery items to shop at third-party websites eg. Amazon
-Allow users to order food for takeout/delivery from third-party vendors eg. Doordash


## Javascript Logic

Based on the initial logic defined in the previous sections try and breakdown the logic further into potential javascript logics. 


| Javascript    |           Description           |
| ------------- | :-----------------------------: |
| Update Survey | shows the results of the survey |
| Alert Score   |  alerts the user of the score   |


Time frames are also key in the development cycle.  You have limited time to code all phases.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component         | Priority | Estimated Time | Actual Time |
| ----------------- | :------: | :------------: | :---------: |
| Adding Form       |    H     |      3hrs      |    2hrs     |
| Passing Functions |    H     |      2hrs      |   1.5hrs    |
| Beautification    |    H     |      5hrs      |             |
| Total             |    H     |     10hrs      |             |

## Helper Functions
| Includes | This will check if one data set includes elements from another data set |
| for loop | Iterates through an array of elements|


## Additional Libraries

MDN : Used to learn html elements and CSS styling, javaScript syntaxes, functions, prototype and apply to the project.

Freecodecamp: Referred for CSS troubleshooting.



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
{Object.keys(props).map((key, index) => {
      			return (
       				<li key={key + index}>{key} : {props[key]}</li>
      			)
    		})}
```

## Change Log

Original Plan:
Create database to allow users to add/edit inventory items, and recipes. 

Outcome: Due to time constraints and complexity, created static inventory list and static recipes to compare and output cooking options. 


## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 
 Footer doesn't stay on the bottom of the page. 

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
