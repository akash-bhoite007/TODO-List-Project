import { Component, DebugElement } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-project';
  itemList: any[] = [];
  editFlag: boolean = false;
  itemLengthFlag: boolean = false;
  itemCharLengthFlag: boolean = false;
  itemIndex: number = 0;

  form = {
    itemName: '',
  };
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.itemLengthFlag = false;
    if (this.itemList.length < 5) {
      this.itemList.push({
        itemName: this.form.itemName,
      })
      localStorage.setItem("items", JSON.stringify(this.itemList));
      (<HTMLInputElement>document.getElementById('itemName')).value = "";
    } else {
      this.itemLengthFlag = true;
    }
  }

  onEdit(val: any, i: any) {
    console.log(val, i);
    (<HTMLInputElement>document.getElementById('itemName')).value = val;
    this.itemIndex = i;
    this.editFlag = true;

  }
  onDelete(val: any, i: any) {
    console.log(val, i);
    this.itemList.splice(i, 1);

  }
  onChange(e: any) {

    this.itemLengthFlag = false;
    this.itemCharLengthFlag = false;
    if (e.target.value.length > 19) {
      this.itemCharLengthFlag = true;
    } else {
      this.itemCharLengthFlag = false;
    }
  }
  onUpdate() {
    this.editFlag = false;
    this.itemList[this.itemIndex].itemName = this.form.itemName;
    localStorage.setItem("items", JSON.stringify(this.itemList));
    (<HTMLInputElement>document.getElementById('itemName')).value = "";
  }
}
