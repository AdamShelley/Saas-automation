import React from "react";
import Workflow from "./workflow";
import { onGetWorkflow } from "../_actions/workflow-connections";

type Props = {};

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflow();

  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 m-2">
        <Workflow
          description="Creating a test workflow"
          id="2452454"
          name="automation workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
