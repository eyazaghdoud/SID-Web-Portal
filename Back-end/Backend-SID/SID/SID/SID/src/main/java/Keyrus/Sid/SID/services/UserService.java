package Keyrus.Sid.SID.services;

import java.util.List;

import Keyrus.Sid.SID.dto.AddUserRequest;
import Keyrus.Sid.SID.dto.AddUserResponse;
import Keyrus.Sid.SID.dto.ChangePwdRequest;
import Keyrus.Sid.SID.dto.ChangeRoleRequest;
import Keyrus.Sid.SID.dto.DeleteUserRequest;
import Keyrus.Sid.SID.entities.User;

public interface UserService {

    public String changePassword(ChangePwdRequest changePwdRequest);
    public List<User> findAll();
    public AddUserResponse addUser(AddUserRequest addUserReq);
    public String deleteUser(DeleteUserRequest deleteUserRequest);
    public String changeRole(ChangeRoleRequest changeRoleRequest);
}
