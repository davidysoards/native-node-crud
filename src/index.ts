import http from 'http';
import { getTasks, addTask, updateTask, deleteTask } from './controller';

const API_PATH = '/api/tasks';

const myServer = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url == '/') {
    res.write('Hello World!');
    res.end();
  }
  // get tasks
  if (req.method === 'GET' && req.url === API_PATH) {
    return getTasks(req, res);
  }
  // create task
  if (req.method === 'POST' && req.url === API_PATH) {
    return addTask(req, res);
  }
  // update task
  if (req.method === 'PUT' && req.url === API_PATH) {
    return updateTask(req, res);
  }
  // delete task
  if (req.method === 'DELETE' && req.url === API_PATH) {
    return deleteTask(req, res);
  }
});

myServer.listen(5000, () => {
  console.log('Server is running on port 5000. Go to http://localhost:5000/');
});
