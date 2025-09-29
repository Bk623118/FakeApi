import { useState, useRef, useEffect } from "react"; 
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {add} from '../productSlice';

const SliderWithCard = () => {
  const sliderWrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [ product , setProduct ] = useState([])

  useEffect(()=>{
      axios.get('https://api.escuelajs.co/api/v1/products')
       .then((response) => {
                setProduct(response.data)
            })
             .catch((error) => {
                console.error("Error fetching Products:", error);
            })
  },[])


  const navigate = useNavigate();



  const totalSlides = product.length;

  // Get width of a card including margin
  const getCardWidth = () => {
    if (!sliderWrapperRef.current) return 0;
    const card = sliderWrapperRef.current.children[0];
    // const style = window.getComputedStyle(card);
    // return card.offsetWidth + parseInt(style.marginRight) + parseInt(style.marginLeft);
  };

  const getVisibleCards = () => {
    if (!sliderRef.current) return 1;
    return Math.floor(sliderRef.current.offsetWidth / getCardWidth());
  };

  const updateSlider = (slideIndex) => {
    if (sliderWrapperRef.current) {
      sliderWrapperRef.current.style.transform = `translateX(-${slideIndex * getCardWidth()}px)`;
    }
  };

  const nextSlide = () => {
    const maxSlide = totalSlides - getVisibleCards();
    setCurrentSlide((prev) => {
      const next = prev < maxSlide ? prev + 1 : 0;
      updateSlider(next);
      return next;
    });
  };

  const prevSlide = () => {
    const maxSlide = totalSlides - getVisibleCards();
    setCurrentSlide((prev) => {
      const next = prev > 0 ? prev - 1 : maxSlide;
      updateSlider(next);
      return next;
    });
  };

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, autoSlide]);

  // Pause on hover
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const handleMouseEnter = () => setAutoSlide(false);
    const handleMouseLeave = () => setAutoSlide(true);
    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const goToSlide = (index) => {
    const maxSlide = totalSlides - getVisibleCards();
    const slide = Math.min(index, maxSlide);
    setCurrentSlide(slide);
    updateSlider(slide);
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0);
      updateSlider(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-header">
        <h2>Featured Products</h2>
        <p>Check out our latest collection of premium items</p>
      </div>

      <div className="slider" ref={sliderRef}>
        <div className="slider-wrapper" ref={sliderWrapperRef}>
          {product.map((item, idx) => (
            <div className="card" key={idx}>
              <a href="#" className="card-link">
                <div className="card-image">
                  <img src={item.images[0]} alt={item.title} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-price">{item.price}</div>
                  <button className="btn-cart" onClick={()=>dispatch(add(product))}>Add to Cart</button>
                  <button  className="btn-card-view" onClick={()=>navigate(`/product/${item.id}`)} > View </button>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button className="nav-button left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-button right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {product.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentSlide === idx ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderWithCard;
