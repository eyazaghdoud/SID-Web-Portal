package Keyrus.Sid.SID.services;

import java.util.List;
import Keyrus.Sid.SID.entities.Agence;


public interface AgenceService {


    public List<Agence> findAll();
    public String addAgence(Agence agence);
    public Agence findAgenceByLibelle(String libelle);
}
