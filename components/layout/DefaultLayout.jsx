import NavBar from "../NavBar";

export default function DefaultLayout({children}){
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}