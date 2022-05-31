
import useInput from '../utils/hooks/useInput';
const SimpleInput = (props) => {

  const {
    value:enteredName,
    isValid:enteredNameIsValid,
    hasError:nameInputHasError,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler:nameBlurChangeHandler,
  } =  useInput((value)=> value.trim() !== '' && value.length >=3);

  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurChangeHandler,
  } =  useInput((value)=> value.includes('@'))

  const {
    value:enteredPassword,
    isValid:enteredPasswordIsValid,
    hasError:passwordInputHasError,
    valueChangeHandler:passwordChangeHandler,
    inputBlurHandler:passwordBlurChangeHandler,
  } =  useInput((value)=> value.length > 5 && value.length<10 && value.trim() !== '')

  let formIsValid = false
  if(enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid){
    formIsValid = true
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    
     enteredEmail=''
    if(!enteredNameIsValid) {
      return
    }
    
   
  };

  const nameInputClasses =  nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
  const passwordInputClasses = passwordInputHasError ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
        {nameInputHasError && <p className='ssss'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
      <label htmlFor='name'>Your Email</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurChangeHandler}
        />
         {emailInputHasError && <p className='ssss'>Email entred empty none</p>}
      </div>
      <div className={passwordInputClasses}>
      <label htmlFor='name'>Your password</label>
        <input
          type='text'
          id='name'
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurChangeHandler}
        />
         {passwordInputHasError && <p className='ssss'>Мынча кыскаааа пароль🤔 (5-10)</p>}
      </div>
      <div className='form-actions'>
        <button className={!formIsValid ? 'sss' : 'buttonfalse'} disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;




