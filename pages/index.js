import Head from 'next/head'
export default function Home() {
  return (      
      <div className="container">
       <title>Font Awesome 5 Icons</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
          <script src='https://kit.fontawesome.com/a076d05399.js'></script>
      <main>
        <div className="login-box">
          <h1> Login </h1>
        </div>

        <div className="text-login">
        <i className="fa fa-user" aria-hidden="true"></i>
          <input type="text" required="" placeholder="Username"></input>
        </div>

        <div className="text-login">
          <i className="fas fa-lock"></i>
          <input type="password" required="" placeholder="Password"></input>
        </div>

        <div> 
          <input className="btn" type="submit" name="" value="Sign In"></input>
        </div>
      </main>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          background-image: url(wp3k.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          
        }
        `}</style>
       <style jsx>{`
       
        .container {
          width: 280px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          color: white;
          
        }
        .login-box h1 {
          float: left;
          font-size: 40px;
          border-bottom: 6px solid white;
          margin-bottom: 50px;
          padding: 13px 0;
        }
        .text-login {
          width: 100%;
          overflow: hidden;
          font-size: 20px;
          padding: 8px 0;
          margin: 8px 0;
          border-bottom: 1px solid white;
        }
        .text-login i{
          width: 26px;
          float: left;
          text-align: center;
        }
        .text-login input {
          border: none;
          outline: none;
          background: none;
          color: black;
          font-size: 18px;
          width: 80%;
          float: left;
          margin: 0 10px;
        }
        .btn {
          width: 100%;
          background: none;
          border: 2px solid white;
          color: black;
          padding: 5px;
          font-size: 18px;
          cursor: pointer;
          margin: 12px 0;

        }
      `}</style> 
    </div>
  )
}
