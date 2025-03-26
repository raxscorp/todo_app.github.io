# TypeScript Task Manager Documentation

## Overview
This is a simple task management application written in TypeScript. It allows users to add, delete, and mark tasks as completed. The tasks are displayed dynamically in an HTML list.

## Features
- Add new tasks
- Delete tasks
- Mark tasks as completed
- UI updates dynamically

## Technologies Used
- TypeScript
- HTML & DOM Manipulation

## How It Works
### 1. Task Structure
Each task is represented as an object with:
- `id`: A unique identifier (timestamp-based)
- `title`: Task description
- `completed`: A boolean flag indicating completion

### 2. Adding a Task
- The user inputs a task in the text field.
- Clicking the "Add Task" button stores the task and updates the UI.

### 3. Deleting a Task
- Clicking the ❌ button removes the task from the list.

### 4. Marking a Task as Completed
- Clicking the ✔ button toggles the task's completion status.
- Completed tasks are visually represented with a strikethrough.

## File Structure
```
/task-manager/
│── index.html  # Main HTML file
│── app.ts      # TypeScript logic
│── styles.css  # (Optional) Stylesheet for UI
```

## How to Run the Project
1. Ensure you have TypeScript installed:
   ```sh
   npm install -g typescript
   ```
2. Compile the TypeScript file:
   ```sh
   tsc app.ts
   ```
3. Open `index.html` in a browser.

## Future Improvements
- Store tasks in local storage
- Add task categories and filtering
- Improve UI with CSS styles or frameworks like Bootstrap

