import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

const materialImports = [
  MatDialogModule,
  MatButtonModule
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
