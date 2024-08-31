
export default class Task {

    // handles user's new tasks via input box & modal
    // create instance of this class for every new task

    constructor(taskName, description, dueDate, priority) {
        this.taskName = taskName
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    checkDue() {
        // returns a boolean on whether a task is due or not
        // utilizes compareDates function that also returns a bool
        const currDate = new Date()
    }

    returnObject() {
        // returns object for storing in local/session storage
        return {
            taskName: taskName,
            description: description,
            dueDate: dueDate,
            priority: priority
        }
    }


    updateTask(taskName,) {

    }
}



const compareDates = (currentDate, dueDate) => {

    /*
    TO DO:
    1. Compare two dates (check their formats)
    2. Return a boolean (True if due!)
    */

}

class EditTask extends Task {
    // inherits Task, used to edit a specific task

    constructor() {

    }

    editTaskName(newTaskName) {
        super.taskName = newTaskName
    }


    editDescription(newDescription) {
        super.description = newDescription

    }

    editDueDate(newDueDate) {
        super.dueDate = newDueDate
    }

    editPriority(newPriority) {
        super.priority = newPriority
    }


}





