// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const getStoredOrderBuilding = () => {
//     const storedOrderBuilding = localStorage.getItem('order-building');
//     if (storedOrderBuilding) {
//         return JSON.parse(storedOrderBuilding);
//     }
//     return [];
// }

// const saveOrderBuilding = id => {
//     const storedOrderBuilding = getStoredOrderBuilding();
//     const isExist = storedOrderBuilding.find(bId => bId === id);
//     if (isExist) {
//         return toast('')
//     }
//     storedOrderBuilding.push(id);
//     localStorage.setItem('order-building', JSON.stringify(storedOrderBuilding))
//     toast.success('Order compleat');
// }

// export { getStoredOrderBuilding, saveOrderBuilding }