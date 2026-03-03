# Risk analysis Popularity ranking Program 

## Risk definition

This file mark ranking analysis of program risk. It scale risk by a rule of : 
Possibility * Severity = Risk score 

Possiblity being on a scale from 1 to 5, 1 being possibility being near 0%, and 5 as high possiblity of happening. 
Severity being on a scalde from 1 to 5, 1 being begnin, and 5 critical for the program. 
Risk score is on a scale from 1 to 25, 1 being a insignificant risk, and 25 as blocking for the program. 

All risk present here are consquential of risk mentionned by the Test_plan. 

## Risk analysis table 

|ID|Risk category|Risk name|Severity score|Probability score|Risk score|Prevention|
|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
|R1|Free|Free quota reached|3|1|3|Local storage with SQL.js|
|R2|Contact privacy breached|5|3|15|Preventives mesures on data transfer|
|R3|Existing contact not found|4|4|16|Integrated error message for quick analysis of bug|
|R4|Program delay|4|2|8|Light programmation with no incorporated side content|
|R5|Public history|5|1|5|Preventive specified testing before release|
|R6|API key block|5|1|5|Regular maintenance and functionnability test|
|R7|Exernale storage use|3|2|6|Preventives mesures on data transfer|