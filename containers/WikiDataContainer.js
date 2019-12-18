import {Container} from "unstated";

class WikiDataContainer extends Container {

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

export default WikiDataContainer
