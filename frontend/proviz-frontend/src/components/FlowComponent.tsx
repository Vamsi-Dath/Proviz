import { useCallback, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  type ColorMode
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes } from '../nodes';
import { initialEdges, edgeTypes } from '../edges';

export default function FlowComponent() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );
  const [mode, setMode] = useState<ColorMode>('dark');
  const handleModeChangeStart = () => {
    setMode('light');
  };
  const handleModeChangeEnd = () => {
    setMode('dark');
  };

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      snapToGrid
      defaultMarkerColor='#63e3dc'
      colorMode={mode}
      onNodeDragStart={handleModeChangeStart}
      onNodeDragStop={handleModeChangeEnd}
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
