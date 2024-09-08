export function getTimeWithAmPm(isoString) {
    if(!isoString) return '-'
    const date = new Date(isoString);
    let hours = date.getUTCHours(); // Use getUTCHours for ISO strings
    const minutes = date.getUTCMinutes(); // Use getUTCMinutes for ISO strings
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours || 12; // The hour '0' should be '12'

    // Format minutes to always be two digits
    const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutesFormatted} ${ampm}`;
}


export const getDate = (isoString) => {
    if (!isoString) return '-';

    const date = new Date(isoString);

    // Extract the date components (you can customize the format as needed)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    // Return the formatted date string
    return `${day}-${month}-${year}`;
};

