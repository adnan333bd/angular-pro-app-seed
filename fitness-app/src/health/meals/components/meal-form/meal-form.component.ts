import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meal } from 'src/health/shared/services/meals/meals.service';

@Component({
    selector: 'app-meal-form',
    templateUrl: 'meal-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MealFormComponent implements OnInit {

    @Output()
    create = new EventEmitter<Meal>();

    mealForm = this.fb.group({
        name: ['', Validators.required],
        ingredients: this.fb.array([''])
    });
    constructor(private fb: FormBuilder) { }

    get ingredients() {
        return this.mealForm.get('ingredients') as FormArray;
    }

    ngOnInit() { }

    onCreateMeal() {
        if (this.mealForm.valid) {
            this.create.emit(this.mealForm.value);
        }
    }

    onAddIngredient() {
        this.ingredients.push(this.fb.control(''));
    }

    removeIngredients(index: number) {
        this.ingredients.removeAt(index);
    }

    get nameRequired() {
        return this.mealForm.get('name').touched &&
            this.mealForm.get('name').hasError('required');
    }
}