# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Inomplete
|Day 5| Final Touches | Inomplete
|Day 6| Present | Incomplete;


## Project Description
This fitness app will be able to keep the user organize their routines of excercise
on a daily basis, each exercise will have a description of how to implent them
and the user will be able to punch in how many reps and weight was performed.

## Google Sheet

(https://docs.google.com/spreadsheets/d/1X750WkotcCyRoGFR8YHJo0HzSQT3mrpmAqg7guEqEdQ/edit#gid=138749698) 


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://www.figma.com/file/KG5YfEliaGoSkc3Asa02Gr/Untitled?node-id=5%3A233)
- [Tablet](https://www.figma.com/file/rvJLtdYW15TBgpNYAf9Pi9/Untitled?node-id=2%3A81)
- [Desktop](https://www.figma.com/file/Db2tc1TpZj3tSlQN7CTw5R/Untitled?node-id=0%3A3&frame-preset-name=Desktop)


## Vue Architecture

- [Architecture](https://www.figma.com/file/mChfbbq7KUyGzJ5wCfgEGA/Vue-Architecture?node-id=0%3A1)

## Wireframing Resources:

- [Figma](https://www.figma.com/)
- [Color Scheme Inspiration](https://www.behance.net/gallery/110102927/Fitness-App-UI-Design?tracking_source=search_projects_recommended%7Cfitness%20app)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- User can sign up with a username/password.
- User can create workout routines. 
- User can interact with responsive design. 
- User can write down their reps and weights used.

#### PostMVP 

- The app can keep track of your calories.
- There will be further interaction and functionality with the calander.
- There will be authenication making the users login unique to the app.
- User will be able to delete their account if it doesn't seem fit for them.

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Ruby/Rails Models | H | 5hr | hr |
| Username/Password | H | 6hr | hr |
| Hello/Start Routines | H | 8hr | hr |  
| Routine Create | L | 8hr|  hr | 
| Workouts/exercises| M | 8hr | hr|
| Responsive Nav | H | 10hrs| hr | 
| Calander | H | 5hr | hr | hr |
| Total | H | 50hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Interaction with Calander | H | 4hr | hr | hr |
| Nutrition | M | 7hr | hr |
| BMI | M | 7hr | hr |
| Authenication | H | 5hr | hr | hr |
| Remove account info | H | 5hr | hr |
| Total | H | 28hrs| hrs |

## Additional Libraries
 Axios - this will provide assistance on retrieving data from API.
 Router - this will provide help with switching to different pages/components on the app.
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object