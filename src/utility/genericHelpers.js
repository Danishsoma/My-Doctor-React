export  function dateConverter(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}

export function passwordValidation(password){
    if(checkEmpty(password)){
      return 'Must not be empty'
     } else if (!(/[A-Z]/.test(password))) {
        return 'Must contain uppercase letter.'
     } else if (!(/[a-z]/.test(password))){
        return 'Must contain lowercase letter.'
     } else if(!(/[0-9]/.test(password))){
        return 'Must contain at least one number'
     } else if(!(/^.{6,}$/.test(password))){
        return 'Must contain at least 6 characters.'
     } else if(!(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password))){
        return 'Must contain at least one special character.'
     }
     else{
      return ''
     }
}

export function checkEmpty(field){
    return !(/(.|\s)*\S(.|\s)*/.test(field))
  }

export function validEmail(email){
   let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (!email.match(mailformat)) {
      return 'please enter a valid email'
    }
}

export function validMobileNumber(mobileNumber){
   let mobileFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   if (!mobileNumber.match(mobileFormat)){
      return 'please enter a valid mobile number'
     }
}

export default {
    dateConverter,
    passwordValidation,
    checkEmpty,
    validEmail,
    validMobileNumber
}