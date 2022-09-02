export function generateAgencyCode(facultyID) {
    return facultyID.toUpperCase().substring(0, 2) + String(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}

