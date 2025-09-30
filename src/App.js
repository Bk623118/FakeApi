import './App.css';
import Header from './pages/Header';
import './index.css'
import CategoryNav from './pages/category';
import SliderWithCard from './pages/SliderWithCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductTable from './pages/ProductTable';
import Cart from './pages/cart';
import Wishlist from './pages/WishList';
import ProtectedRoute from './pages/ProtectedRoute';
import {ChartExample,BarChartExample,PieChartExample,RadarChartExample,ComposedChartExample,AreaChartExample,ScatterChartExample} from './pages/charts';

const Dashboard = () => { 
  return (
    <div>
      <h2>Line Chart</h2>
      <ChartExample />

      <h2>Bar Chart</h2>
      <BarChartExample />

      <h2>Pie Chart</h2>
      <PieChartExample />

      <h2>Radar Cart</h2>
      <RadarChartExample />

      <h2>compose Chart</h2>
      <ComposedChartExample />


      <h2>Area Chart</h2>
      <AreaChartExample />

      <h2>Scatter Chart</h2>
      <ScatterChartExample/>
    </div>


  );
};


function App() {
   const currentUserRole = "seller"; 
  return (
    <div className="App">
      <Header role={currentUserRole} />
      <CategoryNav />
      <Routes>
        <Route path="/" element={<SliderWithCard />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/productTable/:id" element={<ProductTable />} />
        <Route
          path="/cartlist"
          element={
            <ProtectedRoute role={currentUserRole} allowedRole="user">
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute role={currentUserRole} allowedRole="seller">
              <Wishlist />
            </ProtectedRoute>
          }
        />
         <Route path="/chart" element={<Dashboard/>} />
      </Routes>
      

    </div>
  );
}








export default App;
