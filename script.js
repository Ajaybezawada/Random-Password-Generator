const keys = {
  letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  num_sym: "0123456789!@#$%^&*()_+~\`|}{[]:;?><,./-=",
  inc_chars: ""
}
const getKey = [
  function letters_yes() {
      return keys.letters[Math.floor(Math.random() * keys.letters.length)];
  },
  function num_sym() {
      return keys.num_sym[Math.floor(Math.random() * keys.num_sym.length)];
  }
];
function inc_chars() {
  return keys.inc_chars[Math.floor(Math.random() * keys.inc_chars.length)];
}
function createPassword() {
  const letters = document.getElementById("letters_yes").checked;
  const chk_letter_no = document.getElementById("letters_no").checked;
  const num_sym = document.getElementById("num_sym").checked;
  var chars1 = document.getElementById("chrs").value;
  keys.inc_chars = chars1;
  const passwordBox = document.getElementById("passwordBox");
  var min_length = parseInt(document.getElementById("length").value);
  var pass = keys.inc_chars;
  let password = "";
  var st_length = Math.floor(Math.random() * (15 - min_length) + min_length);
  while (st_length > password.length) {
      console.log(password);
      if (keys.inc_chars.length != 0) {
          let keyToAdd = inc_chars();
          var ch = keyToAdd;
          password += ch;
          pass = keys.inc_chars;
          pass = pass.replace(ch, '');
          keys.inc_chars = pass;
          continue;
      }
      if (chk_letter_no){
          var items;
          var item = 0;
          if(num_sym){
              var items = [0,1];
              item = items[Math.floor(Math.random()*items.length)];
          }
          if(item==0){
              let keyToAdd = chars1[Math.floor(Math.random() * chars1.length)];
              var ch = keyToAdd;
              password += ch;
          }
          else{
              let keyToAdd = getKey[1];
              let isChecked = document.getElementById(keyToAdd.name).checked;
              if (isChecked) {
                  password += keyToAdd();
              }
          }
          continue;
      }
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
          password += keyToAdd();
      }
  }
  passwordBox.innerHTML = password;
}