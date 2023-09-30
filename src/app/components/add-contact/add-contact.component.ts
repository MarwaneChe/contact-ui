import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, Validator} from '@angular/forms';
import {ContactService} from "../../services/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private contactService :ContactService,
              private router: Router) {
    this.initContactForm();
  }

  ngOnInit(): void {
  }


  initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      mobile: ['',[Validators.min(10),Validators.minLength(10)]],
      mail: ['',Validators.email],
      address: ['',Validators.maxLength(38)],
      additionalAddress: '',
      city: '',
      postalCode: '',
      dateOfBirth: ''
    });
  }

  onSubmitContactForm(): void {
    debugger
    this.contactService.addContact(this.contactForm.value).subscribe(cont=>{
      this.router.navigate(['contacts']);
    });
  }


}
