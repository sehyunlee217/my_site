import logo from "../assets/jl_logo.svg";

export default function Header() {
    return (
        <header className="grid grid-rows-2">
            <img className='w-20 my-3' src={logo} alt="logo"></img>

            <div className="flex justify-between items-center">
                <div className='font-medium text-2xl text-primary '>
                    Seunghyun Lee
                </div>
                <div>
                    <p>
                        light/dark
                    </p>
                    <div>
                        KR/ENG
                    </div>
                </div>
            </div>
        </header>

    );
}