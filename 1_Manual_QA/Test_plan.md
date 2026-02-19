## About Elytra

Elytra is my recently created company. As such, the website and business model will be replicated here, and some decisions can be made, but all informations and data are fictives, for privacy reasons. 

# Business model simulation -- Risk-based test plan

## Description

The objective of this risk-based test plan is to ensure the direction can take quick decisions over pack prices and sales quantity. The test plan is risk based as the direction need the program as soon as possible to be able to prepare the first upcoming travel, on June 2026.
The model allow to choose a number of sales, a sale price, a promotion amount, deduct transport, logement and tickets cost, and then show a clear report of the simulation. It should take into account variable prices, a ratio between price and number of sales, the guide need dependament of the group size, as well as transportation means. 

## Risk assessment and Categorization

Priority categorization : 
High : Result and financial model possibly compromised or false (compromised data, prices, calculations...)
Medium : Non main result aren't available on specific modelisation (a specific name, promo-code, date ...)
Low : Result or simulation non scalable for big groups or packs (no available result or simulation for 60+ groups... )

Severity categorization : 
Blocker : testing cannot continue
Critical : Core feature broken (Key fields non customizable, non available graph...)
Major : Important feature partially broken (individual transport price fields non changeable...)
Minor : Small functionnal issue (delays, lack of flexibility...)
Trivial : UI / cosmetic 

## Feature to be tested

High priority : 
- Customization of main fields
- Actual external data intergration
- Simulation 
- Dashboard

Medium priority : 
- Variable cost detail customization
- Partial simulation

Low priority : 
- Large group simulation
- Date 
- Name customzation

## Test approach an schedule

Smoke testing as soon as possible. 
High priority feature must be manually tested before february the 28th, automated by march the 5th, regression test ready for march the 8th. 
Medium and low priority feature will be properly tested after lunch of the model, the 10th of march.

## Entry and exit criteria

Entry Criteria: Risk assessment complete, high-risk test cases ready, test environment set.
Exit Criteria: All high-risk test cases executed, critical defects resolved, medium/low-risk areas tested (if time permits)

## Risk mitigation strategy 

For High-Risk Features: Identify high-risk areas. Ensure frequent testing during development (continuous integration). Work of defect before adding new feature. 
For Medium-Risk Features: Prioritized testing based on feature complexity. Perform regression testing after high-risk features are validated.
For Low-Risk Features:Testing deferred to later phases, if time do not permits, after lunch of model. 

## Metrics and reporting 

Risk-Based Coverage: % of high, medium, and low-risk features teste
dDefect Metrics: Number of defects found in high-risk areas vs. medium and low-risk areas.
Test Execution Progress: Number of test cases executed, passed, failed by risk level
Risk Mitigation Report: Outcomes of high-risk testing, remaining risks
