# sandbox-oexpress

This is automation test web and api for [sandbox-oexpress](https://sandbox-app.oexpress.co.id) created with cypress using Typescript

## Features
- Web UI automation test (cypress/tests/ui)
- API automation test (cypress/tests/api)
- Automation HTML report (cypress/reports/html/index.html)
- Linter and prettier
- Yarn package manager

## Prerequisite
- Node.js
- Yarn
- Chrome browser

### Installation

```shell
yarn install
```
### Run the test
browser hidden:
```shell
yarn test
```
browser shown:
```shell
yarn test:headed
```

## Test Cases Web

| Feature            | Scenario                                  | Precondition                         | Steps                                                                                                                                                                            | Expected Result                                                 | Status    |
| ------------------ | ----------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------- |
| Login              | Have correct url                          |                                      | 1. Visit website                                                                                                                                                                 | URL redirect to /login                                          | Automated |
|                    | Login can be success                      |                                      | 1. Visit website<br>2. Login with correct credential                                                                                                                             | Login success and homepage shown                                | Automated |
|                    | Invalid email format have alert           |                                      | 1. Visit website<br>2. input invalid email format                                                                                                                                | Masuk button disabled and alert invalid email shown             | Automated |
|                    | Password less than 6 character have alert |                                      | 1. Visit website<br>2. input valid email<br>3. input password "12345"                                                                                                            | Alert password should at least 6 characters shown               | Automated |
|                    | Invalid login credential have alert       |                                      | 1. Visit website<br>2. input unregistered email<br>3. input password "123456"                                                                                                    | Alert email and password combination wrong shown                | Automated |
| Register           | Register Regular user success             |                                      | 1. Visit website<br>2. click "Daftar di sini"<br>3. input Nama lengkap<br>4. input unregisterred email<br>5. input valid password<br>6. input nomer handphone<br>7. click Daftar | Email verification sent page is shown with correct email target | Automated |
| Forgot Password           | User can reset password            |  Have verified user  | 1. Visit website<br>2. click "Lupa Password"<br>3. input email user<br>4. click "Reset Password" | Email reset password sent page is shown and user can resend the email link | Automated |
| Onboarding Regular | Onboarding Regular user success           | Have user regular that just verified | 1. Visit website<br>2. Login with user that just verified<br>3. input all fields on all 4 onboarding pages                                                                       | Onboarding page successfully filled and user on main home page  | Automated |
| Onboarding Corporate | Onboarding corporate user success           | Have user corporate that just verified | 1. Visit website<br>2. Login with user that just verified<br>3. input all fields on all 4 onboarding pages                                                                       | Onboarding page successfully filled and user on main home page  | To Automate |

## Test Cases API

| Scenario | Method | Endpoint | Expected Result |
| -------- | ------ | -------- | --------------- |
| Login success | POST | /auth/member/login | Response Code 200 and user got token |
| Get Profile Info | GET | /auth/member/me | Response Code 200 and have data |

## Screenshots
With example of failed test

-- Test Execution
- https://drive.google.com/file/d/1rHVPJ9zO8beW_4uuEZBNd5K0eZzVzJgi/view?usp=sharing

-- Reports
- https://drive.google.com/file/d/1t4HabLvbqPKcRrljY8VhQOlsw-2tu38N/view?usp=sharing
- https://drive.google.com/file/d/1kkfO3n-UM2oaC182eKbbp0bGjYuhR243/view?usp=sharing