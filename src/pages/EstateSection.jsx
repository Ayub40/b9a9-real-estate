import { Link } from "react-router-dom";


const EstateSection = ({ estate }) => {
    const { image, estate_title, description, id } = estate;
    return (
        <div className="">

            <div className="card card-compact  bg-base-100 shadow-xl md:h-[400px] ">
                <figure><img data-aos="zoom-in" data-aos-duration="1000" src={image} alt="Shoes" /></figure>
                <div className="mt-4 flex ">
                    <h2 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1100" className="flex mr-4 ml-4">{estate_title} </h2>
                    {/* <h2 className="flex">  {tags} </h2> */}
                </div>
                <div className="card-body">
                    {/* <h2 className="card-title">{bookName}</h2> */}
                    <p data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1100">{description}</p>
                    {/* <div className="mt-4 flex ">
                        <h2 className="flex mr-4">{category} </h2>
                        <h2 className="flex">  {rating} </h2>
                    </div> */}

                    <div data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1100" className="card-actions">
                        <Link to={`/residential/${id}`}>
                            <button className="btn bg-[#c2aff0] text-xl font-normal ">View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateSection;