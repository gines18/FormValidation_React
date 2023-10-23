import { useRef, useState, useEffect} from "react";

import { FaBeer, FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_1]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]) •{8, 24}$/;

function Register() {
const useRef = useRef();
const errRef = useRef()

const [user, setUser] = useState;
const [validName, setValidName] = useState(false);
const [userFocus, setUserFocus] = useState(false)
  return (
    <>
        <p>hello <FaBeer/></p>
    </>
  )
  }

export default Register 
