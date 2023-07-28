import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-[100vh] flex-col gap-y-8 justify-center items-center">
      <h1 style={{ fontSize: "66px" }} className="font-extrabold">
        404
      </h1>
      <h1 style={{ fontSize: "66px" }} className="font-extrabold">
        Page Not Found
      </h1>
      <p>
        We apologize for the inconvenience. It seems that the page you were
        looking for has either been moved, renamed, or simply vanished into thin
        air. But don't worry, we're here to help!
      </p>
      <ul>
        <li>
          {" "}
          1. Double-check the URL: Make sure you've entered the web address
          correctly. A small typo can lead you astray.
        </li>
        <hr />
        <br />
        <li>
          2. Go back to the previous page: Use your browser's back button to
          return to the page you came from. It might have just been a wrong
          turn. Visit our homepage: Head back to our website's main page and
          navigate from there. You might find what you're looking for in a
          different section.
        </li>
        <hr />
        <br />
        <li>
          3. Contact our support team: If you believe this is an error or you
          need further assistance, please reach out to our friendly support.
        </li>
      </ul>
      <Link to="/">
        {" "}
        <button style={{ color: "grey" }} className="btn">
          Time to Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
