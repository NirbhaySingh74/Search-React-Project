import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <p style={{ color: "red" }}>Oops.. please enter valid url</p>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </>
  );
}
export default Error;
