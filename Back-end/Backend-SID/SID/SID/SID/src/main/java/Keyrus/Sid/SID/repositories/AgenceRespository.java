package Keyrus.Sid.SID.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import Keyrus.Sid.SID.entities.Agence;


public interface AgenceRespository extends CrudRepository<Agence, Integer> {

    Optional<Agence> findByLibelle(String libelle);
    
}
