import { useState } from 'react';
import { toast } from 'react-toastify';


function Button() {

    const [subscribe, setSubscribe] = useState(false);

    return (
    <button
        onClick={() => {
            toast.success('Felicitaciones, te has suscrito')
            setSubscribe(!subscribe)
        }}
    >
        {
            subscribe ? 'Ya estas suscrito' : 'click para suscribirte'
        }
        </button>
    )
}

export default Button;