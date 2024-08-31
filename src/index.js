import { controllers } from 'chart.js'
import './style.css'


const currDate = new Date()
currDate.setDate(currDate.getDate() + 1)
console.log(currDate)



/*

Follow SOLID principles

-- Try to implement classes
-- Build from the inside-out
-- Avoid using switch statements, instead use classes to generate instances of something
-- Separate functions that handle DOM and JS logic
-- Ensure that each class/function/module only has one responsibility
-- Open-closed principle, classes/function are not modified but instead extended upon
-- Utilize javascript modules, separate js files for different functions, then import when needed
-- Utilize components in react way

*/


/*

Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, 
description, dueDate and priority. You might also want to include notes or even a checklist.
Your todo list should have projects or separate lists of todos. When a user first opens the app, 
there should be some sort of ‘default’ project to which all of their todos are put. Users should be able 
to create new projects and choose which project their todos go into.


ADDING NEW TASK
1. User clicks on input box, inputs details about a task
2. An instance of task is created, has a unique ID, and stores it into local session storage
3. Create a handler that whenever a task is clicked or interacted upon, it calls that session storage and updates whatever the user inputted.

*/










