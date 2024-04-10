"use client";

import { EditorNodeType } from "@/lib/types";
import {
  Dispatch,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

export type EditorNode = EditorNodeType;

export type Editor = {
  elements: EditorNode[];
  edges: {
    id: string;
    source: string;
    target: string;
  }[];
  selectedNode: EditorNodeType;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};

export type EditorState = {
  editor: Editor;
  history: HistoryState;
};

const initialEditorState: EditorState["editor"] = {
  elements: [],
  selectedNode: {
    data: {
      completed: false,
      current: false,
      description: "",
      metadata: {},
      title: "",
      type: "Trigger",
    },
    id: "",
    position: {
      x: 0,
      y: 0,
    },
    type: "Trigger",
  },
  edges: [],
};

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

const initialSTate: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
};
