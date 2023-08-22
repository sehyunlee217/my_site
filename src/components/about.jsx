import about from "../assets/jl_about.svg";

export default function About() {
    return (
        <>
            <main className='px-10 py-10 font-sans font-light flex-col gap-4'>
                <header>
                    <img className='w-1/4 my-3' src={about} alt="About"></img>
                </header>
                <div className="h-4"></div>
                <div className="font-light text-xl text-gray-600">
                    I'm a second-year industrial engineering student at University of Toronto,
                    returning this year upon completion of my military service as an interpreter.
                    <div className="h-4"></div>
                </div>
                <div className="flex-col">
                    <div>
                        github: <a href="https://github.com/sehyunlee217">/sehyunlee217</a>
                    </div>
                    <div>
                        linkedIn: <a href="https://github.com/sehyunlee217">/joelee</a>
                    </div>
                    <div>
                        <a href="https://github.com/sehyunlee217">github</a>
                    </div>
                    <div>
                        <a href="https://github.com/sehyunlee217">github</a>
                    </div>

                </div>


            </main>
            <footer></footer>
        </>
    );
}