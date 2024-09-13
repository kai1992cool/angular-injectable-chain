import { Injectable } from "@angular/core";
import { CoreService } from "./core.service";

@Injectable({
    providedIn: 'root',
  }) 
  export class OuterService {
    constructor(private core: CoreService) {
      console.log("Initialized Outer e");
    }
  }
   