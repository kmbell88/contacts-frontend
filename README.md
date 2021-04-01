# Contacts App

This is the Angular frontend of my contacts full-stack application, using an express backend.

Change log:

- 01 April 2020: Rough implementation and use of ReactiveFormsModule and FormBuilder for contact handling. At the moment just writes to console; no validation.
- 26 March 2020: Added input validation in frontend contact forms to avoid unnecessary http requests. Essentially just copied the backend validation script and put it in the assets/scripts folder.
- 25 March 2021: Created ContactsService class for dependency injection. Researching and studying documentation for proper implementation and use cases.
- 22 March 2021: Set up contacts component with http module. Receives contacts from backend via get request and puts them in a table. No styling yet.
- 20 March 2021: Initializing the Angular project and repository.
