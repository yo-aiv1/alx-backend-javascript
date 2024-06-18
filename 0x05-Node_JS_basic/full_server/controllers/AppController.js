/**
 * route handlers.
 * @author Yahya Oulha <https://github.com/yo-aiv1>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
