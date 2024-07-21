// // "use client ";
// import React, { useState, useEffect } from "react";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import { app } from "../lib/firebaseconfig";
// import { Navigate } from "react-router-dom";

// export default function Login() {
//   const [phoneNumber, setphoneNumber] = useState("");
//   const [otp, setotp] = useState("");
//   const [confermationresult, setconfirmationresult] = useState("");
//   const [otpsent, setotpsent] = useState("");
//   const auth = getAuth(app);
//   const router = Navigate();
//   useEffect(() => {
//     (window.recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       {
//         size: "normal",
//         callback: (response) => {},
//         "expired-callback": () => {},
//       }
//     )) },
//       [auth]
//  );

//   const handlephonenumberchange = (e) => {
//     setphoneNumber(e.target.value);
//   };
//   const handleotpchange = (e) => {
//     setotp(e.target.value);
//   };

//   const handlesendotp = async () => {
//     try {
//       const formetedPhonenumber = `+${phoneNumber.replace(/\D/g, "")}`;
//       const confirmation = await signInWithPhoneNumber(
//         auth,
//         formetedPhonenumber,
//         window.recaptchaVerifier
//       );
//       setconfirmationresult(confirmation);
//       setotpsent(true);
//       setphoneNumber("");
//       alert("otp has been sent");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handltpsubmit = async () => {
//     try {
//       await confermationresult.confirm(otp);
//       router.push("/home");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       {otpsent ? <div id="recaptcha-container"></div> : null}
//       <input
//         type="tel"
//         value={phoneNumber}
//         onChange={handlephonenumberchange}
//         placeholder="enter the phone number"
//       />

//       <input
//         type="text"
//         value={otp}
//         onChange={handleotpchange}
//         placeholder="enter otp"
//       />
//       <button
//         onClick={otpsent ? handltpsubmit : handlesendotp}
//         style={{ backgroundColor: otpsent ? "green" : "red" }}
//       >
//         {otpsent ? "sunmit otp" : "send otp"}
//       </button>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "../lib/firebaseconfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phoneNumber, setphoneNumber] = useState("");
  const [otp, setotp] = useState("");
  const [confermationresult, setconfirmationresult] = useState(null);
  const [otpsent, setotpsent] = useState(false);
  const auth = getAuth(app);
  const navigate = useNavigate();

  useEffect(() => {
    // Make sure recaptchaVerifier is set up correctly
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container', // ID of the element where reCAPTCHA will be rendered
      {
        size: 'normal',
        callback: (response) => {},
        'expired-callback': () => {},
      },
      auth
    );

    return () => {
      // Clean up recaptchaVerifier if needed
      window.recaptchaVerifier = null;
    };
  }, [auth]);

  const handlephonenumberchange = (e) => {
    setphoneNumber(e.target.value);
  };

  const handleotpchange = (e) => {
    setotp(e.target.value);
  };

  const handlesendotp = async () => {
    try {
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, "")}`;
      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        window.recaptchaVerifier
      );
      setconfirmationresult(confirmation);
      setotpsent(true);
      setphoneNumber("");
      alert("OTP has been sent");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handltpsubmit = async () => {
    try {
      await confermationresult.confirm(otp);
      navigate("/home");
    } catch (error) {
      console.error("Error confirming OTP:", error);
    }
  };

  return (
    <div>
      {otpsent && <div id="recaptcha-container"></div>}
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlephonenumberchange}
        placeholder="Enter phone number"
      />
      <input
        type="text"
        value={otp}
        onChange={handleotpchange}
        placeholder="Enter OTP"
      />
      <button
        onClick={otpsent ? handltpsubmit : handlesendotp}
        style={{ backgroundColor: otpsent ? "green" : "red" }}
      >
        {otpsent ? "Submit OTP" : "Send OTP"}
      </button>
    </div>
  );
}
