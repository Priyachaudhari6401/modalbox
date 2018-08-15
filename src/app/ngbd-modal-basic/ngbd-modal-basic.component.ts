import { Component, AfterViewChecked } from '@angular/core';

import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { Content, Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-ngbd-modal-basic',
  templateUrl: './ngbd-modal-basic.component.html',
  styleUrls: ['./ngbd-modal-basic.component.css']
})
export class NgbdModalBasicComponent {
 
  closeResult: string;
  constructor(private modalService: NgbModal) { }






   

 
  ngOnInit(content: any)
  {


    
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      
  
  
  
      


    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
    
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      
    } else {
      return  `with: ${reason}`;
    }
  }



  

}
