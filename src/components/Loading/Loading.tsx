import React from "react";

type LoadingProps = {
  loading: boolean;
};

const Loading = (props: LoadingProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 position-fixed">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
