import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  studentEntry:FormGroup;
  dataList:any=Observable<any>;
  userId="";
  constructor(private _fb:FormBuilder,private studentService:StudentService) {
    this.studentEntry=_fb.group({
      name:'',
      phone:'',
      email:'',
    })
  }

  ngOnInit(): void{
    debugger;
    this. GetAllData();
  }

  SaveData(){
     if(this.userId=='' || this.userId==undefined){
      this.Save();
      this.GetAllData();
     }else{
      this.UpdateDataSave();
      this.GetAllData();
     }

     
  }
  Save(){
    debugger;
    var DataList={
      "name":this.studentEntry.value.name,
      "phone":this.studentEntry.value.phone,
      "email":this.studentEntry.value.email,
    }
   
    this.studentService.SaveData(this.studentEntry.value).subscribe((data)=>{
      alert("Save !!!");
      this.studentEntry.reset();
    });
  }
  GetAllData(){
    this.studentService.GetAll().subscribe((data)=>{
      debugger;
    
        this.dataList=data;
    })    
  }

  Reset(){
    this.studentEntry.reset();
  }
  Update(obj:any){
  debugger;
  this.studentEntry.patchValue(obj);
  this.userId=obj._id;
  }


  UpdateDataSave(){
    this.studentService.UpdateData( this.userId, this.studentEntry.value).subscribe((aDta)=>{
      debugger;
      alert("Update Successfully !!!");
    });
    this.studentEntry.reset();
  }


  Delete(obj:any){
     this.studentService.DeleteData(obj._id).subscribe((data)=>{
      debugger;
      alert("Delete Successfully !!!");
     })
  }

}


