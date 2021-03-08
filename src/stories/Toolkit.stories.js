import React from 'react';
import ForcedDirected from '../components/ForcedDirected';
import toolkitJSON from "../data/toolkit.json";

export default {
    title: 'Visualizations/Politics',
    component: ForcedDirected,
}

export const FarmersProtest = () => <ForcedDirected data={toolkitJSON}/>