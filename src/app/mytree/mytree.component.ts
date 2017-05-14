import { Component, OnInit } from '@angular/core';

import {Relative} from './relative'
 

@Component({
  selector: 'app-mytree',
  templateUrl: './mytree.component.html',
  styleUrls: ['./mytree.component.css']
})

export class MytreeComponent implements OnInit {

  constructor() { }

public relation: Relative;

  ngOnInit(){
    this.relation={
      selectedRel:'',
    }
  }

  name='Dilli Raja'
  addChild='Add Child'

relatives=[{'rel':"Choose your Relative"},{'rel':"Add Father"},{'rel':"Add Partner"},{'rel':"Add Child"},{'rel':"Add Family Friend"}];
selectedRel=this.relatives[2];

onSelect(relative){
   // this.selectedRel = relative;
   console.log(relative.rel);
  }

}
