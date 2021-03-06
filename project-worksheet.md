# Project Overview

## Project Schedule

| Day        | Deliverable                                          | Status      |
| ---------- | ---------------------------------------------------- | ----------- |
| May 26 | Wireframes                                                | Complete |
| May 27 | Feature List                                               | Complete |
| May 28 | Priority Matrix                                            | Complete |
| May 28 | Project Worksheet                                           | Complete|
| May 28 | Deploy                                                       | Complete |
| May 28 | Present                                                      | Complete |
| May 28 | Project Submission                                   | Complete |



## Project Description

"Your Kitchen": A Kitchen application, where users can store recipes, kitchen inventory/pantry, grocery list, and order supplies all in one place. Users will see the list of recipes with items currently in their current inventory/pantry, to help decide what to cook.

## Wireframes

Flow-chart
https://res.cloudinary.com/dqkahfuz5/image/upload/v1590690827/VetsInTech%20Final%20Project%20Mockups/Flow%20Chart.png

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

Priority Matrix - 
https://res.cloudinary.com/dqkahfuz5/image/upload/v1590677722/VetsinTech%20Priority%20Matrix/Priority_Matrix_hn86ak.png

Prioritized Features - 
https://res.cloudinary.com/dqkahfuz5/image/upload/v1590677730/VetsinTech%20Priority%20Matrix/Prioritized_Tasks_oypm9m.png




### MVP/PostMVP - 5min


#### MVP 

- Create Mock ups for home page, Inventory Page, Recipe page and Cook Page 
- Create static list of inventory
- Create static list of recipes
- Write HTML and CSS for index header, nav bar and footer
- Display available items in the inventory
- Display all saved recipes
- Develop an algorithm to find recipe options for the user


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
| Display cooking options | Develop an algorithm to find recipe options for the user - compared an array of inventory with an array of recipe ingredients, if inventory includes recipe ingredients, output that recipe on the page.
| Display available items in the inventory  |  display recipes on-click   |
| Display all saved recipes |  display recipes on-click   |


Time frames:

| Component                                  | Priority (1-5) | Estimated Time | Actual Time |
| -------------------------------------- | :-------------: | :------------: | :---------: |
| Create Mock ups for home page,
Inventory Page, Recipe page, and 
Cook Page                                      |   1 H     |      2hrs      |    3hrs     |
| Create static list of inventory        |    2 H     |      1hrs      |   0.5hrs    |
| Create static list of recipes           |    2 H     |      1hrs      |   0.5hrs     |
| Write HTML and CSS for index
header, nav bar and footer             |    3 H     |      4hrs      |    5hrs         |
| Display available items 
in the inventory                              |    4 H     |      3hrs      |     4hrs        |
| Display all saved recipes              |   4  H     |     3hrs      |     4hrs        |
| Develop an algorithm to find
recipe options for the user             |   5  H     |      5hrs      |     6hrs        |
| Total                                              |    21 H     |    19hrs      |     23 hrs        |



## Helper Functions
| Includes | This will check if one data set includes elements from another data set |
| for loop | Iterates through an array of elements|
|console.log | outputs content on a console of the page.


## Additional Libraries

MDN : Used to learn html elements and CSS styling, javaScript syntaxes, functions, prototype and apply to the project.

Freecodecamp: Referred for CSS troubleshooting, fixed footer issue.

https://confluence.atlassian.com: Referred for git commands.



## Code Snippet

The following function compares inventoryList with recipe and outputs if it matches. It narrows down recipe options for users based on their inventory.

function canCook(inventoryList, recipeSushi){
    for(let i = 0; i < recipeSushi.length; i++){
        const current = recipeSushi[i];
        if(!inventoryList.includes(current)){
            return false;
        }
    }
    return true;
}

## Change Log

Original Plan:
Create database to allow users to add/edit inventory items, and recipes. 

Outcome: Due to time constraints and complexity, created static inventory list and static recipes to compare and output cooking options. 


## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 
 Issues: nav bar doesn'r display horizontally.
 Resolution: increased specifity for CSS style
 
 Issues:  Numbering in ordered list shows for nav bar and footer
 Resolution: used style none in CSS with high specifity
 
 Issues: Footer doesn't stay on the bottom of the page. 
 Resolution: used position absolute and wrapped everything inside a page-container. 


