---
title: "1.3 HTTP Request and Response"
metaTitle: "Request, Response, Endpoint, Query Parameters"
metaDescription: ""
lessonUnlocked : false
---



## 1. HTTP Request

---

> HTTP (Hypertext Transfer Protocol) is set of rules for transferring files such as text, sound, images, video, etc. over the web. 
> While HTTP Request is the call that is made to the server to get a piece of data.  

As discussed in the first module, there are multiple types of HTTP Request method through which you can transfer data to/from the server. 

HTTP request is in form of a request message which includes 3 main components. 

- Request line
- Request headers
- Message body (Optional)

## 1.1 Request line 

Request line contains request method, request URL and protocol version. And, it looks something like this.

```jsx
GET /api/users/dipakkr HTTP/1.1
```

> GET is the request method.
> /api/users/dipakkr is the request URL.
> HTTP/1.1 is the protocol version. 

## 1.2 Request header 

A request header is an HTTP header that can be used in an HTTP request to provide information about the request context. You can send information like client device information from where the request is being made, type of response you can accept etc. 

You can also include authorization or authentication token required by the server in request headers. 

```jsx
GET /users HTTP/1.1
User-Agent: Chrome/4.0 
Host: api.github.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
Content-type : application/json
```

## 2. HTTP Response

---

Every time you send a request to the server, it returns a piece of data (aka response).

Every response has a head section, called as **Response Header (similar to the request header) and content section which contains the data provided by the server** 

![Screenshot 2021-09-10 at 2.51.14 AM.png](/images/api-for-pm/Screenshot_2021-09-10_at_2.51.14_AM.png)

The response header you see in the above image tells us about the state of response. 

- HTTP/2 200 - Here, **200** is the HTTP response status code which signifies that the response is a success.
- It also tells us about type of server - i.e. nginx is used. 
- Content type tells us about the data format of the response so that we can use right parser to fetch the response.
- Any headers beginning with X- are custom headers, and are not included in the HTTP spec. eg . x-proxy-cache

You can run this command in your terminal to make curl request. Here, `-i` denotes to show 

```jsx
curl -i https://hplussport.com/api/products
```



## 3. Endpoints

---

What if you want to talk to me? You will have to dial in my phone number +91-99xxxxxxxx

What if you want to talk to an API? You will have to connect to a specific location! That specific location is an **endpoint**.

> **Endpoints tell you the different places you can connect to an API.** 

They are URLs and the end of each URL connects you to specific data options from the API. Take a look back to flipkart.com. What if you want to view a specific catalogue like television, mobile, AC etc?

As soon as you tap on the product you are interested to buy; you are redirected to a URL. Those URLs are the end-points.

- flipkart.com/tv
- flipkart.com/mobile
- flipkart.com/ac

## 4. Query Parameters

---

Now once you have tapped on the product you are looking to buy; what if you want to see products of a LG brand only.

You would most probably apply brand filter. What happens next? As soon as you apply the LG filter; a request is made to the server again & now you can see only TV of LG brand.

> **Parameters allow us to more narrowly define or filter the response that we get.** 

**They're added onto the URL following the endpoint.** 

**Parameters are denoted by a question mark.** 

- flipkart.com/tv?brand=lg
- flipkart.com/tv?brand=lg&ratings=4+
- flipkart.com/tv/brand=lg/ratings=4+

Note ➖ You may also see forward slashes used for parameters but I believe it's more intuitive to use a question mark.


#### Trivia - Can you guess the scenario, where you will need to use the body data? 

You will need to send the body data with the request whenever you need to add or update some data on the server. That's where body is required in request.

A simple example can be, let's say you are creating a new Gmail account, so you are literally telling Google to take your information and create your Gmail account. Typically you will use body data (name, date of birth, preferred email) with **PUT**, **POST**, or **PATCH** requests.

We will learn more on how to make Post request with a body via Postman in the upcoming module.


