import NavBar from "../NavBar";

export default function DefaultLayout({children}){
    return (
        <div className="w-screen">
            <NavBar />
            {children}
        </div>
    )
}