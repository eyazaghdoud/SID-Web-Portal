package Keyrus.Sid.SID;

import Keyrus.Sid.SID.dto.AddUserRequest;
import Keyrus.Sid.SID.dto.AddUserResponse;
import Keyrus.Sid.SID.dto.ChangePwdRequest;
import Keyrus.Sid.SID.dto.ChangeRoleRequest;
import Keyrus.Sid.SID.dto.DeleteUserRequest;
import Keyrus.Sid.SID.dto.GetAppRequest;
import Keyrus.Sid.SID.entities.User;
import Keyrus.Sid.SID.services.UserServiceImpl;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@Transactional
@org.springframework.stereotype.Controller


@RequestMapping(path="/Keyrus/SID")
@CrossOrigin(origins= "*", allowedHeaders="*")
public class Controller {
	
    @Autowired
    private UserServiceImpl userService;
    
    // WEB SERVICE CHANGE PASSWORD
    @PostMapping(path="/password/change")
    @CrossOrigin (origins="*")
    public @ResponseBody
    String changePasswordService(@RequestBody ChangePwdRequest changePwdRequest) {
    	return userService.changePassword(changePwdRequest);
    } 
    
    
    // WEB SERVICE GET ALL USERS
    @CrossOrigin(origins= "https://localhost:3000")
    @GetMapping(path="/users/all")
    public @ResponseBody
    Iterable<User> getAllUsersService() {
        // This returns a JSON with the users
    	return userService.findAll();
    } 
    
    
    // WEB SERVICE ADD USER
    @PostMapping(path="/users/add")
    @CrossOrigin (origins="*")
    public @ResponseBody
    AddUserResponse addUserService(@RequestBody AddUserRequest addUserReq) {
        return userService.addUser(addUserReq);
    }
    
    
    // WEB SERVICE DELETE USER
    @PostMapping(path="/users/delete")
    public @ResponseBody
    String deleteUserService (@RequestBody DeleteUserRequest deleteUserRequest) {
    	return userService.deleteUser(deleteUserRequest);
    
    }
    
    // WEB SERVICE CHANGE ROLE 
    @PostMapping(path="/users/roles")
    public @ResponseBody
    String changeRoleService (@RequestBody ChangeRoleRequest changeRoleRequest) {
    	return userService.changeRole(changeRoleRequest);
    }
    
 // WEB SERVICE GET APP 
    @PostMapping(path="/qlik/getApp")
    public @ResponseBody
    String getAppService(@RequestBody GetAppRequest appRequest) {

        final String uri = "https://" + appRequest.getTenant() + ".qlikcloud.com/api/v1/apps/" + appRequest.getAppId();
        RestTemplate restTemplate = new RestTemplate();
        RequestEntity<Void> request = RequestEntity.get(URI.create(uri))
                .header("Authorization", "Bearer " + appRequest.getAuthenticationKey() )
                .build();

        ResponseEntity<String> response = restTemplate.exchange(request, String.class);
        return response.getBody();
    	
    }

}
