export default function Posts() {
    return (
        <>
            <div className="h-4"></div>
            <div>
                <Link to={`/Posts`}><h2 className="text-2xl font-semibold">Posts</h2></Link>
                <Outlet />
            </div>
            <div>- Currently in process</div>
        </>
    );
}