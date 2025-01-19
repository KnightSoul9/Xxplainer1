---
title: "1.9 Web Hooks"
metaTitle: ""
metaDescription: ""
lessonUnlocked : false
---


## 1. Web-hooks and girlfriend analogy

---

Have you ever dropped off your girlfriend in the cab and told her - Do call me once you reach your home? I know you must have as else your girlfriend would have abandoned you. 😛

What if you called your girlfriend every few minutes and asked - *Hey baby! Where are you?* She would definitely get pissed off with you and so you have aptly done the right thing by saying - Do call me once you reach your home!

Your girlfriend would call you when the event is complete i.e. she has reached her home. That’s what webhooks are. You don’t need to remember the definition by now but I am stating it here for further reference.


> 💡 Webhooks are events that get triggered when an event is successful i.e. your girlfriend calling you when she reaches her home is analogous to webhooks.


![Webhook Example](/images/api-for-pm/webhook_1.gif)

## 2. What are web-hooks?

---

Let's look at a scenario.

Let's say you have an e-commerce app and have integrated it with the Razorpay payment link. Every time someone makes a payment to you, you want Razorpay to notify you so that you can ship the product.

Now there are two ways you can do that - 

1. **One is you can keep checking Razorpay if a payment has been received or not.**
    
    Razorpay has APIs. You can hit that API. Get the list of responses and see if there's any new payment that's been recorded. Now, you could do that multiple times, and whenever you find a new payment in the response, you could then trigger your own database, to ship that product.
    

   But wait! You don’t want to do this! :D This isn’t the ideal way. 

- The process of keeping hitting the APIs until you get the response is a waste of your internal bandwidth.
- Plus, many API providers have limits on the number of times you can hit the API

2. **The other way is to tell Razorpay that whenever a payment has been received; let my system know. And that’s precisely what webhooks are.**
    
    So, Razorpay would notify your system (i.e. your database/server/app) that an event has occurred. 
    

> 💡 In technical terms, Razorpay would send a POST request to your server to the URL you have provided whenever an event has occurred. Hence, webhooks are also known as reverse API.




## 3. Web-hooks vs API

---

> APIs send you the data whenever you request it. For webhooks, you do not need to make a request. You receive the data when it is available.

- If you need to know whether a payment link is paid or not, using APIs, you need to keep polling every few seconds until someone pays.
- However, if you are using Webhooks, you can configure a webhook event say - **payment_link.paid** to receive notifications when a customer makes the payment using the link.

## 4. Common use case of web-hooks in payments

---

Suppose, you have a Razorpay payment gateway on your e-commerce app. A user is making the payment and in the meantime, say bank server gets down. Razorpay API would return the response as **awaiting confirmation** but the amount has been deducted from the user's bank account. 

You would want to hit Razorpay API every second to know the status of the payment but that’s not the most ideal way. We have discussed this. What if the bank server is down for say 2 minutes? Will you keep hitting the API every second? Well, no!

Webhooks come to the rescue here. Once you set up the webhooks with Razorpay for the event say - **payment_link.paid**; Razorpay would notify your system whenever it receives the response from the bank’s server.

## 5. How do web-hooks work?

---

Suppose, you want to set up a web-hook for the event **payment_link.paid** on any payment gateway (say Razorpay)

- You would first enable the web-hook on your merchant dashboard
- You would also have to enter the URL on which you would want Razorpay to notify you *(i.e. Razorpay would send you a POST request on the URL) say- **https://myecommerceapp.com/payment_status**
- You would also have to enter the secret key 🔐 (A secret key is a key like XCVCC-8YUIH-9YVB5-CXNB6 which you and Razorpay have mutually agreed upon. You can generate this from the dashboard.)

Razorpay would send the POST request (with JSON payload) - think payload as relevant data that you would need that contains the payment status in JSON alongside a signature like YUHG76BV765GFRT6832ER embedded in the header. 

```jsx
"payload": {
    "payment": {
      "entity": {
        "id": "pay_DESlfW9H8K9uqM",
        "entity": "payment",
        "amount": 100,
        "currency": "INR",
        "status": "captured",
```

## 5.1 What’s a signature? Why do we need this?

Since, your URL - **[https://myecommerceapp.com/payment_status](https://myecommerceapp.com/payment_status)** is public; how will you know the JSON payload you have received is from Razorpay and not from someone else (say ISI 😛)

So, Razorpay generates a signature. This signature is generated by hashing. (Are you confused with what hashing is?) 


> 💡 Think of hashing as a set of strings generated like YUHG76BV765GFRT6832ER when you pass some data into a black box.


One common hashing algorithm we use is SHA-256. So, the signature YUHG76BV765GFRT6832ER is generated by passing the JSON payload and secret key into the SHA-256 function.

You would receive the payload on your URL with the signature.

![Hashing function SHA - 256 (1).gif](/images/api-for-pm/hashing.gif)

You can generate the same signature using the hashing function agreed between you and Razorpay (SHA-256) in this case by passing the JSON payload and secret key into it.

If the signature that you have got matches with the signature you have received on the URL, Hurray! That’s coming from Razorpay. You can update your database. 



> 💡 Note - In hashing, we haven’t encrypted the message (payload). Razorpay has sent a signature with the payload (i.e. message) which is public. You match the signature and verify whether the message (i.e. payload) is coming from Razorpay or not.




---
