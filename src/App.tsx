import { ThemeProvider } from "./Components/theme-provider";
import Header from "./Components/mainComponents/Header";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header profile_image_url="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/04/rigby-Cropped.jpg" />
    </ThemeProvider>
  );
}

export default App;
