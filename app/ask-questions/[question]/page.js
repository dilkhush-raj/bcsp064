const page = ({params}) => {
    const {question} = params;
    return(
        <main className="min-h-screen">
            <h1>Answer {question} </h1>
        </main>
    )
}

export default page;