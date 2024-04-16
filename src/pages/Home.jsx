
import { useLoaderData } from 'react-router-dom';
import EstateSection from './EstateSection';
import Slider from './Slider';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import 'animate.css';

const Home = () => {

    const estates = useLoaderData();


    return (
        <div>
            <Slider></Slider>
            <div>
                <h1 className='text-center mb-12 font-bold text-5xl'>Featured properties</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    estates.map(estate =>
                        <EstateSection
                            key={estate.id}
                            estate={estate}>
                        </EstateSection>)
                }
            </div>

        </div>
    );
};

export default Home;