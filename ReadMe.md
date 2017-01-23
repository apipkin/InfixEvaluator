# Infix Evaluator

This infix evaluator will correctly solve any expression given only numbers, operators (`+`, `-`, `*`, `/`), and groups (`()`, `{}`, `[]`).
The infix evaluator will tokenize the expression string, pass it to the evaluator and return the results.

## To Start the Server

`npm start`


## Testing

 - *test* `npm test`
 - *test coverage* `npm run test:cover`
 - *test coverage in browser* `test:cover:browser`

### Test Plan

 - The use of `ENTER` will refer to entering an expression in the input
 - The use of `EVALUATE` will refer to processing the expression and obtain the value
 - The use of `DISPLAY` will refer to displaying the value
 - The use of `ALERT` will refer to alerting the user

| Method Sequence | Expected Output | Actual Output
| --- | --- | --- |
| EVALUATE        | ALERT "Please enter an expression" | ALERT "Please enter an expression"
| --- | --- | --- |
| ENTER "2 + 3"<br>EVALUATE    | DISPLAY "5"     | DISPLAY "5"
| --- | --- | --- |
| ENTER "2+3 * 5"<br>EVALUATE | DISPLAY "17"    | DISPLAY "17"
| --- | --- | --- |
| ENTER "(32 - 5) * 6 + 3 / 2"<br>EVALUATE | DISPLAY "163" | DISPLAY "163"
| --- | --- | --- |
| ENTER "3 / (6 - 2 * 3)"<br>EVALUATE | ALERT "Cannot divide by zero." | ALERT "Cannot divide by zero." 
| --- | --- | --- |
| ENTER "3 * 3 / 3 + 3 - 3"<br>EVALUATE | DISPLAY "3" | DISPLAY "3"


## UML Diagram
![UML Diagram](https://image.ibb.co/fvcr1F/Main.png)


## Lessons learned
_{working}_



