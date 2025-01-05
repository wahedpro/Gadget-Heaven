import { MdError } from "react-icons/md";
import PageTitle from "../components/PageTitle/PageTitle";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <PageTitle title={'Error Page'}/>
            <div className="flex flex-col items-center">
                <MdError color="red" size={60}/>
                <h1 className="text-7xl font-bold">404</h1>
                <p className="text-2xl">Page Not Found!!!</p>
            </div>
        </div>
    );
};

export default ErrorPage;