import toast from "react-hot-toast";

// Lead Modal Api
export const callLeadAPI = async (payload) => {
  const URL = "https://xplainerr-api-2be9e1965d8f.herokuapp.com/api/v1/leads";

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header
      },
      body: JSON.stringify(payload),
    });


    console.log(response);
  } catch (err) {
    throw err;
  }
};

// TODO - temp code to remove
export const callGoogleSheetApi = async (payload) => {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzTa8zezdYwa-dDRjnNTckmwVqblyQa6HlySXCxlv2jzYfCr9OZRJEiDEBxB4vN8xC0jQ/exec";

  const scriptURL = SCRIPT_URL;

  let formData = new FormData();
  formData.append("email", payload.email);
  formData.append("course", payload?.course);
  formData.append("url", payload?.url);
  formData.append("source", payload?.source);
  formData.append("device", 'GSHEET');

  await fetch(scriptURL, { method: "POST", body: formData });
};

// Cohort Lead Api
export const submitFormData = async (payload) => {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby2ndvOKG_6ehqnbJoZooO-Qt2E3oRQ4KE-RL6HnyRjwEpnV_V6lQyCAEdvBGb_9ANsVw/exec";

  const scriptURL = SCRIPT_URL;

  let formData = new FormData();

  // Append form fields to FormData
  // Object.entries(payload).forEach(([key, value]) => {
  //   formData.append(key, value);
  // });
  formData.append("name", payload.name);
  formData.append("email", payload?.email);
  formData.append("whatsappNo", payload?.whatsapp);
  formData.append("linkedin", payload?.linkedInProfile);
  formData.append("yoe", payload?.yearsOfExperience);
  formData.append("learningObjective", payload?.learningObjectives);
  formData.append("url", payload?.url);
  formData.append("source", payload?.source);
  formData.append("device", payload?.device);

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Form submitted successfully");

      // if want to display toast (not take payment ) [then uncomment this]
      // toast.success(
      //   "Thank you for applying to Tech for PM cohort. Once your application is shortlisted, our team will reach out to you.",
      //   {
      //     position: "top-center",
      //     reverseOrder: false,
      //     gutter: 8,
      //     containerClassName: "",
      //     duration: 5000,
      //     style: {
      //       background: "#363636",
      //       color: "#fff",
      //     },
      //     success: {
      //       theme: {
      //         primary: "green",
      //         secondary: "black",
      //       },
      //     },
      //   }
      // );
      // window.location.reload();
      // setTimeout(() => {
      //   window.location.reload();
      // }, 5000);
    } else {
      console.error("Error submitting form");
      toast.error("Error submitting form", {
        duration: 5000,
        position: "top-center",
      });
    }

    return response;
  } catch (error) {
    console.error("Error submitting form", error);
    toast.error("Error submitting form", {
      position: "top-center",
      reverseOrder: false,
      gutter: 8,
      containerClassName: "",
      duration: 5000,
      style: {
        background: "#363636",
        color: "#fff",
      },
      success: {
        theme: {
          primary: "green",
          secondary: "black",
        },
      },
    });
    throw error;
  }
};
