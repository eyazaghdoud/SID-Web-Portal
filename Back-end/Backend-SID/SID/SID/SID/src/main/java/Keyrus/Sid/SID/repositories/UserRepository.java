package Keyrus.Sid.SID.repositories;

import Keyrus.Sid.SID.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {

     Optional<User> findByUserName(String userName);
     
}
