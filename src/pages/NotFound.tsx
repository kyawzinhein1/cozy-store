import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 mt-20 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-teal-600 text-white px-6 py-3 rounded font-medium hover:bg-teal-700 transition"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
