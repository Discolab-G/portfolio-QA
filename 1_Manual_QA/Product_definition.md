# Popularity ranking program 

Author : Gabriel 
Statut : On going 

## Vision & Objective 

When a company receive a new contact, she needs to be able to see who is this contact, to be able to make decisions. To do so, one way is to look for social media popularity. 

This app is designed to allow to user to take an "image" of the person popularity at a determined instant, and be able to keep it in memory, to see its evolution. 

## Personas 

Company A : Short timed after receiving a new contact, it needs to quickly assess of this contact popularity. 

Company B : Looking for new partner to work with on the long run, it would like to assess the evolution of promising prospect. 

## Fonctionalities 

| ---- ID ---- | ---- Fonctionality ---- |---- Description ---- | ---- Priority ---- |
|01|Select a contact|Allow the user to select contact to look for|Critical|
|02|Data enrichment|API call to look for the contact infos|Critical|
|03|Scoring engine|Calculate a popularity score based on reschech result|Important|
|04|Historic|View already looked for contact and score at that time|Important|
|05|Dashboard|Quick view of top contacts score and evolution|Low|

## technical specifications 

Frontend : HTML5, CSS3, JavaScript Vanilla (SPA architecture)
Backend : Supabase (PostgreSQL)
API tierce : RapidAPI 

## QA & Data delimitations 

01 functionnality caracter entry : must deny special caracters (as %$& ...).

03 scoring engine functionnality : must allow no results (partial or total) - error 400 and 500 - and answer adequatly. Must limit score numbers to integer numbers. 

04 historic functionnality : must allow deletion of historic lines, must limit to lines number to 1000.


## KPI

Query delay : < 3 seconds 
Query sucess : > 90% 
