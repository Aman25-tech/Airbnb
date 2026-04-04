# Wanderlust - An Airbnb Clone

Wanderlust is a feature-rich, full-stack web application inspired by the core functionalities of Airbnb. It allows users to discover, list, and review unique accommodations around the world. The project demonstrates a complete end-to-end development process, from a robust backend with database integration to a polished, responsive user interface.

## Key Features

*   **User Authentication**: Secure user registration and login system using Passport.js.
*   **CRUD for Listings**: Authenticated users can create, read, update, and delete their own property listings.
*   **Image Uploads**: Seamless image uploads to the cloud using Multer and Cloudinary.
*   **Search & Filtering**: Users can search for listings by title, location, or country, and filter them by category (e.g., Trending, Mountains, Beaches).
*   **Interactive Maps**: Listing detail pages feature an interactive map from MapLibre GL showing the property's location.
*   **Reviews and Ratings**: Logged-in users can post and delete reviews for listings.
*   **Responsive UI/UX**: A modern, clean, and mobile-first design built with Bootstrap and a custom premium-style CSS design system.
*   **Flash Notifications**: Provides user feedback for actions like successful login, new listing creation, or errors.

## Tech Stack

| Category           | Technology / Library                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Frontend**       | EJS, HTML5, JavaScript (ES6+), Bootstrap 5, Custom CSS3 Design System                                               |
| **Backend**        | Node.js, Express.js                                                                                                |
| **Database**       | MongoDB, Mongoose                                                                                                  |
| **Authentication** | Passport.js (passport-local, passport-local-mongoose), Express Sessions, Connect-Mongo                             |
| **Image Storage**  | Cloudinary, Multer                                                                                                 |
| **Mapping**        | MapLibre GL                                                                                                        |
| **Utilities**      | `method-override` for PUT/DELETE requests, `joi` for schema validation, `connect-flash` for notifications, `dotenv` for environment variables |

## Project Structure

The repository is organized following the MVC (Model-View-Controller) pattern to ensure a clean separation of concerns.

```
/
├── controllers/      # Handles request logic (C in MVC)
├── models/           # Defines database schemas (M in MVC)
├── public/           # Static assets (CSS, JS, images)
│   ├── css/          # Custom stylesheets
│   └── js/           # Frontend JavaScript
├── routes/           # Defines API endpoints and connects them to controllers
├── utils/            # Reusable utility functions and error handlers
├── views/            # EJS templates for the user interface (V in MVC)
│   ├── includes/     # Reusable EJS partials (navbar, footer, flash)
│   └── layouts/      # Base layout template
├── app.js            # Main application entry point
├── cloudConfig.js    # Cloudinary configuration
├── middleware.js     # Custom Express middleware
├── package.json      # Project dependencies and scripts
└── schema.js         # Joi validation schemas
```

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

*   Node.js (v22.x or later)
*   npm
*   MongoDB (local instance or a cloud-hosted Atlas cluster)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/aman25-tech/Airbnb.git
    cd Airbnb
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables. Replace the placeholder values with your own keys.

    ```
    # MongoDB Connection URL
    ATLAS_DB_URL=mongodb+srv://<user>:<password>@cluster0.your.mongodb.net/?retryWrites=true&w=majority

    # Session Secret
    SECRET=supersecretstring

    # Cloudinary Credentials
    CLOUD_NAME=your_cloud_name
    CLOUD_API_KEY=your_api_key
    CLOUD_API_SECRET=your_api_secret

    # MapLibre GL Token (or any Mapbox-compatible token)
    MAP_TOKEN=your_map_token
    ```

4.  **Initialize the database (Optional):**
    To populate the database with sample listings, run the initialization script. You'll need to first sign up for an account in the application to get a user ID, and then replace the `owner` ID in `init/index.js` with your new user ID.
    ```sh
    node init/index.js
    ```

5.  **Start the server:**
    ```sh
    npm start
    ```
    The application will be running at `http://localhost:8080`.
