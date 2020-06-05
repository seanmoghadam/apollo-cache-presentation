import gql from "graphql-tag";
import * as React from "react";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHoc from "@apollo/react-hoc";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
};

export type Company = {
  __typename?: "Company";
  id: Scalars["ID"];
  name: Scalars["String"];
  users?: Maybe<UserPaginator>;
  country: Country;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type CompanyUsersArgs = {
  first?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

/** A paginated list of Company items. */
export type CompanyPaginator = {
  __typename?: "CompanyPaginator";
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Company items. */
  data: Array<Company>;
};

export type Country = {
  __typename?: "Country";
  id: Scalars["ID"];
  name: Scalars["String"];
  code: Scalars["String"];
  users?: Maybe<UserPaginator>;
  companies: Array<Company>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type CountryUsersArgs = {
  first?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

/** A paginated list of Country items. */
export type CountryPaginator = {
  __typename?: "CountryPaginator";
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of Country items. */
  data: Array<Country>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars["String"];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars["Int"]>;
  /** Count of nodes in current request. */
  count?: Maybe<Scalars["Int"]>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars["Int"]>;
  /** Last page in connection. */
  lastPage?: Maybe<Scalars["Int"]>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: "PaginatorInfo";
  /** Total count of available items in the page. */
  count: Scalars["Int"];
  /** Current pagination page. */
  currentPage: Scalars["Int"];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars["Int"]>;
  /** If collection has more pages. */
  hasMorePages: Scalars["Boolean"];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars["Int"]>;
  /** Last page number of the collection. */
  lastPage: Scalars["Int"];
  /** Number of items per page in the collection. */
  perPage: Scalars["Int"];
  /** Total items available in the collection. */
  total: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  user?: Maybe<User>;
  users?: Maybe<UserPaginator>;
  company?: Maybe<Company>;
  companies?: Maybe<CompanyPaginator>;
  country?: Maybe<Country>;
  countries?: Maybe<CountryPaginator>;
  findUserByEmail?: Maybe<User>;
  usersByYear?: Maybe<UserPaginator>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryUsersArgs = {
  orderBy?: Maybe<Array<OrderByClause>>;
  first?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryCompanyArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryCompaniesArgs = {
  first?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryCountryArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryCountriesArgs = {
  first?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryFindUserByEmailArgs = {
  email?: Maybe<Scalars["String"]>;
};

export type QueryUsersByYearArgs = {
  created_at: Scalars["Int"];
  first?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = "ASC",
  /** Sort records in descending order. */
  Desc = "DESC"
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = "ONLY",
  /** Return both trashed and non-trashed results. */
  With = "WITH",
  /** Only return non-trashed results. */
  Without = "WITHOUT"
}

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  country: Country;
  company: Company;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: "UserPaginator";
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
  /** A list of User items. */
  data: Array<User>;
};

export type GetUserByIdQueryVariables = {};

export type GetUserByIdQuery = { __typename?: "Query" } & {
  user?: Maybe<
    { __typename?: "User" } & UserBasicFragmentFragment & UserTimestampsFragment
  >;
};

export type GetUsersQueryVariables = {};

export type GetUsersQuery = { __typename?: "Query" } & {
  users?: Maybe<
    { __typename?: "UserPaginator" } & {
      data: Array<
        { __typename?: "User" } & UserBasicFragmentFragment &
          UserTimestampsFragment
      >;
    }
  >;
};

export type UserBasicFragmentFragment = { __typename?: "User" } & Pick<
  User,
  "name" | "id" | "email"
>;

export type UserTimestampsFragment = { __typename?: "User" } & Pick<
  User,
  "createdAt" | "updatedAt"
>;

export const UserBasicFragmentFragmentDoc = gql`
  fragment UserBasicFragment on User {
    name
    id
    email
  }
`;
export const UserTimestampsFragmentDoc = gql`
  fragment UserTimestamps on User {
    createdAt
    updatedAt
  }
`;
export const GetUserByIdDocument = gql`
  query getUserById {
    user {
      ...UserBasicFragment
      ...UserTimestamps
    }
  }
  ${UserBasicFragmentFragmentDoc}
  ${UserTimestampsFragmentDoc}
`;
export type GetUserByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >,
  "query"
>;

export const GetUserByIdComponent = (props: GetUserByIdComponentProps) => (
  <ApolloReactComponents.Query<GetUserByIdQuery, GetUserByIdQueryVariables>
    query={GetUserByIdDocument}
    {...props}
  />
);

export type GetUserByIdProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >;
} &
  TChildProps;
export function withGetUserById<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUserByIdQuery,
    GetUserByIdQueryVariables,
    GetUserByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUserByIdQuery,
    GetUserByIdQueryVariables,
    GetUserByIdProps<TChildProps, TDataName>
  >(GetUserByIdDocument, {
    alias: "getUserById",
    ...operationOptions
  });
}
export type GetUserByIdQueryResult = ApolloReactCommon.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
export const GetUsersDocument = gql`
  query getUsers {
    users {
      data {
        ...UserBasicFragment
        ...UserTimestamps
      }
    }
  }
  ${UserBasicFragmentFragmentDoc}
  ${UserTimestampsFragmentDoc}
`;
export type GetUsersComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
  "query"
>;

export const GetUsersComponent = (props: GetUsersComponentProps) => (
  <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables>
    query={GetUsersDocument}
    {...props}
  />
);

export type GetUsersProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetUsersQuery,
    GetUsersQueryVariables
  >;
} &
  TChildProps;
export function withGetUsers<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUsersQuery,
    GetUsersQueryVariables,
    GetUsersProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUsersQuery,
    GetUsersQueryVariables,
    GetUsersProps<TChildProps, TDataName>
  >(GetUsersDocument, {
    alias: "getUsers",
    ...operationOptions
  });
}
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
