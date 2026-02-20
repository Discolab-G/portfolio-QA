## About Elytra

Elytra is a recently created company. The website and business model will be replicated here, but all informations and data are fictives, for privacy reasons.

# Elyta Booking Simulation API -- Test plan

## Model description

The model emulates travel service inspired from Elytra business model. It allows customization of pack (product) and key components of the simulation and give clear report, of what the result of the simulation should be.

This simulation contain : 
- Pack (product) customization
- Customer simulation 
- Bookings simulation
- Payments simulation
- Availability simulation
- Promo code simulation
- Report & dashboard of the simulated travel

This siluation works with REST APi on Flask build, does not include account/authentification, or external services. Payment are simulated.

## Test plan description

This is a risk-based test plan, with a high priority on accuracy of business-rules. Lunch of the simulation should be ready before 02/28. 
In this order : Functional testing, validation of business rules, API validation, and Boundary testing. 
All feature should be tested based on risk prioritization. 
Some features, if time does not permit, could be postponed, and will be tested upon that time. 

## Risk assesment and Categorization

Severity categorization : 
Blocker : testing cannot continue
Critical : Core feature broken (Pack non customzable, misleading simulation results...)
Major : Important feature partially broken (Customer report unailable, promo code non available...)
Minor : Small functionnal issue (delays, lack of flexibility...)
Trivial : UI / cosmetic 

## Feature to be tested 

High priority : 
- Customization of pack (product)
- Dashboard & report

Medium priority : 
- Variable cost detail customization
- Partial simulation

Low priority : 
- Large group simulation
- Date 
- Name customzation

## Test approach and schedule

First realease scheduled for 02/28.
First update on 02/10. 

Simulation feature and customization should be approved before release. 
Positive scenario : All main features are usable before release, less than 5 fields noncustomizables, under 5% of 400 errors messages. After release check used for minor fixes, or implemantation of futur features. 
Negative scenario : Major features defects, main fields non available, unresponsive customizable feature, over 50% of 400 errors messages. Release delayed by 5 days. 

If worth than negative scenario : temporary closure of project. 

#### Entry and exit criteria

Entry Criteria: Risk assessment complete, high-risk test cases ready, test environment set.
Exit Criteria: All high-risk test cases executed, critical defects resolved, API result 95%+ 200messages, medium/low-risk areas tested (if time permits).

## Metrics and reporting 

Input reliability: % of accuracy of report and dashboard numbers (objective at 0,01 unit precision)
Booking report: Number of cancellation or non reservation showed. 
Risk-Based Coverage: % of high, medium, and low-risk features teste
Defect Metrics: Number of defects found in high-risk areas vs. medium and low-risk areas.
Test Execution Progress: Number of test cases executed, passed, failed by risk level
Risk Mitigation Report: Outcomes of high-risk testing, remaining risks