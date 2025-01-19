---
title: "1.4 Working with APIs"
metaTitle: "Working with APIs"
metaDescription: ""
lessonUnlocked : false
---



## 1. How to work with an API?

---

So far we have learnt what requests and responses are. We also learnt about endpoints, query parameters and body data. 

To get started with any API, you need to do the following ➖

- Read the API documentation carefully.
- Find which endpoints which matches your business need.
- Check whether there is any authentication/authorisation required to access the API.
- Test the API through Postman or by curl request.
- Implement via code

## 2. Exploring an API documentation

---

Let's say you want to integrate Google signup API on your website (i.e. you want that your users can signup using their Google account)

What would be the first step? The first step would be to read the APIs documentation. 

> API documentation always the starting point when it comes to working with APIs.

> Remember! A good API should have detailed documentation explaining how to work with it. 

- It should describe the basics - **what the API does**, **what type of data you can get from it**?
- It should explain the requirements for using the API. Is it free or paid? Does it require you to register and obtain a key?
- It should also provide examples of how to make requests and the responses returned.
- And most importantly, for actually working with the API, it should provide you with endpoints and parameters.

> Note - API Documentation is also called API contract.

> Checkout sample API documentation - https://drive.google.com/file/d/1F3IKpbYee2MClDhZ1-BdUGXnE_9UmgCz/view?usp=sharing

![lets-get-going-598f87.jpeg](/images/api-for-pm/lets-get-going-598f87.jpeg)

## 3. Working with the Github API 
  
---

**Problem Statement:** Show the profile information of a user based on the GitHub username. 

It is highly recommended to do it yourself first (on your own) 

Let's get started according to our checklist.

1. Find the official API documentation
2. Find the API endpoint which matches your problem statement.
3. Test the API request using curl or postman.

**Solution** 

1. API Link - [https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api)

2. Make a curl request

```jsx
curl -i https://api.github.com/users/dipakkr
```

## 4. Sample API documentation

---
Here are a few examples of the best API documentation you can read and play around with. 

1. Stripe - [https://stripe.com/docs/api](https://stripe.com/docs/api)
2. Notion - [https://developers.notion.com/](https://developers.notion.com/)
3. SendGrid - [https://sendgrid.com/solutions/email-api/](https://sendgrid.com/solutions/email-api/)
4. Github - [https://docs.github.com/en/rest](https://docs.github.com/en/rest)


