package Keyrus.Sid.SID.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import Keyrus.Sid.SID.entities.Agence;
import Keyrus.Sid.SID.repositories.AgenceRespository;

@Service
@Transactional
public class AgenceServiceImpl implements AgenceService {
	
	@Autowired
    private AgenceRespository agenceRepo;

	public void setAgenceRepo(AgenceRespository agenceRepo) {
		this.agenceRepo = agenceRepo;
	}
	
	public AgenceServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<Agence> findAll() {
		
		return (List<Agence>) agenceRepo.findAll();
	}

	@Override
	public String addAgence(Agence agence) {
		 Optional<Agence> ag = agenceRepo.findByLibelle(agence.getLibelle());
	       if (ag.isPresent())
	       {
	           return ("exists");
	       }
	       else {
	           agenceRepo.save(agence);
	           return ("added");
	       }
	}

	@Override
	public Agence findAgenceByLibelle(String libelle) {
		Optional<Agence> ag = agenceRepo.findByLibelle(libelle);
		return ag.get();
	}

}
