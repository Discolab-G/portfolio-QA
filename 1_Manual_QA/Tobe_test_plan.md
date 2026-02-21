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
The simulation start from the pack customzation, all the way to pack release, passing by csutomer settings. 
Price engine include price by pack, sales number, cost by customer, price by customization. 
Data comes form UI fields selection, pass by backend database, are treated by SQL, before getting showned on the dashboard. 

### Testing Strategy 

The testing will be based on risk-based approach, due to short deadline. 
Risk are identified with a focus on reliability of data, with more info available on portoflio-QA/1_Manual_QA/risk-graph.md
Testing focused on data and calculation engine veracity. 

### Risk assessment 

Data veracity based risk -> Critical 
Customization and dashoboard based risk -> major 
UI and quickness of the software -> minor 

#### Severity definition 

Blocker : testing cannot continue
Critical : Core feature broken (Pack non customzable, misleading simulation results...)
Major : Important feature partially broken (Customer report unailable, promo code non available...)
Minor : Small functionnal issue (delays, lack of flexibility...)
Trivial : UI / cosmetic 

### Features / Domains to be tested 


