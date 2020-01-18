var form = document.forms['myform'];
form.iq[0].onfocus = function () {
    form.validityDate.disabled  = false;
}
form.iq[1].onfocus = function () {
    form.validityDate.disabled  = true;
}
