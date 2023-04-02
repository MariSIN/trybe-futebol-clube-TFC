import * as bcrypt from 'bcryptjs';
import createToken from '../auth/token';
import UsersModel from '../database/models/users.model';
import { ILogin } from '../interfaces/ILogin';
import statusCodes from '../statusCode';

class UserService {
  protected _usersModel: UsersModel;

  constructor(usersModel: UsersModel) {
    this._usersModel = usersModel;
  }

  static async findUser(email:string): Promise<UsersModel | null> {
    const user = await UsersModel.findOne({ where: { email } });

    return user;
  }

  static async login(userLogin: ILogin): Promise<
  { status?: number, message?: string, token?: string }
  > {
    const { email, password } = userLogin;

    if (!email || !password) {
      return { status: statusCodes.badRequest, message: 'All fields must be filled' };
    }

    const user = await UsersModel.findOne({ where: { email } });

    if (!user) {
      return { status: statusCodes.unauthorized, message: 'Invalid email or password' };
    }

    const hash = bcrypt.hashSync(password);
    const isEqual = bcrypt.compareSync(user.password, hash);

    if (!isEqual) {
      return { status: statusCodes.unauthorized, message: 'Invalid email or password' };
    }

    const { password: passwordUser, ...rest } = user.dataValues;

    const token = createToken(rest);

    return { token };
  }
}

export default UserService;
