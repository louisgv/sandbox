import React, {Component} from 'react'

const {ROS3D} = window;

const WIDTH = 450;
const HEIGHT = 450;

export default class App extends Component {

    componentDidMount() {
        const mesh = new ROS3D.MeshResource({resource: 'runestone.dae', path: '/', warnings: true});

        const viewer = new ROS3D.Viewer({divID: '3d-view', width: WIDTH, height: HEIGHT});

        viewer.addObject(new ROS3D.Grid());
        viewer.addObject(mesh);
    }

    render() {
        return (<div className="App">
            <div id="3d-view" style={{
                    width: `${WIDTH}px`,
                    height: `${HEIGHT}px`
                }}></div>
        </div>)
    }
}
