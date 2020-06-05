import React from "react";
import { GetUsersComponent } from "@/graphql";
import { Link } from "react-router-dom";
import Loading from "@/components/Loading/Loading";

const UserListing = () => {
  return (
    <div>
      <GetUsersComponent>
        {({ data, loading, error, client }) => {
          if (error) return <>Error</>;

          if (loading) return <Loading loading={loading} />;

          return (
            <>
              <div className="py-5 bg-light min-vh-100">
                <div className="container">
                  <ul className="row list-unstyled">
                    {data &&
                      data.users &&
                      data.users.data.map(user => (
                        <li key={user.id} className="col-md-4">
                          <div className="card mb-4 box-shadow">
                            <div className="card-body">
                              <h4 className="text-body">{user.name}</h4>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                  <Link
                                    to={"/user/" + user.id}
                                    className="btn btn-sm btn-outline-secondary"
                                  >
                                    Edit
                                  </Link>
                                </div>
                                <small className="text-muted">9 mins</small>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </>
          );
        }}
      </GetUsersComponent>
    </div>
  );
};

export default UserListing;
