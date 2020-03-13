import { subHours } from 'date-fns';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const {
      name,
      username,
    } = req.body;

    let user = await User.findOne({ username });

    if (!user) {
      user = await User.create({
        name,
        username,
      });
      return res.json({ user });
    }


    return res.status(401).json({ error: 'This Username was already taken! Choose another one.' });
  }
}

export default new UserController();
