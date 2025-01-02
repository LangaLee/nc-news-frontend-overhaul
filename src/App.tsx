import { ThemeProvider } from "./Components/theme-provider";
import Header from "./Components/mainComponents/Header";
import { Routes, Route } from "react-router-dom";
import Reviews from "./Components/mainComponents/Reviews";
import Home from "./Components/mainComponents/Home";
import Genres from "./Components/mainComponents/Genres";
import TrendingReviews from "./Components/mainComponents/TrendingReviews";
import NewReview from "./Components/mainComponents/NewReview";
import UserReviews from "./Components/mainComponents/UserReviews";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header profile_image_url="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/04/rigby-Cropped.jpg" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/trendingReviews" element={<TrendingReviews />} />
        <Route path="/newReview" element={<NewReview />} />
        <Route path="/myReviews" element={<UserReviews />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
