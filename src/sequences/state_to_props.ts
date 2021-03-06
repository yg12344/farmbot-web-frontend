import { Everything } from "../interfaces";
import { Props } from "./interfaces";
import {
  selectAllSequences,
  selectAllTools,
  findSequence,
  selectAllToolSlots
} from "../resources/selectors";

export function mapStateToProps(props: Everything): Props {
  let uuid = props.resources.consumers.sequences.current;
  return {
    dispatch: props.dispatch,
    sequences: selectAllSequences(props.resources.index),
    tools: selectAllTools(props.resources.index),
    slots: selectAllToolSlots(props.resources.index),
    sequence: (uuid) ? findSequence(props.resources.index, uuid) : undefined,
    auth: props.auth,
    resources: props.resources.index
  };
}
