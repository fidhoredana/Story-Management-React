# Story Management React

## <a name="introduction"></a> Introduction :
This is a web application designed for managing stories, where users can create, view, edit, and delete stories. The application is built with a focus on clean architecture principles, ensuring a maintainable and scalable codebase. It features both a frontend built with ReactJS and a backend API powered by ExpressJS and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Libraries](#libraries)
- [Project Structure](#project-structures)
- [Website URL](#apk-link)

## <a name="features"></a> Features :
The application includes the following features:
- **Story List**
  - View a list of stories.
  - Search and filter stories by name, author, category, and status.
- **Add Story**
  - Create new stories with general information and chapters.
  - Upload story cover images.
- **Story Detail**
  - View details of a specific story in read-only mode.
- **Edit Story**
  - Update existing stories, including adding, editing, or deleting chapters.

## <a name="libraries"></a> Libraries :
The following libraries were used in this project:
- **Frontend:**
  - ReactJS
  - react-router-dom
  - axios
  - react-bootstrap
  - react-quill (for rich text editor)
- **Backend:**
  - ExpressJS
  - Mongoose (MongoDB ORM)
  - Cors
  - Dotenv
  - Nodemon (for development)

## <a name="project-structures"></a> Project Structure :
### Frontend:
* `src/assets/` - Contains static files like images, stylesheets.
* `src/components/` - Reusable components used across the application.
* `src/utils/` - Utility functions and helpers.
* `src/pages/` - Main pages of the application (e.g., StoryList, AddStory).
* `src/services/` - Contains API service files for communicating with the backend.

### Backend:
* `controllers/` - Contains the logic for handling requests and responses.
* `models/` - Mongoose schemas for MongoDB collections.
* `routes/` - Route definitions connecting endpoints to controllers.
* `config/` - Database configuration and environment variables.
* `server.js` - Entry point of the Express server.

## <a name="apk-link"></a> Website URL :
[Deployed Application URL]([#](https://story-management-react.vercel.app/))
