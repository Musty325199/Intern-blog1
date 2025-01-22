import {useState} from 'react'

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
    const [usernameColor, setUsernameColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
  
    const validate = (e) => {
      e.preventDefault()
  
      if(username.length > 8){
          setUsernameError("")
          setUsernameColor('violet')
      }
      else{
          setUsernameError("Username must be greater than 8 digits")
          setUsernameColor('red')
      }
  
      if(email.includes('@gmail')){
          setEmailError("")
          setEmailColor('violet')
      }
      else{
          setEmailError("Email must contains @gmail")
          setEmailColor('red')
      }
  
      if(password.length > 8){
          setPasswordError("")
          setPasswordColor('violet')
      }
      else{
          setPasswordError("password must be greater than 8 digits")
          setPasswordColor('red')
      }
  
      if(password !== '' && password == confirmPassword){
          setConfirmPasswordError('')
          setConfirmPasswordColor('violet')
      }
      else{
          setConfirmPasswordError("password didn't match")
          setConfirmPasswordColor('red')
      }
  
    }


  return (
    <div className="w-full md:w-[70%] p-5 md:p-10 items-center mx-5 md:mx-[15rem] flex justify-center">
    <div className="rounded shadow-lg  border-violet-950 border-2 md:m-10 w-full mr-10 my-5 p-5 md:w-2/4 flex flex-col gap-5 items-center">
      <h3 className='text-2xl font-bold text-violet-950'> Sign up</h3>
      <form className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-2">
      <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ borderColor: usernameColor }}
          className="w-full h-10 border-b outline-0"
        />
        <p className="text-center text-red-500">{usernameError}</p>
      </div>
      <div className="flex flex-col gap-2">
      <input
          type="email"
          placeholder="Enter valid email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: emailColor }}
          className="w-full outline h-10 border-b outline-0"
        />
        <p className="text-center text-red-500">{emailError}</p>
      </div>
      <div className="flex flex-col gap-2">
      <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderColor: passwordColor }}
          className="w-full outline h-10 border-b outline-0"
        />
        <p className="text-center text-red-500">{passwordError}</p>
      </div>
      <div className="flex flex-col gap-2">
      <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ borderColor: confirmPasswordColor }}
          className="w-full outline h-10 border-b outline-0"
        />
        <p className="text-center text-red-500">{confirmPasswordError}</p>
      </div>
      <input type="submit" placeholder="Submit" onClick={validate}  className="mx-10 bg-violet-950 border-none text-white p-2 rounded"/>
      </form>
    </div>
  </div>
  )
}

export default LoginPage