import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule, MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule ({
    // tslint:disable-next-line:max-line-length
    imports: [ MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatMenuModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatIconModule, MatSidenavModule, MatListModule],
    // tslint:disable-next-line:max-line-length
    exports: [ MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatMenuModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatIconModule, MatSidenavModule, MatListModule]
})

export class MaterialModule {
}

