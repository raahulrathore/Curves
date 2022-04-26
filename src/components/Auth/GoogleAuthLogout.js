import { GoogleLogout } from "react-google-login";
import client from "../../secrets/secrets.json";
const clientId = Object.values(client)[0];

const GoogleAuthLogout = () => {
  const responseGoogle = (response) => {
    console.log(response, "logout");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onSuccess={responseGoogle}
      />
    </div>
  );
};

export default GoogleAuthLogout;
