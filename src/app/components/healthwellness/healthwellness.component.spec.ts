import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthWellnessComponent } from './healthwellness.component';
import { FormsModule } from '@angular/forms';

describe('HealthwellnessComponent', () => {
  let component: HealthWellnessComponent;
  let fixture: ComponentFixture<HealthWellnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthWellnessComponent],
      imports: [FormsModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HealthWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have "Login" as heading', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Login');
    });

    it('should have name input field', () => {
      expect(fixture.nativeElement.querySelector('input[name="name"]')).toBeTruthy();
    });

    it('should display "Doctor Dashboard - Welcome" heading when userRole is doctor and userName is set', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const doctorDashboardHeading = compiled.querySelector('h3');
      expect(doctorDashboardHeading).toBeTruthy();
      expect(doctorDashboardHeading.textContent).toContain(`Doctor Dashboard - Welcome ${component.userName}`);
    });

    it('should display "Specialization: " as a paragraph when userRole is doctor and userName is set', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const paragraphs = compiled.querySelectorAll('p');
      let foundSpecialization = false;
      paragraphs.forEach((paragraph: { textContent: string | string[]; }) => {
        if (paragraph.textContent.includes('Specialization: ')) {
          foundSpecialization = true;
        }
      });
      expect(foundSpecialization).toBeTruthy();
    });

    it('should display "Add or Update Patient Details" as heading h4', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const doctorDashboardHeading = compiled.querySelector('h4');
      expect(doctorDashboardHeading).toBeTruthy();
      expect(doctorDashboardHeading.textContent).toContain(`Add or Update Patient Details`);
    });

    it('should have patientName input field', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(fixture.nativeElement.querySelector('input[name="patientName"]')).toBeTruthy();
    });

    it('should have mealPlan input field', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(fixture.nativeElement.querySelector('input[name="mealPlan"]')).toBeTruthy();
    });

    it('should have workoutRoutine input field', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(fixture.nativeElement.querySelector('input[name="workoutRoutine"]')).toBeTruthy();
    });

    it('should have meditationExercise input field', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(fixture.nativeElement.querySelector('input[name="meditationExercise"]')).toBeTruthy();
    });

    it('should have Submit type button', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(fixture.nativeElement.querySelector('button')).not.toBeNull();
    });

    it('should display "Patient List" as a heading when userRole is doctor and userName is set', () => {
      component.userName = 'Dr. Jane Doe';
      component.userRole = 'doctor';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const headings = compiled.querySelectorAll('h4');
      let found = false;
      headings.forEach((heading: { textContent: string | string[]; }) => {
        if (heading.textContent.includes('Patient List')) {
          found = true;
        }
      });
      expect(found).toBeTruthy();
    });

    it('should display "Patient Dashboard - Welcome" as a heading when userRole is patient and userName is set', () => {
      component.userName = 'John';
      component.userRole = 'patient';
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const patientDashboardHeading = compiled.querySelector('h3');
      expect(patientDashboardHeading.textContent).toContain(`Patient Dashboard - Welcome ${component.userName}`);
    });

    it('should display "Meal Plan:" as a paragraph when userRole is patient', () => {
      component.userName = 'John';
      component.userRole = 'patient';
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const mealPlanParagraph = Array.from(compiled.querySelectorAll('p'))
        .find((p: any) => p.textContent.includes('Meal Plan:')) as HTMLParagraphElement | undefined;
      expect(mealPlanParagraph).toBeTruthy();
      expect(mealPlanParagraph?.textContent).toContain('Meal Plan:');
    });

    it('should display "Workout Routine:" as a paragraph when userRole is patient', () => {
      component.userName = 'John';
      component.userRole = 'patient';
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const workoutRoutineParagraph = Array.from(compiled.querySelectorAll('p'))
        .find((p: any) => p.textContent.includes('Workout Routine:')) as HTMLParagraphElement | undefined;;
      expect(workoutRoutineParagraph).toBeTruthy();
      expect(workoutRoutineParagraph?.textContent).toContain('Workout Routine:');
    });

    it('should display "Meditation Exercise:" as a paragraph when userRole is patient', () => {
      component.userName = 'John';
      component.userRole = 'patient';
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const meditationExerciseParagraph = Array.from(compiled.querySelectorAll('p'))
        .find((p: any) => p.textContent.includes('Meditation Exercise:')) as HTMLParagraphElement | undefined;;
      expect(meditationExerciseParagraph).toBeTruthy();
      expect(meditationExerciseParagraph?.textContent).toContain('Meditation Exercise:');
    });
  });
});
