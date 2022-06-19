package Keyrus.Sid.SID.services;

import Keyrus.Sid.SID.dto.AddUserRequest;
import Keyrus.Sid.SID.dto.AddUserResponse;
import Keyrus.Sid.SID.dto.ChangePwdRequest;
import Keyrus.Sid.SID.dto.ChangeRoleRequest;
import Keyrus.Sid.SID.dto.DeleteUserRequest;
import Keyrus.Sid.SID.entities.Agence;
import Keyrus.Sid.SID.entities.User;
import Keyrus.Sid.SID.repositories.AgenceRespository;
import Keyrus.Sid.SID.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class UserServiceImpl implements UserService {
	
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private AgenceRespository agRepo;

    public void setUserRepo(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    
    public UserServiceImpl() {
		// TODO Auto-generated constructor stub
	}
   
    
    // SERVICE CHANGE PASSWORD
    @Override
    public String changePassword(ChangePwdRequest changePwdRequest) {
    	 Optional<User> u = userRepo.findByUserName(changePwdRequest.getUserName());
    	 if (u.isPresent() && u.get().getPassword().equals(changePwdRequest.getCurrentPwd()))
         {
             u.get().setPassword(changePwdRequest.getNewPwd());
             userRepo.save(u.get());
             return ("Password changed");
         }
    	 else return ("Password not changed");
    }
    
    // SERVICE LIST USERS
    @Override
    public List<User> findAll() {
    	return (List<User>) userRepo.findAll();
    }
   

    // SERVICE ADD USER    
    @Override
    public AddUserResponse addUser(AddUserRequest addUserReq) {
   
 	   Optional<User> u = userRepo.findByUserName(addUserReq.getUserName());
        if (u.isPresent())
        {
            return new AddUserResponse("exists");
        }
        else {
     	    User user = new User();
        	user.setUserName(addUserReq.getUserName());
        	user.setPassword(addUserReq.getPassword());
        	user.setTenant(addUserReq.getTenant());
        	user.setAuhtenticationKey(addUserReq.getAuhtenticationKey());
        	user.setRole(addUserReq.getRole());
        	 if (addUserReq.getRole().equals("admin")) {
        		 Agence a = new Agence("All");
	              user.setAgence(a);
	              userRepo.save(user);
        		 /* Optional<Agence> ag = agRepo.findByLibelle("All");
           	      if (ag.isPresent()) {
           	              user.setAgence(ag.get());
           	              userRepo.save(user);
           	              
        	     } else { Agence a = new Agence("All");
        	              user.setAgence(a);
        	              userRepo.save(user);}*/
           	      
           	   return new AddUserResponse("added");
           	   
        	 } else {
        	  Optional<Agence> ag = agRepo.findByLibelle(addUserReq.getLibelle());
        	     if (ag.isPresent()) {
        	        user.setAgence(ag.get());
        	       
        	        
        	     } else {
        	    	 Agence a = new Agence(addUserReq.getLibelle());
   	                 user.setAgence(a);
          		 
          	        }
        	     userRepo.save(user);
     	        return new AddUserResponse("added");
        	   }
          }
        }
   
   // SERVICE DELETE USER 
   @Override
   public String deleteUser(DeleteUserRequest deleteUserRequest) {
	   Optional<User> u = userRepo.findByUserName(deleteUserRequest.getUserNameDel());
  	   Optional<User> admin = userRepo.findByUserName(deleteUserRequest.getAdmin().getUsername());

  	 if (u.isPresent() && deleteUserRequest.getAdmin().getPassword().equals(admin.get().getPassword()))
       {
           userRepo.delete(u.get());
           return ("User deleted");
       }
  	 else if (!u.isPresent()) {
  		 return ("User not found");
  		 }
  	 else {
  		 return ("Check your password");
  	 }
   }
   
  // SERVICE CHANGE ROLE
   @Override
   public String changeRole(ChangeRoleRequest changeRoleRequest) {
	   Optional<User> u = userRepo.findByUserName(changeRoleRequest.getUsername());
  	   Optional<User> admin = userRepo.findByUserName(changeRoleRequest.getAdmin().getUsername());
  	 
  	 if (u.isPresent() && changeRoleRequest.getAdmin().getPassword().equals(admin.get().getPassword()))
       {
  		 if (!u.get().getRole().equals(changeRoleRequest.getNewRole()) || u.get().getRole().equals("admin") ) {
  		  u.get().setRole(changeRoleRequest.getNewRole());
  		  //u.get().setAgence(Agence ag = new Agence("All"));
  		   u.get().setAgence(agRepo.findByLibelle("All").get());
           userRepo.save(u.get()); 
           return ("Role updated");
  		 }
  		 else return ("Same role");
       }
  	 else if (!u.isPresent()) {
  		 return ("User not found");
  		 }
  	 else {
  		 return ("Check your password");
  	 }
   }

}
