function generateRandomDate() {
    const year = 2024;
    const months = [8, 9]; // February and March (0-based index, so 1 for February and 2 for March)
    const month = months[Math.floor(Math.random() * months.length)];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const day = Math.floor(Math.random() * daysInMonth) + 1;
    return new Date(year, month, day);
}

function generateRandomTime() {
    const hours = Math.floor(Math.random() * (15 - 9 + 1)) + 9;
    const minutes = Math.floor(Math.random() * 60);
    return { hours, minutes };
}

function formatDateTime(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleDateString('en-US', options);
}

function generateRandomPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 10; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function generateDateTime() {
    const date = generateRandomDate();
    const time = generateRandomTime();
    date.setHours(time.hours);
    date.setMinutes(time.minutes);
    document.getElementById('datetime').innerText = formatDateTime(date);
    document.getElementById('submitted').innerText = '';
    document.getElementById('password').innerText = '';
}

function submitDateTime() {
    const datetime = document.getElementById('datetime').innerText;
    document.getElementById('submitted').innerText = `Submitted Date & Time: ${datetime}`;
    const password = generateRandomPassword();
    document.getElementById('password').innerText = `Generated Password: ${password}`;
}

// Initial generation of date and time
generateDateTime();
