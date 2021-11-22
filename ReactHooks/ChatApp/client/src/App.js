import Container from "./components/Container"
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <div className="App">
   <ChatProvider>
     <Container/>
   </ChatProvider>
    </div>
  );
}

export default App;
