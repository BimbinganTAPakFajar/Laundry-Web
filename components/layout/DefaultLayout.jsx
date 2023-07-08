import NavBar from "../NavBar";

export default function DefaultLayout({children}){
    return (
        <div className="max-w-screen-2xl">
            <NavBar />
            {children}
        </div>
    )
}