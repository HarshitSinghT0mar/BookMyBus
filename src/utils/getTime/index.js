export function getTimeWithAmPm(isoString) {
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
