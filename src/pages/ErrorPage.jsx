import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto text-center mt-10 font-bold">
            <Helmet>
                <title>ErrorPage</title>
            </Helmet>
            <h2>Not found page</h2>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;