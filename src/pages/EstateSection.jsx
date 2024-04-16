import { Link } from "react-router-dom";


const EstateSection = ({ estate }) => {
    const { image, estate_title, description, id } = estate;
    return (
        <div>

            <div className="card card-compact  bg-base-100 shadow-xl md:h-[400px]">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="mt-4 flex ">
                    <h2 className="flex mr-4 ml-4">{estate_title} </h2>
                    {/* <h2 className="flex">  {tags} </h2> */}
                </div>
                <div className="card-body">
                    {/* <h2 className="card-title">{bookName}</h2> */}
                    <p>{description}</p>
                    {/* <div className="mt-4 flex ">
                        <h2 className="flex mr-4">{category} </h2>
                        <h2 className="flex">  {rating} </h2>
                    </div> */}

                    <div className="card-actions">
                        <Link to={`/residential/${id}`}>
                            <button className="btn bg-[#00C29C] text-xl font-normal">View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateSection;