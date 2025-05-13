import { Outlet } from "react-router-dom";

import classes from './Root.module.css';
import UsersNavigation from "../components/UsersNavigation";

function UserLayout() {
    return (
        <>
            <UsersNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    );
}
export default UserLayout