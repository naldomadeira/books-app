const formElements = document.getElementsByClassName('form_delete');

// foreach form of deletion add event confirm
for(var i = 0 ; i < formElements.length; i++) {
  formEl = formElements[i];
  formEl.addEventListener('submit', event => {
    event.preventDefault();
  
    let result = confirm('Are you sure you want to delete this item?');

    if (result) {
        formEl.submit();
    }
  });
}

//onsubmit="return confirm('Are you sure you want to delete this item?');"

function validate() {
  const name = document.querySelector('input[name=title]').value;
  const url = document.querySelector('input[name=url]').value;
  const description = document.querySelector('textarea[name=description').value;

  if (name.length > 0 && url.length > 0 && description.length > 0) {
    return true;
  } else {
    alert('fields required');
    return false;
  }
}

