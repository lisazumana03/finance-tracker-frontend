export default function Register() {

  return (
    <div>
      <h1>Register Page</h1>
      <form className="register-form">
        <label>Full Name:</label>
        <input type="text" name="fullName" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label> Type Password </label>
        <input type="password" name="password" required />
        <label> Confirm Password </label>
        <input type="password" name="confirmPassword" required />
        <label> Phone Number: </label>
        <input type="tel" name="phoneNumber" required />
        <label> Currency: </label>
        <input type="text" name="currency" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}