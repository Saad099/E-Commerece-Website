import { Component } from '@angular/core';
import { Platform } from "@ionic/angular";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform:Platform,private
    router:Router,private location:Location) {

      this.platform.ready(),then(()=>{
        this.platform.backButton.subscribeWithPriority
        (999999,()=>{
          var url = this.router['routerState'].snapshot.
          url;
          if(url != "/home")
          {
            if(window.confirm("Do you want to go back?"))
          {
            this.location.back();
          }
        }
        })
      })





    }
    goto(url)
    {
      this.router.navigate([url]);
    }

}

