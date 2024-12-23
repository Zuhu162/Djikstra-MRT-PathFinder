export type Line = {
  color: string;
  stationNumber: number;
};

export type NextStation = {
  id: string;
  time: number;
};

//
export type Node = {
  id: string;
  type?: string;
  data: NodeData;
  position: Position;
};
export type NodeData = {
  label: string;
  lines: Line[];
  connectedStations: NextStation[];
};
export type Position = {
  x: number;
  y: number;
};
//

export type Edge = {
  id: string;
  source: string;
  target: string;
  type: string;
  sourceHandle: string;
  targetHandle: string;
  style: {
    stroke: string;
    strokeWidth: number;
  };
};
