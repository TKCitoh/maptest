// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

let i;
let num = 0;

for(i = 2; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');


Rails.start()
Turbolinks.start()
ActiveStorage.start()
