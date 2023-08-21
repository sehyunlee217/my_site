import logo from "../assets/jl_logo.svg";

export default function Header() {
    return (
        <header className='flex-col'>
            <div className='font-medium text-xl text-primary '>
                <img className='w-20 my-3' src={logo} alt="logo"></img>
                <a href="">Seunghyun Lee</a>
            </div>
        </header>
    );
}