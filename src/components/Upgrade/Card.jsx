import React from 'react';
import { Check, Clear } from '@mui/icons-material';

function Card(props) {
    return (
        <div className={`border border-gray-100 rounded-xl h-[100vh] w-full  ${props.data.color}`}>
            <div className="p-5">
                <div className="">
                    <h5 className="opacity-50 text-uppercase text-center mb-3">{props.data.plan}</h5>
                    <h6 className="text-center text-2xl font-bold">{props.data.price}</h6>
                    <hr className="my-4" />
                    <ul className="list-none">
                        {props.data.features.map((feature, index) => (
                            <li key={index} className={`mb-5 ${feature.isEnabled ? "" : "opacity-50"}`}>
                                <span className="">
                                    {feature.isEnabled ? <Check /> : <Clear />}
                                </span>
                                {feature.name}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-4">
                        <button href="#" className="bg-blue-700 p-5 text-white rounded-3xl font-bold uppercase inline-flex ">Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
