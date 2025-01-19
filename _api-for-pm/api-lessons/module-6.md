---
title: "1.6 Working on API Integration"
metaTitle: ""
metaDescription: ""
lessonUnlocked : false
---



So far, we have learned everything about requests & responses. We also know how to make different API requests through Postman or by using curl. 

Well, it's time to test your skills! 💩

![images/image.gif](/images/api-for-pm/image.gif)

## 1. Search Videos on YouTube

---

Description - **Search Videos on YouTube using YouTube Data API** 

API Documentation link - [https://developers.google.com/youtube/v3/docs](https://developers.google.com/youtube/v3/docs)

Example - Let's say you search, "educational video". You need to find an API which accept search parameter and returns the result. 

## Task Breakdown

- [ ]  Sign-in to the Google Developer Console and generate the API key.
- [ ]  Query a term "How to learn fast" using the API.
- [ ]  Get the correct endpoints, and run using postman.
- [ ]  Find the details about a video using video ID (found in search result)
- [ ]  Show the results on front-end (if you want to show on app/website)

## Solution - Steps

Since you don't know which Youtube API endpoint to hit to get the search results; the first step always is to find the official API documentation. Let's do a Google search, "Youtube search api"

The first result would be this:  [https://developers.google.com/youtube/v3/docs/search/list](https://developers.google.com/youtube/v3/docs/search/list)

Now, you have the API reference guide. Let's read the API documentation and find out how to get our correct endpoint.

If you face any issue while creating YouTube data API key, check this out. 

## 2. Get Current Weather Data

---

Description - Get Current Weather Data using Open Weather Map API

Documentation :  [https://openweathermap.org/current](https://openweathermap.org/current)

## Tasks Breakup

- [ ] Get the API endpoint for current weather data based on city search.

**Hint**

> You need to register on the platform, generate an API key and use it in the endpoint. If you try hitting the URL without API_KEY, it will return some error message in JSON.

## 3. Location from ZIP code

---

Description - Explore and find an API to get location based on ZIP code. 

You are allowed to use any API service whether it's free or protected. 




<h4>💡 Looking for more such examples ?</h4>

<p> Checkout <a href="https://rapidapi.com/hub" target="_blank"> Rapid API </a> for testing APIs like Sending SMS, getting flight information, stock market APIs, weather APIs and much more.  </p>

<a href="https://rapidapi.com/hub" target="_blank"> https://rapidapi.com/hub </a>
