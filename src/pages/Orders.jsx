import bike from '../assets/bike3.png';
import { Helmet } from "react-helmet-async";

const Orders = () => {


    return (
        <div>
            <Helmet>
                <title>Orders</title>
            </Helmet>
            <div>
                <h1 className='mb-5 text-[#5B8291] mt-5 text-center text-3xl font-bold animate__animated animate__flip'>Offer!!! Offer!!! Offer!!!</h1>
                <p className='text-center animate__animated animate__zoomInLeft text-[#12ADC1]'>If you buy any of item from us, you will win this bike!!!! </p>
                <p className='text-center mb-4'>So, do not miss this offer !!!!</p>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">


                <figure className='' ><img src={bike} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">RIDE YOUR DREAM</h2>
                    <p>Enjoy Every Moment With Property Prowess</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
