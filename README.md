# User Profile Management System(only for beginners to learn state management and props movement between parent to child and child to parent)

A React application for searching, displaying, and updating user profiles.

## Features

- Search users by email
- Display user profiles with details
- Update user information
- Form validation
- Error handling

## Components

### 1. Container

The main component that manages state and coordinates between child components:

- Maintains user data state
- Handles data updates
- Manages component rendering logic

### 2. SearchForm

Email-based user search component:

- Email input field
- Form validation
- API integration with JSONPlaceholder
- Error message display

### 3. Display

Renders user profile information:

- Shows user ID, name, username, website, and email
- Handles empty state display
- Responsive list view of user data

### 4. UpdateForm

Form component for editing user details:

- Input fields for name, email, and website
- Pre-populated with existing user data
- Form validation
- Update submission handling

## Technologies Used

- React
- Axios for API calls
- PropTypes for type checking
- JSONPlaceholder API for demo data

## Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
```
