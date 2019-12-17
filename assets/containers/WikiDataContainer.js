import {Container} from "unstated";

export class WikiDataContainer extends Container {

    state = {
        results: []
    }

    addResult = async (array) => {
        this.setState({
            results: [...array]
        })
    }

}

