import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';
  genders=['Male','Female'];

  forBiddenNames=['taj','jat','moi'];

  signUpForm!:FormGroup;

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'userName':new FormControl('',[Validators.required]),
      'password':new FormControl('',Validators.required),
      'gender':new FormControl('Male'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }

  addHobbies(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  // forbiddenNames(control: FormControl):{[s:string]:boolean  }{
  //   if(this.forBiddenNames.indexOf(control.value)!==-1 ){
  //     return {'nameIsForbidden':true};
  //   }
  // }
}
