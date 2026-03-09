# Software deployment test 

### Priority 

High 

### Type 

Functional

## Description

This test verify wether the application is successfully deployed on Vercel. It is tested by comparaison of Vercel and LiveServer view. It ensure the URL is available, and the application visible. 

## Pre-condition

- GitHub and local syncronisation
- Branch "main" is up-to-date
- Vercel and GitHub link
- Vercel account and project environment configured 
- Live Server is downloaded 

## Test steps 

- Open portfolio-QA on VS Code 
- Open "program" folder
- Right click PopR.html, select open with LiveServer
- Open Chrome
- Go to (https://portfolio-qa-three.vercel.app/)

## Expected result 

Application should open with liveServer
Link can be followed on internet
Both views are similar 