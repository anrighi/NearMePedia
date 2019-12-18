import {Container} from "unstated";

export class WikiDataContainer extends Container {

    state = {
        results: []
    }

    addResult = array => {

        this.setState({
                results: array
            }
        )
    }

}

