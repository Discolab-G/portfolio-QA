# Test plan Popularity ranking Program 

Statut : On going 
Author : Gabriel Samson

## Introduction

The app is designed to allow to user to take an "image" of the person popularity at a determined instant, and be able to keep it in memory, to see its evolution. 

This document will serve as a reference of quality expectations and testing scope. It will also serve to define expected documentation and define the test strategy. 

## Scope 

### In-scope test

- Delay
- Calculation of the result
- Historic of result veracity 
- Free-plan and size limits 
- Contact selection boundaries
- Social medial boundaries
- Historic and storag privacy

### Out of scope test

- Personnal contact informations
- Social media design informations
- Personnal contact account informations details
- Users use of rescheach results

## Test strategy 

|Test type|Description|tool|
|:-----|:-----|-----:|
|Fonctionality test|Test UI responsivity, query and answers|Manual testing, JavaScript test program|
|API testing|Test API search over social media|Postman|
|Data testing|Test data complecency and info retail|SQL|
|Boundary testing|Test edge cases complience|Manual testing|

## Environment 

Chrome, SQL.js, RapidAPI

## Entry and exit criteria 

Entry : First version code completed and updated on GitHub, manual test by liveServer. 
Exit : KPI reached on fonctionnality, no major or more bug uncovered. Release on GitHub Pages. 

## Risk analysis 

Free plan quota reached. 
Contact privacy breached. 
Existing contact informations not found.
Program delay makes it use unconfortable. 
Public historic.  
API key block.
External storage use. 

## Documentation 

- Test plan 
- Product definition
- Test cases 
- Risk analysis detail 
- Bug report model
- Product structure detail
- Error explanation index


