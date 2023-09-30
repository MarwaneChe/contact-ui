import {Component, OnInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'mobile', 'mail', 'address', 'additionalAddress', 'city', 'postalCode', 'dateOfBirth', 'creationDate', 'updateDate', 'suppression', 'update'];
  contacts: any;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private liveAnnouncer: LiveAnnouncer,
              private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.contactList().subscribe(conts => {
      this.contacts = new MatTableDataSource(conts);
      this.contacts.sort = this.sort;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  filterData(event: any) {
    this.contacts.filter = event.target.value;
  }

  deleteContact(contact: Contact) {
    let conf = confirm("Voulez-vous supprimer le contact : " + contact.firstName);
    if (conf) {
      this.contactService.deleteContact(contact.id).subscribe(() => {
        this.loadContacts();
      });
    }
    console.log(contact)
  }
}
