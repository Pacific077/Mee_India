const ExtractDate = (timestampString)=>{

const dateObject = new Date(timestampString);

// Extract date components
const year = dateObject.getFullYear();
const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month because it is 0-indexed
const day = dateObject.getDate().toString().padStart(2, "0");

// Format date
const formattedDate = `${year}-${month}-${day}`;

return formattedDate // Output: "2024-03-02"

}

export default ExtractDate