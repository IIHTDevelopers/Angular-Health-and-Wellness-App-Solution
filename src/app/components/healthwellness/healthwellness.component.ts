import { Component } from '@angular/core';

@Component({
  selector: 'app-health-wellness',
  templateUrl: './healthwellness.component.html',
  styleUrls: ['./healthwellness.component.css']
})
export class HealthWellnessComponent {
  loginName = '';
  userRole = '';

  doctorRecord = {
    name: 'Doc',
    specialization: 'Nutrition',
    patients: ['John Doe', 'Jane Doe']
  };

  patientRecord = {
    name: 'Pat',
    mealPlan: 'Vegetarian',
    workoutRoutine: '30 minutes cardio',
    meditationExercise: '10 minutes morning meditation'
  };

  userName = '';

  newPatient = {
    name: '',
    mealPlan: '',
    workoutRoutine: '',
    meditationExercise: ''
  };

  patients = [
    {
      name: 'John',
      mealPlan: 'Vegetarian',
      workoutRoutine: '30 minutes cardio',
      meditationExercise: '10 minutes morning meditation'
    },
    {
      name: 'Doe',
      mealPlan: 'Keto',
      workoutRoutine: '45 minutes strength training',
      meditationExercise: '15 minutes evening meditation'
    }
  ];

  login() {
    if (this.userRole === 'doctor' && this.loginName.toLowerCase() === this.doctorRecord.name.toLowerCase()) {
      this.userName = this.doctorRecord.name;
    } else if (this.userRole === 'patient') {
      const patient = this.patients.find(p => p.name.toLowerCase() === this.loginName.toLowerCase());
      if (patient) {
        this.userName = patient.name;
      } else {
        this.userName = '';
        alert('Invalid credentials. Please try again.');
      }
    } else {
      this.userName = '';
      alert('Invalid credentials. Please try again.');
    }
  }

  addOrUpdatePatient() {
    const index = this.patients.findIndex(patient => patient.name.toLowerCase() === this.newPatient.name.toLowerCase());
    if (index > -1) {
      this.patients[index] = { ...this.newPatient };
    } else {
      this.patients.push({ ...this.newPatient });
    }
    this.newPatient = { name: '', mealPlan: '', workoutRoutine: '', meditationExercise: '' };
  }

  getPatientByName(name: string) {
    return this.patients.find(p => p.name.toLowerCase() === name.toLowerCase());
  }
}
