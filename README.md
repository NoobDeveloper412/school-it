# school-it 📃

◼ Integrated with [_school-it-auth-server_](https://github.com/Jokurale/school-it-auth-server) & [_school-it-resource-api_](https://github.com/Jokurale/school-it-resource-api)

## About project 🧧

School-it frontend app for REST API interaction that includes:

- Student's dashboard:
  - Profile
  - Personal information (including addresses and so on)
  - School info summary
  - Service status
  - Attendance records
  - Group's schedule
  - Marks
  - Homeworks
  - Groups which student belongs to
- Teacher's dashboard:
  - ...everything that student's dashboard contains, excluding group-related information
- Administrative dashboard including everything mentioned above plus:
  - User management
  - Room management
  - Hour management
  - Lesson management

## Backend implementation model 🗂

<div align="center">
  <img src="https://svgshare.com/i/Ye3.svg">
</div>
<br />

## Installation process 🔨

- Clone or download and extract repo
- Make sure your node is ^15.12.0
- Install all dependencies via:
  ```bash
  yarn install
  ```
- if everything's fine, run (to start further development with built-in webpack live server):
  ```bash
  yarn run dev
  ```
- or try to build project deploy project using:
  ```bash
  yarn run build
  ```

<br>

- _DONE!_ 🎉
  <br>

## Potential further changes & TODOS 🧭

- General dashboard design
- General index page design
- Tests!

## Built With 📐

- CRA
- axios
- typescript
- bcrypt
- dotenv
- jsonwebtoken
- DefinitelyTyped
- react
- redux (RTK)
- react-redux
- react-toastify
- react-modal
- redux-persist
- styled-components
- jest
