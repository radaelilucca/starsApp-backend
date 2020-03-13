import User from '../models/User';

class StarController {
  async update(req, res) {
    const { amount, reason, ownerUsername } = req.body;

    const user = await User.findOne({ username: ownerUsername });


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

    return res.json(user);
  }
}

export default new StarController();
