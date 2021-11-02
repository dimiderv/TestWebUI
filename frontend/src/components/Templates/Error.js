function Error(props) {

    let backLink="/"+props.backlink;
    return(
        <div>
            <div className="mx-auto container-fluid p-5">
                <div className="d-block p-5">
                    <h3>Something went wrong . Couldn't find the assets </h3>
                </div>      
                <section>
                    <hr />
                </section> 
                <footer>
                    <p class="text-center d-block"><a href={backLink} class="btn btn-small btn-primary" >Go back</a></p>
                </footer>
            
            </div>
        </div>

    );


}

export default Error;