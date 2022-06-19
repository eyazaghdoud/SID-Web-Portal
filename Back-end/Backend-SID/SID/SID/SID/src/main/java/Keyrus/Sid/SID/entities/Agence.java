package Keyrus.Sid.SID.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Agences")
public class Agence {
	
	    @Id
	    @GeneratedValue(strategy= GenerationType.IDENTITY)
	    private Integer id;

	    private String libelle;
	    
	 public Agence() {
		// TODO Auto-generated constructor stub
	}

		public Agence(String libelle) {
			
			this.libelle = libelle;
		}

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getLibelle() {
			return libelle;
		}

		public void setLibelle(String libelle) {
			this.libelle = libelle;
		}
	    
	    
}
