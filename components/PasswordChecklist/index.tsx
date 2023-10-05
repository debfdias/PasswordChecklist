import { useState } from "react"
//import { BsCheckLg } from "react-icons/bs"
import { MdClose, MdOutlineCheck } from "react-icons/md"

interface PasswordRequirements {
  hasSpecialChar?: boolean
  hasNumber?: boolean
  hasUppercase?: boolean
  hasNoConsecutiveLetters?: boolean
}

export default function PasswordChecklist({
  hasSpecialChar,
  hasNumber,
  hasUppercase,
  hasNoConsecutiveLetters,
}: PasswordRequirements) {
  const [password, setPassword] = useState<string>("")
  const [validSpecialChar, setValidSpecialChar] = useState<boolean>(false)
  const [validNumber, setValidNumber] = useState<boolean>(false)
  const [validUpperCase, setValidUpperCase] = useState<boolean>(false)
  const [validNoConsecutiveLetters, setValidNoConsecutiveLetters] =
    useState<boolean>(false)

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const pass = e.currentTarget.value
    setPassword(e.currentTarget.value)

    //if has upper case
    if (/[A-Z]/.test(pass)) {
      setValidUpperCase(true)
    } else {
      setValidUpperCase(false)
    }

    //if has number
    if (/\d/.test(pass)) {
      setValidNumber(true)
    } else {
      setValidNumber(false)
    }

    //if has special char
    if (/[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g.test(pass)) {
      setValidSpecialChar(true)
    } else {
      setValidSpecialChar(false)
    }

    //if has no consecutive letter
    if (pass.length === 1) {
      setValidNoConsecutiveLetters(true)
    } else if (pass.length > 1) {
      console.log(
        pass.charCodeAt(pass.length - 1),
        pass.charCodeAt(pass.length - 2)
      )

      //is consecutive, do not allow it
      if (
        pass.charCodeAt(pass.length - 1) - pass.charCodeAt(pass.length - 2) ===
        1
      ) {
        setValidNoConsecutiveLetters(false)
      } else {
        setValidNoConsecutiveLetters(true)
      }
    } else {
      setValidNoConsecutiveLetters(false)
    }
  }

  return (
    <div className="mb-4">
      <div className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
        Password {password}
      </div>

      <input
        id="password"
        name="password"
        type="password"
        className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 text-gray-700 bg-gray-50"
        value={password}
        onChange={handleChange}
      />
      {/* Check if has special character */}
      {hasSpecialChar && (
        <div className="flex gap-2 items-center pt-4">
          <div
            className={`${
              validSpecialChar ? "bg-green-500" : "bg-red-500"
            } rounded-full h-6 w-6 flex items-center justify-center`}
          >
            {" "}
            {validSpecialChar ? <MdOutlineCheck /> : <MdClose />}{" "}
          </div>
          <div className="text-gray-500 text-sm">
            Has a special character !@#$%&
          </div>
        </div>
      )}

      {/* Check if has number */}
      {hasNumber && (
        <div className="flex gap-2 items-center pt-4">
          <div
            className={`${
              validNumber ? "bg-green-500" : "bg-red-500"
            } rounded-full h-6 w-6 flex items-center justify-center`}
          >
            {" "}
            {validNumber ? <MdOutlineCheck /> : <MdClose />}{" "}
          </div>
          <div className="text-gray-500 text-sm">Has a number</div>
        </div>
      )}

      {/* Check if has an uppercase */}
      {hasUppercase && (
        <div className="flex gap-2 items-center pt-4">
          <div
            className={`${
              validUpperCase ? "bg-green-500" : "bg-red-500"
            } rounded-full h-6 w-6 flex items-center justify-center`}
          >
            {" "}
            {validUpperCase ? <MdOutlineCheck /> : <MdClose />}{" "}
          </div>
          <div className="text-gray-500 text-sm">Has an uppercase letter</div>
        </div>
      )}

      {/* Check if has no consecutive letter */}
      {hasNoConsecutiveLetters && (
        <div className="flex gap-2 items-center pt-4">
          <div
            className={`${
              validNoConsecutiveLetters ? "bg-green-500" : "bg-red-500"
            } rounded-full h-6 w-6 flex items-center justify-center`}
          >
            {" "}
            {validNoConsecutiveLetters ? <MdOutlineCheck /> : <MdClose />}{" "}
          </div>
          <div className="text-gray-500 text-sm">
            Has no consecutive letters
          </div>
        </div>
      )}
    </div>
  )
}
