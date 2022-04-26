import GoogleLogin from "react-google-login";
import client from "../../secrets/secrets.json";
const clientId = Object.values(client)[0];
const GoogleAuthLogin = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleAuthLogin;
