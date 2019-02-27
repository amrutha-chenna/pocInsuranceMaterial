import { Component, OnInit, Input } from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListComponent implements OnInit {
  @Input() item;
  expanded = false;
  submenuOptions; menusetUp;
  constructor() { }
  ngOnInit() {
    this.submenuOptions =  {
      'ImportPayments': {
        'formalName': 'Import',
        'displayName': 'Import',
        'link': '/payments/ImportPayments/paymentsImportMaint.cfmmodule=ImportPayments',
        'helpName': null,
        'helplink': null,
      },
      'SinglePayments': {
        'formalName': 'Single Pay',
        'displayName': 'Single Pay',
        'link': '/policySearch/policySearch_v30.cfm?module=payments&actionType=singlePay',
        'helpName': 'Single Pay',
        'helplink': 'payments.cfm',
       },
      'Adj': {
        'formalName': 'Adjustments',
        'displayName': 'Adjustments',
        'link': '/policy/policy.cfm?module=adjustment',
        'helpName': null,
        'helplink': null
      },
      'CompanyFinancial' : {
        'formalName': 'CompanyFinancial',
        'displayName': 'Financials',
        'link': '/company/financials/companyFinancialsLayout.cfm?module=payments',
        'helpName': null,
        'helplink': null
      },
      'PaymentPlan' : {
        'formalName': 'PaymentPlan',
        'displayName': 'Pay Plans',
        'link': '/paymentPlan/paymentPlanLayout.cfm',
        'helpName': null,
        'helplink': null
      }
    };
    this.menusetUp = {
      'Payments': ['ImportPayments', 'SinglePayments', 'Adj'],
      'IDMIMaintenance' :  ['CompanyFinancial', 'PaymentPlan']
    };
  }
  onItemSelected(item) {
    if (item.link == null) {
      this.expanded = !this.expanded;
    }
  }

}
