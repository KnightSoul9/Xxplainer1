



import Callout from '@/components/mdx/callout';
import StyledParagraph from '@/components/mdx/StyledParagraph';
import MotionImage from '@/components/mdx/MotionImage';
import CodeBlock from '@/components/mdx/CodeBlock';
import Section from '@/components/mdx/section';
import Heading from '@/components/mdx/Heading';

---

<Section>
  <Heading level={1}>Welcome to the API Course</Heading>
  
  <StyledParagraph>
    There is a joke that goes around in the product circle — _If a Product Manager knows APIs, then we know that they understand technology._
  </StyledParagraph>

  <StyledParagraph>
    In this course, we will cover key API topics such as:
  </StyledParagraph>

  <StyledParagraph>
    1. **Why do we need APIs?**  
    2. **What is an API?**  
    3. **The request-response cycle.**  
    4. **How to read API documentation (end-points & query parameters).**  
    5. **Error codes in API handling.**  
    6. **API security basics (OAuth).**
  </StyledParagraph>

  <StyledParagraph>
    And much more!
  </StyledParagraph>
</Section>

---

## Why do we even need APIs?

<Section>
  <StyledParagraph>
    Suppose you're building an e-commerce app like **Amazon**.
  </StyledParagraph>

  <StyledParagraph>
    When your customer selects an item to buy, they are taken to the checkout page. You now need to collect payment. Building your own payment collection system would be time-consuming and require many tech resources. Instead, you might use **Razorpay** to handle payments for you. But how do these systems communicate? How do you tell Razorpay what the payment amount should be?
  </StyledParagraph>

  <MotionImage src="/images/api-for-pm/am_rzp.png" alt="Razorpay API Example" />

  <Callout type="info" title="API Communication">
    These two systems communicate via an API. Exciting, isn't it?
  </Callout>

  <Heading level={2}>APIs Simplify Communication</Heading>

  <StyledParagraph>
    When these systems (your e-commerce app and Razorpay) communicate, they only exchange relevant information:
  </StyledParagraph>

  <StyledParagraph>
    1. Your app ➖ _"Can you collect my payment?"_  
    2. Razorpay ➖ _"Sure! What's the amount?"_  
    3. Your app ➖ _"999."_  
    4. Razorpay ➖ _"Done!"_
  </StyledParagraph>

  <StyledParagraph>
    At no point did either system expose its entire architecture to the other. They only shared the necessary data to complete the task. This is the beauty of APIs — **secure and relevant communication.**
  </StyledParagraph>
</Section>

---

## What is an API?

<Section>
  <Heading level={2}>Application Programming Interface (API)</Heading>

  <StyledParagraph>
    An **API** is a piece of code that allows two systems to communicate. Think of it as a waiter at a restaurant:
  </StyledParagraph>

  <StyledParagraph>
    - **Kitchen**: The database/server that holds the information or food.  
    - **Waiter**: The API — the middleman delivering the information.  
    - **Customer (You)**: The external system requesting information.
  </StyledParagraph>

  <Callout type="info" title="API Analogy">
    **Think waiter. Think API. Both are analogous.**
  </Callout>
</Section>

---

## Request + Response Cycle

<Section>
  <Heading level={2}>Request and Response in Action</Heading>

  <StyledParagraph>
    When your web browser (the **client**) sends a request to the server, the server processes it and sends back the required data in the form of a **response**.
  </StyledParagraph>

  <StyledParagraph>
    - **Request**: The data you send to the server (e.g., search term, user info).  
    - **Response**: The data the server returns (e.g., search results, user data).
  </StyledParagraph>

  <MotionImage src="/images/api-for-pm/1.png" alt="Request-Response Cycle" />
</Section>

---

## Types of Requests

<Section>
  <Heading level={2}>Types of Requests</Heading>

  <StyledParagraph>
    There are four primary types of HTTP requests:
  </StyledParagraph>

  <StyledParagraph>
    - **GET**: Retrieve data from the server.  
    - **POST**: Add new data to the server.  
    - **PUT**: Update existing data on the server.  
    - **DELETE**: Remove data from the server.
  </StyledParagraph>
</Section>

---

## LinkedIn Example

<Section>
  <StyledParagraph>
    Want to search for someone's profile on LinkedIn? You're making a **GET** request to the LinkedIn server. Want to post a new article? That's a **POST** request.
  </StyledParagraph>

  <Callout type="info" title="Trivia Time 💡">
    What happens if you send a `PUT` request to add new data instead of `POST`? Will the data be added or will it throw an error?
  </Callout>
</Section>

---

## What is JSON?

<Section>
  <Heading level={2}>JSON (JavaScript Object Notation)</Heading>

  <StyledParagraph>
    **JSON** is a lightweight data format used for APIs. It is easy for both humans and machines to read and write.
  </StyledParagraph>

  <StyledParagraph>
    Here’s an example of how JSON looks:
  </StyledParagraph>

  <CodeBlock>
{`{
  "name": "MS Dhoni", 
  "age": 41, 
  "city": "Ranchi"
}`}
  </CodeBlock>

  <StyledParagraph>
    JSON describes the data in key-value pairs. For example:
  </StyledParagraph>

  <CodeBlock>
{`{
  "name": "MS Dhoni",
  "age": 41,
  "city": "Ranchi",
  "formats": [
    "Test",
    "ODI",
    "T-20"
  ],
  "isRetired": "false",
  "records": {
    "T20": {
      "totalRun": 24456,
      "wickets": 5,
      "century": 0
    },
    "Test": {
      "totalRun": 10212,
      "wickets": 2,
      "century": 4
    },
    "ODI": {
      "totalRun": 14000,
      "wickets": 1,
      "century": 14
    }
  }
}`}
  </CodeBlock>

  <StyledParagraph>
    - JSON describes the data in key-value pairs. For example: name is key & "MS Dhoni" is the value.  
    - Keys & values are separated by a colon ( : ).  
    - If the value is a string, it is mentioned in double-quotes.  
    - A JSON value can be an object, array, number, string, true, false, or null, and JSON structure can be nested up to any level.
  </StyledParagraph>
</Section>
