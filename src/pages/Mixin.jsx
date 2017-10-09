// Publish page

import React from 'react';
const mixApi = require('../lib/mix-api/index');

const MixConnector = mixApi.MixConnector,
    MixinRegistryContract = mixApi.mixContracts.MixinRegistryContract;

export default class Mixin extends React.Component {

    constructor(props) {

        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            stringData : ''
        };

        const mixConnector = new MixConnector();

        try{

            // Connect to a given blockchain as well as the Mixin Registry Contract
            this.web3 = mixConnector.blockchainConnect();
            this.mixinRegistryContract = new MixinRegistryContract(this.web3);
            this.mixinRegistryContract.contractConnect();

        }catch(err){

            console.error(err.message);
            return;
        }



    }

    handleInputChange(event) {

        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

        this.setState({
            [name]: value
        });

    }

    render() {

        return (

            <div className="content-page">

                <h3 className="content-heading">Mixins</h3>

                <div className="content-panel">

                    <div className="col-md-6 col-md-offset-3">

                        <form onSubmit={this.sendData}>

                            <div className="form-group">

                                <label>Publish pastebin</label>

                                <textarea onChange={this.handleInputChange} name="stringData" className="form-control" value={this.state.stringData}></textarea>

                            </div>

                            <div className="form-group">

                                <button type="submit" className="btn btn-primary pull-right">Submit</button>

                            </div>

                        </form>

                    </div>

                </div>

                <div className="clearfix"></div>

            </div>

        )

    }

}