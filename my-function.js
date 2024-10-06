// Lambda function to respond with a message based on the provided keyword
export const handler = async (event) => {
    const name = "Arpita Madhukar Kalburgi"; 
    const keyword = event.queryStringParameters?.keyword; // Extract keyword safely using optional chaining

    // Check if the keyword is provided
    if (!keyword) {
        return createResponse(400, 'Keyword parameter is required.');
    }

    // Construct the response message
    const responseMessage = `${name} says ${keyword}`;
    return createResponse(200, responseMessage);
};

// Helper function to create a standard response
const createResponse = (statusCode, message) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(message),
    };
};
