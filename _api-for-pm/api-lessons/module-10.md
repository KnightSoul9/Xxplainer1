---
title: "1.10 API vs SDK"
metaTitle: ""
metaDescription: ""
lessonUnlocked : false
---


Let’s first recap what APIs are,  Application programming interface (API) is a term that refers to a set of tools (or a piece of code) that promotes communication between two platforms. (e.g. Uber and Google Maps or Amazon and Stripe)

## How does the API work?


Let’s revisit the relationship between a waiter and his customer at a restaurant:

- the customer orders something from the waiter,
- the waiter then goes back to the kitchen to inform the cook when the food is ready,
- and the waiter then brings the food out to the customer.

The waiter is like an API call, bringing information and making a request to the kitchen, where the request is either **accepted** and food is transferred or **denied** with an explanation as to why.

So if you order a pizza, and the kitchen is out of stock then the request can't be completed and you'll receive the information.

## 2. What’s an SDK?

----

Now, you fully understand what APIs are. A piece of code that lets two different platforms interact with one another. (Uber - Google Maps) 

Cool! Now, think about the developer who is integrating Google Maps on Uber. If a developer wants to fetch the live location, she would need to write a piece of code to fetch the location. And this would mean writing a lot of code actually. Writing code for frontend and backend. Setting up the right tools. 

It’s like when you want to eat a pizza, imagine buying ingredients, oven and baking it instead of just ordering. Damn, it’s tough. 

> SDK is a toolkit that felicitates developers to write less code and make their work easier and faster.

> The term SDK refers to a software development kit. The SDK, sometimes known as a devkit, is a collection of libraries, visual editors, debuggers, and tools for testing and analysis that makes developer life easier. 

## 3. Tools/resources present in SDKs 

----

- Sample apps - It’s a set of working code that lets you browse, run and test the app.
- Framework (code libraries): Give programmers a shortcut using code sequences they'll use again and again.
- Tools for testing and analysis: Provide information about how the application or product performs in both testing and production settings.
- Documentation: Provides instructions to developers that they can refer to as they work.
- Debuggers: Assist teams in identifying flaws (errors and omissions) in their code so that they may release code that works as planned.

At least one API is frequently provided in the SDK since applications cannot exchange data or collaborate without it.

## 4. Key differences between APIs and SDKs

---

Despite the fact that both APIs and SDK are intertwined and overlapped, let us distinguish between them.

> 💡 An API establishes communication between two programmes/applications, whereas an SDK is a toolkit required to develop applications.

- SDKs can contain APIs, but APIs can't contain SDKs.
- SDKs are easier to use and integrate than APIs.
- APIs don't have code libraries and are difficult to modify.
- APIs send a request from one app to another and return a response to the requesting app; SDKs contain everything you need to communicate with other software and to build software;
- Devs always use an SDK to build apps; APIs, on the other hand, is only used when external contact with other systems is required.

> In fact, APIs and SDKs provide developers with solutions, but each one is unique in its own way.

## 5. Is it necessary for you to select between SDK and API? 

----

No, as previously stated, an SDK frequently has at least one API. These two provide assistance in distinct ways, but they can and do collaborate.

APIs, once again, dictate how different platforms interact. They use specifications (protocols) to promote contact, and as facilitators, they are one of the instruments in a comprehensive kit.

SDKs are the entire package. They give everything needed to produce new software for a specific platform or programming language, in addition to facilitation.


