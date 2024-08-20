import PropTypes from 'prop-types'
import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../Hooks/useAxiosCommon";
import Heading from "./Heading";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import { useState } from "react";

export default function Phones({ productname, sort, DateSort ,minPrice,  maxPrice}) {

    console.log(productname)

    // pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const pages = []






    let [params] = useSearchParams();
    const brand = params.get("brand") || "";
    const category = params.get("category") || "";
    // const productname = params.get("productname") || "";


    const { data,  } = useQuery({
        queryKey: ["phones", brand, category, currentPage, itemsPerPage, productname, sort,DateSort],
        queryFn: async () => {

            const { data } = await axiosCommon.get(`/phones?brand=${brand}&category=${category}&productname=${productname}&page=${currentPage}&size=${itemsPerPage}&sort=${sort}&DateSort=${DateSort}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
            return data;
        },
        enabled: true,
    });



    // pagination
    const { phones = [], count = 0 } = data || {};

    const numberOfPages = Math.ceil(count / itemsPerPage);
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }

    const handleItemPerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(0);
    }

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className=" text-center h-3/4">
            <div>
                {phones && phones.length > 0 ? (
                    <div className="">
                        <div className="pt-12  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-14 px-5 gap-8">
                            {phones.map((phone) => (
                                <Card key={phone._id} phone={phone} />
                            ))}
                            {/* pagination */}

                        </div>
                        <Pagination handlePrevious={handlePrevious} pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} handleItemPerPage={handleItemPerPage} itemsPerPage={itemsPerPage} handleNext={handleNext}></Pagination>
                    </div>



                ) : (
                    <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                        <Heading
                            center={true}
                            title="No Phones Available In This Category!"
                            subtitle="Please Select Other Categories."
                        />
                    </div>

                )}

            </div>

        </div>
    );
}



Phones.propTypes = {
    productname: PropTypes.any,
    sort: PropTypes.any,
    sormaxPricet: PropTypes.any,
    minPrice: PropTypes.any,
    DateSort: PropTypes.any,
    maxPrice
    : PropTypes.any,
}
