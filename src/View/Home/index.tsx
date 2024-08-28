import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  TaskList,
  TaskItem,
  TaskItemText,
  Input,
  Button,
  IconButton,
  Icon,
} from "./home.style";
import { toast } from "react-toastify";
import { useAuth } from "Hooks/Context/AuthContext";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { token } = useAuth()
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });
  const [editTask, setEditTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks();
  }, [token]);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (editTask) {
      await fetch(`http://localhost:3000/tasks/${editTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newTask),
      });
      toast.success(`Tarefa ${editTask.id} alterada`, {
        position: "top-right",
      });
      setEditTask(null);
    } else {
      await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newTask),
      });
      toast.success("Tarefa criada", {
        position: "top-right",
      });
    }
    setNewTask({ title: "", description: "", isCompleted: false });
    fetchTasks();
  };

  const handleEdit = (task: Task) => {
    setEditTask(task);
    setNewTask({
      title: task.title,
      description: task.description,
      isCompleted: task.isCompleted,
    });
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(`Tarefa ${id} removida`, {
      position: "top-right",
    });
    fetchTasks();
  };

  const toggleTaskCompletion = async (task: Task) => {
    await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...task, isCompleted: !task.isCompleted }),
    });
    toast.success(
      `Tarefa ${task.id} marcada como ${
        !task.isCompleted ? "concluída" : "não concluída"
      }`,
      {
        position: "top-right",
      }
    );
    fetchTasks();
  };

  return (
    <Container>
      <Title>Task List</Title>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskItemText>
              <strong>{task.title}</strong>
              <p>{`${task.description} - ${
                task.isCompleted ? "Feito" : "Não Feito"
              }`}</p>
            </TaskItemText>
            <div>
              <IconButton onClick={() => toggleTaskCompletion(task)}>
                <Icon>{task.isCompleted ? "✅" : "⬜"}</Icon>
              </IconButton>
              {!task.isCompleted && (
                <>
                  <IconButton onClick={() => handleEdit(task)}>
                    <Icon>✏️</Icon>
                  </IconButton>
                  <IconButton onClick={() => handleDelete(task.id)}>
                    <Icon>🗑️</Icon>
                  </IconButton>
                </>
              )}
            </div>
          </TaskItem>
        ))}
      </TaskList>
      <Input
        type="text"
        placeholder="Titulo"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Descrição"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      <Button
        onClick={addTask}
        disabled={!newTask.title || !newTask.description}
      >
        {editTask ? "Atualizar Task" : "Adicionar Task"}
      </Button>
    </Container>
  );
};

export default Home;
