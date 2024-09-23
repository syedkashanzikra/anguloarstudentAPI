import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  studentForm!: FormGroup; // Reactive form

  constructor(private studentService: StudentService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getStudents(); // Get all students
    this.initForm();    // Initialize the form
  }

  // Get all students
  getStudents() {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

  // Initialize the form
  initForm() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // Name field
      email: ['', [Validators.required, Validators.email]]        // Email field
    });
  }

  onDeleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {  // Confirm deletion
      this.studentService.deleteStudent(id).subscribe(() => {
        this.students = this.students.filter(student => student.id !== id);  // Update the list locally
      });
    }
  }

  // Submit form and add a new student
  onSubmit() {
    if (this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      this.studentService.addStudent(newStudent).subscribe(() => {
        this.getStudents(); // Refresh student list after adding
        this.studentForm.reset(); // Clear the form after submission
      });
    }
  }
}
