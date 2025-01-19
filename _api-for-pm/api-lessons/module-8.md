---
title: "1.8 API security"
metaTitle: ""
metaDescription: ""
lessonUnlocked : false
---

## API Security

---

We learnt that API are the ways through which two applications can talk to each other. But, what if I tell you a third application can also read and access your data. That doesn't seems right?

There are many security best practices applied to web APIs which can help in preventing unauthorised and unknown requests. Some of them are - 

1. oAuth
2. Rate Limiting of API 
3. API Key 
4. Basic authentication

## 1. OAuth

---

## 1.1 Why do we need OAuth at the first place?

Let's go the 2000's of Internet. What if you want to login into Facebook? They would ask you to enter your Gmail user_name & password! Bizaareee! 

*And you would be more than happy to give your Gmail user_name & password.* 

<img src="/images/api-for-pm/fb1.png" alt="drawing" width="60%"/>


Why? As you would want Facebook to have an access of your Google contacts (and Facebook can recommend you more friends, tell you about you friends birthday) and so on.

But in the quest; you are giving Facebook not only access to your Google contacts but your Gmail too (Facebook can read or emails & what not)

<img src="/images/api-for-pm/fb2.png" alt="drawing" width="60%"/>

Then what do you wish for? You wish to give your only Google contacts access to Facebook without telling your Google account user_name & password. *Something like this!*

<img src="/images/api-for-pm/fb3.png" alt="drawing" width="60%"/>

oAuth was created for this particular purpose.

**It allows you to give an access to any application *(say FB)* to access data *(some & not entire data)* without giving your password!**

As you can see that (in 2000s) a lot of developers were facing this problem; when working with APIs. So, developers came together can came up with an open standard for authorisation known as oAuth

## 1.2 oAuth as hotel key card analogy

When you go to a hotel check-in; you are given a card at the reception to open your door.

The card is the authorization for you to open the door and use the room.

<img src="/images/api-for-pm/hotel1.png" alt="drawing"/>

- Receptionist ➖ Authorization Server
- Card ➖ Access Token
- Door lock ➖ API (also called as resource server)

> Note ➖ The door doesn't care about the card (i.e. who owns the card)! Anyone who has the card can open the door. Similarly, oAuth only cares about authorization & not authentication. Anyone who has the access token can access the server.*

It's for the receptionist to decide is the card given to the right person?

Cut short, Oauth is only one authorization but not authentication. 

## 1.3 How does Oauth works?

![/images/api-for-pm/works.png](/images/api-for-pm/works.png)

<YoutubeView id="PfvSD6MmEmQ" />


## 2. Rate Limiting of API

---

Rate limiting of API means you are simply putting a restriction that API can only be used n number of times in a stipulated time duration. More calls on an API may indicate that it is being abused. It could also be a programming mistake such as calling the API in an endless loop.

A best example of it can be a service, which  offers a free tier and a premium tier, with different limits for each tier. For example - [Maps Javascript API](https://developers.google.com/maps/documentation/javascript/usage-and-billing) has pay as you go model and different plans have different limits for API call. 

That's why is always recommended to make rules for throttling to protect your APIs from spikes and DDOS attacks. 

## 3. API Key

---

API keys are used to identify an application or project that's calling an API. 

**When to use API keys**

- You want to block anonymous traffic. API keys identify an application's traffic for the API producer, in case the application developer needs to work with the API producer to debug an issue or show their application's usage.
- You want to filter logs by API key.
- You want to control the number of calls made to your API.
- You want to identify usage patterns in your API's traffic.

For example, here is a Youtube search API endpoint. If you try to fetch data from this URL without a valid API key, it will send an error response. 

```jsx
https://www.googleapis.com/youtube/v3/search?q=howtolearn&key={API_KEY}&type=video
```

```jsx
https://api.github.com/notifications
```

## 4. Basic authentication

---

Authentication is another method used to protect our applications and websites from unauthorised access. It also restricts the users from accessing the information from tools like Postman.

To access the web API method, we have to pass the user credentials in the request header. If we do not pass the user credentials in the request header, then the server returns 401 status code (Unauthorised access)

#### Want to have fun with APIs? Just visit any company site and add subdomain api. 

For example - [api.github.com](https://api.github.com), [api.razorpay.com](https://api.razorpay.com)


