import User from '../models/User';

class StarController {
  // create (give) stars
  async store(req, res) {
    const { amount, reason, ownerUsername } = req.body;

    const user = await User.findOne({ username: ownerUsername });

    if (!user) {
      return res.status(404).json({ error: 'This user does not exist' });
    }


    const star = {
      amount,
      reason,
      date: new Date(),
    };

    const updatedHistory = user.starsHistory;
    updatedHistory.push(star);


    await user.update({
      starsHistory: updatedHistory,
      stars: user.stars + amount,
    });

    return res.json({ sucess: `${amount} stars given to ${user.name}` });
  }

  // list stars history
  async index(req, res) {
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'user does not exist' });
    }

    const history = user.starsHistory;


    return res.json(history);
  }
}

export default new StarController();
