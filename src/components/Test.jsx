

function Test({postData,handleGetData}){

    

    return(
        <div>
            <button onClick={handleGetData}> Get in console</button>
            <div>{postData.map(post => {
                return(
                    <ul key={post.id}>{post.title}</ul>
                )
            })}</div>
        </div>
    )
}

export { Test }