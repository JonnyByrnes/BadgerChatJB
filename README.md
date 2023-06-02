# BadgerChatJB

Welcome to BadgerChatJB! This project a web application that allows a user to chat with other users based around UW-themed chatrooms. This project was created in conjuction with an API and backend provided by Cole Nelson and the staff of CS571, in the Spring of 2023.

## BadgerChatJB
 To start the web application , simply run 

```bash
npm install
npm start
```

Then, in a browser, open `localhost:3000`

# Home Screen
 The home screen of the application gives an overview and warning to the users of the application. From here, the user is able to select options from a menu bar at the top of the screen. The user has the option to Login, Register, or select a specific chatroom from a dropdown menu.

# Login
 When the user navigates to the login screen, they have the ability to enter a username and password. When the Login button is pressed, the application will either:
 1. Successfully log in the user
 2. Alert the user for using a non-existing username
 3. Alert the user that the password was incorrect
 4. Alert the user to enter text into the username or password text box

# Register
 If the user chooses to register a new account, they will be redirected to the registration page. From here, they are able to enter a new username, choose a password, and verify that password. Based on this input, the application will either:
 1. Successfully register the new user
 2. Alert the user that the username has been taken
 3. Alert the user that the passwords do not match
 4. Alert the user to enter text into the username or password text box


# Logout

 After logging in or registering as a user, the application removes the login and register options, and provides the option to logout on the menu bar at the top of the screen.
 
# Creating and Deleting a Post
 To create or delete a post, the user must be authenticated by logging in or registering an account. Once authenticated, the user has the option to post a message with a title and content, as well as delete any messages they have posted.
 
 To create a post:
 1. Navigate to the chatroom where the content is intended to be posted
 2. At the top of the chatroom page, select the "Post title" text box, and add a title
 3. Select the "Post content" text box, and add content to the post 
 4. If there is no text in the title or content boxes, the chat will not be posted and the user will be alerted
 5. Once the text has been added, select the blue "Post" button below the text boxes. If successful, the user will be alerted that the messsage was posted
 6. The message can now be viewed in the specified chatroom


 To delete a post:
 1. Navigate to the chatroom where the message was posted
 2. Scroll the chatroom until the message posted by the logged in user is found. This can be identified by the username assosciated with the post
 3. Select the red "Delete" button below the message that is intended to be removed
 4. The message will be erased from the chatroom and messages database.

# Viewing Chatrooms
 To view a chatroom, the user can either be authenticated or a guest of the application. To view the messages, the user must select which chatroom they would like to view. From there, they can scroll down and see the messages for the specified chatroom. This application only provides access to the latest 25 messages for each chatroom.
