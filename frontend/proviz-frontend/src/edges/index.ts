import type {Edge, EdgeTypes} from '@xyflow/react';

export const initialEdges = [
    {id: 'e1-2', source: '1', target: '2', type: 'default', animated: true},
    {id: 'e1-3', source: '3', target: '5', type: 'default', animated: false},
    {id: 'e2-4', source: '2', target: '4', type: 'default', animated: true},
    {id: 'e2-5', source: '2', target: '5', type: 'default', animated: false},
] satisfies Edge[];

export const edgeTypes = {
} satisfies EdgeTypes;