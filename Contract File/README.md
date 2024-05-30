# Contract for Accepting Payments and acknowledging back to the contract

For existing Course Selling or any Service selling Web2 website . which provide user service after user paid for the service.
Assignment is we want to accept payments in crypto and given access to service for user pays

Considering Given access to the course to be simple webhook that will hit with secret and user email
and that will provide the user access to service or course

    Contract written for

    - User has to sent some predefined ether to the contract, that predefined ether is set by admin
    - After user sends the ether the contract will emit the event.
    - The event should be montintored by backend which will provide the user access to the course . the backend will call webhook after receiving the event
    - When this task succeeds, the web2 backend should call the contract back to ack the payment, which means the user has been given access to the course
