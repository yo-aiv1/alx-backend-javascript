import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * the appropriate handler in the
 * given Express application.
 * @param {Express} app The Express application.
 * @author Yahya Oulha <https://github.com/yo-aiv1>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
