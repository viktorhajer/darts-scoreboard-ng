import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';


const materialImports = [
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule
];

@NgModule({
  imports: materialImports,
  exports: materialImports,
})
export class MaterialModule {
}

// Copyright 2018 Google Inc. All Rights Reserved.
//   Use of this source code is governed by an MIT-style license that
//   can be found in the LICENSE file at http://angular.io/license
