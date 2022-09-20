import "./index.css";
import { TiDelete } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const TaskItem = (props) => {
  const { taskDetails } = props;
  const { task, id } = taskDetails;

  const onDeleteTask = () => {
    const { deleteTask } = props;
    deleteTask(id);
  };

  const onUpTask = () => {
    const { onClickUp } = props;
    onClickUp(id);
  };

  const onDownTask = () => {
    const { onClickDown } = props;
    onClickDown(id);
  };

  return (
    <>
      <li className="list-container">
        <div className="para">
          <p className="task">{task}</p>

          <div className="btns">
            <IoMdArrowDropup
              size={30}
              style={{ color: "blue" }}
              className="dropup"
              onClick={onUpTask}
            />
            <IoMdArrowDropdown
              size={30}
              style={{ color: "blue" }}
              className="dropdown"
              onClick={onDownTask}
            />

            <TiDelete size={25} className="button" onClick={onDeleteTask} />
          </div>
        </div>
      </li>
    </>
  );
};
export default TaskItem;
