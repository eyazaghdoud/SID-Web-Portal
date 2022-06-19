package Keyrus.Sid.SID.security;
import java.util.ArrayList;
import java.util.Optional;

import Keyrus.Sid.SID.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {


	@Autowired
	private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

    	 Optional<Keyrus.Sid.SID.entities.User> u = userRepo.findByUserName(username);
        return new User(username, u.get().getPassword(), new ArrayList<>());
    }
}