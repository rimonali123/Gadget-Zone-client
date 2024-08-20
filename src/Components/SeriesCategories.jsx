

import queryString from "query-string";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SeriesCategories() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        if (selectedCategory) {
            if (selectedCategory === "all") {
                navigate("/"); 
            } else {
                const url = queryString.stringifyUrl({ url: "/", query: { category: selectedCategory } });
                navigate(url);
            }
        }
    }, [selectedCategory, navigate]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div>
            <div className="label w-full">
                <span className="label-text">Select Category</span>
            </div>
            <select
                className="select border-[#578de1] select-sm text-center w-full"
                onChange={handleCategoryChange}
                value={selectedCategory}
            >
                <option disabled value="">
                    <FaStar className="inline-block mr-1" />
                    Select Category
                </option>
                <option value="all">All</option>
                <option value="Flagship">Flagship</option>
                <option value="Budget">Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Gaming">Gaming</option>
                <option value="Camera">Camera</option>
            </select>
        </div>
    );
}
