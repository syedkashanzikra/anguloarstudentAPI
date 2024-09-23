
---

# Student Management System (Frontend)

This is the **Angular frontend** for a Student Management System that interacts with an **ASP.NET Core Web API** backend. It provides a user interface to perform **CRUD** (Create, Read, Update, Delete) operations on student data.

## Features

- **Add Student**: Use a form to create new students.
- **View Students**: Display a list of students in a table.
- **Delete Student**: Remove students with a delete button.
- **Bootstrap Styling**: The UI is styled using Bootstrap for a responsive, modern design.
- **Form Validation**: The form has validation rules for proper input (e.g., required fields, email format).

## Technologies Used

- **Angular**: Framework for building the frontend application.
- **Reactive Forms**: For form handling and validation.
- **Bootstrap**: Used for styling the UI.
- **TypeScript**: Programming language for the Angular project.
- **HttpClientModule**: For making HTTP requests to the backend API.

## Setup Instructions

### Prerequisites

- **Node.js** (version 12 or higher)
- **Angular CLI** (Globally installed via `npm`)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/student-angular-app.git
   cd student-angular-app
   ```

2. **Install dependencies**:
   After navigating to the project directory, run the following command to install all the necessary dependencies:
   ```bash
   npm install
   ```

3. **Run the Angular development server**:
   Start the Angular development server with the following command:
   ```bash
   ng serve
   ```

4. **Open the application**:
   Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

   This will open the application where you can manage students.

### Configuration

Make sure your Angular app is pointing to the correct API URL. In `student.service.ts`, update the `apiUrl` to the correct URL of your ASP.NET Core Web API:

```typescript
private apiUrl = 'https://localhost:5001/api/student';
```

### Project Structure

- **src/app/components/student-list**: Component for displaying the list of students and the form for adding students.
- **src/app/services/student.service.ts**: Service for communicating with the backend API (e.g., fetching students, adding, and deleting students).
- **src/app/models/student.model.ts**: Model representing the `Student` object.

## Usage

- **Add Student**: Fill out the form with the student's name and email, then click "Create Student" to add a new student.
- **Delete Student**: Use the delete button next to each student's name to remove them from the system.



## License

This project is licensed under the MIT License.

---
