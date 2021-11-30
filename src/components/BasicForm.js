import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    inputHasError: firstNameHasError,
    valueIsValid: firstNameIsValid,
    inputChangeHandler: firstNameInputHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    inputHasError: lastNameHasError,
    valueIsValid: lastNameIsValid,
    inputChangeHandler: lastNameInputHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    inputHasError: emailHasError,
    valueIsValid: emailIsValid,
    inputChangeHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (firstNameHasError || lastNameHasError || emailHasError) {
      return;
    }

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = !firstNameHasError
    ? "form-control"
    : "form-control invalid";

  const lastNameInputClasses = !lastNameHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameInputHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First name cannot be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameInputHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please provide a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
