# Elytra booking Simulation API

## Risk-based test plan - Business model reliability focus 

### Document Control 

Version : 1
Author : Gabriel Samson
Date : 02/20/2026
Planned release date : 02/28/2026
Scope reference :

### Purpose of the test plan 

The objective of the test plan is testing the main features of the Booking Simulation API, focused on th Businness Model Reliability. This model has a decision making purpose, and is internal to the Elytra company. 
The success is defined by the reliability of the Business report producted, with a calculation engine error tolerance null.  

### System under test (SUT) 

The model is constitued of REST API built with Flask, independant from actual production website, with fictive data only (for privacy reasons).

The software structure is designed such as, from backend to front end : 
- API layer 
- Database layer 
- SQL aggregation layer 
- Reporting and dashboard layer. 

Be aware that no external services, payment, account registration are included no the device. As such, no external request should get involved during testing. 

### Business model overview (High-Level Only) 

This model is as destination of the company direction. 
The simulation start 

