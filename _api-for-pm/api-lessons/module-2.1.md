---
title: "1.2 Types of APIs - REST vs SOAP"
metaTitle: "Introduction to API | Tech for product managers"
metaDescription: "REST, SOAP and GraphQL APIs"
lessonUnlocked : false
---


## 1.1 REST APIs

When you hear or read about APIs, you'll almost always see the term REST associated with it. Remember, REST is just a standard for APIs, and by now almost all APIs conform to the REST standard.

> REST is a set of rules that developers follow when they create their API.

When an API follows the rule of Representational State Transfer; they are called REST API.

One of these rules states that you should be able to get a piece of data (called a resource) when you hit on a specific URL.

REST determines how the API looks like. I will not go into the rest standards and feature in detail here but you can think of it as a set of rules that APIs follow these days.

Let's see a few key attributes of REST APIs - 

- REST APIs are stateless. It means that each HTTP request is independent. When a client sends a request to the server; it contains all the information that is required by the server to return a response. e.g. Each HTTP request contains an authentication token in the API body irrespective of how many times it has been sent before.
- REST APIs are also inter-operable. 

You can learn more about REST APIs in the video below - 

<iframe width="560" height="315" src="https://www.youtube.com/embed/-mN3VyJuCjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 1.2 SOAP APIs

SOAP is a protocol that uses XML as a format to transfer data. Its main function is to define the structure of the messages and methods of communication. (Sounds complex, duh! Let's look at an example.)

### 1.3 REST vs SOAP APIs

Let's see request and response of service called sayhello that returns "hello world".

### REST Service

Request: 
``` jsx
http://yourserver/yourservice/sayhello HTTP/1.1
```

Response:
hello world

## SOAP Service
Request:

``` jsx
POST http://yourserver/yourservice/sayhello HTTP/1.1 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"> 
 <SOAP-ENV:Header/> 
 <SOAP-ENV:Body/> 
</SOAP-ENV:Envelope> 
```

Response:
``` jsx
<?xml version="1.0" ?> 
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"> 
 <S:Body> 
     <s:String>hello world</S:String> 
 </S:Body> 
</S:Envelope> 
```

> As you can see, REST service uses only HTTP protocol, whereas SOAP services must use SOAP protocol on top of HTTP (or on top of other transport level protocol).

> In order to consume HTTP service you don't need any additional framework. Its simple and clean and hence REST is preferred over SOAP for its simplicity.


### 1.4 GraphQL APIs

Before I tell you what GraphQL is, let me tell you in brief how it originated.

When Facebook launched its mobile app, engineers noticed that the app was performing slow. Upon investigation, it was found out that the app had to make too many HTTP requests to the server to show the screen.

Hence to overcome this, engineers at Facebook came up with the new concept where minimal number of HTTP requests were required for fetching information on co-related entities.

Let me tell you in comparison to REST APIs.

REST APIs follow the structure:

- /users/
- /users/`{id}`
- /users/edit
- /users/delete

This approach has some problems - 

- As the application grows, the number of endpoints starts exploding. It becomes harder to keep track of all endpoints.
- With REST APIs, the server dictates what response will be sent to the client. Client has no control what data it will be getting.
- Without actually seeing the response, the client cannot tell what response will it be getting.

> Enter GRAPHQL. GRAPHQL make use of 1 endpoint for everything.

The most basic structure of graphql can be:

``` jsx
{ 
	me { 
		name 
	} 
} 
```

And it gives the following response:

``` jsx
{ 
  "me": { 
    "name": "Luke Skywalker" 
  } 
} 
```

Advantages:

1. Client can control what data it wants.
2. Client can easily tell what data it will be getting.
3. Since there is one endpoint, it is very easy to maintain for the client also.

![excited-minions-gif.gif](/images/api-for-pm/excited-minions-gif.gif)


