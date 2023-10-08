# sandbox-oexpress

This is automation web and api for sandbox-oexpress created with cypress

## Test Cases Web

| Feature | Scenario                                  | Steps                                                                         | Expected Result                                     | Status    |
| ------- | ----------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------- | --------- |
| Login   | Have correct url                          | 1. Visit website                                                              | URL redirect to /login                              | Automated |
|         | Login can be success                      | 1. Visit website<br>2. Login with correct credential                          | Login success and homepage shown                    | Automated |
|         | Invalid email format have alert           | 1. Visit website<br>2. input invalid email format                             | Masuk button disabled and alert invalid email shown | Automated |
|         | Password less than 6 character have alert | 1. Visit website<br>2. input valid email<br>3. input password "12345"         | Alert password should at least 6 characters shown   | Automated |
|         | Invalid login credential have alert       | 1. Visit website<br>2. input unregistered email<br>3. input password "123456" | Alert email and password combination wrong shown    | Automated |
