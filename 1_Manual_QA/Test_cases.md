# Test cases and Bug report model Popularity ranking program

## Test cases 

|id|Module|Test name|Steps to reproduce|Expected result|Priority|
|:----|:----:|:----:|:----|:----:|----:|
|TC01|UI|Contact selection|1. Select "research contact" button. 2. Enter a name. 3. Press enter or click on "GO"|Name is correctly sent to API for reaschearch|P0|
|TC02|API|No result treatment|1. Send a research for an un allocated name.|Answer should be "This user couldn't be found"|P1|
|TC03|SQL|Historic|1. Send a query with a proven existing name. 2. Save answer in historic.|Answer should be visible in historic line under a generated ID|P1|
|TC04|SQL|Historic deletion|1. Choose a historic answer. 2. Press bin button.|Answer shouldn't be visible anymore|P1|
|TC05|Calculation engine|Score calculation|1. Choose a contact with known social media data info. 2. Calculate its popularity score. 3. Look for the contact on program. 4. compare your results|P2|

## Bug report model 

Bug reports should be made with the following form : 

### Title : Should be short and clear 

- Bug ID (refer to bug table)
- Statut 
- Severity
- Linked test cases (refer to test cases ID)
- Linked risk (refer to risk analysis ID)
- Description
- Steps to reproduce 
- Actual result 
- Expected result

