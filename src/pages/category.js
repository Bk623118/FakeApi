import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryNav = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/categories`)
            .then((response) => {
                setCategory(response.data)
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            })
            
    }, [])
    return (
        <div className="category-nav">
            <ul>
                {category.map((cat) => (
                   <Link to={`/productTable/${cat.id}`}>
                 <li key={cat.id}>
                        {cat.name}
                    </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default CategoryNav;