// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { getStoredOrderBuilding } from "../utility/localstorage";

import { Helmet } from "react-helmet-async";

const Orders = () => {
    // const estates = useLoaderData();

    // const [stores, setStores] = useState([]);
    // const [displays, setDisplays] = useState([]);

    // useEffect(() => {
    //     const storedBIds = getStoredOrderBuilding();
    //     if (estates.length > 0) {


    //         const bOrder = [];
    //         for (const id of storedBIds) {
    //             const estate = estates.find(estate => estate.id === id);
    //             if (estate) {
    //                 bOrder.push(estate)
    //             }
    //         }
    //         console.log(estates, storedBIds, bOrder);
    //     }
    // }, [])

    return (
        <div>
              <Helmet>
                <title>Orders</title>
            </Helmet>
            <h2>orders</h2>
        </div>
    );
};

export default Orders;