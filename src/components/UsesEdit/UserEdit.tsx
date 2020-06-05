import React from "react";
import { GetUserByIdComponent } from "@/graphql";
import { useParams } from "react-router";

type UserEditParamsType = {
  id: string | undefined;
};

const UserEdit = () => {
  const params: UserEditParamsType = useParams();

  return (
    <GetUserByIdComponent variables={{ id: params.id }}>
      {({ data, loading, error }) => {
        if (error) {
          return <div> Error...</div>;
        }

        if (loading) {
          return <div> Loading...</div>;
        }

        return data && data.user ? (
          <div className="py-5 bg-light min-vh-100">
            <div className="container">
              <form className="card p-5">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      value={data.user.email}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        ) : null;
      }}
    </GetUserByIdComponent>
  );
};

export default UserEdit;
