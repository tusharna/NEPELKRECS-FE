import { Outlet } from "react-router-dom";
import MainNavaigation from "../components/MainNavaigation";
import classes from './Root.module.css';

function RootLayout() {
    return (
        <>
            <MainNavaigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    );
}
export default RootLayout