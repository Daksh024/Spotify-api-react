import React, { Component } from 'react';
// import {Searchbar} from './searchbar';

class searchresult extends Component {
  constructor(props){
    super(props);

    this.state = {
      result : []
    };

  }


    render() {
        return (
            <div className='SearchResults' >
              {this.props.word.id}
            </div>
            //   <p id="song_id"></p>
            //     <table className="table table-striped table-dark">
            //       <thead>
            //         <tr>
            //           <th scope="col">#</th>
            //           <th scope="col">First</th>
            //           <th scope="col">Last</th>
            //           <th scope="col">Handle</th>
            //         </tr>
            //       </thead>
            //       <tbody>
            //         <tr>
            //           <th scope="row">1</th>
            //           <td>Matt</td>
            //           <td>Otto</td>
            //           <td>@mdo</td>
            //         </tr>
            //         <tr>
            //           <th scope="row">2</th>
            //           <td>Jacob</td>
            //           <td>Thornton</td>
            //           <td>@fat</td>
            //         </tr>
            //         <tr>
            //           <th scope="row">3</th>
            //           <td>Larry</td>
            //           <td>the Bird</td>
            //           <td>@twitter</td>
            //         </tr>
            //       </tbody>
            //     </table>
        );
    }
}

export default searchresult;