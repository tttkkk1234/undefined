function showtime() {
    const date = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    document.getElementById('showtime').innerHTML = formattedDate;
    setTimeout(showtime, 1000);
}
    