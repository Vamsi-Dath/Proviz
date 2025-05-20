import type {Node, NodeTypes, BuiltInNode} from "@xyflow/react";
import {PositionLoggerNode} from "./PositionLoggerNode";

export type PositionLoggerNode = Node<
    {
        label?: string;
    },
    'position-logger'
>;
export type AppNode = BuiltInNode | PositionLoggerNode;

export const initialNodes: AppNode[] = [
    {id: '1', type: 'input', data: {label: 'Input Node'}, position: {x: 0, y: 0}},
    {id: '2', data: {label: 'Default Node'}, position: {x: 100, y: 100}},
    {id: '3', type: 'position-logger', data: {label: 'Position Logger Node'}, position: {x: 250, y: 25}},
    {id: '4', type: 'output', data: {label: 'Output Node'}, position: {x: 50, y: 200}},
    {id: '5', data: {label: 'Final Node'}, position: {x: 300, y: 200}},
];

export const nodeTypes = {
    'position-logger': PositionLoggerNode,
} satisfies NodeTypes;