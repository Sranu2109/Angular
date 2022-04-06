import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Abc } from '../abc';
import { AbcService } from '../abc.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss']
})
export class AbcComponent implements OnInit {
  form: FormGroup;
  levelForm: FormGroup;
  id_2:string;

  desc:string;

  acti:string;

  team:number;
  abc: Abc[];

  constructor(private http: HttpClient, private router: Router, private abcService: AbcService, private fb: FormBuilder) {
    this.team=1;
    this.form = this.fb.group({

      leveL_Code: [null, Validators.required],
      
      description: [null, Validators.required],
      
      active: [''],
      
      });
   }

  ngOnInit(): void {
    this.generateabc();
  }

  generateabc() {
    this.generatelevelabc().subscribe((abcs: Abc[]) => {
      this.abc = abcs;
    }, error => {
      console.log(error);
    })
  }

  generatelevelabc() {
    return this.http.get('https://localhost:5001/api/Home/getlevel');
  }

  onSubmit() {

    var formData = new FormData();
    
    //this.form.get('Level_Code')
    
    formData.append('LEVEL_Code', this.form.controls['leveL_Code'].value);
    
    formData.append('Description', this.form.controls['description'].value);
    
    formData.append('Active', this.form.controls['active'].value);
    
    this.http
    
    .post('https://localhost:5001/api/Home/Adduser',formData)
    
    .subscribe({
    
    next: (response) => console.log(response),
    
    error: (error) => console.log(error),
    
    });
    
    }

    updatedata(a:string,b:string,c:string)

      {

      this.id_2=a;

      this.desc=b;

      this.acti=c;

      this.team=2;

      }

      hritikgill()

      {

          var formData1 = new FormData();

          formData1.append('LEVEL_Code1',this.id_2);

          formData1.append('Description1',this.form.controls['description'].value);

          formData1.append('Active1',this.form.controls['active'].value);



          this.http.post('https://localhost:5001/api/Home/updateuser',formData1).subscribe({

          next: (response) => console.log(response),

          error: (error) => console.log(error),

          });

          this.team=1;



      }


    deleteLevel( id:string)
    {
      this.http.delete("https://localhost:5001/api/Home/Deletelevel?levelcode="+id).subscribe();
    }

    editLevel( id:string, des:string, act:string)
    {
      this.http.delete("https://localhost:5001/api/Home/Updatelevel?levelcode="+id+"&description="+des+"&active="+act).subscribe();
    }

}