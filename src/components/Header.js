function Header({ statusText }) {
    return (
        <div className="w-screen rounded-sm bg-yellow-600 ">
            <div className="flex justify-between p-5 items-center">
                <h1 className="text-xl font-bold">Jonathan's Notes App</h1>
                <h1 className="text-xl">{statusText}</h1>
            </div>
        </div>
    );
}

export default Header;
