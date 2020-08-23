import React, { Component } from 'react'

class Movies extends Component {


    render() {
        const { movies} = this.props;
        return (
            <div>
                {

                    movies.map(movie => {
                        const { id, MovieName, MovieTime, MovieType } = movie;
                        
                            return (

                                <div>
                                    id : {id},
                            Name : {MovieName},
                            Time : {MovieTime},
                            Type : {MovieType}
                           
                                </div>



                            )
                        
                        

                    }
                    )


                }
               
            </div>
        )
    }


}

export default Movies;