import { BACKEND_API } from "../config/backend";

export const callAPI = async ({endpoint, method = 'GET', queryParams, bodyData}) => {

    const apiURL = BACKEND_API + endpoint;
    const finalAPIURL = queryParams ? `${apiURL}?${new URLSearchParams(queryParams)}` : apiURL;

    try {
        const response = await fetch(finalAPIURL, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
        });
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Error fetching data" };
    }
}







