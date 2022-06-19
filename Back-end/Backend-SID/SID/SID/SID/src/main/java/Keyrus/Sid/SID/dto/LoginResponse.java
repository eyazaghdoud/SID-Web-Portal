package Keyrus.Sid.SID.dto;

import Keyrus.Sid.SID.entities.Agence;

public class LoginResponse {

	private int id;
	private String username;
    private String key;
    private String tenant;
    private String role;
    private Agence agence;
    
    

	public LoginResponse(int id, String username, String key, String tenant, String role, Agence agence) {
		this.id = id;
		this.username = username;
		this.key = key;
		this.tenant = tenant;
		this.role = role;
		this.agence = agence;
	}


	public int getId() {
		return id;
	}

	public void setKey(String key) {
        this.key = key;
    }

    public void setTenant(String tenant) {
        this.tenant = tenant;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getKey() {
        return key;
    }

    public String getTenant() {
        return tenant;
    }

    public String getRole() {
        return role;
    }
  
    public String getUserName() {
    	return username;
    }

	public Agence getAgence() {
		return agence;
	}

	public void setAgence(Agence agence) {
		this.agence = agence;
	}
    
}

