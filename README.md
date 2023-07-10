# Blood-Bank
The blood bank  website project developed by Rahul Bairagi is built on the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. This technology stack is widely used for building robust and scalable web applications.

blood bank website is an online platform that serves as a centralized resource for connecting blood donors with recipients in need. It is designed to facilitate the process of blood donation, streamline communication, and ensure efficient management of the blood supply. The website acts as a bridge between donors and healthcare institutions, providing valuable information, online registration, scheduling, and other essential features.
### Manual Setup
1. Open your local CLI -

   ```
   mkdir MyBloodBank

   cd MyBloodBank
   ```

2. Setup the code -

   - Create a `.env` file and the format should be as given in `.env.example`.
   - Clone the code-

     ```
     git clone <repo-link>

     cd MyBloodBank
     ```

3. Setup the backend code -

   - Create a `config.env` file and the format should be as given in `.env.example`.
   - install the modules-

   ```
   npm install
   ```

   - Open your Mongoose Client -

   ```
   CREATE DATABASE MyBloodBank;
   ```

   NOTE: Don't forget to keep the database name same in the `.env` and here.

   - Run the server `npm run server`.

4. Open a new CLI terminal and goto the root `MyBloodBank` folder you created in the first step.
5. Setup the Frontend code -

   - Goto client directory and install the modules-

     ```
     cd client

     npm install
     ```

   - Run the client index `npm start`.
   - To run both client and server concurrentyly use `npm run dev` command.

## Made By
### Rahul Bairagi | [📝 LinkedIn](https://www.linkedin.com/in/rahul3008/)

