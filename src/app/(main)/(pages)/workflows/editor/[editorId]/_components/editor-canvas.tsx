"use client";

import { EditorNodeType } from "@/lib/types";
import React, { useMemo } from "react";
import { useEditor } from "@/providers/editor-provider";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";
import EditorCanvasCardSingle from "./editor-canvas-card-single";

type Props = {};

const initialNodes: EditorNodeType[] = [];
const initialEdges: { id: string; source: string; target: string }[] = [];

const EditorCanvas = (props: Props) => {
  const { dispatch, state } = useEditor();

  const nodeTypes = useMemo(
    () => ({
      Action: EditorCanvasCardSingle,
      Trigger: EditorCanvasCardSingle,
      Email: EditorCanvasCardSingle,
      Condition: EditorCanvasCardSingle,
      AI: EditorCanvasCardSingle,
      Slack: EditorCanvasCardSingle,
      "Google Drive": EditorCanvasCardSingle,
      Notion: EditorCanvasCardSingle,
      Discord: EditorCanvasCardSingle,
      "Custom Webhook": EditorCanvasCardSingle,
      "Google Calendar": EditorCanvasCardSingle,
      Wait: EditorCanvasCardSingle,
    }),
    []
  );

  return <div>EditorCanvas</div>;
};

export default EditorCanvas;