"use strict";
// Task List
let tasks = [];
// Get Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
// Add Task
const addTask = () => {
    if (!taskInput.value.trim())
        return;
    const newTask = { id: Date.now(), title: taskInput.value, completed: false };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
};
// Delete Task
const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
};
// Toggle Task Completion
const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task)
        task.completed = !task.completed;
    renderTasks();
};
const renderTasks = () => {
    taskList.innerHTML = ""; // Clear previous list
    tasks.forEach(task => {
        const li = document.createElement("li");
        // Task Text
        const taskText = document.createElement("span");
        taskText.textContent = task.title;
        taskText.style.textDecoration = task.completed ? "line-through" : "none";
        // Complete Button
        const completeButton = document.createElement("button");
        completeButton.textContent = "✔";
        completeButton.addEventListener("click", () => {
            toggleTask(task.id);
            renderTasks(); // Refresh UI
        });
        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
            renderTasks(); // Refresh UI
        });
        // Append elements
        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
};
// Event Listeners
addTaskButton.addEventListener("click", addTask);
