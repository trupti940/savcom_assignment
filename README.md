# Marketplace App with Drag-and-Drop and reCAPTCHA Integration

This is a React-based Marketplace application that includes features like drag-and-drop functionality, a search bar, pagination, and Google reCAPTCHA integration for verifying user authenticity.

## Features

- **Google reCAPTCHA**: Ensures only verified users can access the marketplace.
- **Drag-and-Drop**: Reorder items dynamically using drag-and-drop functionality powered by `react-dnd`.
- **Search Functionality**: Filter items by title in real-time.
- **Pagination**: View items in a paginated format.
- **Responsive Design**: Optimized for desktop and mobile views.
- **API Integration**: Fetches product data from the [FakeStore API](https://fakestoreapi.com/).

## Technologies Used
- **Frontend**: React.js
- **Styling**: CSS
- **Drag-and-Drop**: react-dnd
- **Pagination**: Custom implementation
- **API**: FakeStore API
- **Authentication**: Google reCAPTCHA

## Folder Structure

  ├── public/ </br>
├── src/ </br>
│   ├── components/ </br>
│   │   ├── Item.js </br>
│   │   ├── ItemList.js </br>
│   │   ├── Recaptcha.js </br>
│   │   ├── SearchBar.js </br>
│   ├── App.js </br>
│   ├── App.css </br>
│   └── index.js </br>
├── package.json </br>
├── README.md


## Demo

The app is deployed on [Vercel](https://savcom-assignment.vercel.app/). 

## Installation

Follow these steps to run the project locally:

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/trupti940/savcom_assignment
   cd sav.com_assignment
2. Install dependencies:
   ```bash
   npm install
   npm run dev
   
