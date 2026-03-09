# Bug 00, deployment issue

## Statut 

On going

## Severity

Critical (5)

### Test case TC00
### Risk ID R0
### Functionality 00

## Description 

Test of Software deployment on Vercel.com, compare to LiveServer view. LiveServer view show expected result of the page, vercel view answer with 404 critical error, and no available application view. 

## Steps to reproduce 

- Open portfolio-QA on VS Code 
- Open "program" folder
- Right click PopR.html, select open with LiveServer
- Open Chrome
- Go to (https://portfolio-qa-three.vercel.app/)

## Actual result 

|LiveServer view|Vercel view|
|:-:|:-:|
|![LiveServer view](/portfolio-QA/Assets/LiveServer_view.png)|![Vercel view](/portfolio-QA/Assets/Vercel_view.png)|

## Expected result

Both view should look like the current LiveServer View. 