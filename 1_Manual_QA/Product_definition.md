# Popularity ranking program 

Author : Gabriel Samson
Statut : On going 

## Vision & Objective 

Did you ever wondered if you had lots of follower on social media ? You can check the answer by looking over a certified account or a company popularity on social media, and compare yourselves with them. 

This app is designed to allow to user to take an "image" of the subject popularity, and see the popularity score of the subject. The score calculation is showed, so that the other can calculate his own score and compare with th looked over subject. 

## Personas 

Company A : Curious person who wish to compare his contacts on social media with recognized entities. 

Company B : Looking for new partner to work with on the long run, it would like to assess the evolution of promising prospect. 

## Fonctionalities 

|  ID  |  Fonctionality   Description  |  Priority  |
|:-----|:-----:|:-----:|-----:|
|01|Select a contact|Allow the user to select contact to look for|Critical|
|02|Data enrichment|API call to look for the contact infos|Critical|
|03|Scoring engine|Calculate a popularity score based on research result|Important|
|04|Historic|View already looked for contact (by research ID only) and score at that time|Important|
|05|Dashboard|Quick view of top contacts score and evolution|Low|

## technical specifications 

Frontend : HTML5, CSS3, JavaScript Vanilla (SPA architecture)
Backend : Supabase (SQL)
API tierce : RapidAPI 

## Data origin 

Data is sourced in real-time via RapidAPI. Results are not cached to ensure the highest accuracy at the time of request. Please note that third-party API limitations may result in slight discrepancies.

## QA & Data delimitations 

Research and results must me stocked under an ID, and no name should be present on historic. 
Privacy and non disclosure policy must be encountered before program use. 
01 functionnality caracter entry : must deny special caracters (as %$& ...).
03 scoring engine functionnality : must allow no results (partial or total) - error 400 and 500 - and answer adequatly. Must limit score numbers to integer numbers. 
04 historic functionnality : must allow deletion of historic lines, must limit to lines number to 1000.


## KPI

Query delay : < 3 seconds 
Query sucess : > 90% 
