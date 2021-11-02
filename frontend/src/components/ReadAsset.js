import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import Error from './Templates/Error';
import PrintAssets from './Templates/PrintAssets';


function ReadAsset() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/readAsset');
        const items = await data.json();
        setItems(items);
    };
    

    //show only if assets are available
    //maybe i can do it with react ex <GoBack props="/frontpge" />
    if(items.length){
        return(
            <div className="mx-auto container-fluid p-5">
                <div className="d-block p-5">
                    <h3>These are the assets </h3>
                </div>      
                <section>
                    { 
                    items.map(item => (
                        <PrintAssets ID={item.ID} color={item.color} weight={item.weight} owner={item.owner} creator={item.creator} expirationDate={item.expirationDate} />
                    ))
                    }
                </section> 
                <hr />
                <div>
                    <p class="text-center d-block"><a href="/farmerFrontPage" class="btn btn-small btn-primary" >Go back</a></p>
                </div>
               
            </div>
        );
    }

    return(
        <Error backlink="farmerFrontPage" />
    );
    


}

export default ReadAsset;