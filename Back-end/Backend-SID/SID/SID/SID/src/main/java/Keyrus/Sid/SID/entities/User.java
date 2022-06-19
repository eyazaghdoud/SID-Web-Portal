package Keyrus.Sid.SID.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String userName;
    private String password;
    private String role;
    private String tenant;
    @Column(columnDefinition="LONGTEXT")
    private String auhtenticationKey;
    
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "agence_id", referencedColumnName = "id")
    private Agence agence;

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setTenant(String tenant) {
        this.tenant = tenant;
    }

    public void setAuhtenticationKey(String auhtenticationKey) {
        this.auhtenticationKey = auhtenticationKey;
    }

    public Integer getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public String getTenant() {
        return tenant;
    }

    public String getAuhtenticationKey() {
        return auhtenticationKey;
    }

	public Agence getAgence() {
		return agence;
	}
	public void setAgence(Agence agence) {
		
		this.agence = agence; 
	}

}
