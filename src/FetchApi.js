import React, {Component} from 'react';
import DisplayPeoples from "./DisplayPeoples";
import Nav from "./Nav";
class FetchApi extends Component {
    state={
        page:1,
        peoples:[],
    };



    componentDidMount(){
        this.fetchData()
    }

    fetchData = () => {
        if (this.state.page <= 9) {
            fetch(`https://swapi.co/api/people/?page=${this.state.page}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({peoples:[...this.state.peoples,...data.results]})

                });
            this.setState({page:this.state.page +=1})
        }

    };

    fetchApi = ()=> {
        this.fetchData()
};

    render() {
        return (
            <div>
                <Nav
                long ={this.state.peoples.length}
                />
            <div className="BOXCARDS">
                {
                    this.state.peoples.map((people) => {
                        return (
                            <DisplayPeoples {...people}/>
                        )
                    })
                }

            </div>
                <div className="boxbtn">
                    <button className="btn" onClick={()=>this.fetchApi()}>more...</button>
                </div>

            </div>
        );
    }
}

export default FetchApi;