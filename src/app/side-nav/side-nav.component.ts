import { Component, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  openSideNav = true;
  test = 'ammu';
  constructor() { }
  menusetUp; menuOptions; submenuOptions;
  ngOnInit() {
    this.menuOptions = [
      {
        'formalName': 'IDMIMaintenance',
        'displayName': 'IDMI_Maint',
        'link': null,
        'helpName': null,
        'helplink': null
    }, {
        'formalName': 'Financial',
        'displayName': 'Financial',
        'link': null,
        'helpName': 'Financial',
        'helplink': 'financial.cfm',
    },
      {
          'formalName': 'Payments',
          'displayName': 'Payments',
          'link': null,
          'helpName': 'Payments',
          'helplink': 'payments.cfm',
      },
      {
          'formalName': 'Coverage',
          'displayName': 'Coverages',
          'link': '/coverages/coverage.cfm?module=coverage',
          'helpName': null,
          'helplink': null,
      },
      {
        'formalName' : 'New Quote',
        'displayName' : 'Quote',
        'link' : '/quote/quoteLayout.?module=quote',
        'helpName' : 'Quote',
        'helplink' : 'quote.cfm'
      }
    ];
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
  }
