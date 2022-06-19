package Keyrus.Sid.SID.security.controller;

import Keyrus.Sid.SID.dto.LoginResponse;
import Keyrus.Sid.SID.dto.UserRequest;
import Keyrus.Sid.SID.entities.User;
import Keyrus.Sid.SID.repositories.UserRepository;
import Keyrus.Sid.SID.security.Authentication;
import Keyrus.Sid.SID.security.JwtTokenUtil;
import Keyrus.Sid.SID.security.JwtUserDetailsService;
import Keyrus.Sid.SID.security.dto.JwtResponse;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins= "https://localhost:3000/")
public class JwtAuthenticationController {


    @Autowired
    Authentication auth;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;
    @Autowired
    UserRepository userRepo;

    @CrossOrigin(origins= "https://localhost:3000/")
    @RequestMapping(value = "/SID/server/authentication", method = RequestMethod.POST)
    public ResponseEntity<?> SidAuthenticationService(@RequestBody UserRequest authenticationRequest) throws Exception {

        org.springframework.security.core.Authentication auth = authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        if (auth != null){
                final UserDetails userDetails = userDetailsService
                        .loadUserByUsername(authenticationRequest.getUsername());

                final String token = jwtTokenUtil.generateToken(userDetails);

                Optional<User> user = userRepo.findByUserName(authenticationRequest.getUsername());
                LoginResponse userInfo = new LoginResponse(user.get().getId(),user.get().getUserName(), user.get().getAuhtenticationKey(),
                		user.get().getTenant(),user.get().getRole(), user.get().getAgence());
                
                 return ResponseEntity.ok(new JwtResponse(token, userInfo)); 
        }
        
        else return ResponseEntity.ok(new JwtResponse("failed"));
    }
    

    private org.springframework.security.core.Authentication authenticate(String username, String password) throws Exception {
        try {
            auth.setRepo(userRepo);
            return auth.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

    }
}