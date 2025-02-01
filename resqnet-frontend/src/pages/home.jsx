const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Connecting You to Help in Times of Crisis
      </h1>
      <p className="text-gray-700 mb-8">
        A platform to connect disaster victims with volunteers and organizations
        for timely aid.
      </p>
      <div className="space-x-4">
        <Link
          to="/request-help"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Get Help
        </Link>
        <Link
          to="/signup"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Become a Volunteer
        </Link>
      </div>
    </div>
  );
};

export default Home;
