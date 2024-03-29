import Link from "next/link";
function Login() {
  return (
    <>
      <div className="body">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form>
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button style={{ color: "black" }}>Log In</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .body {
            height: 100vh;
            margin-top: 60px !important;
            postion: relative;
            width: 70%;
            margin: 0 auto;
            background-color: #080710;
          }
          .background {
            width: 430px;
            height: 420px;
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 70%;
          }
          .background .shape {
            height: 200px;
            width: 200px;
            position: absolute;
            border-radius: 50%;
          }
          .shape:first-child {
            background: linear-gradient(#1845ad, #23a2f6);
            left: -80px;
            top: -80px;
          }
          .shape:last-child {
            background: linear-gradient(to right, #ff512f, #f09819);
            right: -30px;
            bottom: -80px;
          }
          form {
            height: 420px;
            width: 400px;
            background-color: rgba(255, 255, 255, 0.13);
            position: absolute;
            transform: translate(-50%, -50%);
            top: 70%;
            left: 50%;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
            padding: 50px 35px;
          }
          form * {
            font-family: "Poppins", sans-serif;
            color: #ffffff;
            letter-spacing: 0.5px;
            outline: none;
            border: none;
          }
          form h3 {
            font-size: 32px;
            font-weight: 500;
            line-height: 42px;
            text-align: center;
          }

          label {
            display: block;
            margin-top: 30px;
            font-size: 16px;
            font-weight: 500;
          }
          input {
            display: block;
            height: 50px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
            padding: 0 10px;
            margin-top: 8px;
            font-size: 14px;
            font-weight: 300;
          }
          ::placeholder {
            color: #e5e5e5;
          }
          button {
            margin-top: 50px;
            width: 100%;
            background-color: #ffffff;
            color: #080710;
            padding: 15px 0;
            font-size: 18px;
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
          }
          .social {
            margin-top: 30px;
            display: flex;
          }
          .social div {
            background: red;
            width: 150px;
            border-radius: 3px;
            padding: 5px 10px 10px 5px;
            background-color: rgba(255, 255, 255, 0.27);
            color: #eaf0fb;
            text-align: center;
          }
          button {
            color: black;
          }
          .social div:hover {
            background-color: rgba(255, 255, 255, 0.47);
          }
          .social .fb {
            margin-left: 25px;
          }
          .social i {
            margin-right: 4px;
          }
        `}
      </style>
    </>
  );
}

export default Login;
