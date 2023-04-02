import { Request, Response } from 'express';
import UserService from '../service/user.service';
import statusCodes from '../statusCode';

class UserController {
  private _usersService: UserService;

  constructor(usersService: UserService) {
    this._usersService = usersService;
  }

  static login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const result = await UserService.login({ email, password });

    console.log(result, 'REQ');

    if (result.status) {
      return res.status(result.status).json({ message: result.message });
    }

    console.log(result.token, 'TOKEN');

    return res.status(statusCodes.ok).json({ token: result.token });
  };
}

export default UserController;
