// import React, { useState } from "react";
// import { AuthRouteProps, RouteTypes } from "../../types";
// import { Navigate } from "react-router-dom";
// import { useStorage } from "../../hooks";
// import { USER_STORAGE_KEY } from "../../config/constants";

// export const withAuthGuard = (WrappedComponent: React.FC, type: RouteTypes = RouteTypes.PRIVATE) => {
//     return (props: AuthRouteProps) => {
//         const { get } = useStorage();
//         const [user] = useState(get(USER_STORAGE_KEY));
//         if (type === RouteTypes.AUTH) {
//             if (!!user) return <Navigate to="/account-receivable" />;
//             // @ts-ignore
//             return <WrappedComponent {...props} />;
//         }
//         if (type === RouteTypes.PRIVATE) {
//             if (!user) return <Navigate to="/login" />;
//             // @ts-ignore
//             return <WrappedComponent {...props} />;
//         }
//         // @ts-ignore
//         return <WrappedComponent {...props} />;
//     }
// }
