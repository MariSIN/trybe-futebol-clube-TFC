import { Request, Response } from 'express';
import UserService from '../service/user.service';
import statusCodes from '../statusCode';

class UserController {
  constructor(private _usersService = new UserService()) {
  }

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const result = await this._usersService.login({ email, password });

    if (result.status) {
      return res.status(result.status).json({ message: result.message });
    }

    return res.status(statusCodes.ok).json({ token: result.token });
  };
}

export default UserController;
