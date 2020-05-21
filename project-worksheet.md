# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day        | Deliverable                                          | Status      |
| ---------- | ---------------------------------------------------- | ----------- |
| May 25 | Develop                                                  | In Progress |
| May 26 | Develop                                                  | In Progress |
| May 27 | Deploy                                                   | In Progress |
| May 28 | Present                                                  | In Progress |




## Project Description

This application/website will allow users to input a barcode and display all available information. Images will be displayed if available. Vision for this to eventually allow users to compare prices online. Store owners can also enter in an item to search for barcodes for uniformity and compliance.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.


Initialization - https://drive.google.com/open?id=1o7zai60ewWNZwamnBFR3Nk8d4foCnu_G
First Interaction - https://drive.google.com/open?id=1FD3gcGa8lwSQnL78Y13BRN5gtOmix4kN
Second Interaction - https://drive.google.com/open?id=1-xj1lIJRKlfmnHiRJY67XOStwtQObn6f

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

Matrix - https://drive.google.com/open?id=1tGW8Yn2GTbeflBPdiqmE8oMLHAqymsWD

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- User input barcode
- Take search query by user input and use external api 
- Render data on page in a list
- Create item search information

#### PostMVP 

- Add images to data
- Incorporate a barcode scanner

#### [SAMPLE FROM A MAP BASED PROJECT](https://res.cloudinary.com/dvjtpejbw/image/upload/v1540221204/20181022_111216.jpg)

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
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function   |                        Description                        |
| ---------- | :-------------------------------------------------------: |
| Capitalize | This will capitalize the first letter in a string of text |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library   |           What it Does            |
| --------- | :-------------------------------: |
| Bootstrap | Used to help style my application |
| Giphy API |      Used to get gifs to use      |


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
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan           |                                           Outcome                                            |
| ----------------------- | :------------------------------------------------------------------------------------------: |
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated |

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
