import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();

  availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Sentadillas', duration: 30, calories: 8 },
    {
      id: 'touch-toes',
      name: 'Tocar los tobillos',
      duration: 180,
      calories: 15,
    },
    {
      id: 'side-lunges',
      name: 'Jumping jacks (saltos)',
      duration: 120,
      calories: 18,
    },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];
  private runningExercise: Exercise;
  private exercises: Exercise[] = [];

  constructor() {}

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      (ex) => ex.id === selectedId
    );
    console.log(this.runningExercise);
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.exercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getCurrentExercise() {
    return { ...this.runningExercise };
  }

  getAllExercises() {
    return this.exercises.slice();
  }
}
