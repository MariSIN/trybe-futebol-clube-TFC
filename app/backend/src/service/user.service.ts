import * as bcrypt from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import createToken from '../auth/token';
import UsersModel from '../database/models/users.model';
import { ILogin } from '../interfaces/ILogin';
import IUser from '../interfaces/IUser';
import statusCodes from '../statusCode';

class UserService {
  private _usersModel: ModelStatic<UsersModel> = UsersModel;

  public async login(userLogin: ILogin): Promise<
  { status?: number, message?: string, token?: string }
  > {
    const { email, password } = userLogin;

    const user = await this._usersModel.findOne({ where: { email } });

    if (!user) {
      return { status: statusCodes.unauthorized, message: 'Invalid email or password' };
    }

    const isEqual = bcrypt.compareSync(password, user.password);

    if (!isEqual) {
      return { status: statusCodes.unauthorized, message: 'Invalid email or password' };
    }

    const { password: passwordUser, ...rest } = user.dataValues;

    const token = createToken(rest);

    return { token };
  }

  public async loginRole(role: string): Promise<IUser | null> {
    const users = await this._usersModel.findOne({
      where: { role },
    });
    return users;
  }
}

export default UserService;
