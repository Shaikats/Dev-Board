//-----------------------------//
// Main Board
//-----------------------------//
let totalCompletedTaskCount = parseInt(document.getElementById('total-completed-task-count').innerText);
let assignedTaskCount = parseInt(document.getElementById('assigned-task-count').innerText);

completeTask('c1', 'item-1');
completeTask('c2', 'item-2');
completeTask('c3', 'item-3');
completeTask('c4', 'item-4');
completeTask('c5', 'item-5');
completeTask('c6', 'item-6');

function completeTask(id, itemID) {
    document.getElementById(id).addEventListener('click', function (event) {
        event.preventDefault();
        alert('Board updated Successfully');

        // Update task counts
        assignedTaskCount--;
        totalCompletedTaskCount++;
        document.getElementById('assigned-task-count').innerText = assignedTaskCount;
        document.getElementById('total-completed-task-count').innerText = totalCompletedTaskCount;

        // Get current time
        const curTime = getCurrentTime();

        // Get task details
        const targetLayout = document.getElementById(itemID).childNodes;
        const taskTitle = targetLayout[5].innerText;

        // Add task completion log
        const parent = document.getElementById('activity-container');
        const child = document.createElement('div');
        child.innerHTML = `
            <p class="bg-base-color p-3 my-3 rounded-md text-sm">
                You have Completed The Task ${taskTitle} at ${curTime}
            </p>
        `;
        parent.appendChild(child);
        this.disabled = true;

        if (assignedTaskCount == 0) {
            alert('Congrats!! You have completed all the current tasks');
        }
    });
}

const paraList = document.getElementsByClassName('task-details');
for (let i = 0; i < paraList.length; i++) {
    paraList[i].innerText = truncateText(paraList[i].innerText);
}

function truncateText(text, maxLength = 60) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

document.getElementById('discover').style.cursor = 'pointer';

document.getElementById('discover').addEventListener('click', function () {
    window.location.href = './blogs.html';
});


//-----------------------------//
// Dynamic Background
//-----------------------------//
document.getElementById('dyn-bg').style.cursor = 'pointer';

document.getElementById('dyn-bg').addEventListener('click', function () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
    document.body.style.backgroundColor = randomColor;
});



//-----------------------------//
// Current Date Time File
//-----------------------------//
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date().getDay();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

document.getElementById('heading-day').innerText = days[today];
document.getElementById('heading-date').innerText = `${day} ${months[month - 1]} ${year}`;

function getCurrentTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am_pm = hours >= 12 ? "PM" : "AM";

    h = h % 12 || 12;
    let minutesFormatted = m.toString().padStart(2, "0");
    let secondsFormatted = s.toString().padStart(2, "0");

    return `${h}:${minutesFormatted}:${secondsFormatted} ${am_pm}`;
}


//-----------------------------//
// Activity Log File
//-----------------------------//
document.getElementById('clear-history').addEventListener('click', function () {
    document.getElementById('activity-container').innerHTML = ``;
});
