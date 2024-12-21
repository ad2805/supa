// import { Card } from "@mantine/core";
// import './BatteryCard.css'


// export default function BatteryCard(){
//     return(
//         <>
//             <Card className="card">
//                 <h1 className="title">Good</h1>
//                 <h2 className="number">65788</h2>
//                 <h5 className="vehicles">Vehicles</h5>
//             </Card>
//         </>
//     );

// }

import { Card } from "@mantine/core";
import './BatteryCard.css';


export default function BatteryCard(props) {
    return (
        <div
        >
            <Card className="card">
                <h1 className="title">{props.title}</h1>
                <h2 className="number">{props.number}</h2>
                <h5 className="vehicles">Vehicles</h5>
            </Card>
        </div>
    );
}
