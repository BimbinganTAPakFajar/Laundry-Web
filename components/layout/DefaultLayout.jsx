import NavBar from "../NavBar";

export default function DefaultLayout({ children }) {
    return (
        <div className="">
            <NavBar />
            {children}
        </div>
    )
}