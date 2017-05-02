# Your First (Several) Asynchronous Requests

[See assignment in Alexa.](https://alexa.bitmaker.co/cohorts/67/assignments/2055/latest)

The server you will be interacting with is deployed at:

http://first-ajax-api.herokuapp.com/
The URLs within the server (AKA 'endpoints', AKA 'resources') we're going to work with are:

/ <- the root path
/ping
/pong
/count
/time
/a_car

Each time you use one of these paths, you will have to use the fully-qualified URL. For example: http://first-ajax-api.herokuapp.com/count

Knowledge Check
1. What HTTP method did your browser use to make the request?
GET
2. How many milliseconds did it take your browser to complete it?
81ms
3. What HTTP status code did the server return? What does that mean? 200 which means its "OK" and the request has succeeded.
4. Look at the "Initiator" and "Type" columns. Was this an xhr/JavaScript/AJAX request or a normal browser request?
Type: Document, Initiator: Other
Normal browser
