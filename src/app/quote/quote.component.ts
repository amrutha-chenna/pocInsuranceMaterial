import { Component, OnInit } from '@angular/core';
import { ReadJsonService} from '../read-json.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  today  = new Date();
  quote: any = {
    'effectiveDate': '',
    'policyType': '',
    'state': '',
    'company': ''
  };
  displayForm = true;
  policyType; data; state; states = []; companies;
  constructor(private r: ReadJsonService, private router: Router, private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.quote.effectiveDate = this.today;
    this.r.getJson().subscribe((data) => {
      this.data = data;
       this.policyType =  data['policyType'];
     });
  }
  calculateState(test) {
    this.states = [];
    this.quote.state = null;
    this.data[test].filter((item) => {
      this.states.push(item.state);
    });
  }
  calculateCompany(state, policy) {
    this.quote.company = '';
    this.data[policy].filter((item) => {
      if (item['state']['stateCode'] === state['stateCode']) {
        this.companies = item['Company'];
      }
    });
  }
  te(q) {
    this.displayForm = false;
console.log(q.value);
this.router.navigate(['./', q.value.policyType, q.value.state.stateCode, q.value.company], {relativeTo: this.currentRoute});
  }
}

