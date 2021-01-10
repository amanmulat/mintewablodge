import React from 'react'

export const GalleryDisplay = props =>{
    return(<div class="container">

        <div class="row">

            <div class="col-sm-10 center-block center-text">

                

                <ul class="list-inline">

                    <li data-toggle="modal" data-target="#myModal"><a  href="#myCarousel" ><img class="img-thumbnail" src="https://dummyimage.com/200x133/000/fff" alt="..."/><br/>

                    Caption</a></li>

                    <li data-toggle="modal" data-target="#myModal"><a  href="#myCarousel" ><img class="img-thumbnail" src="https://dummyimage.com/200x133/999/fff" alt="..."/><br/>

                    Caption</a></li>

                    <li data-toggle="modal" data-target="#myModal"><a href="#myCarousel"  ><img class="img-thumbnail" src="https://dummyimage.com/200x133/ddd/f00" alt="..."/><br/>

                    Caption</a></li>

              

                </ul>

                

                

            </div>

        </div>

    </div>)
}
