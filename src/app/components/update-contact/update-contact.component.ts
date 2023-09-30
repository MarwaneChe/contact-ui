import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  contactUpDateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.initContactForm();
  }

  ngOnInit(): void {
    //this.initContactForm();
  }

  initContactForm(): void {
    this.contactService.getContactById(this.activatedRouter.snapshot.params['id']).subscribe(cont => {
        this.contactUpDateForm = this.formBuilder.group({
          firstName: [cont.firstName, Validators.required],
          lastName: [cont.lastName, Validators.required],
          mobile: [cont.mobile, [Validators.min(10), Validators.minLength(10)]],
          mail: [cont.mail, Validators.email],
          address: [cont.address, Validators.maxLength(38)],
          additionalAddress: cont.additionalAddress,
          city: cont.city,
          postalCode: cont.postalCode,
          dateOfBirth: cont.dateOfBirth,
          id:cont.id,
          creationDate:cont.creationDate
        });
      }
    )

  }

  onSubmitContactUpDateForm() {
    debugger
    this.contactService.updateContact(this.contactUpDateForm.value).subscribe(cont=>{
      this.router.navigate(['contacts']);
    });
  }
}
