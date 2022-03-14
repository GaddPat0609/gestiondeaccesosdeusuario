import { app } from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import {
  NextUIProvider,
  Button,
  Card,
  Text,
  useTheme,
  createTheme,
} from "@nextui-org/react";

const provider = new GoogleAuthProvider();
const auth = getAuth();
const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, // override dark theme colors
  },
});

function App() {
  //estado para nombre y url de foto
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  function abrirPopup() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        //-----------------------
        setName(user.displayName);
        setPhoto(user.photoURL);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <NextUIProvider theme={darkTheme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Button color="gradient" onClick={abrirPopup} ghost>
          Inicio de sesión con google
        </Button>

        {name.length > 0 && photo.length > 0 && (
          <Card css={{ mw: "400px", marginTop: "20px" }} hoverable clickable>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $purple500 -20%, $pink500 100%",
              }}
            >
              Bienvenido:
            </Text>
            <Text
              h1
              size={30}
              css={{
                textGradient: "45deg, $purple500 -20%, $pink500 100%",
              }}
            >
              {name}
            </Text>
            <img src={photo} alt="" />
          </Card>
        )}
      </div>
    </NextUIProvider>
  );
}

export default App;
