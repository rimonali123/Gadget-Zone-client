



import queryString from "query-string";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BrandCategories() {
    const navigate = useNavigate();
    const [selectedBrand, setSelectedBrand] = useState("");

    useEffect(() => {
        if (selectedBrand && selectedBrand !== "") {
            if (selectedBrand === "all") {
                navigate("/");
            } else {
                const url = queryString.stringifyUrl({ url: "/", query: { brand: selectedBrand } });
                navigate(url);
            }
        }
    }, [selectedBrand, navigate]);

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    return (
        <div>
            <form className="w-full">
                <div className="label">
                    <span className="label-text">Select Brand</span>
                </div>
                <select
                    className="select border border-[#578de1] select-sm text-center w-full"
                    onChange={handleBrandChange}
                    defaultValue=""
                >
                    <option disabled value="">
                        <FaStar className="inline-block mr-1" />
                        Select Brand Name
                    </option>
                    <option value="all">All</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Galaxy">Galaxy</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Pixel">Google Pixel</option>
                    <option value="ASUS">ASUS</option>
                </select>
            </form>
        </div>
    );
}
