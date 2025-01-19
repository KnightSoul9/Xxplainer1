---
title: "1.5 Postman guide"
metaTitle: "Postman guide"
metaDescription: ""
lessonUnlocked : false
---



## 1. What is Postman ?
---

Postman is the world's most famous tool used for building and testing APIs. You can use this tool to create, share, test and document APIs. 

## 1.1 Installation

Before we move further, (we will be making our first API request with Postman), I would suggest you to download the Postman app or you can even download the [Postman chrome extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en). 

Download Link - [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

![Screenshot 2021-09-05 at 12.55.09 AM.png](/images/api-for-pm/Screenshot_2021-09-05_at_12.55.09_AM.png)

## 1.2 Useful terminologies

### What is Postman Collection?

Postman Collection is a group of API requests.  It is like arranging different API request related to a app in a folder. You can create as many collection as you want in your Postman application. Collection is basically used for documentation of APIs. 

### What is Request?

Request is a call that is made to the web server to recieve or send data from a data source. APIs run on web servers, and expose endpoints to support the operations client applications use to provide their functionality.

### How to import postman collection?

When you are working in a team, you will often need to collaborate on a project. When you want to use or test others Postman collection, you can simply import their collection into your app. 

**Steps to import Collection**

- Click on the "Import" button
- Choose the source from where you want to import.

**How to share Collections?**

Similar to import collection, you can share you Postman collection to your team members. Right click on the collection folder and then click on "Export".

![Screenshot 2021-09-05 at 10.43.37 PM.png](/images/api-for-pm/Screenshot_2021-09-05_at_10.43.37_PM.png)

## 2. Sending your first API request with Postman

---

There are multiple ways to make an API request, but here we'll using Postman because of its simple and easy to understand GUI. 

In the last modules, we learnt what is HTTP request and request method. So, now let's see it in action. 

- `GET` methods retrieve data from an API.
- `POST` sends new data to an API.
- `PATCH` and `PUT` methods update existing data.
- `DELETE` removes existing data.

## 2.1 Making your first API Request

- Enter the URL ( [https://random.dog/woof.json](https://random.dog/woof.json)). This is a random web API which returns a random dog image.
- This API accepts `GET` method. So, make sure you select `GET` as request method.
- Hit **Send** and see the magic. Did you get a dog image in response?

![Screenshot 2021-09-06 at 1.12.54 AM.png](/images/api-for-pm/Screenshot_2021-09-06_at_1.12.54_AM.png)

Did you see the response headers in above example?

## 2.2 Making POST Request in Postman

`Post` HTTP request is made when you want to add or update some data on the server. Here is step to make a POST request from postman client. 

- Enter the request URL and select POST method from the dropdown.
- Switch to `Body` tab and select `raw`
- Select JSON from dropdown, because the content type of the body data is JSON.

![Screenshot 2021-09-10 at 7.09.10 PM.png](/images/api-for-pm/Screenshot_2021-09-10_at_7.09.10_PM.png)

![Screenshot 2021-09-10 at 7.19.03 PM.png](/images/api-for-pm/Screenshot_2021-09-10_at_7.19.03_PM.png)

**Curl request** 

```jsx
curl --location --request POST 'https://reqres.in/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "deepak12",
    "job": "Engineer"
}'
```

## 3. Making GET Request with Params and Headers

---

Query parameter are used when you want to filter response based on section or field. Here, we will see an example of Github Search API to demonstrate how to use query parameter in a API request. 

Use `GET` method and send a request on this URL. What response did you get?

```jsx
https://api.github.com/search/users
```

#### Huhh, Looks like an error with Status Code 422(Unprocessable Entity)!

It return an error response as we haven't passed a query parameter. Now, send a query parameter `q` with GitHub username as value (as shown below)

![Screenshot 2021-09-11 at 1.22.16 AM.png](/images/api-for-pm/Screenshot_2021-09-11_at_1.22.16_AM.png)

Also, don't forget to check the HTTP response header. The response header starting with `X-` are custom headers. 


<h4> Trivia time 💡</h4>
<p>  Can you find out what does `Rate-Limit` and `Rate-Limit-Remaining` header does? </p>



![Screenshot 2021-09-11 at 1.30.10 AM.png](/images/api-for-pm/Screenshot_2021-09-11_at_1.30.10_AM.png)

**Want to do more API requests? You can use this [fake API](https://reqres.in/) to play around HTTP request methods, endpoints, query parameter and body.**


