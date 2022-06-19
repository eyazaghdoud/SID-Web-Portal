package Keyrus.Sid.SID.security;

import Keyrus.Sid.SID.entities.User;
import Keyrus.Sid.SID.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class Authentication implements AuthenticationManager {
    @Autowired
    private UserRepository userRepo;

    public void setRepo(UserRepository repo){
        this.userRepo= repo;
    }

    @Override
    public org.springframework.security.core.Authentication authenticate(org.springframework.security.core.Authentication authentication) throws AuthenticationException {

        String name = authentication.getName();
        String password = authentication.getCredentials().toString();
        Optional<User> u = userRepo.findByUserName(name);
        if (u.isPresent() && password.equals(u.get().getPassword())){
            System.out.println("user found");
            return new UsernamePasswordAuthenticationToken(
                   name, password, new ArrayList<>());
        }
        else {System.out.println("user not found");
            return null;}
    }
}
