export default function BlogPost(props) {
    return (
        <div className="p-6 place-items-center w-full h-screen text-center my-text">
            <div className="my-text">
                {props.children}
            </div>
        </div>
    )
}